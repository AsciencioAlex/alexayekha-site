import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  label: string;
  desc: string;
  tags?: string[];
};

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export function getPostSlugs(section: string): string[] {
  const sectionPath = path.join(contentDirectory, section);
  if (!fs.existsSync(sectionPath)) return [];
  
  return fs
    .readdirSync(sectionPath)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(section: string, slug: string): Post {
  const fullPath = path.join(contentDirectory, section, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      slug,
      title: data.title || "",
      date: data.date || "",
      label: data.label || "",
      desc: data.desc || "",
      tags: data.tags || [],
    },
    content,
  };
}

export function getAllPosts(section: string): Post[] {
  const slugs = getPostSlugs(section);
  const posts = slugs
    .map((slug) => getPostBySlug(section, slug))
    .sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
  return posts;
}
