import fs from "fs";
import path from "path";
import matter from "gray-matter";

const siteUrl = "https://alexayekha.tech";
const contentDir = path.join(process.cwd(), "content", "writing");
const outPath = path.join(process.cwd(), "public", "sitemap.xml");

const caseStudySlugs = [
  "enterprise-security-resilience",
  "realtime-logistics-platform",
  "digital-wallet-architecture",
];

function xmlEscape(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function tagToSlug(tag) {
  return String(tag)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getContent() {
  if (!fs.existsSync(contentDir)) return { posts: [], tags: [] };

  const tags = new Set();
  const posts = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(raw);
      if (!data.draft && Array.isArray(data.tags)) {
        data.tags.forEach((tag) => tags.add(tagToSlug(tag)));
      }
      return {
        slug: file.replace(/\.mdx$/, ""),
        date: data.updated ?? data.date ?? "1970-01-01",
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft);

  return { posts, tags: Array.from(tags) };
}

function urlEntry(url, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${xmlEscape(`${siteUrl}${url}`)}</loc>${lastmod ? `\n    <lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const { posts, tags } = getContent();
const entries = [
  urlEntry("/", "1.0", "weekly"),
  urlEntry("/writing/", "0.9", "weekly"),
  urlEntry("/case-studies/", "0.9", "monthly"),
  urlEntry("/research/", "0.7", "monthly"),
  urlEntry("/about/", "0.7", "monthly"),
  urlEntry("/tags/", "0.5", "monthly"),
  ...posts.map((post) => urlEntry(`/writing/${post.slug}/`, "0.8", "monthly", post.date)),
  ...caseStudySlugs.map((slug) => urlEntry(`/case-studies/${slug}/`, "0.8", "monthly")),
  ...tags.map((tag) => urlEntry(`/tags/${tag}/`, "0.5", "monthly")),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sitemap, "utf8");
console.log(`Sitemap generated: ${outPath} (${posts.length} posts, ${tags.length} tags)`);
