import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import { getAllTags, getPostsByTag, slugToTag, tagToSlug } from "@/lib/tags";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug, getAllTags());
  if (!tag) return {};
  return {
    title: `${tag} insights`,
    description: `Technology writing tagged ${tag}.`,
    alternates: { canonical: `/tags/${tagToSlug(tag)}` },
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug, getAllTags());
  if (!tag) notFound();

  const posts = getPostsByTag(tag);

  return (
    <main className="page-space">
      <Container>
        <header className="max-w-3xl border-b border-slate-200 pb-10 dark:border-slate-800">
          <Link href="/tags" className="text-sm font-semibold text-blue-700 dark:text-blue-300">&lt;- All topics</Link>
          <p className="eyebrow mt-8">Topic</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">{tag}</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{posts.length} published article{posts.length === 1 ? "" : "s"}.</p>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </section>
      </Container>
    </main>
  );
}
