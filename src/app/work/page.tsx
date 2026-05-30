"use client";

import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { projects } from "@/data/site";

export default function WorkPage() {
  return (
    <div className="page-padding py-16 md:py-24">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
        <TextReveal>
          <h1 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Index of work
          </h1>
        </TextReveal>
        <FadeIn delay={0.3}>
          <span className="label-caps">
            [ {String(projects.length).padStart(3, "0")} entries ]
          </span>
        </FadeIn>
      </div>

      <StaggerContainer className="divide-y divide-line">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <article className="group grid gap-6 py-10 md:grid-cols-12 md:items-start md:gap-8 md:py-12">
              <div className="md:col-span-1">
                <span className="font-mono text-[11px] tracking-wider text-ink-faint">
                  {project.id}
                </span>
              </div>

              <div className="md:col-span-3">
                <h2 className="serif-display text-2xl transition-opacity group-hover:opacity-70 md:text-3xl">
                  {project.title}
                </h2>
                <p className="label-caps mt-2">
                  {project.tags.join(" · ")}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-2">
                {project.award && (
                  <p className="label-caps text-ink">{project.award}</p>
                )}
              </div>

              <div className="md:col-span-2 md:text-right">
                <Link
                  href={project.href || "#"}
                  className="label-caps inline-flex items-center gap-1 transition-opacity hover:opacity-60"
                >
                  View ↗
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
