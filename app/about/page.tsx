import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About — Alex Ascencio Ayekha',
  description: 'Technology Executive, CTO, and Systems Architect with 8+ years building and scaling digital platforms across logistics, fintech, and enterprise systems.',
  openGraph: {
    title: 'About — Alex Ascencio Ayekha',
    description: 'Technology Executive, CTO, and Systems Architect with 8+ years building and scaling digital platforms across logistics, fintech, and enterprise systems.',
    url: 'https://alexayekha.tech/about',
  },
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <header className="pb-8 border-b">
        <h1 className="text-4xl font-semibold tracking-tight">
          Alex Ascencio Ayekha
        </h1>
        <p className="mt-2 text-neutral-500 text-sm tracking-wide">
          Technology Executive · CTO · Systems Architect
        </p>
      </header>

      {/* Executive Summary */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Executive Summary
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Alex Ascencio Ayekha is a Technology Executive and Full Stack Software Engineer with over
          eight years of experience building and scaling digital platforms across transport &amp; logistics,
          fintech, financial services, and enterprise systems.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          He currently serves as Chief Technology Officer (CTO) at OhCargo and Aviemo, where he leads
          technology strategy, product architecture, and engineering execution for revenue-driven
          platforms operating in high-growth environments.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          His work focuses on designing production-grade infrastructure across distributed systems,
          secure payment pipelines, real-time logistics platforms, and applied AI-driven optimization
          systems.
        </p>
      </section>

      {/* Systems & Platform Experience */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Systems &amp; Platform Experience
        </h2>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Real-time logistics and fleet tracking systems</li>
          <li>Distributed backend architectures (Laravel + Node.js hybrid systems)</li>
          <li>Crypto treasury and multi-signature wallet infrastructure</li>
          <li>Secure on/off-ramp financial systems</li>
          <li>Event-driven dispatch and intelligent scoring systems</li>
          <li>Enterprise-grade system integrations</li>
        </ul>
      </section>

      {/* Leadership & Execution */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Leadership &amp; Execution
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          As CTO, Alex leads:
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Technology strategy and platform roadmap development</li>
          <li>System architecture design and scalability planning</li>
          <li>Engineering team leadership and delivery execution</li>
          <li>Infrastructure security and reliability standards</li>
          <li>Build vs buy technical decision frameworks</li>
          <li>Cross-functional collaboration with product and operations</li>
        </ul>
      </section>

      {/* Professional Background */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Professional Background
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Prior to his current roles, Alex has delivered secure, scalable systems across financial
          services, healthcare, and enterprise environments at:
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Ebeesco LLC Ltd</li>
          <li>Equity Bank of Kenya</li>
          <li>Solace Cancer Foundation</li>
          <li>Lacodet Solutions Ltd</li>
          <li>Sintel Security Print Solutions</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Education
        </h2>
        <div className="space-y-3 text-neutral-700">
          <div>
            <p className="font-medium">Master of Science in Information Technology</p>
            <p className="text-sm text-neutral-500">In Progress</p>
          </div>
          <div>
            <p className="font-medium">Bachelor of Business Information Technology</p>
            <p className="text-sm text-neutral-500">Murang&apos;a University of Technology</p>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Engineering Philosophy
        </h2>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Systems thinking over feature thinking</li>
          <li>Reliability and observability as core architecture principles</li>
          <li>Practical AI over experimental hype</li>
          <li>Security-first design in financial and distributed systems</li>
          <li>Operational efficiency as a competitive advantage</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Contact
        </h2>
        <div className="space-y-2 text-neutral-700">
          <div>
            <span className="font-medium">Email: </span>
            <a className="underline" href="mailto:alex@alexayekha.tech">alex@alexayekha.tech</a>
          </div>
          <div>
            <span className="font-medium">GitHub: </span>
            <a className="underline" href="https://github.com/AsciencioAlex" target="_blank" rel="noopener noreferrer">
              github.com/AsciencioAlex
            </a>
          </div>
          <div>
            <span className="font-medium">LinkedIn: </span>
            <a className="underline" href="https://www.linkedin.com/in/alex-asciencio/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/alex-asciencio
            </a>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <footer className="mt-16 border-t pt-6 text-sm text-neutral-500">
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-neutral-700 transition-colors" href="/">← Home</Link>
          <Link className="hover:text-neutral-700 transition-colors" href="/writing">Writing</Link>
          <Link className="hover:text-neutral-700 transition-colors" href="/case-studies">Case Studies</Link>
          <a className="hover:text-neutral-700 transition-colors" href="/rss.xml">RSS</a>
        </div>
      </footer>
    </main>
  );
}
