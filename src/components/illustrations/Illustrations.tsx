"use client";

import { motion } from "framer-motion";

export function AstronautIllustration() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[8%] top-[28%] hidden w-48 lg:block xl:w-56"
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden
      >
        {/* Stars */}
        <circle cx="170" cy="30" r="1.5" fill="#0a0a0a" />
        <circle cx="150" cy="60" r="1" fill="#0a0a0a" />
        <circle cx="180" cy="90" r="1.2" fill="#0a0a0a" />
        <circle cx="130" cy="20" r="0.8" fill="#0a0a0a" />
        <circle cx="190" cy="140" r="1" fill="#0a0a0a" />

        {/* Small planet */}
        <circle cx="165" cy="170" r="12" stroke="#0a0a0a" strokeWidth="1" />
        <ellipse cx="165" cy="170" rx="16" ry="4" stroke="#0a0a0a" strokeWidth="0.8" transform="rotate(-20 165 170)" />

        {/* Astronaut body */}
        <ellipse cx="90" cy="130" rx="28" ry="35" stroke="#0a0a0a" strokeWidth="1.2" />
        {/* Helmet */}
        <circle cx="90" cy="85" r="22" stroke="#0a0a0a" strokeWidth="1.2" />
        <circle cx="90" cy="85" r="16" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
        {/* Visor reflection */}
        <path d="M82 78 Q90 72 98 78" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.5" />
        {/* Backpack */}
        <rect x="108" y="105" width="12" height="30" rx="3" stroke="#0a0a0a" strokeWidth="1" />
        {/* Arms */}
        <path d="M62 115 Q40 100 35 85" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M118 115 Q140 95 145 80" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        {/* Legs */}
        <path d="M78 162 Q70 190 65 210" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M102 162 Q110 190 115 210" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        {/* Tether line */}
        <path d="M120 120 Q160 100 175 85" stroke="#0a0a0a" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

export function CockpitIllustration() {
  return (
    <div className="relative w-full">
      {/* Blueprint frame corners */}
      <div className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-ink" />
      <div className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-ink" />
      <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-ink" />
      <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-ink" />

      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden
      >
        {/* Outer frame */}
        <rect x="20" y="20" width="360" height="280" stroke="#0a0a0a" strokeWidth="0.8" />

        {/* Window */}
        <rect x="60" y="40" width="280" height="120" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="60" y1="100" x2="340" y2="100" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="40" x2="200" y2="160" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />

        {/* Planet in window */}
        <circle cx="280" cy="90" r="25" stroke="#0a0a0a" strokeWidth="0.8" />
        <path d="M255 90 Q280 75 305 90" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.4" />

        {/* Control panel */}
        <rect x="40" y="180" width="320" height="100" stroke="#0a0a0a" strokeWidth="0.8" />

        {/* Gauges */}
        <circle cx="90" cy="230" r="20" stroke="#0a0a0a" strokeWidth="0.8" />
        <line x1="90" y1="230" x2="102" y2="218" stroke="#0a0a0a" strokeWidth="0.8" />
        <circle cx="160" cy="230" r="20" stroke="#0a0a0a" strokeWidth="0.8" />
        <line x1="160" y1="230" x2="172" y2="222" stroke="#0a0a0a" strokeWidth="0.8" />
        <circle cx="230" cy="230" r="20" stroke="#0a0a0a" strokeWidth="0.8" />
        <line x1="230" y1="230" x2="240" y2="215" stroke="#0a0a0a" strokeWidth="0.8" />

        {/* Switches and buttons */}
        <rect x="280" y="210" width="30" height="8" rx="2" stroke="#0a0a0a" strokeWidth="0.8" />
        <rect x="280" y="225" width="30" height="8" rx="2" stroke="#0a0a0a" strokeWidth="0.8" />
        <rect x="280" y="240" width="30" height="8" rx="2" stroke="#0a0a0a" strokeWidth="0.8" />

        {/* Lever */}
        <line x1="330" y1="250" x2="330" y2="210" stroke="#0a0a0a" strokeWidth="1" />
        <circle cx="330" cy="205" r="5" stroke="#0a0a0a" strokeWidth="0.8" />

        {/* Labels */}
        <text x="90" y="260" textAnchor="middle" fill="#8a8580" fontSize="6" fontFamily="monospace">
          ALT
        </text>
        <text x="160" y="260" textAnchor="middle" fill="#8a8580" fontSize="6" fontFamily="monospace">
          VEL
        </text>
        <text x="230" y="260" textAnchor="middle" fill="#8a8580" fontSize="6" fontFamily="monospace">
          FUEL
        </text>

        {/* Crosshair markers */}
        <line x1="15" y1="160" x2="25" y2="160" stroke="#0a0a0a" strokeWidth="0.5" />
        <line x1="20" y1="155" x2="20" y2="165" stroke="#0a0a0a" strokeWidth="0.5" />
        <line x1="375" y1="160" x2="385" y2="160" stroke="#0a0a0a" strokeWidth="0.5" />
        <line x1="380" y1="155" x2="380" y2="165" stroke="#0a0a0a" strokeWidth="0.5" />
      </svg>

      <p className="mt-3 text-center font-mono text-[9px] tracking-[0.2em] text-ink-faint uppercase">
        Fig. 03 — Cockpit schematic / Rev. A
      </p>
    </div>
  );
}

export function TimelineDots({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center gap-6 pt-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ink"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        />
      ))}
    </div>
  );
}
