import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.summary,
      url: `${siteConfig.url}/case-studies/${study.slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: { "@type": "Person", name: siteConfig.fullName, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/case-studies/${study.slug}/`,
  };

  return (
    <main className="page-space">
      <JsonLd data={jsonLd} />
      <Container>
        <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">&lt;- All case studies</Link>

        <header className="mt-8 grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.35fr] dark:border-slate-800">
          <div>
            <p className="eyebrow">{study.sector}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{study.summary}</p>
          </div>
          <div className="executive-card self-start">
            <p className="eyebrow">Engagement profile</p>
            <dl className="mt-5 space-y-5">
              <div><dt>Role</dt><dd>{study.role}</dd></div>
              <div><dt>Sector</dt><dd>{study.sector}</dd></div>
            </dl>
          </div>
        </header>

        {study.metrics ? (
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="surface-card p-6">
                <div className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{metric.value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{metric.label}</div>
              </div>
            ))}
          </section>
        ) : null}

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.32fr_1fr]">
          <aside>
            <p className="eyebrow">Context</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">The challenge</h2>
          </aside>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{study.challenge}</p>
        </div>

        {[
          ["Mandate", study.mandate],
          ["Approach", study.approach],
          ["Outcomes", study.outcomes],
        ].map(([heading, items]) => (
          <section key={heading as string} className="mt-14 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[0.32fr_1fr] dark:border-slate-800">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{heading as string}</h2>
            <div className="grid gap-3">
              {(items as string[]).map((item, index) => (
                <div key={item} className="surface-card flex gap-4 p-5">
                  <span className="font-mono text-sm text-blue-700 dark:text-blue-300">0{index + 1}</span>
                  <p className="leading-7 text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[0.32fr_1fr] dark:border-slate-800">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {study.capabilities.map((capability) => <span key={capability} className="topic-pill">{capability}</span>)}
          </div>
        </section>

        {study.confidentiality ? (
          <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
            <strong>Confidentiality note:</strong> {study.confidentiality}
          </div>
        ) : null}
      </Container>
    </main>
  );
}
