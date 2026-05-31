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
  Contact: "Open comms",
};

const NAV_BUBBLE_ITEMS = siteConfig.nav.filter((item) => item.label !== "Contact");

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative flex h-10 w-10 items-center justify-center md:hidden"
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span className="flex w-5 flex-col gap-1.5">
        <span
          className={`block h-px w-full bg-ink transition-transform duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-full bg-ink transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-px w-full bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <NavArchiveCta
              label="Let's Talk ↗"
              hint="Open comms"
              labelClassName="hidden border border-ink px-4 py-2 font-mono text-sm tracking-[0.12em] text-ink uppercase sm:inline-block"
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:block"
            />
            <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className={`absolute top-16 right-0 flex h-[calc(100vh-4rem)] w-[min(100%,18rem)] flex-col border-l border-line bg-seashell transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
            {siteConfig.nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`border-b border-line py-4 text-left font-mono text-sm tracking-[0.14em] text-ink uppercase transition-opacity ${
                    isActive ? "font-medium" : "opacity-80"
                  }`}
                >
                  <span className="block text-[10px] tracking-[0.18em] text-ink-faint normal-case">
                    {NAV_HINTS[item.label] ?? item.label}
                  </span>
                  <span className="mt-1 block">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-line p-6">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="w-full border border-ink px-4 py-3 font-mono text-sm tracking-[0.12em] text-ink uppercase transition-colors hover:bg-ink hover:text-seashell"
            >
              Let&apos;s Talk ↗
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
