"use client";

import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { SystemIndexRow } from "@/components/systems/SystemIndexRow";
import { flagshipSystems } from "@/data/systems";

export function WorkSection() {
  return (
    <section id="work" className="section-block section-divider scroll-mt-16 overflow-visible">
      <FadeIn>
        <p className="label-caps mb-8">§ 02 — Index of systems</p>
      </FadeIn>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <TextReveal>
          <h2 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Index of systems
          </h2>
        </TextReveal>
        <FadeIn delay={0.3}>
          <span className="label-caps">[ 005 flagship · 011 total ]</span>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        <p className="label-caps mb-4 text-ink">Flagship systems</p>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink-muted md:mb-14">
          Production platforms and institutional infrastructure — the five systems with
          the highest operational footprint and long-term deployment.
        </p>
      </FadeIn>

      <StaggerContainer className="overflow-visible">
        {flagshipSystems.map((system, index) => (
          <StaggerItem key={system.id} className="overflow-visible">
            <SystemIndexRow system={system} emphasis={index === 0} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
