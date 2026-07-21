import Link from "next/link";
import type { Metadata } from "next";

import { getAllPosts } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";
import { formatDate } from "@/lib/reading-time";
import { tagToSlug } from "@/lib/tags";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "High-signal notes on applied AI, blockchain infrastructure, and executive engineering.",
  openGraph: {
    title: "Writing | Alex Ascencio Ayekha",
    description:
      "High-signal notes on applied AI, blockchain infrastructure, and executive engineering.",
    url: "https://alexayekha.tech/writing",
  },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <header className="max-w-5xl">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-9 w-1 rounded-full bg-blue-600"
          />

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Writing
          </h1>
        </div>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          High-signal notes on applied AI, blockchain infrastructure, and
          executive engineering.
        </p>

        {tags.length > 0 ? (
          <nav
            aria-label="Writing topics"
            className="mt-6 flex max-w-5xl flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tagToSlug(tag)}`}
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
              >
                {tag}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <div className="mt-10 border-t border-neutral-300 pt-10 dark:border-neutral-700">
        {posts.length > 0 ? (
          <section
            aria-label="Published articles"
            className="grid grid-cols-1 gap-5 lg:grid-cols-2"
          >
            {posts.map((post) => (
              <article key={post.slug} className="h-full">
                <Link
                  href={`/writing/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-500 dark:hover:shadow-none sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {post.category || "Writing"}
                    </span>

                    <time
                      dateTime={post.date}
                      className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-neutral-950 transition group-hover:text-blue-700 dark:text-neutral-50 dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>

                  {post.summary ? (
                    <p className="mt-3 line-clamp-3 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                      {post.summary}
                    </p>
                  ) : null}

                  <div className="mt-auto pt-6 text-sm font-medium text-blue-700 dark:text-blue-400">
                    Read article
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        ) : (
          <div className="rounded-xl border border-dashed border-neutral-300 p-10 text-center dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-300">
              No articles have been published yet.
            </p>
          </div>
        )}
      </div>

      <footer className="mt-14 border-t border-neutral-200 pt-8 text-sm dark:border-neutral-800">
        <Link
          href="/"
          className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
        >
          ← Home
        </Link>
      </footer>
    </main>
  );
}
