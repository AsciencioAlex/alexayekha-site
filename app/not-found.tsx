import Link from "next/link";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="page-space">
      <Container>
        <div className="mx-auto max-w-2xl py-16 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">This page does not exist.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">The link may be outdated, or the content may have moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/" className="button-primary">Go home</Link>
            <Link href="/writing" className="button-secondary">Read insights</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
