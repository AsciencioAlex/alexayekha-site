import Link from "next/link";

const posts = [
  {
    slug: "crypto-treasury",
    title: "Designing Secure Crypto Treasury Infrastructure",
    label: "Blockchain",
    desc: "A practical blueprint for multisig, controls, monitoring, and incident response.",
  },
  {
    slug: "cto-blockchain-framework",
    title: "A CTO Framework: When to Use Blockchain (and When Not To)",
    label: "Strategy",
    desc: "A decision model grounded in cost, trust boundaries, and operational realities.",
  },
  {
    slug: "laravel-node-architecture",
    title: "Architecting Laravel + Node.js Hybrid Backends",
    label: "Systems",
    desc: "Patterns for queues, events, crypto listeners, observability, and scaling.",
  },
];

export default function WritingIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-neutral-700">
          High-signal notes on applied AI, blockchain infrastructure, and executive engineering.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/writing/${p.slug}`}
            className="block rounded-xl border p-4 hover:bg-neutral-50"
          >
            <div className="text-sm text-neutral-500">{p.label}</div>
            <div className="font-medium">{p.title}</div>
            <div className="mt-1 text-sm text-neutral-600">{p.desc}</div>
          </Link>
        ))}
      </section>

      <footer className="mt-12 text-sm text-neutral-500">
        <Link className="underline" href="/">← Home</Link>
      </footer>
    </main>
  );
}
