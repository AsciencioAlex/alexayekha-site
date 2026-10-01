import type { Metadata } from "next";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/case-studies";
import { getFeaturedPosts } from "@/lib/posts";
import { executivePillars, operatingPrinciples, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const executiveSignals = [
  { value: "8+", label: "years across technology and digital systems" },
  { value: "CTO", label: "leadership experience in technology ventures" },
  { value: "Enterprise", label: "security, governance and infrastructure" },
  { value: "Product", label: "fintech, logistics and real-time platforms" },
];

export default function Home() {
  const posts = getFeaturedPosts(3);
  const studies = caseStudies.slice(0, 3);

  return (
    <main>
      <section className="hero-grid overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">Technology leadership / cybersecurity / enterprise architecture</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Technology should make the business more resilient, more scalable, and easier to run.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
              I am {siteConfig.fullName}, an IT and information security leader with CTO experience across enterprise technology, digital platforms, fintech, logistics, and secure infrastructure. I write about the decisions behind dependable systems - strategy, risk, architecture, and execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/case-studies" className="button-primary">View selected work</Link>
              <Link href="/writing" className="button-secondary">Read executive insights</Link>
            </div>
          </div>

          <aside className="executive-card">
            <p className="eyebrow">Executive brief</p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt>Current mandate</dt>
                <dd>{siteConfig.currentRole}</dd>
              </div>
              <div>
                <dt>Leadership scope</dt>
                <dd>IT operations, security governance, infrastructure, architecture, vendors, resilience, and digital systems.</dd>
              </div>
              <div>
                <dt>Operating lens</dt>
                <dd>Business value, risk, reliability, cost, controls, and maintainability before technology novelty.</dd>
              </div>
            </dl>
            <a href={`mailto:${siteConfig.email}`} className="mt-7 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200">
              Start a conversation -&gt;
            </a>
          </aside>
        </Container>
      </section>

      <Container className="py-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white/80 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-900/50">
          {executiveSignals.map((signal) => (
            <div key={signal.value + signal.label} className="border-b border-slate-200 p-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 dark:border-slate-800">
              <div className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{signal.value}</div>
              <div className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{signal.label}</div>
            </div>
          ))}
        </div>
      </Container>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Executive focus"
            title="Technology leadership beyond the technology stack"
            description="The strongest technology function connects architecture and operations to governance, risk, customer outcomes, and business strategy."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {executivePillars.map((pillar, index) => (
              <article key={pillar.title} className="surface-card p-6 sm:p-7">
                <div className="text-sm font-mono text-blue-700 dark:text-blue-300">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-y border-slate-200 bg-white/55 dark:border-slate-800 dark:bg-slate-950/35">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected impact"
              title="Case studies in leadership, architecture, and execution"
              description="Anonymised where necessary, with emphasis on the business problem, decision model, operating constraints, and measurable outcome."
            />
            <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">
              All case studies -&gt;
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {studies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group surface-card flex h-full flex-col p-6 sm:p-7">
                <p className="eyebrow">{study.sector}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{study.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{study.summary}</p>
                {study.metrics ? (
                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-semibold text-slate-950 dark:text-white">{metric.value}</div>
                        <div className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
                <span className="mt-auto pt-7 text-sm font-semibold text-blue-700 dark:text-blue-300">Read case study -&gt;</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Latest thinking"
              title="Executive technology insights"
              description="Long-form analysis on architecture, cybersecurity, digital platforms, emerging technology, and the management decisions surrounding them."
            />
            <Link href="/writing" className="text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">All insights -&gt;</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {posts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} featured={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-y border-slate-200 bg-slate-950 text-white dark:border-slate-800">
        <Container>
          <SectionHeading
            inverse
            eyebrow="Operating principles"
            title="How I approach technology decisions"
            description="A C-suite technology function should reduce uncertainty, make risk visible, and create repeatable operating leverage."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {operatingPrinciples.map((principle, index) => (
              <div key={principle} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <span className="font-mono text-sm text-blue-300">0{index + 1}</span>
                <p className="mt-5 text-lg leading-8 text-slate-200">{principle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Career lens"
              title="From building systems to leading the technology function"
              description="My career has moved through software engineering, systems architecture, CTO responsibilities, and enterprise IT and information security leadership."
            />
            <div className="grid gap-4">
              {[
                ["IT & IS Manager", "Enterprise technology, security governance, infrastructure, resilience, vendors, audits, and digital systems."],
                ["Former CTO - OhCargo", "Technology strategy, platform architecture, real-time logistics systems, engineering execution, and product delivery."],
                ["Former CTO - Aviemo", "Technology leadership and platform delivery in a venture environment."],
                ["Earlier technology roles", "Experience spanning financial services, software engineering, digital platforms, and mission-driven technology."],
              ].map(([role, detail]) => (
                <div key={role} className="surface-card grid gap-2 p-5 sm:grid-cols-[190px_1fr] sm:gap-6">
                  <div className="font-semibold text-slate-950 dark:text-white">{role}</div>
                  <div className="text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 dark:border-blue-900/60 dark:bg-blue-950/30">
            <div className="max-w-2xl">
              <p className="eyebrow">Connect</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Technology is a management discipline as much as an engineering discipline.</h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">I am interested in thoughtful conversations about technology strategy, cybersecurity, architecture, digital platforms, and executive leadership.</p>
            </div>
            <a href={`mailto:${siteConfig.email}`} className="button-primary mt-7 shrink-0 lg:mt-0">Email me</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
