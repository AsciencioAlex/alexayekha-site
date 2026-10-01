import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import Mermaid from "@/components/Mermaid";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/reading-time";
import { siteConfig } from "@/lib/site";
import { tagToSlug } from "@/lib/tags";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);
    const image = meta.ogImage || "/og-image.png";

    return {
      title: meta.title,
      description: meta.summary || meta.title,
      keywords: meta.tags,
      authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
      alternates: { canonical: `/writing/${slug}` },
      openGraph: {
        type: "article",
        url: `${siteConfig.url}/writing/${slug}/`,
        title: meta.title,
        description: meta.summary || meta.title,
        publishedTime: meta.date,
        modifiedTime: meta.updated || meta.date,
        authors: [siteConfig.fullName],
        tags: meta.tags,
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.summary || meta.title,
        images: [image],
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post: ReturnType<typeof getPostBySlug>;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, body } = post;
  const { content } = await compileMDX({
    source: body,
    components: { Mermaid },
  });

  const related = getRelatedPosts(meta.slug, meta.tags, meta.category, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.summary || meta.title,
    datePublished: meta.date,
    dateModified: meta.updated || meta.date,
    mainEntityOfPage: `${siteConfig.url}/writing/${meta.slug}/`,
    author: { "@type": "Person", name: siteConfig.fullName, url: siteConfig.url },
    publisher: { "@type": "Person", name: siteConfig.fullName, url: siteConfig.url },
    image: meta.ogImage?.startsWith("http")
      ? meta.ogImage
      : `${siteConfig.url}${meta.ogImage || "/og-image.png"}`,
  };

  return (
    <main className="page-space">
      <JsonLd data={articleJsonLd} />
      <Container>
        <Link href="/writing" className="text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">&lt;- Back to insights</Link>

        <header className="mt-8 max-w-5xl border-b border-slate-200 pb-10 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-blue-700 dark:text-blue-300">{meta.category || "Insight"}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            <span aria-hidden="true">/</span>
            <span>{meta.readingMinutes} min read</span>
          </div>

          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl dark:text-white">{meta.title}</h1>

          {meta.summary ? <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">{meta.summary}</p> : null}

          {meta.updated && meta.updated !== meta.date ? (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Updated {formatDate(meta.updated)}</p>
          ) : null}
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] xl:gap-16">
          <article className="prose min-w-0">{content}</article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 border-l border-slate-200 pl-6 dark:border-slate-800">
              <p className="eyebrow">Article brief</p>
              <dl className="mt-5 space-y-5 text-sm">
                <div><dt>Published</dt><dd>{formatDate(meta.date)}</dd></div>
                <div><dt>Reading time</dt><dd>{meta.readingMinutes} minutes</dd></div>
                <div><dt>Category</dt><dd>{meta.category || "Insight"}</dd></div>
              </dl>
              {meta.tags?.length ? (
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Topics</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => <Link key={tag} href={`/tags/${tagToSlug(tag)}`} className="topic-pill">{tag}</Link>)}
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-800">
            <div className="flex items-end justify-between gap-5">
              <div><p className="eyebrow">Continue reading</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Related insights</h2></div>
              <Link href="/writing" className="text-sm font-semibold text-blue-700 dark:text-blue-300">All insights -&gt;</Link>
            </div>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">{related.map((item) => <ArticleCard key={item.slug} post={item} />)}</div>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
