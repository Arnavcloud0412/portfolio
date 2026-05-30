"use client";

import { XRaySpotlight } from "@/components/motion/XRaySpotlight";

const heroClasses =
  "serif-display-hero text-[clamp(3rem,min(11vw,21vh),11.5rem)] leading-[0.96]";

export function HeroXRayTitle() {
  return (
    <XRaySpotlight
      spotlight={
        <>
          <div className="absolute inset-0 bg-[var(--spot-bg)]" />
          <h1 className={`${heroClasses} relative text-[var(--spot-ink)]`}>
            Engineering order
            <br />
            <span className="text-[var(--spot-ink-faint)]">from chaos.</span>
          </h1>
        </>
      }
    >
      <h1 className={`${heroClasses} text-ink`}>
        Engineering order
        <br />
        <span className="text-ink-faint">from chaos.</span>
      </h1>
    </XRaySpotlight>
  );
}
