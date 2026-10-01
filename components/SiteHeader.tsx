import Link from "next/link";

import Container from "./Container";
import { navigation, siteConfig } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 font-semibold tracking-tight text-slate-950 dark:text-white"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-sm dark:bg-white dark:text-slate-950">
            AA
          </span>
          <span className="hidden sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex dark:text-slate-300" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-300"
          >
            Connect
          </a>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 marker:content-none dark:border-slate-700 dark:text-slate-100">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-950">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Connect
            </a>
          </div>
        </details>
      </Container>
    </header>
  );
}
