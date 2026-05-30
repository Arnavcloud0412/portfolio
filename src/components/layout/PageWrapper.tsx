"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { PageTransition } from "@/components/motion/FadeIn";
import { Footer, Header, MobileNav } from "@/components/layout/Header";

export function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          <main className={`min-h-screen pt-14 md:pt-16 ${isContact ? "" : "pb-16 md:pb-0"}`}>
            {children}
          </main>
        </PageTransition>
      </AnimatePresence>
      {!isContact && <Footer />}
      <MobileNav />
    </>
  );
}
