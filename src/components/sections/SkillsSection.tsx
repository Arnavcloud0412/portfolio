"use client";

import {
  FadeIn,
  LineDraw,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-block section-divider scroll-mt-16">
      <FadeIn>
        <p className="label-caps mb-8">§ 05 — Skills</p>
      </FadeIn>

      <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <TextReveal>
          <h2 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Skills
          </h2>
        </TextReveal>
        <FadeIn delay={0.3}>
          <span className="label-caps">[ {skillCategories.length} domains ]</span>
        </FadeIn>
      </div>

      <LineDraw className="mb-12 md:mb-16" />

      <StaggerContainer className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-16">
        {skillCategories.map((category) => (
          <StaggerItem key={category.title}>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-ink">◆</span>
              <h3 className="label-caps text-ink">{category.title}</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              {category.items.join(" · ")}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
