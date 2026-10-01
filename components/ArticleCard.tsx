import Link from "next/link";

import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/reading-time";

export default function ArticleCard({
  post,
  featured = false,
}: {
  post: PostMeta;
  featured?: boolean;
}) {
  return (
    <article className="h-full">
      <Link
        href={`/writing/${post.slug}`}
        className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-700 ${
          featured ? "p-7 sm:p-9" : "p-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="text-blue-700 dark:text-blue-300">{post.category || "Insight"}</span>
          <time dateTime={post.date} className="normal-case tracking-normal text-slate-400 dark:text-slate-500">
            {formatDate(post.date, "short")}
          </time>
        </div>

        <h3 className={`${featured ? "mt-6 text-2xl sm:text-3xl" : "mt-4 text-xl"} font-semibold leading-tight tracking-tight text-slate-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300`}>
          {post.title}
        </h3>

        {post.summary ? (
          <p className={`${featured ? "mt-4 text-base sm:text-lg" : "mt-3 text-sm sm:text-base"} leading-7 text-slate-600 dark:text-slate-300`}>
            {post.summary}
          </p>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-4 pt-7 text-sm">
          <span className="text-slate-500 dark:text-slate-400">{post.readingMinutes} min read</span>
          <span className="font-semibold text-blue-700 transition-transform group-hover:translate-x-1 dark:text-blue-300">
            Read insight -&gt;
          </span>
        </div>
      </Link>
    </article>
  );
}
