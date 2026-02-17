import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Alex Ayekha | CTO & MSc IT Candidate',
  description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems. Writing on architecture, security, and real-world engineering.',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero Section */}
      <header className="space-y-6 pb-16">
        <div className="inline-block px-3 py-1.5 rounded-full text-xs font-medium tracking-wide" 
             style={{ backgroundColor: 'rgba(30, 64, 175, 0.08)', color: 'var(--accent)' }}>
          CTO • MSc IT Candidate • Applied AI & Blockchain Infrastructure
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
            Alex Ayekha
          </span>
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 max-w-2xl">
          I build production-grade systems at the intersection of distributed
          infrastructure, cryptography, and intelligent systems — with a focus on
          practical applications for emerging markets.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            className="group rounded-full px-6 py-3 text-sm font-medium transition-all shadow-sm hover:shadow-md"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            href="/writing"
          >
            Read writing 
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            className="rounded-full border-2 border-neutral-200 px-6 py-3 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            href="/case-studies"
          >
            View case studies
          </a>
          <a
            className="rounded-full border-2 border-neutral-200 px-6 py-3 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            href="/research"
          >
            Research notes
          </a>
          <a
            className="rounded-full border-2 border-neutral-200 px-6 py-3 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            href="/about"
          >
            About
          </a>
        </div>
      </header>

      {/* Systems in Production */}
      <section className="mt-20 rounded-2xl p-8 md:p-10" style={{ backgroundColor: 'rgba(30, 64, 175, 0.03)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
          <h2 className="text-2xl font-semibold">Systems in Production</h2>
        </div>
        <p className="text-neutral-600 leading-relaxed text-lg">
          Systems deployed across logistics, crypto infrastructure, and high-scale operations.
          Platforms built: real-time driver tracking, treasury automation, multi-sig wallets, distributed backends.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="mt-20 space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
          <h2 className="text-2xl font-semibold">Focus areas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border-2 border-neutral-100 p-6 hover:border-neutral-200 hover:shadow-sm transition-all">
            <div className="h-10 w-10 rounded-lg mb-4 flex items-center justify-center text-lg font-bold" 
                 style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)', color: 'var(--accent)' }}>
              ⛓
            </div>
            <h3 className="font-semibold text-lg mb-2">Blockchain infrastructure</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              RPC architecture, treasury systems, secure on/off-ramp pipelines.
            </p>
          </div>
          
          <div className="rounded-xl border-2 border-neutral-100 p-6 hover:border-neutral-200 hover:shadow-sm transition-all">
            <div className="h-10 w-10 rounded-lg mb-4 flex items-center justify-center text-lg font-bold" 
                 style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)', color: 'var(--accent)' }}>
              🤖
            </div>
            <h3 className="font-semibold text-lg mb-2">Applied AI</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Pragmatic ML systems, deployment patterns, and decision frameworks.
            </p>
          </div>
          
          <div className="rounded-xl border-2 border-neutral-100 p-6 hover:border-neutral-200 hover:shadow-sm transition-all">
            <div className="h-10 w-10 rounded-lg mb-4 flex items-center justify-center text-lg font-bold" 
                 style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)', color: 'var(--accent)' }}>
              ⚙️
            </div>
            <h3 className="font-semibold text-lg mb-2">Executive engineering</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Scaling teams, build vs buy, reliability, security, and systems thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Writing */}
      <section className="mt-20 space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
          <h2 className="text-2xl font-semibold">Selected writing</h2>
        </div>

        <div className="space-y-6">
          {/* Featured Article */}
          <a className="group block rounded-2xl border-2 p-8 hover:shadow-lg transition-all" 
             style={{ borderColor: 'var(--accent)', backgroundColor: 'rgba(30, 64, 175, 0.02)' }}
             href="/writing/logistics-optimization">
            <div className="flex justify-between items-start mb-4">
              <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold" 
                   style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                Featured
              </div>
              <div className="text-xs text-neutral-500 font-medium">Feb 2026 • 12 min read</div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:" style={{ color: 'var(--accent)' }}>
              Optimizing Logistics Systems Using Modern Infrastructure
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              A systems-level breakdown of real-time tracking, distributed backends, and intelligent dispatch.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-600">
                Architecture diagrams
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-600">
                Case study
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-600">
                Measurable impact
              </span>
            </div>
          </a>

          {/* Regular Articles */}
          <div className="grid md:grid-cols-2 gap-6">
            <a className="group block rounded-xl border-2 border-neutral-100 p-6 hover:border-neutral-300 hover:shadow-md transition-all" 
               href="/writing/crypto-treasury">
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                Blockchain
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:" style={{ color: 'var(--foreground)' }}>
                Designing Secure Crypto Treasury Infrastructure
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                A practical blueprint for multisig, controls, monitoring, and incident response.
              </p>
              <div className="text-xs text-neutral-400">
                Feb 2026 • 8 min
              </div>
            </a>

            <a className="group block rounded-xl border-2 border-neutral-100 p-6 hover:border-neutral-300 hover:shadow-md transition-all" 
               href="/writing/cto-blockchain-framework">
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                Strategy
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:" style={{ color: 'var(--foreground)' }}>
                A CTO Framework: When to Use Blockchain (and When Not To)
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                A decision model grounded in cost, trust boundaries, and operational realities.
              </p>
              <div className="text-xs text-neutral-400">
                Feb 2026 • 10 min
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t-2 border-neutral-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-neutral-600 mb-2">
              <span className="font-medium">Alex Ayekha</span> • CTO & Systems Builder
            </p>
            <p className="text-sm text-neutral-500">
              Contact:{" "}
              <a className="font-medium transition-colors" style={{ color: 'var(--accent)' }} href="mailto:alex@alexayekha.tech">
                alex@alexayekha.tech
              </a>
            </p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="/writing" className="text-neutral-600 hover:opacity-70 transition-colors">
              Writing
            </a>
            <a href="/tags" className="text-neutral-600 hover:opacity-70 transition-colors">
              Tags
            </a>
            <a href="/rss.xml" className="text-neutral-600 hover:opacity-70 transition-colors">
              RSS
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
