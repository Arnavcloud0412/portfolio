import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}
