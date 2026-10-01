import Link from "next/link";

import Container from "./Container";
import { navigation, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/70">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Technology leadership, cybersecurity, enterprise architecture, digital platforms, and practical executive thinking.
            </p>
          </div>

          <div className="lg:text-right">
            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600 lg:justify-end dark:text-slate-400" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-blue-700 dark:hover:text-blue-300">
                  {item.label}
                </Link>
              ))}
              <a href="/rss.xml" className="hover:text-blue-700 dark:hover:text-blue-300">RSS</a>
            </nav>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm lg:justify-end">
              <a className="footer-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a className="footer-link" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="footer-link" href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. Built as a public record of technology leadership and engineering practice.
        </div>
      </Container>
    </footer>
  );
}
