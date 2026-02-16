import Link from "next/link";
import { getPostSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const slugs = getPostSlugs("writing");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("writing", slug);
  return {
    title: `${post.metadata.title} | Alex Ayekha`,
    description: post.metadata.desc,
  };
}

export default async function WritingPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("writing", slug);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        <header className="space-y-2 border-b pb-8">
          <div className="text-sm text-neutral-500">{post.metadata.label}</div>
          <h1 className="text-3xl font-semibold tracking-tight">{post.metadata.title}</h1>
          <div className="text-sm text-neutral-600">{post.metadata.date}</div>
        </header>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-semibold prose-a:text-neutral-900 prose-a:underline prose-code:text-sm prose-pre:bg-neutral-900 prose-pre:text-neutral-100">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                      keepBackground: true,
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t text-sm text-neutral-500">
        <Link className="underline" href="/writing">← All Writing</Link>
      </footer>
    </main>
  );
}
