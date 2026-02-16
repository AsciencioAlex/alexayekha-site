import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingIndex() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
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
            className="block rounded-xl border p-4 hover:bg-neutral-50"
          >
            <div className="text-sm text-neutral-500">
              {p.category ? `${p.category} • ` : ""}{p.date}
            </div>
            <div className="font-medium">{p.title}</div>
            {p.summary ? (
              <div className="mt-1 text-sm text-neutral-600">{p.summary}</div>
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
