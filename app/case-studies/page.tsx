import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected technology leadership and architecture case studies spanning enterprise security, logistics, fintech, resilience, and digital platforms.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `Case Studies | ${siteConfig.name}`,
    description:
      "Selected technology leadership and architecture work, with emphasis on business context, decisions, controls, and outcomes.",
    url: `${siteConfig.url}/case-studies/`,
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="page-space">
      <Container>
        <header className="max-w-4xl border-b border-slate-200 pb-12 dark:border-slate-800">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">Case studies in technology leadership and execution</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            These case studies focus on the management problem as much as the technology: operating constraints, architecture choices, risk, governance, delivery, and outcomes. Sensitive client details are generalised where necessary.
          </p>
        </header>

        <section className="mt-12 grid gap-6">
          {caseStudies.map((study, index) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.35fr_1fr_0.45fr] lg:items-start">
              <div>
                <div className="font-mono text-sm text-blue-700 dark:text-blue-300">0{index + 1}</div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{study.sector}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{study.role}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{study.title}</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.capabilities.slice(0, 5).map((capability) => (
                    <span key={capability} className="topic-pill">{capability}</span>
                  ))}
                </div>
              </div>

              <div className="lg:text-right">
                {study.metrics ? (
                  <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-xl font-semibold text-slate-950 dark:text-white">{metric.value}</div>
                        <div className="text-xs leading-5 text-slate-500 dark:text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">View case study -&gt;</span>
                )}
              </div>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
}
