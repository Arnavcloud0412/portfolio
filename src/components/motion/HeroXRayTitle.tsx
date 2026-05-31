"use client";

import { XRaySpotlight } from "@/components/motion/XRaySpotlight";
import { useIsDesktop } from "@/hooks/useMediaQuery";

const heroClasses =
  "serif-display-hero text-[clamp(2.25rem,12vw,11.5rem)] leading-[0.96]";

const heroContent = (
  <>
    Engineering order
    <br />
    <span className="text-ink-faint">from chaos.</span>
  </>
);

export function HeroXRayTitle() {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <h1 className={`${heroClasses} text-ink`}>{heroContent}</h1>;
  }

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
