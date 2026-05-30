"use client";

import { CockpitIllustration } from "@/components/illustrations/Illustrations";
import {
  FadeIn,
  LineDraw,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { siteConfig, skills } from "@/data/site";

export function AboutSection() {
  const skillSections = [
    { title: "Design", items: skills.design },
    { title: "Engineering", items: skills.engineering },
    { title: "Toolkit", items: skills.toolkit },
  ];

  return (
    <section id="about" className="section-block section-divider scroll-mt-16">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <p className="label-caps mb-8">§ 05 — The operator</p>
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

      <div className="mt-20 md:mt-28">
        <LineDraw className="mb-12" />

        <StaggerContainer className="grid gap-12 md:grid-cols-3 md:gap-8">
          {skillSections.map((section) => (
            <StaggerItem key={section.title}>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-ink">◆</span>
                <h3 className="label-caps text-ink">{section.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-base text-ink-muted transition-colors hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
