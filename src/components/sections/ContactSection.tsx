"use client";

import Link from "next/link";
import {
  FadeIn,
  LineDraw,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/motion/FadeIn";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-ink text-seashell transition-colors duration-400"
    >
      <div className="page-padding flex min-h-[80vh] flex-col py-20 md:min-h-screen md:py-28">
        <FadeIn>
          <p className="mb-12 font-mono text-xs tracking-[0.2em] text-seashell/60 uppercase">
            § 06 — End of transmission
          </p>
        </FadeIn>

        <div className="flex flex-1 flex-col justify-center">
          <TextReveal delay={0.1}>
            <h2 className="serif-display mb-20 text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] text-seashell">
              Let&apos;s make something quiet.
            </h2>
          </TextReveal>

          <LineDraw className="mb-12 bg-seashell/20" />

          <StaggerContainer className="grid gap-12 md:grid-cols-3 md:gap-8">
            <StaggerItem>
              <p className="label-caps mb-4 text-seashell/60">Mail</p>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-lg transition-opacity hover:opacity-70 md:text-xl"
              >
                {siteConfig.email}
              </Link>
            </StaggerItem>

            <StaggerItem>
              <p className="label-caps mb-4 text-seashell/60">Elsewhere</p>
              <ul className="space-y-2">
                {siteConfig.social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg transition-opacity hover:opacity-70 md:text-xl"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <p className="label-caps mb-4 text-seashell/60">Coordinates</p>
              <p className="text-lg md:text-xl">{siteConfig.location}</p>
              <p className="mt-1 font-mono text-sm tracking-wider text-seashell/60">
                {siteConfig.timezone}
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeIn className="mt-20" delay={0.5}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-seashell/15 pt-6 font-mono text-xs tracking-[0.12em] text-seashell/50 uppercase">
            <span>
              © 2026 {siteConfig.name.toUpperCase()} — All quiet rights reserved
            </span>
            <span className="hidden md:inline">
              Designed in 16 cups of coffee · Built with care
            </span>
            <span>v1.0 · Portfolio</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
