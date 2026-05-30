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

export default function AboutPage() {
  const skillSections = [
    { title: "Design", items: skills.design },
    { title: "Engineering", items: skills.engineering },
    { title: "Toolkit", items: skills.toolkit },
  ];

  return (
    <div className="page-padding py-16 md:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <p className="label-caps mb-8">§ 03 — About the operator</p>
          </FadeIn>

          <TextReveal delay={0.1}>
            <h1 className="serif-display mb-10 text-[clamp(2rem,5vw,3.5rem)] leading-[1.15]">
              I draw maps for software &amp; the occasional spaceship.
            </h1>
          </TextReveal>

          <FadeIn delay={0.3}>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted">
              <p>
                I&apos;m {siteConfig.name} — a developer and designer working at the
                intersection of craft and systems. For the past several years, I&apos;ve
                been building products that feel considered: interfaces that breathe,
                code that reads like prose, and experiences that respect the person on
                the other side of the screen.
              </p>
              <p>
                My work spans product design, frontend architecture, and brand systems.
                I believe the best digital products are quiet — they don&apos;t shout for
                attention, they earn it through clarity and care.
              </p>
              <p className="text-ink">
                Currently building side projects, reading too much sci-fi, and accepting
                select freelance engagements.
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
                <span className="text-[8px] text-ink">◆</span>
                <h3 className="label-caps text-ink">{section.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
