"use client";

import { useEffect, useState } from "react";
import { TimelineDots } from "@/components/illustrations/Illustrations";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { timeline } from "@/data/site";

function MissionClock() {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const start = new Date("2020-06-01");
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

export default function TimelinePage() {
  return (
    <div className="page-padding py-16 md:py-24">
      <div className="mb-16 flex flex-wrap items-start justify-between gap-6 md:mb-20">
        <TextReveal>
          <h1 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            The trajectory
          </h1>
        </TextReveal>
        <FadeIn delay={0.3}>
          <MissionClock />
        </FadeIn>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <StaggerContainer className="divide-y divide-line">
          {timeline.map((entry) => (
            <StaggerItem key={entry.year + entry.role}>
              <article className="grid gap-4 py-12 md:grid-cols-[120px_1fr] md:gap-12 md:py-16">
                <div>
                  <span className="serif-display block text-5xl md:text-6xl">
                    {entry.year}
                  </span>
                </div>
                <div>
                  <p className="label-caps mb-3">↳ {entry.location}</p>
                  <h2 className="mb-4 text-xl font-medium tracking-tight md:text-2xl">
                    {entry.role}
                  </h2>
                  <p className="max-w-lg text-sm leading-relaxed text-ink-muted md:text-[15px]">
                    {entry.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="hidden lg:block">
          <TimelineDots count={timeline.length} />
        </div>
      </div>
    </div>
  );
}
