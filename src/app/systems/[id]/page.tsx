import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemDiagrams } from "@/components/systems/SystemDiagrams";
import { SystemInterfaceCapture } from "@/components/systems/SystemInterfaceCapture";
import { FadeIn, LineDraw, TextReveal } from "@/components/motion/FadeIn";
import {
  allSystems,
  getSystemById,
  getSystemPath,
  type SystemDetail,
} from "@/data/systems";

function formatTags(system: SystemDetail) {
  return [...system.tags, system.year].join(" · ");
}

const TECH_LABELS: Record<keyof SystemDetail["technologies"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Data & ML",
  infra: "Infrastructure",
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return allSystems.map((system) => ({ id: system.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const system = getSystemById(id);
  if (!system) return { title: "System not found" };

  return {
    title: `${system.title} — System ${system.id} · Arnav Deka`,
    description: system.description,
  };
}

export default async function SystemPage({ params }: PageProps) {
  const { id } = await params;
  const system = getSystemById(id);
  if (!system) notFound();

  const index = allSystems.findIndex((s) => s.id === id);
  const prev = index > 0 ? allSystems[index - 1] : null;
  const next = index < allSystems.length - 1 ? allSystems[index + 1] : null;

  return (
    <article className="page-padding pb-24 pt-10 md:pb-32 md:pt-14">
      <FadeIn>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Return to index
        </Link>
      </FadeIn>

      <header className="mt-10 border-b border-line pb-10 md:mt-14 md:pb-14">
        <FadeIn delay={0.05}>
          <p className="label-caps mb-6">System dossier · Entry {system.id}</p>
        </FadeIn>

        <TextReveal delay={0.1}>
          <h1 className="serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            {system.title}
          </h1>
        </TextReveal>

        <FadeIn className="mt-4" delay={0.2}>
          <p className="label-caps">{formatTags(system)}</p>
        </FadeIn>

        <FadeIn className="mt-8 grid gap-6 sm:grid-cols-2 lg:max-w-2xl" delay={0.25}>
          <div>
            <p className="label-caps mb-1 text-[10px]">Status</p>
            <p className="text-sm text-ink-muted md:text-base">{system.status}</p>
          </div>
          <div>
            <p className="label-caps mb-1 text-[10px]">Scope</p>
            <p className="text-sm text-ink-muted md:text-base">{system.scope}</p>
          </div>
        </FadeIn>
      </header>

      <div className="mt-12 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <FadeIn delay={0.3}>
          <section>
            <h2 className="label-caps mb-6">Operational summary</h2>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg md:leading-8">
              {system.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.35} direction="left">
          <SystemInterfaceCapture id={system.id} title={system.title} />
        </FadeIn>
      </div>

      <section className="mt-20 md:mt-28">
        <LineDraw className="mb-12" />
        <FadeIn>
          <h2 className="label-caps mb-10">Technology stack</h2>
        </FadeIn>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(system.technologies) as (keyof SystemDetail["technologies"])[]).map(
            (key, i) => (
              <FadeIn key={key} delay={0.1 + i * 0.05}>
                <div>
                  <p className="label-caps mb-4 text-ink">{TECH_LABELS[key]}</p>
                  <ul className="space-y-2">
                    {system.technologies[key].map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-sm tracking-wide text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <LineDraw className="mb-12" />
        <FadeIn>
          <h2 className="label-caps mb-10">System schematics</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SystemDiagrams type={system.diagram} systemId={system.id} />
        </FadeIn>
      </section>

      <nav className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10 md:mt-28">
        {prev ? (
          <Link
            href={getSystemPath(prev.id)}
            className="group font-mono text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
          >
            <span className="block text-ink-faint">{prev.id}</span>
            <span className="mt-1 inline-flex items-center gap-2">
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={getSystemPath(next.id)}
            className="group text-right font-mono text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
          >
            <span className="block text-ink-faint">{next.id}</span>
            <span className="mt-1 inline-flex items-center gap-2">
              {next.title}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
