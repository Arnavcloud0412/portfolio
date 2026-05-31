"use client";

import { CockpitIllustration } from "@/components/illustrations/Illustrations";
import { FadeIn, TextReveal } from "@/components/motion/FadeIn";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="section-block section-divider scroll-mt-16">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <p className="label-caps mb-8">§ 06 — The operator</p>
          </FadeIn>

          <TextReveal delay={0.1}>
            <h2 className="serif-display mb-10 text-[clamp(2rem,5vw,3.5rem)] leading-[1.15]">
              The operator
            </h2>
          </TextReveal>

          <FadeIn delay={0.3}>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                I&apos;m {siteConfig.name} — an engineer building systems at the intersection
                of institutions, infrastructure, and long-term operational use. The work
                spans event operations at scale, academic platforms, govtech spatial
                systems, and the occasional experiment that never made it past prototype.
              </p>
              <p>
                I care about software that survives contact with real organizations: zero
                duplicate receipts, faculty approval chains that actually work, archives
                that preserve what teams learned. Quiet systems, documented properly.
              </p>
              <p className="text-ink">
                Currently maintaining flagship deployments, documenting the archive, and
                accepting select engineering engagements.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="left">
          <CockpitIllustration />
        </FadeIn>
      </div>
    </section>
  );
}
