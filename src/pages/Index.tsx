import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HomeButton } from "@/components/portfolio/HomeButton";
import { ScrollIndicator } from "@/components/portfolio/ScrollIndicator";

const Index = () => (
  <div className="relative min-h-screen bg-white text-black overflow-x-hidden font-sans md:snap-y md:snap-mandatory selection:bg-[#4d8f8b]/20">
    {/* Global Persistent Chrome */}
    <Header />
    <ScrollIndicator />

    {/* Full-Viewport Sections */}
    <main>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    {/* Fixed Persistent Home Button */}
    <HomeButton />
  </div>
);

export default Index;
