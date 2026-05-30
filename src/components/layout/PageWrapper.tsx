"use client";

import { ReactNode } from "react";
import { Header, MobileNav } from "@/components/layout/Header";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-14 pb-16 md:pt-16 md:pb-0">{children}</main>
      <MobileNav />
    </>
  );
}
