import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research notes from MSc IT work and applied experiments in cryptography, AI systems, and distributed systems.',
  openGraph: {
    title: 'Research | Alex Ayekha',
    description: 'Research notes from MSc IT work and applied experiments in cryptography, AI systems, and distributed systems.',
    url: 'https://alexayekha.tech/research',
  },
};

export default function Research() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
      <p className="mt-3 text-neutral-700">
        Research notes from my MSc IT work and applied experiments. The goal is practical,
        reproducible insight that can ship into real systems.
      </p>

      <ul className="mt-8 list-disc space-y-2 pl-5 text-neutral-700">
        <li>Applied cryptography & security engineering</li>
        <li>AI systems, MLOps patterns, and evaluation</li>
        <li>Distributed systems & blockchain infrastructure</li>
      </ul>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
