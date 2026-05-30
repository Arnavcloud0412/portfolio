import { AboutSection } from "@/components/sections/AboutSection";
import { ArchiveSection } from "@/components/sections/ArchiveSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OperatorLogSection } from "@/components/sections/OperatorLogSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OperatorLogSection />
      <WorkSection />
      <ArchiveSection />
      <TimelineSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
