"use client";

import {
  FadeIn,
  LineDraw,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { siteConfig } from "@/data/site";

export function OperatorLogSection() {
  return (
    <section id="log" className="section-block section-divider scroll-mt-16">
      <FadeIn>
        <p className="label-caps mb-8">§ 01 — Operator log</p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-20">
        <div>
          <TextReveal delay={0.1}>
            <h2 className="serif-display mb-8 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15]">
              Documented systems across institutions, experiments, and operational
              deployments.
            </h2>
          </TextReveal>

          <FadeIn delay={0.25}>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                This index catalogues software and infrastructure built over time — from
                flagship platforms adopted at institutional scale to hackathon prototypes,
                client work, and side quests that still taught something worth keeping.
              </p>
              <p>
                Entries are ordered by operational significance. The first five represent
                flagship systems. Everything else lives in the archive below.
              </p>
            </div>
          </FadeIn>
        </div>

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
            </dl>
            <LineDraw className="mt-6" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
