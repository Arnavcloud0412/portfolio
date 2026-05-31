import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { SystemIndexRow } from "@/components/systems/SystemIndexRow";
import { allSystems } from "@/data/systems";

export const metadata: Metadata = {
  title: "Complete Archive",
  description:
    "Full index of documented systems — flagship platforms, experiments, and side quests from 001 to 011.",
  alternates: {
    canonical: "/archive",
  },
  openGraph: {
    title: "Complete Archive · Arnav Deka",
    description:
      "Full index of documented systems — flagship platforms, experiments, and side quests from 001 to 011.",
    url: "/archive",
  },
};

export default function ArchivePage() {
  return (
    <div className="page-padding pb-24 pt-10 md:pb-32 md:pt-14">
      <FadeIn>
        <Link
          href="/#archive"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Return to index
        </Link>
      </FadeIn>

      <header className="mt-10 border-b border-line pb-10 md:mt-14 md:pb-14">
        <FadeIn delay={0.05}>
          <p className="label-caps mb-6">§ 03 — Complete archive</p>
        </FadeIn>

        <TextReveal delay={0.1}>
          <h1 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Complete archive
          </h1>
        </TextReveal>

        <FadeIn className="mt-8 max-w-2xl" delay={0.2}>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Every project leaves behind something valuable—an insight, a skill, a challenge
            solved, or a lesson learned. This archive captures the experiments, prototypes,
            client work, and side projects that shaped my journey as a developer.
          </p>
        </FadeIn>

        <FadeIn className="mt-8" delay={0.25}>
          <p className="label-caps">[ {String(allSystems.length).padStart(3, "0")} entries · 001–011 ]</p>
        </FadeIn>
      </header>

      <StaggerContainer className="mt-12 overflow-visible md:mt-16">
        {allSystems.map((system) => (
          <StaggerItem key={system.id} className="overflow-visible">
            <SystemIndexRow system={system} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
