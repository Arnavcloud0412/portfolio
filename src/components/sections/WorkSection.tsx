"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { SystemImagePreview, useSystemImage } from "@/components/ui/SystemImagePreview";
import { flagshipSystems, getSystemPath, type SystemDetail } from "@/data/systems";

function formatTags(system: SystemDetail) {
  return [...system.tags, system.year].join(" · ");
}

function FlagshipEntry({ system, emphasis }: { system: SystemDetail; emphasis?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const hasImage = useSystemImage(system.id);

  return (
    <article
      className={`group relative grid gap-6 border-t border-line transition-[z-index] duration-0 hover:z-20 md:grid-cols-12 md:items-start md:gap-8 ${
        emphasis ? "py-14 md:py-20" : "py-12 md:py-16"
      } ${hasImage ? "cursor-default" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SystemImagePreview id={system.id} title={system.title} visible={hovered && hasImage === true} />

      <div
        className={`transition-opacity duration-300 md:col-span-1 ${
          hovered && hasImage ? "opacity-40" : "opacity-100"
        }`}
      >
        <span
          className={`font-mono tracking-wider text-ink-faint ${
            emphasis ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {system.id}
        </span>
      </div>

      <div
        className={`transition-all duration-300 md:col-span-4 ${
          hovered && hasImage ? "opacity-50 md:translate-x-[-4px]" : "opacity-100"
        }`}
      >
        <h3
          className={`serif-display leading-tight ${
            emphasis
              ? "text-[clamp(2rem,4vw,3.25rem)]"
              : "text-[clamp(1.75rem,3vw,2.5rem)]"
          }`}
        >
          <Link
            href={getSystemPath(system.id)}
            className="transition-opacity hover:opacity-70"
          >
            {system.title}
          </Link>
        </h3>
        <p className="label-caps mt-3">{formatTags(system)}</p>
        {hasImage && (
          <p className="mt-4 hidden font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
            ↳ Hover to preview · Click to open dossier
          </p>
        )}
        {!hasImage && (
          <p className="mt-4 hidden font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
            ↳ Click to open dossier
          </p>
        )}
      </div>

      <div
        className={`transition-all duration-300 md:col-span-7 ${
          hovered && hasImage ? "opacity-45 md:translate-x-[-4px]" : "opacity-100"
        }`}
      >
        <p
          className={`leading-relaxed text-ink-muted ${
            emphasis ? "text-base md:text-lg md:leading-8" : "text-base md:leading-7"
          }`}
        >
          {system.description}
        </p>
      </div>
    </article>
  );
}

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
            <FlagshipEntry system={system} emphasis={index === 0} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
