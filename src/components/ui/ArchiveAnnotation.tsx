"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

const FADE = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };

/** Nav link — label crossfades to hint in place, no popups */
export function NavArchiveLink({
  label,
  hint,
  labelClassName = "",
  onClick,
}: {
  label: ReactNode;
  hint: string;
  labelClassName?: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`group relative px-1 py-1 ${labelClassName}`}
    >
      <span className="relative grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1">
        <motion.span
          className="whitespace-nowrap"
          initial={false}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={FADE}
          aria-hidden={hovered}
        >
          {label}
        </motion.span>
        <motion.span
          className="whitespace-nowrap font-mono text-xs tracking-normal text-ink-muted normal-case sm:text-sm"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={FADE}
          aria-hidden={!hovered}
        >
          {hint}
        </motion.span>
      </span>
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-300 ease-out ${
          hovered ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
        aria-hidden
      />
    </button>
  );
}

/** Let's Talk — same in-place swap, right-aligned */
export function NavArchiveCta({
  label,
  hint,
  labelClassName = "",
  className = "",
  onClick,
}: {
  label: ReactNode;
  hint: string;
  labelClassName?: string;
  className?: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`relative ${className} ${labelClassName} ${
        hovered ? "border-ink bg-ink text-seashell" : ""
      } transition-colors duration-200`}
    >
      <span className="relative grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1">
        <motion.span
          className="whitespace-nowrap"
          initial={false}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={FADE}
        >
          {label}
        </motion.span>
        <motion.span
          className="whitespace-nowrap text-xs tracking-normal normal-case sm:text-sm"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={FADE}
        >
          {hint}
        </motion.span>
      </span>
    </button>
  );
}
