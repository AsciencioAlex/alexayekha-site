import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Alex Ayekha | CTO & MSc IT Candidate',
  description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems. Writing on architecture, security, and real-world engineering.',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm tracking-wide text-neutral-500">
          CTO • MSc IT Candidate • Applied AI & Blockchain Infrastructure
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Alex Ayekha
        </h1>

        <p className="text-lg leading-relaxed text-neutral-700">
          I build production-grade systems at the intersection of distributed
          infrastructure, cryptography, and intelligent systems — with a focus on
          practical applications for emerging markets.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
            href="/writing"
          >
            Read writing
          </a>
          <a
            className="rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
            href="/case-studies"
          >
            View case studies
          </a>
          <a
            className="rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
            href="/research"
          >
            Research notes
          </a>
          <a
            className="rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
            href="/about"
          >
            About
          </a>
        </div>
      </header>

      <section className="mt-14 space-y-6">
        <h2 className="text-lg font-medium">Focus areas</h2>

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

      <section className="mt-14 space-y-6">
        <h2 className="text-lg font-medium">Selected writing</h2>

        <div className="space-y-4">
          <a className="block rounded-xl border p-4 hover:bg-neutral-50" href="/writing/crypto-treasury">
            <div className="text-sm text-neutral-500">Blockchain</div>
            <div className="font-medium">Designing Secure Crypto Treasury Infrastructure</div>
            <div className="mt-1 text-sm text-neutral-600">
              A practical blueprint for multisig, controls, monitoring, and incident response.
            </div>
          </a>

          <a className="block rounded-xl border p-4 hover:bg-neutral-50" href="/writing/cto-blockchain-framework">
            <div className="text-sm text-neutral-500">Strategy</div>
            <div className="font-medium">A CTO Framework: When to Use Blockchain (and When Not To)</div>
            <div className="mt-1 text-sm text-neutral-600">
              A decision model grounded in cost, trust boundaries, and operational realities.
            </div>
          </a>

          <a className="block rounded-xl border p-4 hover:bg-neutral-50" href="/writing/laravel-node-architecture">
            <div className="text-sm text-neutral-500">Systems</div>
            <div className="font-medium">Architecting Laravel + Node.js Hybrid Backends</div>
            <div className="mt-1 text-sm text-neutral-600">
              Patterns for queues, events, crypto listeners, observability, and scaling.
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
