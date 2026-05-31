"use client";

import {
  FadeIn,
  LineDraw,
  TextReveal,
} from "@/components/motion/FadeIn";
import { RocketIllustration } from "@/components/illustrations/Illustrations";
import { siteConfig } from "@/data/site";

const LOG_ENTRIES = [
  "Flagship systems run at institutional scale — events, academia, govtech.",
  "Archive entries capture experiments that never shipped but still matter.",
  "Every dossier documents scope, stack, and operational footprint.",
];

export function OperatorLogSection() {
  return (
    <section id="log" className="section-block relative section-divider scroll-mt-16 overflow-visible">
      <RocketIllustration />

      <FadeIn>
        <p className="label-caps mb-8">§ 01 — Operator log</p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
        <div>
          <TextReveal delay={0.1}>
            <h2 className="serif-display mb-8 max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15]">
              Documented systems across institutions, experiments, and operational
              deployments.
            </h2>
          </TextReveal>

          <FadeIn delay={0.2}>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                This index catalogues software and infrastructure built over time — from
                flagship platforms adopted at institutional scale to hackathon prototypes,
                client work, and side quests that still taught something worth keeping.
              </p>
              <p>
                Each entry is written like a field report: what the system does, where it
                deployed, what stack holds it together, and what operational modules keep
                it running under real-world load.
              </p>
              <p>
                Entries are ordered by operational significance. The first five represent
                flagship systems — production infrastructure with the highest footprint.
                Everything else lives in the complete archive.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="mt-10" delay={0.3}>
            <LineDraw className="mb-6 max-w-md" />
            <ul className="space-y-4">
              {LOG_ENTRIES.map((entry, i) => (
                <li
                  key={entry}
                  className="flex gap-4 font-mono text-xs leading-relaxed tracking-wide text-ink-muted uppercase md:text-[11px]"
                >
                  <span className="shrink-0 text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="normal-case">{entry}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.35} direction="left">
          <div className="border border-line p-6 font-mono text-xs tracking-[0.1em] uppercase lg:mt-8">
            <LineDraw className="mb-6" />
            <dl className="space-y-4">
              <div>
                <dt className="text-ink-faint">Status</dt>
                <dd className="mt-1 text-ink">{siteConfig.status}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Coordinates</dt>
                <dd className="mt-1 text-ink">{siteConfig.location}</dd>
                <dd className="mt-0.5 text-ink-faint">
                  {siteConfig.coordinates.lat} · {siteConfig.coordinates.lon}
                </dd>
              </div>
              <div>
                <dt className="text-ink-faint">Local time</dt>
                <dd className="mt-1 text-ink">{siteConfig.timezone}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Index count</dt>
                <dd className="mt-1 text-ink">011 systems logged</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Archive depth</dt>
                <dd className="mt-1 text-ink">005 flagship · 006 archived</dd>
              </div>
            </dl>
            <LineDraw className="mt-6" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
