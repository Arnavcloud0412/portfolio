"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { TechLogo } from "@/components/systems/TechLogo";
import type { SystemDetail } from "@/data/systems";

const TECH_LABELS: Record<keyof SystemDetail["technologies"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Data & ML",
  infra: "Infrastructure",
};

export function SystemTechStack({
  technologies,
}: {
  technologies: SystemDetail["technologies"];
}) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {(Object.keys(technologies) as (keyof SystemDetail["technologies"])[]).map(
        (key, i) => (
          <FadeIn key={key} delay={0.1 + i * 0.05}>
            <div>
              <p className="label-caps mb-5 text-ink">{TECH_LABELS[key]}</p>
              <ul className="space-y-2">
                {technologies[key].map((tech) => (
                  <li key={tech}>
                    <div className="group flex items-center gap-3 border border-line bg-offwhite px-3 py-2.5 transition-colors hover:border-ink/30 hover:bg-seashell">
                      <TechLogo name={tech} className="h-6 w-6 opacity-80 transition-opacity group-hover:opacity-100" />
                      <span className="font-mono text-xs tracking-wide text-ink-muted group-hover:text-ink">
                        {tech}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )
      )}
    </div>
  );
}
