import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// Required for static export: prebuild all routes
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: `${meta.title} | Alex Ayekha`,
      description: meta.summary,
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

  // compile the MDX content (frontmatter will be ignored in rendering)
  const { content } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <div className="text-sm text-neutral-500">
          {meta.category ? `${meta.category} • ` : ""}
          {meta.date}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>
        {meta.summary ? (
          <p className="text-neutral-700 leading-relaxed">{meta.summary}</p>
        ) : null}
      </header>

      <article className="prose prose-neutral mt-10 max-w-none">
        {content}
      </article>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/writing">← Back to Writing</Link>
      </footer>
    </main>
  );
}
