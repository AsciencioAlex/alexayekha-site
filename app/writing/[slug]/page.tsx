import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { tagToSlug } from "@/lib/tags";
import Mermaid from "@/components/Mermaid";

// Required for static export: prebuild all routes
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.summary || meta.title,
      keywords: meta.tags,
      authors: [{ name: 'Alex Ayekha' }],
      openGraph: {
        type: 'article',
        url: `https://alexayekha.tech/writing/${slug}/`,
        title: meta.title,
        description: meta.summary || meta.title,
        publishedTime: meta.date,
        authors: ['Alex Ayekha'],
        tags: meta.tags,
      },
      twitter: {
        card: 'summary_large_image',
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

  // compile the MDX content (frontmatter will be ignored in rendering)
  const { content } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: true },
    components: {
      Mermaid: (props: any) => <Mermaid {...props} />,
    },
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
        {meta.tags && meta.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {meta.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tagToSlug(tag)}`}
                className="rounded-full border px-2.5 py-1 text-xs hover:bg-neutral-50"
              >
                {tag}
              </Link>
            ))}
          </div>
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
