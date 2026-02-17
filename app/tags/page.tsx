import Link from "next/link";
import { getAllTags, tagToSlug, getPostsByTag } from "@/lib/tags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Browse writing by topic: blockchain, architecture, security, AI, and more.',
  openGraph: {
    title: 'Tags | Alex Ascencio Ayekha',
    description: 'Browse writing by topic: blockchain, architecture, security, AI, and more.',
    url: 'https://alexayekha.tech/tags',
  },
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Tags</h1>
        <p className="text-neutral-700">Browse writing by topic.</p>
      </header>

      <section className="mt-10 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Link
            key={t}
            href={`/tags/${tagToSlug(t)}`}
            className="rounded-full border px-3 py-1.5 text-sm hover:bg-neutral-50"
          >
            {t} <span className="text-neutral-500">({getPostsByTag(t).length})</span>
          </Link>
        ))}
      </section>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
