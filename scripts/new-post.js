#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function createPost() {
  console.log('\n✍️  New Post Creator\n');

  const title = await ask('Title: ');
  const category = await ask('Category (Blockchain/Strategy/Systems/AI): ');
  const summary = await ask('Summary (one line): ');
  const tagsInput = await ask('Tags (comma-separated): ');
  
  const slug = slugify(title);
  const date = new Date().toISOString().split('T')[0];
  const tags = tagsInput.split(',').map(t => `"${t.trim()}"`).join(', ');

  const frontmatter = `---
title: "${title}"
date: "${date}"
category: "${category}"
summary: "${summary}"
tags: [${tags}]
---

# ${title}

${summary}

## Introduction

Start writing here...

## Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your thoughts.

---

**Related:** [Link to related post](#)
`;

  const filePath = path.join(process.cwd(), 'content', 'writing', `${slug}.mdx`);
  
  fs.writeFileSync(filePath, frontmatter);
  
  console.log(`\n✅ Created: content/writing/${slug}.mdx`);
  console.log(`\nNext steps:`);
  console.log(`  1. Edit the file`);
  console.log(`  2. git add content/writing/${slug}.mdx`);
  console.log(`  3. git commit -m "Add post: ${title}"`);
  console.log(`  4. git push\n`);
  
  rl.close();
}

createPost().catch(console.error);
