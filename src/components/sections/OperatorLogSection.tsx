"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FadeIn,
  LineDraw,
  TextReveal,
} from "@/components/motion/FadeIn";
import { siteConfig } from "@/data/site";
  "Flagship systems run at institutional scale — events, academia, govtech.",
  "Archive entries capture experiments that never shipped but still matter.",
  "Every dossier documents scope, stack, and operational footprint.",
];

export function OperatorLogSection() {
  return (
    <section id="log" className="section-block section-divider scroll-mt-16">
      <FadeIn>
        <p className="label-caps mb-8">§ 01 — Operator log</p>
      </FadeIn>

      <div className="relative">
        <motion.div
          className="pointer-events-none absolute -top-4 right-0 hidden w-28 opacity-70 lg:block xl:w-36"
          animate={{ y: [0, -10, -4, -12, 0], rotate: [0, 1, -0.5, 0.5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/lofi-rocket.png"
            alt=""
            width={400}
            height={400}
            className="h-auto w-full object-contain"
            aria-hidden
          />
        </motion.div>

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

          <div className="space-y-8">
            <FadeIn delay={0.35} direction="left">
              <div className="border border-line p-6 font-mono text-xs tracking-[0.1em] uppercase">
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

            <FadeIn delay={0.45} direction="left">
              <figure className="relative">
                <div className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-ink" />
                <div className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-ink" />
                <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-ink" />
                <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-ink" />
                <div className="overflow-hidden border border-line bg-ink">
                  <Image
                    src="/lofi-control-unit.png"
                    alt="Schematic illustration of a control unit console"
                    width={800}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="label-caps mt-3 text-center">
                  Fig. 00 — Control unit schematic / Operator interface
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
