import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'CTO and MSc IT candidate focused on building production-grade systems across blockchain infrastructure, cryptography, and applied AI.',
  openGraph: {
    title: 'About | Alex Ayekha',
    description: 'CTO and MSc IT candidate focused on building production-grade systems across blockchain infrastructure, cryptography, and applied AI.',
    url: 'https://alexayekha.tech/about',
  },
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <p className="mt-3 text-neutral-700 leading-relaxed">
        I'm Alex Ayekha — a CTO and MSc IT candidate focused on building production-grade systems
        across blockchain infrastructure, cryptography, and applied AI. I write to document
        architecture decisions, share practical research, and publish frameworks that help teams ship.
      </p>

      <div className="mt-8 space-y-2 text-neutral-700">
        <div>
          <span className="font-medium">Email:</span>{" "}
          <a className="underline" href="mailto:alex@alexayekha.tech">alex@alexayekha.tech</a>
        </div>
        <div>
          <span className="font-medium">GitHub:</span>{" "}
          <a className="underline" href="https://github.com/AsciencioAlex">github.com/AsciencioAlex</a>
        </div>
      </div>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
