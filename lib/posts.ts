import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category?: string;
  summary?: string;
  tags?: string[];
};

function parsePost(file: string): PostMeta {
  const slug = file.replace(/\.mdx$/, "");
  const fullPath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);

  if (!data.title || typeof data.title !== "string") {
    throw new Error(
      `Missing or invalid "title" frontmatter in content/writing/${file}`,
    );
  }

  if (!data.date || typeof data.date !== "string") {
    throw new Error(
      `Missing or invalid "date" frontmatter in content/writing/${file}`,
    );
  }

  const parsedDate = new Date(`${data.date}T00:00:00Z`);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(
      `Invalid date "${data.date}" in content/writing/${file}. Use YYYY-MM-DD.`,
    );
  }

  return {
    slug,
    title: data.title.trim(),
    date: data.date,
    category:
      typeof data.category === "string"
        ? data.category.trim()
        : undefined,
    summary:
      typeof data.summary === "string"
        ? data.summary.trim()
        : undefined,
    tags: Array.isArray(data.tags)
      ? data.tags.map(String).map((tag) => tag.trim())
      : undefined,
  };
}

export function getAllPosts(): PostMeta[] {
  const posts = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(parsePost);

  return posts.sort(
    (a, b) =>
      new Date(`${b.date}T00:00:00Z`).getTime() -
      new Date(`${a.date}T00:00:00Z`).getTime(),
  );
}

export function getPostBySlug(
  slug: string,
): {
  meta: PostMeta;
  mdxPath: string;
} {
  const file = `${slug}.mdx`;
  const mdxPath = path.join(CONTENT_DIR, file);

  if (!fs.existsSync(mdxPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  return {
    meta: parsePost(file),
    mdxPath,
  };
}
