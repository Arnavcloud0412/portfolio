"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="group relative flex h-7 w-[52px] shrink-0 items-center rounded-full border border-ink p-0.5 transition-colors"
    >
      <span
        className={`absolute inset-0 rounded-full transition-colors ${
          theme === "dark" ? "bg-ink/10" : "bg-transparent"
        }`}
      />
      <span
        className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-seashell transition-transform duration-300 ease-out ${
          theme === "dark" ? "translate-x-[22px]" : "translate-x-0"
        }`}
      >
        <span className="text-[10px] leading-none">{theme === "dark" ? "◐" : "◑"}</span>
      </span>
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
