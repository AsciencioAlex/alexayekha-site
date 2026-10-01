import type { Metadata } from "next";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Executive technology insights on cybersecurity, enterprise architecture, digital platforms, fintech, distributed systems, AI, and technology strategy.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: `Insights | ${siteConfig.name}`,
    description:
      "Long-form technology leadership writing on strategy, architecture, cybersecurity, digital platforms, and emerging technology.",
    url: `${siteConfig.url}/writing/`,
  },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  const [featured, ...remaining] = posts;

  return (
    <main className="page-space">
      <Container>
        <header className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end dark:border-slate-800">
          <div>
            <p className="eyebrow">Insights</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">Technology decisions, explained at executive and implementation depth</h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">Writing on technology strategy, cybersecurity, enterprise architecture, fintech, distributed systems, AI, and the operating decisions that determine whether systems succeed.</p>
            <Link href="/tags" className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">Browse all topics -&gt;</Link>
          </div>
        </header>

        {featured ? (
          <section className="mt-12">
            <p className="eyebrow">Featured insight</p>
            <div className="mt-5">
              <ArticleCard post={featured} featured />
            </div>
          </section>
        ) : null}

        <section className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Archive</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">All published insights</h2>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">{posts.length} article{posts.length === 1 ? "" : "s"}</span>
          </div>

          {remaining.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {remaining.map((post) => <ArticleCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-slate-600 dark:border-slate-700 dark:text-slate-300">More writing will appear here as it is published.</div>
          )}
        </section>
      </Container>
    </main>
  );
}
