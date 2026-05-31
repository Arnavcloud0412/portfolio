"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useIsLargeDesktop } from "@/hooks/useMediaQuery";

export function AstronautIllustration() {
  const isLargeDesktop = useIsLargeDesktop();

  if (!isLargeDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none absolute right-[3%] top-[14%] w-80 xl:right-[5%] xl:top-[16%] xl:w-[26rem] 2xl:w-[32rem]"
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

export function RocketIllustration() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[2%] top-[8%] hidden w-52 lg:block xl:right-[4%] xl:top-[10%] xl:w-64 2xl:w-72"
      animate={{
        y: [0, -14, -6, -18, 0],
        x: [0, 5, -3, 4, 0],
        rotate: [0, 0.8, -0.5, 0.6, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/lofi-rocket.png"
        alt=""
        width={800}
        height={800}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </motion.div>
  );
}

export function CockpitIllustration() {
  const gauges = [
    { cx: 72, label: "OPS", angle: -38 },
    { cx: 142, label: "LOG", angle: 22 },
    { cx: 212, label: "DATA", angle: -12 },
    { cx: 282, label: "NET", angle: 48 },
  ];

  return (
    <div className="relative w-full text-ink">
      <div className="absolute -top-2 -left-2 h-5 w-5 border-t border-l border-ink" />
      <div className="absolute -top-2 -right-2 h-5 w-5 border-t border-r border-ink" />
      <div className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-ink" />
      <div className="absolute -right-2 -bottom-2 h-5 w-5 border-r border-b border-ink" />

      <svg
        viewBox="0 0 440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden
      >
        <defs>
          <pattern id="cockpit-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M 16 0 L 0 0 0 16"
              stroke="currentColor"
              strokeWidth="0.35"
              opacity="0.22"
            />
          </pattern>
          <pattern id="cockpit-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
          </pattern>
        </defs>

        {/* Outer chassis */}
        <rect x="12" y="12" width="416" height="336" stroke="currentColor" strokeWidth="1" />
        <rect x="18" y="18" width="404" height="324" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

        {/* Mounting points */}
        {[36, 404].map((cx) =>
          [36, 324].map((cy) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="4" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
              <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
              <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
            </g>
          ))
        )}

        {/* Header strip */}
        <rect x="24" y="28" width="392" height="28" stroke="currentColor" strokeWidth="0.8" fill="url(#cockpit-hatch)" />
        <text x="36" y="46" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">
          OPERATOR CONSOLE
        </text>
        <text x="220" y="46" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.55">
          UNIT [{siteConfig.initials}]
        </text>
        <text x="404" y="46" textAnchor="end" fill="currentColor" fontSize="7" fontFamily="monospace">
          {siteConfig.status.toUpperCase()}
        </text>
        <motion.circle
          cx="372"
          cy="42"
          r="3"
          fill="currentColor"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Primary viewport */}
        <rect x="24" y="64" width="248" height="132" stroke="currentColor" strokeWidth="0.9" />
        <rect x="28" y="68" width="240" height="124" fill="url(#cockpit-grid)" stroke="none" />
        <line x1="28" y1="130" x2="268" y2="130" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
        <line x1="148" y1="68" x2="148" y2="192" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />

        {/* Attitude arc */}
        <path
          d="M 88 150 A 60 60 0 0 1 208 150"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
        {[0, 30, 60, 90, 120, 150, 180].map((deg) => {
          const rad = (Math.PI * (180 - deg)) / 180;
          const x1 = 148 + Math.cos(rad) * 52;
          const y1 = 150 - Math.sin(rad) * 52;
          const x2 = 148 + Math.cos(rad) * 60;
          const y2 = 150 - Math.sin(rad) * 60;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
          );
        })}
        <path d="M 148 118 L 154 134 L 142 134 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />

        {/* Scan line */}
        <motion.line
          x1="28"
          x2="268"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
          animate={{ y1: [72, 188, 72], y2: [72, 188, 72] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Viewport sidebar meters */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="32"
            y={164 - i * 18}
            width="8"
            height={10 + i * 3}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity={0.35 + i * 0.1}
          />
        ))}

        <text x="36" y="82" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.45">
          SYSTEMS INDEX
        </text>
        <text x="36" y="108" fill="currentColor" fontSize="8" fontFamily="monospace">
          ARCHIVE · 011
        </text>
        <text x="36" y="122" fill="currentColor" fontSize="6.5" fontFamily="monospace" opacity="0.65">
          FLAGSHIP · 005
        </text>

        {/* Right telemetry stack */}
        <rect x="280" y="64" width="136" height="132" stroke="currentColor" strokeWidth="0.9" />
        <line x1="280" y1="88" x2="416" y2="88" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="280" y1="118" x2="416" y2="118" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="280" y1="148" x2="416" y2="148" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />

        <text x="292" y="80" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.45">
          TELEMETRY
        </text>
        <text x="292" y="106" fill="currentColor" fontSize="6.5" fontFamily="monospace">
          LOC · MUMBAI
        </text>
        <text x="292" y="136" fill="currentColor" fontSize="6.5" fontFamily="monospace">
          TZ · GMT+5:30
        </text>
        <text x="292" y="166" fill="currentColor" fontSize="6.5" fontFamily="monospace" opacity="0.65">
          {siteConfig.coordinates.lat}
        </text>
        <text x="292" y="178" fill="currentColor" fontSize="6.5" fontFamily="monospace" opacity="0.65">
          {siteConfig.coordinates.lon}
        </text>

        {/* Waveform trace */}
        <polyline
          points="292,100 304,96 316,104 328,92 340,98 352,88 364,94 376,90 388,96 400,92"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.55"
          fill="none"
        />

        {/* Module strip */}
        <rect x="24" y="206" width="392" height="52" stroke="currentColor" strokeWidth="0.8" />
        {[
          { x: 24, label: "TRAJECTORY", sub: "T+ 01Y 08M" },
          { x: 155, label: "SKILLS", sub: "9 DOMAINS" },
          { x: 286, label: "COMMS", sub: "OPEN" },
        ].map(({ x, label, sub }) => (
          <g key={label}>
            <line x1={x} y1="206" x2={x} y2="258" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
            <text x={x + 12} y="224" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.45">
              {label}
            </text>
            <text x={x + 12} y="242" fill="currentColor" fontSize="7.5" fontFamily="monospace">
              {sub}
            </text>
            <polyline
              points={`${x + 12},248 ${x + 28},244 ${x + 44},250 ${x + 60},240 ${x + 76},246`}
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.4"
              fill="none"
            />
          </g>
        ))}

        {/* Instrument cluster */}
        <rect x="24" y="268" width="392" height="68" stroke="currentColor" strokeWidth="0.8" />
        {gauges.map(({ cx, label, angle }) => (
          <g key={label}>
            <circle cx={cx} cy="302" r="22" stroke="currentColor" strokeWidth="0.8" />
            <circle cx={cx} cy="302" r="2" fill="currentColor" />
            <line
              x1={cx}
              y1="302"
              x2={cx}
              y2="286"
              stroke="currentColor"
              strokeWidth="0.9"
              transform={`rotate(${angle} ${cx} 302)`}
            />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((tick) => (
              <line
                key={tick}
                x1={cx}
                y1="282"
                x2={cx}
                y2="286"
                stroke="currentColor"
                strokeWidth="0.45"
                opacity="0.45"
                transform={`rotate(${tick} ${cx} 302)`}
              />
            ))}
            <text x={cx} y="332" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
              {label}
            </text>
          </g>
        ))}

        {/* Toggle bank */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${338 + i * 14}, 284)`}>
            <rect x="0" y="0" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="0.6" />
            <rect
              x="1.5"
              y={i % 2 === 0 ? 3 : 10}
              width="5"
              height="5"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="currentColor"
              fillOpacity={i % 2 === 0 ? 0.85 : 0.15}
            />
          </g>
        ))}

        {/* Vertical fader */}
        <rect x="408" y="278" width="4" height="48" stroke="currentColor" strokeWidth="0.6" />
        <rect x="404" y="296" width="12" height="6" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.2" />

        {/* Annotation callouts */}
        <line x1="8" y1="130" x2="22" y2="130" stroke="currentColor" strokeWidth="0.5" />
        <line x1="8" y1="125" x2="8" y2="135" stroke="currentColor" strokeWidth="0.5" />
        <text x="4" y="148" fill="currentColor" fontSize="5.5" fontFamily="monospace" opacity="0.4" transform="rotate(-90 4 148)">
          VIEWPORT
        </text>

        <line x1="432" y1="302" x2="418" y2="302" stroke="currentColor" strokeWidth="0.5" />
        <text x="434" y="305" fill="currentColor" fontSize="5.5" fontFamily="monospace" opacity="0.4">
          CLUSTER
        </text>
      </svg>

      <p className="label-caps mt-4 text-center">
        Fig. 06 — Operator console schematic / Rev. B
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
