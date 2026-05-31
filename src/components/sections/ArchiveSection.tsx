"use client";

import Link from "next/link";
import { FadeIn, TextReveal } from "@/components/motion/FadeIn";

export function ArchiveSection() {
  return (
    <section id="archive" className="section-block section-divider scroll-mt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <FadeIn>
            <p className="label-caps mb-6">§ 03 — Complete archive</p>
          </FadeIn>
          <TextReveal delay={0.1}>
            <h2 className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Browse complete archive
            </h2>
          </TextReveal>
        </div>

        <FadeIn delay={0.2}>
          <Link
            href="/archive"
            className="group inline-flex cursor-pointer items-center gap-3 self-start font-mono text-xs tracking-[0.12em] uppercase lg:self-auto"
          >
            <span className="border-b border-ink pb-0.5 transition-all group-hover:pl-2">
              Access full archive
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </FadeIn>
      </div>

      <FadeIn className="mt-8 max-w-2xl" delay={0.25}>
        <p className="text-base leading-relaxed text-ink-muted md:text-lg">
          Every project leaves behind something valuable—an insight, a skill, a challenge
          solved, or a lesson learned. This archive captures the experiments, prototypes,
          client work, and side projects that shaped my journey as a developer.
        </p>
      </FadeIn>
    </section>
  );
}
