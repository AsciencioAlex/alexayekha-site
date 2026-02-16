import { getAllPosts, PostMeta } from "./posts";

export function tagToSlug(tag: string) {
  return encodeURIComponent(tag.trim().toLowerCase().replace(/\s+/g, "-"));
}

export function slugToTag(slug: string, allTags: string[]) {
  const normalized = decodeURIComponent(slug).trim().toLowerCase();
  // match by slug form
  const found = allTags.find((t) => tagToSlug(t) === normalized);
  return found ?? null;
}

export function getAllTags() {
  const posts = getAllPosts();
  const set = new Set<string>();

  for (const p of posts) {
    for (const t of p.tags ?? []) set.add(t);
  }

  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getAllPosts();
  return posts.filter((p) => (p.tags ?? []).includes(tag));
}
