import type { Metadata } from "next";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Alex Asciencio Ayekha: technology executive, IT and information security leader, former CTO, and systems architect.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Technology leadership across cybersecurity, enterprise architecture, infrastructure, digital platforms, fintech, and logistics.",
    url: `${siteConfig.url}/about/`,
  },
};

const remit = [
  "Technology strategy, roadmaps, investment priorities, and operating models",
  "Information security governance, risk, audit readiness, and control assurance",
  "Enterprise infrastructure, platform reliability, continuity, and disaster recovery",
  "Architecture decisions across applications, integrations, data, cloud, and on-premise systems",
  "Vendor management, technical due diligence, procurement input, and delivery oversight",
  "Cross-functional translation between business leadership, operations, security, and engineering",
];

export default function About() {
  return (
    <main className="page-space">
      <Container>
        <header className="grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end dark:border-slate-800">
          <div>
            <p className="eyebrow">Executive profile</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">I lead technology at the intersection of business, security, architecture, and operations.</h1>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            My work is centred on making technology dependable enough for the business to trust: secure by design, operationally resilient, financially sensible, and aligned to measurable outcomes.
          </p>
        </header>

        <section className="section-space grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Profile" title="From engineering depth to executive accountability" />
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            <p>
              I am {siteConfig.fullName}, an IT and information security leader with more than eight years of experience across enterprise technology, software architecture, fintech, logistics, and high-trust operational environments.
            </p>
            <p>
              I currently serve as an IT & IS Manager, with responsibility spanning technology operations, information security, infrastructure, vendors, audit and compliance support, recovery planning, and digital systems. Earlier in my career I held CTO responsibilities in technology ventures, where the mandate was broader: product architecture, engineering execution, platform scale, and translating commercial priorities into working systems.
            </p>
            <p>
              That combination shapes how I think. I am comfortable at implementation depth, but I evaluate technology through an executive lens: what risk does it remove, what capability does it create, what does it cost to operate, how will it fail, and can the organisation govern it effectively?
            </p>
          </div>
        </section>

        <section className="section-space border-y border-slate-200 dark:border-slate-800">
          <SectionHeading
            eyebrow="Leadership remit"
            title="The areas I am accountable for"
            description="My strongest work sits where technology decisions become operational and business decisions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {remit.map((item, index) => (
              <div key={item} className="surface-card flex gap-4 p-5 sm:p-6">
                <span className="mt-0.5 font-mono text-sm text-blue-700 dark:text-blue-300">0{index + 1}</span>
                <p className="leading-7 text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Career" title="A progression from systems to strategy" />
          <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {[
              ["Current", "IT & IS Manager", "Enterprise IT, information security, governance, resilience, infrastructure, vendors, assurance, and digital systems."],
              ["Previous", "Chief Technology Officer - OhCargo", "Technology strategy, platform architecture, real-time logistics systems, engineering leadership, and product execution."],
              ["Previous", "Chief Technology Officer - Aviemo", "Technology leadership, architecture, and delivery in a venture environment."],
              ["Foundation", "Software, financial services & digital platforms", "Hands-on experience that built the engineering and systems perspective behind my current leadership approach."],
            ].map(([period, role, detail]) => (
              <div key={role} className="grid gap-2 py-6 sm:grid-cols-[110px_230px_1fr] sm:gap-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">{period}</div>
                <div className="font-semibold text-slate-950 dark:text-white">{role}</div>
                <div className="text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-space border-t border-slate-200 dark:border-slate-800">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Education</p>
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Master of Business Administration (MBA)
                  </h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    University of the People · In progress
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Master of Science in Information Technology (MSc IT)
                  </h3>

                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    Murang&apos;a University of Technology · 2025–2027 · Thesis stage
                  </p>

                  <div className="mt-5 border-l-2 border-blue-600 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                      Research Focus
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Blockchain-Enabled Explainable Machine Learning Model for Fraud
                      Detection and Evidence Integrity in Online Financial Transactions
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Bachelor of Business Information Technology
                  </h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    Murang&apos;a University of Technology
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Leadership philosophy</p>
              <div className="mt-6 space-y-3">
                {[
                  "Technology strategy should be legible to the business.",
                  "Security controls should improve trust without making operations impossible.",
                  "Recovery capability matters more than recovery documentation.",
                  "Architecture should reduce long-term operational complexity.",
                  "A technology leader must be able to move between board-level trade-offs and implementation reality.",
                ].map((item) => (
                  <div key={item} className="border-l-2 border-blue-600 py-1 pl-4 text-slate-700 dark:text-slate-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-4">
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="eyebrow text-blue-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">For technology, architecture, security, or executive conversations.</h2>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a className="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a className="rounded-full border border-slate-700 px-5 py-2.5 font-semibold text-white hover:border-blue-400" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="rounded-full border border-slate-700 px-5 py-2.5 font-semibold text-white hover:border-blue-400" href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
