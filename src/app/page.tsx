"use client";

import Link from "next/link";
import { AstronautIllustration } from "@/components/illustrations/Illustrations";
import { MetaBar } from "@/components/layout/Header";
import { FadeIn, TextReveal } from "@/components/motion/FadeIn";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)]">
      <MetaBar />

      <section className="page-padding relative flex min-h-[calc(100vh-8rem)] flex-col justify-center py-16 md:py-24">
        <AstronautIllustration />

        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <p className="label-caps mb-8">
              ↳ {siteConfig.name.toUpperCase()} — {siteConfig.tagline.toUpperCase()}
            </p>
          </FadeIn>

          <TextReveal delay={0.2}>
            <h1 className="serif-display text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] text-ink">
              Humanize the design.
            </h1>
          </TextReveal>
        </div>

        <FadeIn
          className="mt-auto max-w-xs self-end pt-16 md:max-w-sm md:pt-0"
          delay={0.6}
          direction="right"
        >
          <p className="text-sm leading-relaxed text-ink-muted md:text-[15px]">
            A portfolio cataloguing interfaces, systems, and quiet obsessions — built
            between deadlines, dusk, and the occasional zero-gravity daydream.
          </p>
        </FadeIn>

        <FadeIn className="mt-12 md:mt-16" delay={0.8}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase"
          >
            <span className="border-b border-ink pb-0.5 transition-all group-hover:pl-2">
              Explore work
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
