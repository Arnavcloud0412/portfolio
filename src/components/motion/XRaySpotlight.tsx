"use client";

import { ReactNode, useCallback, useRef, useState } from "react";

type Spot = {
  x: number;
  y: number;
  active: boolean;
};

type XRaySpotlightProps = {
  children: ReactNode;
  spotlight: ReactNode;
  className?: string;
  radius?: number;
  showRing?: boolean;
};

export function XRaySpotlight({
  children,
  spotlight,
  className = "",
  radius = 130,
  showRing = true,
}: XRaySpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState<Spot>({ x: 0, y: 0, active: false });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setSpot((prev) => ({ ...prev, active: false }));
  }, []);

  const mask = `radial-gradient(circle ${radius}px at ${spot.x}px ${spot.y}px, black 99.5%, transparent 100%)`;

  return (
    <div
      ref={ref}
      className={`hero-xray relative cursor-default select-none ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}

      <div
        className={`pointer-events-none absolute inset-0 ${
          spot.active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
        aria-hidden={!spot.active}
      >
        {spotlight}
      </div>

      {showRing && (
        <div
          className={`pointer-events-none absolute rounded-full border border-[var(--spot-ink)] ${
            spot.active ? "opacity-30" : "opacity-0"
          }`}
          style={{
            width: radius * 2,
            height: radius * 2,
            left: spot.x - radius,
            top: spot.y - radius,
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
