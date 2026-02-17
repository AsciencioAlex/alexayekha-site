import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Alex Ayekha | CTO & MSc IT Candidate',
  description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems. Writing on architecture, security, and real-world engineering.',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Hero Section */}
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

      {/* Systems in Production */}
      <section className="mt-12 space-y-6">
        <h2 className="text-lg font-medium border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>Systems in Production</h2>
        <p className="text-neutral-600 leading-relaxed">
          Systems deployed across logistics, crypto infrastructure, and high-scale operations.
          Platforms built: real-time driver tracking, treasury automation, multi-sig wallets, distributed backends.
        </p>
      </section>

      {/* Focus Areas */}
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

      {/* Selected Writing */}
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

      {/* Footer */}
      <footer className="mt-16 border-t pt-8 text-sm text-neutral-500 space-y-3">
        <p>
          Contact:{" "}
          <a className="underline" href="mailto:asciencioalex@gmail.com">
            asciencioalex@gmail.com
          </a>
        </p>
        <div className="flex gap-5">
          <a className="hover:text-neutral-700 transition-colors" href="https://github.com/AsciencioAlex" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a className="hover:text-neutral-700 transition-colors" href="https://www.linkedin.com/in/alex-asciencio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a className="hover:text-neutral-700 transition-colors" href="https://x.com/codnetech" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
