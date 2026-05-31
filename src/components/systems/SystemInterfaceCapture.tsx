"use client";

import Image from "next/image";
import { systemImageSrc, useSystemImage } from "@/components/ui/SystemImagePreview";

export function SystemInterfaceCapture({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const available = useSystemImage(id);

  if (available !== true) {
    return (
      <div className="relative border border-line bg-offwhite p-3">
        <div className="absolute top-2 left-2 h-3 w-3 border-t border-l border-ink opacity-50" />
        <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-ink opacity-50" />
        <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-ink opacity-50" />
        <div className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-ink opacity-50" />
        <div className="flex aspect-[16/10] items-center justify-center bg-seashell">
          <p className="label-caps px-4 text-center text-[10px]">
            Interface capture pending · Ref. {id}
          </p>
        </div>
        <p className="label-caps mt-3 border-t border-line pt-3 text-[10px]">
          Fig. {id} — Interface capture
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-line bg-offwhite p-3">
      <div className="absolute top-2 left-2 h-3 w-3 border-t border-l border-ink opacity-50" />
      <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-ink opacity-50" />
      <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-ink opacity-50" />
      <div className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-ink opacity-50" />
      <div className="relative aspect-[16/10] overflow-hidden bg-seashell">
        <Image
          src={systemImageSrc(id)}
          alt={`${title} interface`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
      <p className="label-caps mt-3 border-t border-line pt-3 text-[10px]">
        Fig. {id} — Interface capture
      </p>
    </div>
  );
}
