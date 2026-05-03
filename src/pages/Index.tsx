import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { StackBento } from "@/components/portfolio/StackBento";
import { WorkBento } from "@/components/portfolio/WorkBento";
import { AboutBento } from "@/components/portfolio/AboutBento";
import { ContactBento } from "@/components/portfolio/ContactBento";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />
    <Nav />
    <main>
      <Hero />
      <StackBento />
      <WorkBento />
      <AboutBento />
      <ContactBento />
    </main>
    <Footer />
  </div>
);

export default Index;
