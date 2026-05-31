"use client";

import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-[4.5rem]">{children}</main>
    </>
  );
}
