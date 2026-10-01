import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About — Alex Ascencio Ayekha',
  description: 'IT & IS Manager, Technology Executive, and Systems Architect with 8+ years building and securing digital platforms across fintech, logistics, and enterprise infrastructure.',
  openGraph: {
    title: 'About — Alex Ascencio Ayekha',
    description: 'IT & IS Manager, Technology Executive, and Systems Architect with 8+ years building and securing digital platforms across fintech, logistics, and enterprise infrastructure.',
    url: 'https://alexayekha.tech/about',
  },
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      {/* Header */}
      <header className="pb-8 border-b">
        <h1 className="text-4xl font-semibold tracking-tight">
          Alex Ascencio Ayekha
        </h1>
        <p className="mt-2 text-neutral-500 text-sm tracking-wide">
          IT &amp; IS Manager · Technology Executive · Systems Architect
        </p>
      </header>

      {/* Executive Summary */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Executive Summary
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Alex Ascencio Ayekha is an IT &amp; Information Security Manager, Technology Executive, and Full Stack Systems Architect with over eight years of experience building, securing, and scaling enterprise platforms across financial services, logistics, fintech, and high-security environments.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          He currently serves as IT &amp; IS Manager at Sintel Security Print, leading information security posture, IT governance, enterprise infrastructure, and digital systems architecture.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          His work focuses on designing production-grade infrastructure, zero-trust security frameworks, distributed systems, secure payment pipelines, and applied AI-driven optimization.
        </p>
      </section>

      {/* Systems & Platform Experience */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Systems &amp; Platform Experience
        </h2>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Enterprise IT infrastructure &amp; Information Security Management Systems (ISMS)</li>
          <li>Secure financial print, payment, and tokenization hardware/software workflows</li>
          <li>Real-time logistics and fleet tracking systems</li>
          <li>Distributed backend architectures (Laravel + Node.js hybrid systems)</li>
          <li>Crypto treasury and multi-signature wallet infrastructure</li>
          <li>Event-driven dispatch and intelligent scoring systems</li>
        </ul>
      </section>

      {/* Leadership & Execution */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Leadership &amp; Execution
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          In his leadership capacity, Alex directs:
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Information security strategy, risk governance, and compliance standards</li>
          <li>Enterprise IT operations and platform reliability engineering</li>
          <li>System architecture design and high-availability infrastructure planning</li>
          <li>Build vs. buy technical frameworks and security audits</li>
          <li>Cross-functional alignment between engineering, operations, and executive leadership</li>
        </ul>
      </section>

      {/* Professional Background */}
      <section className="mt-12 space-y-4">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          Professional Background
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Prior to his current role at Sintel Security Print, Alex delivered secure, scalable platforms across logistics, fintech, financial services, and healthcare at:
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>OhCargo (Former Chief Technology Officer)</li>
          <li>Aviemo (Former Chief Technology Officer)</li>
          <li>Equity Bank of Kenya</li>
          <li>Ebeesco LLC Ltd</li>
          <li>Solace Cancer Foundation</li>
          <li>Lacodet Solutions Ltd</li>
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
            <p className="text-sm text-neutral-500">Murang&apos;a University of Technology (In Progress)</p>
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
          Engineering &amp; Security Philosophy
        </h2>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Zero-trust architecture and proactive risk posture over reactive patches</li>
          <li>Systems thinking over isolated feature development</li>
          <li>Reliability and observability as non-negotiable core principles</li>
          <li>Practical AI and automation over speculative trends</li>
          <li>Operational resilience as a business enabler</li>
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
