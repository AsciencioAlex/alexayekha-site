# Article metadata cleanup before launch

The redesign reads article cards, dates, reading time, SEO metadata, RSS, and related content from MDX frontmatter. Update these four existing posts before publishing the redesign.

## logistics-optimization.mdx

Recommended category: `Digital Platforms`

Keep the existing title and summary if you are happy with them. Set the true publication date. Add `featured: true` if this should be the homepage lead article.

The current article repeats its frontmatter title as a Markdown H1. The new loader automatically suppresses that duplicate, but you can also remove the H1 line from the MDX source.

## crypto-treasury.mdx

Recommended category: `Blockchain & Digital Assets`

Set the true publication date. Remove the current placeholder `Next` link that points to `#`, or replace it with a real article URL.

## cto-blockchain-framework.mdx

Recommended category: `Technology Strategy`

Set the true publication date. This is a strong candidate for `featured: true` because the framing is executive and decision-oriented.

## laravel-node-architecture.mdx

Recommended category: `Enterprise Architecture`

Set the true publication date. Keep the technical depth, but future revisions should add a short executive context section explaining when a hybrid architecture is justified and when a single runtime is operationally simpler.

## Recommended frontmatter shape

```yaml
---
title: "Article title"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD" # optional
category: "Technology Strategy"
summary: "One sentence summary."
tags: ["strategy", "architecture"]
featured: false
draft: false
ogImage: "/og-image.png"
---
```

Do not guess publication dates. Use the actual date you consider the article to have been published on alexayekha.tech.
