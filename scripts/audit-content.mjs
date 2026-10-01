import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "writing");

if (!fs.existsSync(contentDir)) {
  console.log("No content/writing directory found.");
  process.exit(0);
}

const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
let warnings = 0;

for (const file of files) {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const { data, content } = matter(raw);
  const issues = [];

  if (!data.title) issues.push("missing title");
  if (!data.date) issues.push("missing publication date");
  if (!data.category) issues.push("missing category");
  if (!data.summary) issues.push("missing summary");
  if (!Array.isArray(data.tags) || data.tags.length === 0) issues.push("missing tags");

  if (data.title && content.trimStart().startsWith(`# ${data.title}`)) {
    issues.push("duplicates the frontmatter title as an H1");
  }

  if (/\]\(#\)/.test(content)) {
    issues.push("contains a placeholder Markdown link to #");
  }

  if (/href=["']#["']/.test(content)) {
    issues.push("contains a placeholder href=# link");
  }

  if (issues.length) {
    warnings += issues.length;
    console.log(`\n${file}`);
    for (const issue of issues) console.log(`  - ${issue}`);
  }
}

if (warnings === 0) {
  console.log(`Content audit passed (${files.length} posts checked).`);
} else {
  console.log(`\nContent audit completed with ${warnings} warning(s).`);
}
