# Alex Ayekha C-Suite Blog Redesign

This bundle is a drop-in redesign for the existing Next.js App Router project at alexayekha.tech. It intentionally keeps the current stack: Next.js, TypeScript, Tailwind CSS, MDX, gray-matter, and Mermaid.

## 1. Replace these existing files

- package.json
- app/layout.tsx
- app/page.tsx
- app/globals.css
- app/about/page.tsx
- app/case-studies/page.tsx
- app/research/page.tsx
- app/writing/page.tsx
- app/writing/[slug]/page.tsx
- app/tags/page.tsx
- app/tags/[tag]/page.tsx
- components/Mermaid.tsx
- lib/posts.ts
- lib/reading-time.ts
- lib/tags.ts
- scripts/audit-content.mjs
- scripts/generate-rss.mjs
- scripts/generate-sitemap.mjs
- .github/workflows/deploy.yml

## 2. Add these new files

- app/case-studies/[slug]/page.tsx
- app/not-found.tsx
- components/ArticleCard.tsx
- components/Container.tsx
- components/JsonLd.tsx
- components/SectionHeading.tsx
- components/SiteFooter.tsx
- components/SiteHeader.tsx
- lib/case-studies.ts
- lib/site.ts
- public/robots.txt

## 3. Delete this duplicate workflow

Delete `.github/workflows/nextjs.yml` after replacing `.github/workflows/deploy.yml` with the file in this bundle. The current repository contains two Pages workflows aimed at different branches. Keeping one deployment workflow avoids duplicate or confusing deployments.

## 4. Keep these files unchanged

No redesign-specific changes are required in:

- next.config.ts
- postcss.config.mjs
- tsconfig.json
- eslint.config.mjs
- package-lock.json
- public/CNAME, if present
- public/og-image.png, until you replace it with a stronger executive social card

The current `output: "export"`, `images: { unoptimized: true }`, and `trailingSlash: true` configuration is suitable for GitHub Pages.

## 5. Fix article dates before publishing

Your existing MDX frontmatter is the authoritative source of article dates. The old homepage duplicated dates manually; this redesign removes that duplication.

Update the `date` field in each `content/writing/*.mdx` file to the true publication date. Do not invent dates. Use `updated` only when an article was materially revised.

Example:

```yaml
---
title: "A CTO Framework: When to Use Blockchain and When Not To"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
category: "Technology Strategy"
featured: true
---
```

## 6. You do not need to manually remove the duplicated logistics H1

The new `lib/posts.ts` strips a leading Markdown H1 when it is identical to the frontmatter title. This prevents the template title and article title from rendering twice. You should still remove duplicate H1 lines from new articles as a content rule.

## 7. Recommended editorial categories

Use a small number of stable categories:

- Technology Strategy
- Cybersecurity & Risk
- Enterprise Architecture
- Digital Platforms
- AI & Data
- Blockchain & Digital Assets

Tags can remain more granular.

## 8. Recommended homepage positioning

The redesign intentionally moves blockchain and individual frameworks out of the hero. The homepage now positions you first as a technology executive and IT / information security leader. Deep technical topics remain visible through writing and case studies as proof of capability.

## 9. Name consistency

This bundle uses `Alex Asciencio Ayekha` as the full name and `Alex Ayekha` as the short brand name because the public GitHub and LinkedIn identifiers use `Asciencio`. Confirm your official preferred spelling once, then change only `lib/site.ts`; the rest of the site will inherit it.

## 10. Case-study confidentiality

Review `lib/case-studies.ts` before publishing. The case studies are intentionally generalised and should not be expanded with customer data, internal vulnerabilities, credentials, restricted architecture, or non-public audit evidence.

## 11. Validate locally

Run:

```bash
npm ci
npm run lint
npm run build
npm run dev
```

Then check:

- Desktop widths at 1280px, 1440px, and 1920px
- Mobile at 375px and 430px
- Dark and light OS themes
- All article dates
- Mermaid diagrams
- Tag routes
- Case-study routes
- RSS at `/rss.xml`
- Sitemap at `/sitemap.xml`
- `robots.txt`
- Social preview image

## 12. Content changes I recommend after the code migration

1. Mark one or two strategic articles with `featured: true`.
2. Correct all publication dates.
3. Remove dead placeholder links such as `href="#"` in old articles.
4. Reclassify older articles into the six editorial categories above.
5. Add an `updated` date whenever a long-form article is materially revised.
6. Write future article introductions around an executive decision or operating problem before diving into implementation.

## 13. Optional phase two

After this redesign is live, the next upgrades worth doing are:

- A professional 1200x630 Open Graph design for the site
- Per-article OG cards
- A professional portrait used selectively on the About page
- A downloadable executive profile / CV
- Search only after the article archive is large enough to justify it
- Analytics and Search Console verification

Do not add heavy animation libraries just for visual effect. The intended visual language is restrained, premium, editorial, and technical.
