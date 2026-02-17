import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Selected architecture and implementation work: wallet infrastructure, treasury automation, real-time tracking systems.',
  openGraph: {
    title: 'Case Studies | Alex Ascencio Ayekha',
    description: 'Selected architecture and implementation work: wallet infrastructure, treasury automation, real-time tracking systems.',
    url: 'https://alexayekha.tech/case-studies',
  },
};

export default function CaseStudies() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-3 text-neutral-700">
        Selected architecture and implementation work. Where needed, details are anonymized,
        but the engineering patterns and lessons remain precise.
      </p>

      <div className="mt-10 space-y-4">
        <div className="rounded-xl border p-4">
          <div className="text-sm text-neutral-500">On-chain + Off-chain</div>
          <div className="font-medium">Wallet infrastructure & treasury automation</div>
          <div className="mt-1 text-sm text-neutral-600">
            Deposit detection, confirmations, conversion pipelines, multisig treasury controls.
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-neutral-500">Mobility & Logistics</div>
          <div className="font-medium">Real-time driver tracking and trip systems</div>
          <div className="mt-1 text-sm text-neutral-600">
            5-second live updates, map rendering strategies, smooth marker interpolation, ETA.
          </div>
        </div>
      </div>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
