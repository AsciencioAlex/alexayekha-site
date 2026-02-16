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

export function getAllPosts(): PostMeta[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      category: data.category ? String(data.category) : undefined,
      summary: data.summary ? String(data.summary) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    };
  });

  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): { meta: PostMeta; mdxPath: string } {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const raw = fs.readFileSync(mdxPath, "utf8");
  const { data } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? "1970-01-01"),
    category: data.category ? String(data.category) : undefined,
    summary: data.summary ? String(data.summary) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };

  return { meta, mdxPath };
}
