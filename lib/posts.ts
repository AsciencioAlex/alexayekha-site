import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { calculateReadingTime } from "./reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  category?: string;
  summary?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
  ogImage?: string;
  readingMinutes: number;
};

export type Post = {
  meta: PostMeta;
  body: string;
};

function validDate(value: unknown, field: string, file: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new Error(`Invalid "${field}" frontmatter in content/writing/${file}`);
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(
      `Invalid ${field} "${value}" in content/writing/${file}. Use YYYY-MM-DD.`,
    );
  }

  return value;
}

function stripDuplicateLeadingTitle(body: string, title: string): string {
  const lines = body.replace(/^\s+/, "").split("\n");
  if (lines[0]?.trim() === `# ${title}`) {
    return lines.slice(1).join("\n").replace(/^\s+/, "");
  }
  return body;
}

function parsePost(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const fullPath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  if (!data.title || typeof data.title !== "string") {
    throw new Error(`Missing or invalid "title" in content/writing/${file}`);
  }

  const date = validDate(data.date, "date", file);
  if (!date) {
    throw new Error(`Missing "date" in content/writing/${file}`);
  }

  const title = data.title.trim();
  const body = stripDuplicateLeadingTitle(content, title);

  return {
    meta: {
      slug,
      title,
      date,
      updated: validDate(data.updated, "updated", file),
      category:
        typeof data.category === "string" ? data.category.trim() : undefined,
      summary: typeof data.summary === "string" ? data.summary.trim() : undefined,
      tags: Array.isArray(data.tags)
        ? data.tags.map(String).map((tag) => tag.trim()).filter(Boolean)
        : undefined,
      featured: data.featured === true,
      draft: data.draft === true,
      ogImage: typeof data.ogImage === "string" ? data.ogImage.trim() : undefined,
      readingMinutes: calculateReadingTime(body),
    },
    body,
  };
}

function getPostFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map(parsePost)
    .filter(({ meta }) => !meta.draft)
    .map(({ meta }) => meta)
    .sort(
      (a, b) =>
        new Date(`${b.date}T00:00:00Z`).getTime() -
        new Date(`${a.date}T00:00:00Z`).getTime(),
    );
}

export function getFeaturedPosts(limit = 3): PostMeta[] {
  const posts = getAllPosts();
  const featured = posts.filter((post) => post.featured);
  return (featured.length ? featured : posts).slice(0, limit);
}

export function getPostBySlug(slug: string): Post {
  const file = `${slug}.mdx`;
  const fullPath = path.join(CONTENT_DIR, file);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const post = parsePost(file);
  if (post.meta.draft) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}

export function getRelatedPosts(
  currentSlug: string,
  tags: string[] = [],
  category?: string,
  limit = 3,
): PostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = (post.tags ?? []).filter((tag) => tags.includes(tag)).length;
      const sameCategory = category && post.category === category ? 2 : 0;
      return { post, score: sharedTags * 3 + sameCategory };
    })
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAllCategories(): string[] {
  return Array.from(
    new Set(
      getAllPosts()
        .map((post) => post.category)
        .filter((category): category is string => Boolean(category)),
    ),
  ).sort((a, b) => a.localeCompare(b));
}
