import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import { getAllTags, getPostsByTag, tagToSlug } from "@/lib/tags";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse Alex Ayekha's technology writing by topic.",
  alternates: { canonical: "/tags" },
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <main className="page-space">
      <Container>
        <header className="max-w-3xl border-b border-slate-200 pb-10 dark:border-slate-800">
          <p className="eyebrow">Topics</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">Browse the insight archive by subject</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Tags are intentionally secondary to the editorial categories, but they are useful when you want to follow a specific technical thread.</p>
        </header>

        <section className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tagToSlug(tag)}`} className="topic-pill px-4 py-2 text-sm">
              {tag} <span className="text-slate-400">({getPostsByTag(tag).length})</span>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
}
