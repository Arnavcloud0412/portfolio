"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const isDark = pathname === "/contact";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        isDark ? "bg-seashell text-ink" : "bg-seashell/90 text-ink backdrop-blur-sm"
      }`}
    >
      <div className="page-padding flex h-14 items-center justify-between border-b border-line md:h-16">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.15em] transition-opacity hover:opacity-60"
        >
          [ {siteConfig.initials} ] — INDEX
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`label-caps transition-opacity hover:opacity-100 ${
                  isActive ? "text-ink" : "text-ink-faint opacity-80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="border border-ink px-4 py-2 font-mono text-[10px] tracking-[0.15em] uppercase transition-all hover:bg-ink hover:text-seashell"
        >
          Let&apos;s Talk ↗
        </Link>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex border-t border-line bg-seashell/95 backdrop-blur-sm md:hidden">
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 py-3 text-center font-mono text-[9px] tracking-[0.12em] uppercase ${
              isActive ? "text-ink" : "text-ink-faint"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MetaBar() {
  return (
    <div className="page-padding flex flex-wrap items-center justify-between gap-4 border-b border-line py-3 font-mono text-[10px] tracking-[0.12em] text-ink-faint uppercase">
      <span>[ 001 ] Portfolio / 2026</span>
      <span className="hidden sm:inline">
        Lat {siteConfig.coordinates.lat} · Lon {siteConfig.coordinates.lon}
      </span>
      <span className="hidden md:inline">Status · {siteConfig.status}</span>
      <span className="hidden lg:inline">Scroll ↓ · Begin transmission</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="page-padding border-t border-line py-6">
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] tracking-[0.15em] text-ink-faint uppercase">
        <span>© 2026 {siteConfig.name.toUpperCase()} — All quiet rights reserved</span>
        <span className="hidden md:inline">Designed in 16 cups of coffee · Built with care</span>
        <span>v1.0 · Portfolio</span>
      </div>
    </footer>
  );
}
