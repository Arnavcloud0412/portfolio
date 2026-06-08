"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function systemImageSrc(id: string) {
  return `/project-images/${id}.png`;
}

export function useSystemImage(id: string) {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.src = systemImageSrc(id);
    img.onload = () => {
      if (!cancelled) setAvailable(true);
    };
    img.onerror = () => {
      if (!cancelled) setAvailable(false);
    };
    return () => {
      cancelled = true;
    };
  }, [id]);

  return available;
}

type CursorPoint = {
  x: number;
  y: number;
};

type SystemImagePreviewProps = {
  id: string;
  title: string;
  visible: boolean;
  cursor?: CursorPoint | null;
  followCursor?: boolean;
};

const PREVIEW_OFFSET = 20;
const PREVIEW_MAX_WIDTH = 440;

function getCursorPreviewPosition(cursor: CursorPoint) {
  const width = Math.min(window.innerWidth * 0.92, PREVIEW_MAX_WIDTH);
  const height = width * (10 / 16) + 72;

  let left = cursor.x + PREVIEW_OFFSET;
  let top = cursor.y + PREVIEW_OFFSET;

  if (left + width > window.innerWidth - 16) {
    left = cursor.x - width - PREVIEW_OFFSET;
  }

  if (top + height > window.innerHeight - 16) {
    top = cursor.y - height - PREVIEW_OFFSET;
  }

  return {
    left: Math.max(16, Math.min(left, window.innerWidth - width - 16)),
    top: Math.max(16, Math.min(top, window.innerHeight - height - 16)),
  };
}

function SystemImageFrame({ id, title }: { id: string; title: string }) {
  return (
    <div className="system-preview-frame relative overflow-hidden border border-line bg-offwhite p-3 shadow-[0_24px_64px_-12px_rgba(10,10,10,0.18)] transition-colors duration-400">
      <div className="absolute top-2 left-2 h-3 w-3 border-t border-l border-ink opacity-50" />
      <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-ink opacity-50" />
      <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-ink opacity-50" />
      <div className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-ink opacity-50" />

      <div className="relative aspect-[16/10] overflow-hidden bg-seashell">
        <Image
          src={systemImageSrc(id)}
          alt={`${title} interface capture`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 440px"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3">
        <p className="label-caps truncate text-[10px]">Fig. {id} — Interface capture</p>
        <span className="shrink-0 font-mono text-[10px] tracking-wider text-ink-faint uppercase">
          Live
        </span>
      </div>
    </div>
  );
}

export function SystemImageInline({ id, title }: { id: string; title: string }) {
  return <SystemImageFrame id={id} title={title} />;
}

export function SystemImagePreview({
  id,
  title,
  visible,
  cursor = null,
  followCursor = false,
}: SystemImagePreviewProps) {
  const useCursorPosition = followCursor && cursor;
  const position = useCursorPosition ? getCursorPreviewPosition(cursor) : null;

  return (
    <AnimatePresence>
      {visible && (!followCursor || cursor) && (
        <motion.div
          className={`system-preview pointer-events-none z-50 hidden w-[min(92vw,400px)] lg:block xl:w-[440px] ${
            useCursorPosition ? "fixed" : "absolute top-6 right-0 z-30 xl:top-4"
          }`}
          style={
            position
              ? { left: position.left, top: position.top }
              : undefined
          }
          initial={{ opacity: 0, y: useCursorPosition ? 0 : 16, scale: 0.94, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: useCursorPosition ? 0 : 10, scale: 0.97, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <SystemImageFrame id={id} title={title} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
