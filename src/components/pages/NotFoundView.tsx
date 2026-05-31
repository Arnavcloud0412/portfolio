"use client";

import Link from "next/link";
import { FadeIn, LineDraw } from "@/components/motion/FadeIn";

type NotFoundViewProps = {
  variant?: "global" | "system";
};

function VoidSchematic() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      className="mx-auto h-auto w-full max-w-sm text-ink"
      aria-hidden
    >
      <rect x="20" y="20" width="280" height="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="20" y1="60" x2="300" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <line x1="100" y1="60" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <line x1="200" y1="60" x2="200" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <path d="M 130 100 L 160 140 L 190 100" stroke="currentColor" strokeWidth="0.9" />
      <line x1="160" y1="140" x2="160" y2="165" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="160" cy="172" r="2" fill="currentColor" />
      <text x="160" y="95" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.45">
        NULL ENTRY
      </text>
      <line x1="8" y1="100" x2="18" y2="100" stroke="currentColor" strokeWidth="0.5" />
      <line x1="13" y1="95" x2="13" y2="105" stroke="currentColor" strokeWidth="0.5" />
      <text x="4" y="130" fill="currentColor" fontSize="5.5" fontFamily="monospace" opacity="0.35" transform="rotate(-90 4 130)">
        VOID
      </text>
    </svg>
  );
}

export function NotFoundView({ variant = "global" }: NotFoundViewProps) {
  const isSystem = variant === "system";

  return (
    <div className="page-padding flex min-h-[calc(100vh-8rem)] flex-col justify-center py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <FadeIn>
          <p className="label-caps mb-6 text-sm">
            {isSystem ? "§ ERR — Entry not indexed" : "§ ERR — Signal lost"}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="font-mono text-xs tracking-[0.2em] text-ink-faint uppercase">
            Error 404 · Route not found
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1 className="serif-display mt-6 text-[clamp(5rem,18vw,9rem)] leading-[0.9] tracking-tight">
            404
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <h2 className="serif-display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            {isSystem ? "System not in archive" : "Page not in the index"}
          </h2>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {isSystem
              ? "This dossier ID does not match any logged system. The entry may have been renumbered, archived under a different path, or removed from the index."
              : "The requested path does not exist in this archive. It may have been moved, renamed, or never logged to the operator index."}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10">
          <LineDraw className="max-w-md" />
        </FadeIn>

        <FadeIn delay={0.34} className="mt-10">
          <VoidSchematic />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12">
          <nav className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-opacity hover:opacity-60"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Return to index
            </Link>
            {!isSystem && (
              <Link
                href="/archive"
                className="font-mono text-sm tracking-[0.12em] text-ink-muted uppercase transition-colors hover:text-ink"
              >
                Browse complete archive
              </Link>
            )}
            {isSystem && (
              <Link
                href="/#work"
                className="font-mono text-sm tracking-[0.12em] text-ink-muted uppercase transition-colors hover:text-ink"
              >
                Flagship systems
              </Link>
            )}
            <Link
              href="/#contact"
              className="font-mono text-sm tracking-[0.12em] text-ink-muted uppercase transition-colors hover:text-ink"
            >
              Open comms
            </Link>
          </nav>
        </FadeIn>

        <FadeIn delay={0.46} className="mt-16 border-t border-line pt-6">
          <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
            {isSystem ? "Suggested · SYS 001–011 · /archive" : "Log ref · HTTP 404 · NO_MATCH"}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
