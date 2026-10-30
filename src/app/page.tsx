import { HeroSection } from "@/components/rawux/hero-section";
import { PhilosophySection } from "@/components/rawux/philosophy-section";
import { WorkSection } from "@/components/rawux/work-section";
import { ProcessSection } from "@/components/rawux/process-section";
import { CapabilitiesSection } from "@/components/rawux/capabilities-section";
import { ToolsSection } from "@/components/rawux/tools-section";
import { ContactSection } from "@/components/rawux/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <WorkSection />
      <ProcessSection />
      <CapabilitiesSection />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
