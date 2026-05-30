"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { System } from "@/data/site";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { archiveSystems } from "@/data/site";

function formatTags(system: System) {
  return [...system.tags, system.year].join(" · ");
}

function ArchiveEntry({ system }: { system: System }) {
  return (
    <article className="group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
      <div className="md:col-span-1">
        <span className="font-mono text-sm tracking-wider text-ink-faint">{system.id}</span>
      </div>

      <div className="md:col-span-3">
        <h3 className="text-lg font-medium tracking-tight transition-opacity group-hover:opacity-70 md:text-xl">
          {system.title}
        </h3>
        <p className="label-caps mt-2 text-[10px] md:text-xs">{formatTags(system)}</p>
      </div>

      <div className="md:col-span-8">
        <p className="text-sm leading-relaxed text-ink-muted md:text-base">
          {system.description}
        </p>
      </div>
    </article>
  );
}

export function ArchiveSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="archive" className="section-block section-divider scroll-mt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <FadeIn>
            <p className="label-caps mb-6">§ 03 — Complete archive</p>
          </FadeIn>
          <TextReveal delay={0.1}>
            <h2 className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Browse complete archive
            </h2>
          </TextReveal>
        </div>

        <FadeIn delay={0.2}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="archive-entries"
            className="group inline-flex cursor-pointer items-center gap-3 self-start font-mono text-xs tracking-[0.12em] uppercase lg:self-auto"
          >
            <span className="border-b border-ink pb-0.5 transition-all group-hover:pl-2">
              {open ? "Collapse archive" : "Access full archive"}
            </span>
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-block"
            >
              →
            </motion.span>
          </button>
        </FadeIn>
      </div>

      <FadeIn className="mt-8 max-w-2xl" delay={0.25}>
        <p className="text-base leading-relaxed text-ink-muted md:text-lg">
          Not every system becomes a flagship. Some begin as experiments, hackathons,
          client work, or side quests. All of them taught something worth documenting.
        </p>
      </FadeIn>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="archive-entries"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <StaggerContainer className="mt-10 md:mt-14">
              {archiveSystems.map((system) => (
                <StaggerItem key={system.id}>
                  <ArchiveEntry system={system} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="mt-8 border-t border-line pt-6">
              <p className="label-caps">
                [ {String(archiveSystems.length).padStart(3, "0")} archived entries ·{" "}
                {archiveSystems[0]?.id}–{archiveSystems[archiveSystems.length - 1]?.id} ]
              </p>
            </FadeIn>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
