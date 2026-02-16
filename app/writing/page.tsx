import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function WritingIndex() {
  const posts = getAllPosts("writing");
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-neutral-700">
          High-signal notes on applied AI, blockchain infrastructure, and executive engineering.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.metadata.slug}
            href={`/writing/${post.metadata.slug}`}
            className="block rounded-xl border p-4 hover:bg-neutral-50"
          >
            <div className="text-sm text-neutral-500">{post.metadata.label}</div>
            <div className="font-medium">{post.metadata.title}</div>
            <div className="mt-1 text-sm text-neutral-600">{post.metadata.desc}</div>
          </Link>
        ))}
      </section>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
