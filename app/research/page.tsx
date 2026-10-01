import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Applied research interests in trustworthy AI, financial systems, cryptographic assurance, distributed systems, cybersecurity, and technology governance.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: `Research | ${siteConfig.name}`,
    description:
      "Applied inquiry at the intersection of trustworthy AI, financial systems, cryptography, cybersecurity, distributed systems, and governance.",
    url: `${siteConfig.url}/research/`,
  },
};

const themes = [
  {
    title: "Trustworthy AI & Financial Systems",
    description:
      "Explainability, privacy-preserving learning, fraud detection, model governance, and how AI systems can be made useful in regulated or high-trust environments.",
    questions: ["Explainability and decision accountability", "Federated and privacy-preserving learning", "Fraud and anomaly detection", "Evaluation under operational constraints"],
  },
  {
    title: "Cryptographic Assurance & Digital Trust",
    description:
      "Practical uses of cryptographic verification, tamper-evident records, identity, integrity controls, and blockchain where decentralised trust is actually justified.",
    questions: ["Verifiable records and reconciliation", "Key and trust-boundary design", "Signed logs and integrity proofs", "Blockchain decision frameworks"],
  },
  {
    title: "Resilient Digital Infrastructure",
    description:
      "Architecture patterns for systems that must remain observable, recoverable, secure, and maintainable as business and technical complexity increases.",
    questions: ["Operational resilience", "Distributed and event-driven systems", "Security architecture", "Governance and technology operating models"],
  },
];

export default function ResearchPage() {
  return (
    <main className="page-space">
      <Container>
        <header className="max-w-4xl border-b border-slate-200 pb-12 dark:border-slate-800">
          <p className="eyebrow">Research & applied inquiry</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">Research that connects technical depth to real operating problems</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            My research interests sit where technology, trust, management, and financial or operational systems meet. I am most interested in work that can move from an academic or conceptual model into an auditable production environment.
          </p>
        </header>

        <section className="section-space">
          <SectionHeading
            eyebrow="Research themes"
            title="Three areas I keep returning to"
            description="These themes also shape the questions I explore in long-form writing and architecture work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {themes.map((theme, index) => (
              <article key={theme.title} className="surface-card p-6 sm:p-7">
                <span className="font-mono text-sm text-blue-700 dark:text-blue-300">0{index + 1}</span>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{theme.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{theme.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
                  {theme.questions.map((question) => <li key={question}>- {question}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space border-t border-slate-200 dark:border-slate-800">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading eyebrow="Method" title="Research should survive contact with operations" />
            <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>I am less interested in technology claims in isolation than in the conditions under which they remain valid: data quality, threat models, governance, performance, recovery, cost, and the human decisions around the system.</p>
              <p>That is why my writing often combines architecture diagrams, decision frameworks, control questions, and implementation detail. The objective is not novelty by itself; it is better decision-making.</p>
              <Link href="/writing" className="inline-flex font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">Explore related insights -&gt;</Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
