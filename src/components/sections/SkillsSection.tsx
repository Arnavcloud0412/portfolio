"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FadeIn,
  LineDraw,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { getSkillBrief, getSkillDeployments } from "@/data/skill-briefs";
import { skillCategories } from "@/data/skills";

const FADE = { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

function DeploymentStrip({
  skill,
  onClear,
  compact = false,
}: {
  skill: string;
  onClear: () => void;
  compact?: boolean;
}) {
  const brief = getSkillBrief(skill);
  const deployments = getSkillDeployments(skill);

  return (
    <motion.div
      key={skill}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={FADE}
      className={
        compact
          ? "mt-4 border-t border-line pt-4"
          : "mt-10 border-t border-line pt-6 md:mt-12"
      }
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted md:text-base">
          <span className="font-medium text-ink">{skill}</span>
          {brief && <span> — {brief.context}</span>}
        </p>
        <button
          type="button"
          onClick={onClear}
          className="label-caps shrink-0 text-ink-faint transition-opacity hover:text-ink"
        >
          Clear
        </button>
      </div>

      {deployments.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {deployments.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="border border-line bg-offwhite/50 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-ink-muted transition-colors hover:border-ink hover:text-ink"
            >
              <span className="text-ink-faint">{project.id}</span>
              <span className="mx-1.5 text-ink-faint/60">·</span>
              {project.title}
              <span className="ml-1.5 text-ink-faint">↗</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="label-caps text-ink-faint">In development</p>
      )}
    </motion.div>
  );
}

function SkillChip({
  skill,
  isSelected,
  onSelect,
}: {
  skill: string;
  isSelected: boolean;
  onSelect: (skill: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(skill)}
      aria-pressed={isSelected}
      className={`border px-3.5 py-2 font-mono text-xs tracking-wide transition-colors duration-200 md:text-sm ${
        isSelected
          ? "border-ink bg-ink text-seashell"
          : "border-line text-ink-muted hover:border-ink/40 hover:text-ink"
      }`}
    >
      {skill}
    </button>
  );
}

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSelect = (skill: string) => {
    setSelectedSkill((current) => (current === skill ? null : skill));
  };

  return (
    <section id="skills" className="section-block section-divider scroll-mt-16">
      <FadeIn>
        <p className="label-caps mb-6 text-sm">§ 05 — Skills</p>
      </FadeIn>

      <div className="mb-10 md:mb-12">
        <TextReveal>
          <h2 className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">Skills</h2>
        </TextReveal>
      </div>

      <LineDraw className="mb-8 md:mb-10" />

      <p className="label-caps mb-6 text-ink-faint">
        Click a skill to see archive deployments
      </p>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-8">
        {skillCategories.map((category) => (
          <StaggerItem key={category.title}>
            <div
              className={`transition-opacity duration-200 ${
                selectedSkill && !category.items.includes(selectedSkill)
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span className="text-[9px] text-ink">◆</span>
                <h3 className="label-caps text-ink">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    isSelected={selectedSkill === skill}
                    onSelect={handleSelect}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedSkill && category.items.includes(selectedSkill) && (
                  <div className="md:hidden">
                    <DeploymentStrip
                      skill={selectedSkill}
                      onClear={() => setSelectedSkill(null)}
                      compact
                    />
                  </div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatePresence mode="wait">
        {selectedSkill && (
          <div className="hidden md:block">
            <DeploymentStrip skill={selectedSkill} onClear={() => setSelectedSkill(null)} />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
