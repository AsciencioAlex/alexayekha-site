import fs from "fs";
import path from "path";
import matter from "gray-matter";

const siteUrl = "https://alexayekha.tech";
const siteTitle = "Alex Ayekha - Technology Executive";
const siteDescription =
  "Executive technology insights on cybersecurity, enterprise architecture, digital platforms, fintech, AI, and technology strategy.";

const contentDir = path.join(process.cwd(), "content", "writing");
const outPath = path.join(process.cwd(), "public", "rss.xml");

function xmlEscape(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc2822(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toUTCString();
}

function getPosts() {
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "1970-01-01",
        summary: data.summary ?? "",
        category: data.category ?? "Insight",
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function buildRss(posts) {
  const items = posts
    .map((post) => {
      const link = `${siteUrl}/writing/${post.slug}/`;
      return `
  <item>
    <title>${xmlEscape(post.title)}</title>
    <link>${xmlEscape(link)}</link>
    <guid isPermaLink="true">${xmlEscape(link)}</guid>
    <pubDate>${xmlEscape(toRfc2822(post.date))}</pubDate>
    <category>${xmlEscape(post.category)}</category>
    <description>${xmlEscape(post.summary)}</description>
  </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${xmlEscape(siteTitle)}</title>
  <link>${xmlEscape(siteUrl)}</link>
  <atom:link href="${xmlEscape(`${siteUrl}/rss.xml`)}" rel="self" type="application/rss+xml" />
  <description>${xmlEscape(siteDescription)}</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;
}

const posts = getPosts();
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, buildRss(posts), "utf8");
console.log(`RSS generated: ${outPath} (${posts.length} posts)`);
