"use client";

import { useEffect, useState } from "react";
import { TimelineDots } from "@/components/illustrations/Illustrations";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { timeline, TRAJECTORY_START } from "@/data/site";

function MissionClock() {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const start = new Date(TRAJECTORY_START);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    setElapsed({ years, months });
  }, []);

  return (
    <span className="label-caps">
      Mission elapsed T+ {String(elapsed.years).padStart(2, "0")}Y{" "}
      {String(elapsed.months).padStart(2, "0")}M
    </span>
  );
}

function parseMonthYear(part: string) {
  const trimmed = part.trim();
  const parts = trimmed.split(" ");
  if (parts.length === 1) {
    return { month: null as string | null, year: parts[0] };
  }
  const year = parts[parts.length - 1];
  const month = parts.slice(0, -1).join(" ").slice(0, 3).toUpperCase();
  return { month, year };
}

function formatDateColumn(date: string) {
  const rangeMatch = date.match(/^(.+?)\s*[–—-]\s*(.+)$/);

  if (rangeMatch) {
    const start = parseMonthYear(rangeMatch[1]);
    const end = parseMonthYear(rangeMatch[2]);
    return {
      kind: "range" as const,
      startMonth: start.month,
      startYear: start.year,
      endMonth: end.month,
      endYear: end.year,
    };
  }

  const parsed = parseMonthYear(date);
  if (!parsed.month) {
    return { kind: "year-only" as const, year: parsed.year };
  }

  return { kind: "single" as const, month: parsed.month, year: parsed.year };
}

export function TimelineSection() {
  return (
    <section id="timeline" className="section-block section-divider scroll-mt-16">
      <FadeIn>
        <p className="label-caps mb-8">§ 04 — Trajectory</p>
      </FadeIn>

      <div className="mb-16 flex flex-wrap items-start justify-between gap-6 md:mb-20">
        <TextReveal>
          <h2 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Trajectory
          </h2>
        </TextReveal>
        <FadeIn delay={0.3}>
          <MissionClock />
        </FadeIn>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <StaggerContainer className="divide-y divide-line">
          {timeline.map((entry) => {
            const dateColumn = formatDateColumn(entry.date);

            return (
              <StaggerItem key={entry.date + entry.role}>
                <article className="grid gap-4 py-10 md:grid-cols-[140px_1fr] md:gap-12 md:py-14">
                  <div>
                    {dateColumn.kind === "year-only" && (
                      <>
                        <span className="label-caps mb-1 block text-ink-faint">Education</span>
                        <span className="serif-display block text-4xl md:text-5xl">
                          {dateColumn.year}
                        </span>
                      </>
                    )}

                    {dateColumn.kind === "single" && (
                      <>
                        <span className="label-caps block text-ink-faint">{dateColumn.month}</span>
                        <span className="serif-display block text-4xl md:text-5xl">
                          {dateColumn.year}
                        </span>
                      </>
                    )}

                    {dateColumn.kind === "range" && (
                      <>
                        <span className="label-caps block text-ink-faint">
                          {dateColumn.startMonth}
                        </span>
                        {dateColumn.startYear !== dateColumn.endYear && (
                          <span className="serif-display block text-3xl md:text-4xl">
                            {dateColumn.startYear}
                          </span>
                        )}
                        <span className="my-1 block text-ink-faint">–</span>
                        <span className="label-caps block text-ink-faint">
                          {dateColumn.endMonth}
                        </span>
                        <span className="serif-display block text-3xl md:text-4xl">
                          {dateColumn.endYear}
                        </span>
                      </>
                    )}
                  </div>
                  <div>
                    <p className="label-caps mb-3">↳ {entry.location}</p>
                    <h3 className="mb-4 text-xl font-medium tracking-tight md:text-2xl">
                      {entry.role}
                    </h3>
                    <ul className="max-w-xl space-y-2 text-base leading-relaxed text-ink-muted md:text-lg">
                      {entry.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="hidden lg:block">
          <TimelineDots count={timeline.length} />
        </div>
      </div>
    </section>
  );
}
