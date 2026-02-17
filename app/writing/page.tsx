import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/reading-time";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Writing',
  description: 'High-signal notes on applied AI, blockchain infrastructure, and executive engineering.',
  openGraph: {
    title: 'Writing | Alex Ayekha',
    description: 'High-signal notes on applied AI, blockchain infrastructure, and executive engineering.',
    url: 'https://alexayekha.tech/writing',
  },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3 pb-6 border-b">
        <h1 className="text-3xl font-semibold tracking-tight border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>Writing</h1>
        <p className="text-neutral-700">
          High-signal notes on applied AI, blockchain infrastructure, and executive engineering.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="underline text-neutral-600" href="/rss.xml">RSS</a>
          <Link className="underline text-neutral-600" href="/tags">Tags</Link>
        </div>
      </header>

      <section className="mt-10 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/writing/${p.slug}`}
            className="group block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 hover:shadow-sm transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="text-xs text-neutral-500 font-medium">
                {p.category}
              </div>
              <div className="text-xs text-neutral-400">
                {formatDate(p.date)}
              </div>
            </div>
            <div className="font-medium mt-2 group-hover:text-blue-800">{p.title}</div>
            {p.summary ? (
              <div className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{p.summary}</div>
            ) : null}
          </Link>
        ))}
      </section>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
