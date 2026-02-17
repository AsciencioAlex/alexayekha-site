import fs from "fs";
import path from "path";
import matter from "gray-matter";

const siteUrl = "https://alexayekha.tech";
const siteTitle = "Alex Ascencio Ayekha";
const siteDescription =
  "CTO • MSc IT Candidate • Applied AI & Blockchain Infrastructure. Writing on systems, cryptography, and real-world engineering.";

const contentDir = path.join(process.cwd(), "content", "writing");
const outPath = path.join(process.cwd(), "public", "rss.xml");

function xmlEscape(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc2822(dateStr) {
  // expects YYYY-MM-DD
  const d = new Date(`${dateStr}T00:00:00Z`);
  return d.toUTCString();
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
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      summary: data.summary ?? "",
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

function buildRss(posts) {
  const items = posts
    .map((p) => {
      const link = `${siteUrl}/writing/${p.slug}/`;
      return `
  <item>
    <title>${xmlEscape(p.title)}</title>
    <link>${xmlEscape(link)}</link>
    <guid isPermaLink="true">${xmlEscape(link)}</guid>
    <pubDate>${xmlEscape(toRfc2822(p.date))}</pubDate>
    <description>${xmlEscape(p.summary)}</description>
  </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${xmlEscape(siteTitle)}</title>
  <link>${xmlEscape(siteUrl)}</link>
  <description>${xmlEscape(siteDescription)}</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;
}

function main() {
  const posts = getPosts();
  const rss = buildRss(posts);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, rss, "utf8");

  console.log(`✅ RSS generated: ${outPath} (${posts.length} posts)`);
}

main();
