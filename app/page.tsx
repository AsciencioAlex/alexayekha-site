import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Alex Ayekha | CTO & MSc IT Candidate',
  description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems. Writing on architecture, security, and real-world engineering.',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-4 pb-8 border-b">
        <p className="text-sm tracking-wide text-neutral-500">
          CTO • MSc IT Candidate • Applied AI & Blockchain Infrastructure
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          <span className="border-b-2" style={{ borderColor: 'var(--accent)' }}>Alex Ayekha</span>
        </h1>

        <p className="text-lg leading-relaxed text-neutral-700">
          I build production-grade systems at the intersection of distributed
          infrastructure, cryptography, and intelligent systems — with a focus on
          practical applications for emerging markets.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="rounded-full border px-4 py-2 text-sm hover:border-blue-800 transition-colors"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            href="/writing"
          >
            Read writing →
          </a>
          <a
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
            href="/case-studies"
          >
            View case studies
          </a>
          <a
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
            href="/research"
          >
            Research notes
          </a>
          <a
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
            href="/about"
          >
            About
          </a>
        </div>
      </header>

      <section className="mt-12 space-y-6">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>Systems in Production</h2>
        <p className="text-neutral-600 leading-relaxed">
          Systems deployed across logistics, crypto infrastructure, and high-scale operations.
          Platforms built: real-time d

river tracking, treasury automation, multi-sig wallets, distributed backends.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>Focus areas</h2>

        <ul className="space-y-3 text-neutral-700">
          <li>
            <span className="font-medium">Blockchain infrastructure:</span>{" "}
            RPC architecture, treasury systems, secure on/off-ramp pipelines.
          </li>
          <li>
            <span className="font-medium">Applied AI:</span> pragmatic ML systems,
            deployment patterns, and decision frameworks.
          </li>
          <li>
            <span className="font-medium">Executive engineering:</span> scaling
            teams, build vs buy, reliability, security, and systems thinking.
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>Selected writing</h2>

        <div className="space-y-4">
          <a className="group block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 hover:shadow-sm transition-all" href="/writing/logistics-optimization">
            <div className="flex justify-between items-start">
              <div className="text-xs text-neutral-500 font-medium">Systems</div>
              <div className="text-xs text-neutral-400">Feb 2026 • 12 min</div>
            </div>
            <div className="font-medium mt-2 group-hover:text-blue-800" style={{ color: 'var(--foreground)' }}>
              Optimizing Logistics Systems Using Modern Infrastructure
            </div>
            <div className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
              A systems-level breakdown of real-time tracking, distributed backends, and intelligent dispatch.
            </div>
            <div className="mt-3 text-xs text-neutral-400">
              Architecture diagrams • Case study • Measurable impact
            </div>
          </a>

          <a className="group block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 hover:shadow-sm transition-all" href="/writing/crypto-treasury">
            <div className="flex justify-between items-start">
              <div className="text-xs text-neutral-500 font-medium">Blockchain</div>
              <div className="text-xs text-neutral-400">Feb 2026 • 8 min</div>
            </div>
            <div className="font-medium mt-2 group-hover:text-blue-800" style={{ color: 'var(--foreground)' }}>
              Designing Secure Crypto Treasury Infrastructure
            </div>
            <div className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
              A practical blueprint for multisig, controls, monitoring, and incident response.
            </div>
          </a>

          <a className="group block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 hover:shadow-sm transition-all" href="/writing/cto-blockchain-framework">
            <div className="flex justify-between items-start">
              <div className="text-xs text-neutral-500 font-medium">Strategy</div>
              <div className="text-xs text-neutral-400">Feb 2026 • 10 min</div>
            </div>
            <div className="font-medium mt-2 group-hover:text-blue-800" style={{ color: 'var(--foreground)' }}>
              A CTO Framework: When to Use Blockchain (and When Not To)
            </div>
            <div className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
              A decision model grounded in cost, trust boundaries, and operational realities.
            </div>
          </a>
        </div>
      </section>

      <footer className="mt-16 border-t pt-8 text-sm text-neutral-500">
        <p>
          Contact:{" "}
          <a className="underline" href="mailto:alex@alexayekha.tech">
            alex@alexayekha.tech
          </a>
        </p>
      </footer>
    </main>
  );
}
