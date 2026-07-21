import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { tagToSlug } from "@/lib/tags";
import Mermaid from "@/components/Mermaid";

// Required for static export: prebuild all routes
export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);

    return {
      title: meta.title,
      description: meta.summary || meta.title,
      keywords: meta.tags,
      authors: [{ name: "Alex Ascencio Ayekha" }],
      openGraph: {
        type: "article",
        url: `https://alexayekha.tech/writing/${slug}/`,
        title: meta.title,
        description: meta.summary || meta.title,
        publishedTime: meta.date,
        authors: ["Alex Ascencio Ayekha"],
        tags: meta.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.summary || meta.title,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let meta: ReturnType<typeof getPostBySlug>["meta"];
  let mdxSource: string;

  try {
    const result = getPostBySlug(slug);

    meta = result.meta;
    mdxSource = fs.readFileSync(result.mdxPath, "utf8");
  } catch {
    notFound();
  }

  const { content } = await compileMDX({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Mermaid,
    },
  });

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <header className="mx-auto max-w-6xl border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          {meta.category ? `${meta.category} • ` : ""}
          {meta.date}
        </div>

        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl dark:text-neutral-50">
          {meta.title}
        </h1>

        {meta.summary ? (
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {meta.summary}
          </p>
        ) : null}

        {meta.tags && meta.tags.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tagToSlug(tag)}`}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 transition hover:border-neutral-500 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900"
              >
                {tag}
              </Link>
            ))}
          </div>
        ) : null}
      </header>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_240px] xl:gap-16">
        <article className="prose prose-neutral min-w-0 max-w-none dark:prose-invert">
          {content}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 border-l border-neutral-200 pl-6 dark:border-neutral-800">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
              Article details
            </p>

            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-neutral-500 dark:text-neutral-400">
                  Category
                </dt>
                <dd className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">
                  {meta.category || "Writing"}
                </dd>
              </div>

              <div>
                <dt className="text-neutral-500 dark:text-neutral-400">
                  Published
                </dt>
                <dd className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">
                  {meta.date}
                </dd>
              </div>

              {meta.tags && meta.tags.length > 0 ? (
                <div>
                  <dt className="text-neutral-500 dark:text-neutral-400">
                    Topics
                  </dt>

                  <dd className="mt-2 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tagToSlug(tag)}`}
                        className="text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white"
                      >
                        {tag}
                      </Link>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>

            <Link
              href="/writing"
              className="mt-8 inline-flex text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white"
            >
              ← Back to Writing
            </Link>
          </div>
        </aside>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-neutral-200 pt-8 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 lg:hidden">
        <Link
          className="underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 dark:decoration-neutral-700 dark:hover:text-white"
          href="/writing"
        >
          ← Back to Writing
        </Link>
      </footer>
    </main>
  );
}
