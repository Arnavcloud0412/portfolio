"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AstronautIllustration } from "@/components/illustrations/Illustrations";
import { FadeIn, TextReveal } from "@/components/motion/FadeIn";
import { HeroXRayTitle } from "@/components/motion/HeroXRayTitle";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.55, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <motion.section
      ref={ref}
      id="hero"
      style={{ opacity, y }}
      className="relative min-h-[calc(100vh-3.5rem)] scroll-mt-16 will-change-[opacity,transform]"
    >
      <div className="page-padding relative flex min-h-[calc(100vh-3.5rem)] flex-col py-10 md:py-14">
        <AstronautIllustration />

        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-16">
          <div className="flex flex-1 flex-col">
            <FadeIn delay={0.1}>
              <p className="label-caps mb-6 md:mb-8">
                ↳ {siteConfig.name.toUpperCase()} — {siteConfig.tagline.toUpperCase()}
              </p>
            </FadeIn>

            <div className="flex flex-1 items-center py-4 md:py-6">
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
            className="mt-10 max-w-md self-end lg:mt-auto lg:pb-2"
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
    </motion.section>
  );
}
