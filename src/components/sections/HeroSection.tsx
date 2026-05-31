"use client";

import { AstronautIllustration } from "@/components/illustrations/Illustrations";
import { FadeIn, TextReveal } from "@/components/motion/FadeIn";
import { HeroXRayTitle } from "@/components/motion/HeroXRayTitle";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-16 md:min-h-[calc(100vh-4.5rem)]"
    >
      <div className="page-padding relative flex flex-col py-6 md:min-h-[calc(100vh-4.5rem)] md:py-14">
        <AstronautIllustration />

        <div className="flex flex-col lg:grid lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-16">
          <div className="flex flex-col lg:flex-1">
            <FadeIn delay={0.1}>
              <p className="label-caps mb-4 text-sm md:mb-8 md:text-base">
                ↳ {siteConfig.name.toUpperCase()} — {siteConfig.tagline.toUpperCase()}
              </p>
            </FadeIn>

            <div className="md:flex md:flex-1 md:items-center md:py-6">
              <TextReveal delay={0.2} clip={false}>
                <HeroXRayTitle />
              </TextReveal>
            </div>

            <FadeIn className="mt-6 md:mt-0" delay={0.8}>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex cursor-pointer items-center gap-3 font-mono text-xs tracking-[0.12em] uppercase"
              >
                <span className="border-b border-ink pb-0.5 transition-all group-hover:pl-2">
                  Index of systems
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </FadeIn>
          </div>

          <FadeIn
            className="mt-6 max-w-md self-end lg:mt-auto lg:pb-2"
            delay={0.6}
            direction="right"
          >
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              A catalogue of systems, software and operational infrastructure — engineered
              between deadlines, deployments and late-night ideas.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
