"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavArchiveCta, NavArchiveLink } from "@/components/ui/ArchiveAnnotation";
import { siteConfig } from "@/data/site";

const SECTION_IDS = ["hero", "log", "work", "archive", "timeline", "skills", "about", "contact"];

const NAV_HINTS: Record<string, string> = {
  Log: "Operator log",
  Systems: "Flagship index",
  Trajectory: "Mission history",
  Skills: "Technical stack",
  Operator: "Profile & bio",
};

const NAV_BUBBLE_ITEMS = siteConfig.nav.filter((item) => item.label !== "Contact");

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-seashell/90 text-ink backdrop-blur-sm transition-colors duration-400">
      <div className="page-padding flex h-16 items-center justify-between gap-4 border-b border-line md:h-[4.5rem]">
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="font-mono text-sm tracking-[0.12em] text-ink transition-opacity hover:opacity-60"
        >
          [ {siteConfig.initials} ] — INDEX
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_BUBBLE_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const hint = NAV_HINTS[item.label] ?? item.label;

            return (
              <NavArchiveLink
                key={item.href}
                label={item.label}
                hint={hint}
                labelClassName={`cursor-pointer font-mono text-sm uppercase tracking-[0.18em] text-ink ${
                  isActive ? "font-medium" : "opacity-80"
                }`}
                onClick={() => handleNavClick(item.href)}
              />
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <NavArchiveCta
            label="Let's Talk ↗"
            hint="Open comms"
            labelClassName="hidden border border-ink px-4 py-2 font-mono text-sm tracking-[0.12em] text-ink uppercase sm:inline-block"
            onClick={() => handleNavClick("#contact")}
            className="hidden sm:block"
          />
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex border-t border-line bg-seashell/95 text-ink backdrop-blur-sm md:hidden">
      {siteConfig.nav.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;
        return (
          <button
            key={item.href}
            type="button"
            onClick={() => handleNavClick(item.href)}
            className={`flex-1 py-3.5 font-mono text-xs tracking-[0.1em] text-ink uppercase sm:text-sm ${
              isActive ? "font-medium" : "opacity-80"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
