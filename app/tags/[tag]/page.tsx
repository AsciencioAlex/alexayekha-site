import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag, slugToTag, tagToSlug } from "@/lib/tags";

export function generateStaticParams() {
  // build all tag pages at export time
  return getAllTags().map((t) => ({ tag: tagToSlug(t) }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params;
  const allTags = getAllTags();
  const tag = slugToTag(tagSlug, allTags);
  if (!tag) notFound();

  const posts = getPostsByTag(tag);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Tag: {tag}</h1>
        <p className="text-neutral-700">{posts.length} post(s)</p>
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
            {p.summary ? <div className="mt-1 text-sm text-neutral-600">{p.summary}</div> : null}
          </Link>
        ))}
      </section>

      <footer className="mt-12 text-sm text-neutral-500 flex gap-4">
        <Link className="underline" href="/tags">All tags</Link>
        <Link className="underline" href="/writing">Writing</Link>
        <Link className="underline" href="/">Home</Link>
      </footer>
    </main>
  );
}
