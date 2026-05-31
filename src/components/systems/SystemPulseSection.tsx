"use client";

import { motion } from "framer-motion";
import type { SystemHighlight } from "@/data/system-highlights";

function ModuleWireIcon({ index }: { index: number }) {
  const icons = [
    // Registration / intake
    <g key="a">
      <rect x="8" y="10" width="16" height="12" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <line x1="11" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="0.6" />
      <line x1="11" y1="17" x2="18" y2="17" stroke="currentColor" strokeWidth="0.6" />
    </g>,
    // Shield / validation
    <g key="b">
      <path d="M16 8 L24 12 V18 C24 22 16 26 16 26 C16 26 8 22 8 18 V12 Z" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <path d="M13 16 L15 18 L19 14" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </g>,
    // Chart / analytics
    <g key="c">
      <rect x="8" y="20" width="4" height="6" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <rect x="14" y="16" width="4" height="10" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <rect x="20" y="12" width="4" height="14" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <line x1="7" y1="26" x2="25" y2="26" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </g>,
    // Network / ops
    <g key="d">
      <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <circle cx="10" cy="22" r="3" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <circle cx="22" cy="22" r="3" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <line x1="14" y1="15" x2="11" y2="19" stroke="currentColor" strokeWidth="0.6" />
      <line x1="18" y1="15" x2="21" y2="19" stroke="currentColor" strokeWidth="0.6" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-ink" aria-hidden>
      {icons[index % icons.length]}
    </svg>
  );
}

export function SystemPulseSection({ highlight }: { highlight: SystemHighlight }) {
  const moduleCols =
    highlight.modules.length > 4
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-4";

  const metricsCols =
    highlight.metrics.length === 2
      ? "sm:grid-cols-2"
      : highlight.metrics.length >= 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <section>
      <div className="relative overflow-hidden bg-ink text-seashell">
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-seashell) 1px, transparent 1px), linear-gradient(90deg, var(--color-seashell) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <p className="label-caps mb-8 text-seashell/50">Operational pulse</p>

          <motion.h3
            className="serif-display max-w-3xl text-[clamp(1.75rem,4vw,3rem)] leading-[1.12] text-seashell"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {highlight.headline}
          </motion.h3>

          <div className={`mt-12 grid gap-8 border-t border-seashell/15 pt-10 ${metricsCols}`}>
            {highlight.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-none text-seashell">
                  {metric.value}
                </p>
                <p className="label-caps mt-3 text-seashell/55">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid gap-px bg-line ${moduleCols}`}>
        {highlight.modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            className="group relative overflow-hidden bg-seashell p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-offwhite md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <div className="relative flex items-start justify-between gap-4">
              <div className="rounded-sm border border-line bg-seashell p-2 transition-colors duration-300 group-hover:border-ink/35">
                <ModuleWireIcon index={i} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                Module {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h4 className="relative mt-5 text-base font-medium tracking-tight text-ink md:text-lg">
              {mod.title}
            </h4>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{mod.detail}</p>

            <div className="relative mt-5 border-t border-line pt-3">
              <span className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                Operational unit
              </span>
              <span className="ml-2 inline-block translate-x-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
