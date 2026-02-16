import fs from "fs";
import path from "path";
import matter from "gray-matter";

const siteUrl = "https://alexayekha.tech";
const contentDir = path.join(process.cwd(), "content", "writing");
const outPath = path.join(process.cwd(), "public", "sitemap.xml");

function xmlEscape(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toW3CDate(dateStr) {
  // expects YYYY-MM-DD, outputs YYYY-MM-DD
  return dateStr;
}

function getPosts() {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const full = path.join(contentDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      date: data.date ?? "1970-01-01",
      draft: data.draft ?? false,
    };
  });

  // Filter out drafts
  return posts.filter((p) => !p.draft);
}

function getTags(posts) {
  if (!fs.existsSync(contentDir)) return [];

  const tags = new Set();
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  files.forEach((file) => {
    const full = path.join(contentDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);

    if (!data.draft && Array.isArray(data.tags)) {
      data.tags.forEach((tag) => {
        tags.add(encodeURIComponent(tag.trim().toLowerCase().replace(/\s+/g, "-")));
      });
    }
  });

  return Array.from(tags);
}

function buildSitemap(posts, tags) {
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "writing", priority: "0.9", changefreq: "daily" },
    { url: "research", priority: "0.7", changefreq: "monthly" },
    { url: "case-studies", priority: "0.7", changefreq: "monthly" },
    { url: "about", priority: "0.6", changefreq: "monthly" },
    { url: "tags", priority: "0.6", changefreq: "weekly" },
  ];

  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${xmlEscape(siteUrl)}/${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  const postUrls = posts
    .map(
      (p) => `
  <url>
    <loc>${xmlEscape(siteUrl)}/writing/${p.slug}/</loc>
    <lastmod>${toW3CDate(p.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  const tagUrls = tags
    .map(
      (tag) => `
  <url>
    <loc>${xmlEscape(siteUrl)}/tags/${tag}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${postUrls}
${tagUrls}
</urlset>`;
}

function main() {
  const posts = getPosts();
  const tags = getTags(posts);
  const sitemap = buildSitemap(posts, tags);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, sitemap, "utf8");

  console.log(`✅ Sitemap generated: ${outPath} (${posts.length} posts, ${tags.length} tags)`);
}

main();
