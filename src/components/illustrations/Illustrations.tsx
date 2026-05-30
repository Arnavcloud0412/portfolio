"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AstronautIllustration() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[3%] top-[14%] hidden w-80 lg:block xl:right-[5%] xl:top-[16%] xl:w-[26rem] 2xl:w-[32rem]"
      animate={{
        y: [0, -18, -8, -22, 0],
        x: [0, 6, -4, 5, 0],
        rotate: [0, 0.6, -0.4, 0.5, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/lofi-astronaut.png"
        alt="Astronaut wearing headphones and working on a laptop"
        width={800}
        height={800}
        className="h-auto w-full object-contain"
        priority
      />
    </motion.div>
  );
}

export function CockpitIllustration() {
  return (
    <div className="relative w-full text-ink">
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
        <rect x="20" y="20" width="360" height="280" stroke="currentColor" strokeWidth="0.8" />
        <rect x="60" y="40" width="280" height="120" stroke="currentColor" strokeWidth="1" />
        <line x1="60" y1="100" x2="340" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="40" x2="200" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <circle cx="280" cy="90" r="25" stroke="currentColor" strokeWidth="0.8" />
        <path d="M255 90 Q280 75 305 90" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <rect x="40" y="180" width="320" height="100" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="90" cy="230" r="20" stroke="currentColor" strokeWidth="0.8" />
        <line x1="90" y1="230" x2="102" y2="218" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="160" cy="230" r="20" stroke="currentColor" strokeWidth="0.8" />
        <line x1="160" y1="230" x2="172" y2="222" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="230" cy="230" r="20" stroke="currentColor" strokeWidth="0.8" />
        <line x1="230" y1="230" x2="240" y2="215" stroke="currentColor" strokeWidth="0.8" />
        <rect x="280" y="210" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" />
        <rect x="280" y="225" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" />
        <rect x="280" y="240" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" />
        <line x1="330" y1="250" x2="330" y2="210" stroke="currentColor" strokeWidth="1" />
        <circle cx="330" cy="205" r="5" stroke="currentColor" strokeWidth="0.8" />
        <text x="90" y="260" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          ALT
        </text>
        <text x="160" y="260" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          VEL
        </text>
        <text x="230" y="260" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          FUEL
        </text>
        <line x1="15" y1="160" x2="25" y2="160" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="155" x2="20" y2="165" stroke="currentColor" strokeWidth="0.5" />
        <line x1="375" y1="160" x2="385" y2="160" stroke="currentColor" strokeWidth="0.5" />
        <line x1="380" y1="155" x2="380" y2="165" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <p className="label-caps mt-3 text-center">
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
