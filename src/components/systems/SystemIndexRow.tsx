"use client";

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { SystemImageInline, SystemImagePreview, useSystemImage } from "@/components/ui/SystemImagePreview";
import { getSystemPath, type SystemDetail } from "@/data/systems";

function formatTags(system: SystemDetail) {
  return [...system.tags, system.year].join(" · ");
}

type SystemIndexRowProps = {
  system: SystemDetail;
  emphasis?: boolean;
  compact?: boolean;
  showPreview?: boolean;
};

export function SystemIndexRow({
  system,
  emphasis = false,
  compact = false,
  showPreview = true,
}: SystemIndexRowProps) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const hasImage = useSystemImage(system.id);
  const previewActive = showPreview && hovered && hasImage === true;

  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    setHovered(true);
    setCursor({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setCursor({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCursor(null);
  };

  return (
    <article
      className={`group relative border-t border-line transition-[z-index] duration-0 hover:z-20 ${
        emphasis ? "py-14 md:py-20" : compact ? "py-8 md:py-10" : "py-12 md:py-16"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {showPreview && (
        <SystemImagePreview
          id={system.id}
          title={system.title}
          visible={previewActive}
          cursor={cursor}
          followCursor
        />
      )}

      <Link
        href={getSystemPath(system.id)}
        className="grid cursor-pointer gap-4 md:grid-cols-12 md:items-start md:gap-8"
      >
        <div
          className={`transition-opacity duration-300 md:col-span-1 ${
            previewActive ? "opacity-40" : "opacity-100"
          }`}
        >
          <span
            className={`font-mono tracking-wider text-ink-faint ${
              emphasis ? "text-base md:text-lg" : "text-sm"
            }`}
          >
            {system.id}
          </span>
        </div>

        <div
          className={`transition-all duration-300 md:col-span-4 ${
            previewActive ? "opacity-50 md:-translate-x-1" : "opacity-100"
          }`}
        >
          <h3
            className={`leading-tight transition-opacity group-hover:opacity-70 ${
              compact
                ? "text-lg font-medium tracking-tight md:text-xl"
                : emphasis
                  ? "serif-display text-[clamp(2rem,4vw,3.25rem)]"
                  : "serif-display text-[clamp(1.75rem,3vw,2.5rem)]"
            }`}
          >
            {system.title}
          </h3>
          <p className={`label-caps mt-3 ${compact ? "text-[10px] md:text-xs" : ""}`}>
            {formatTags(system)}
          </p>
          {!compact && showPreview && hasImage && (
            <p className="mt-4 hidden font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
              ↳ Hover to preview · Click to open dossier
            </p>
          )}
          {!compact && showPreview && !hasImage && (
            <p className="mt-4 hidden font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
              ↳ Click to open dossier
            </p>
          )}
          {compact && showPreview && (
            <p className="mt-3 hidden font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
              ↳ {hasImage ? "Hover to preview · " : ""}Click to open dossier
            </p>
          )}
        </div>

        <div
          className={`transition-all duration-300 md:col-span-7 ${
            previewActive ? "opacity-45 md:-translate-x-1" : "opacity-100"
          }`}
        >
          <p
            className={`leading-relaxed text-ink-muted ${
              compact
                ? "text-sm md:text-base"
                : emphasis
                  ? "text-base md:text-lg md:leading-8"
                  : "text-base md:leading-7"
            }`}
          >
            {system.description}
          </p>
          {showPreview && hasImage === true && (
            <div className="mt-6 md:hidden">
              <SystemImageInline id={system.id} title={system.title} />
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
