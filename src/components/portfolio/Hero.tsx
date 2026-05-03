import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { ArrowRight, Mail } from "lucide-react";
import { Tile } from "./Tile";
import { Terminal } from "./Terminal";

export const Hero = () => (
  <section id="top" className="relative pt-28">
    <div className="absolute inset-0 -z-10 bg-radial-glow" />
    <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
      <Tile className="md:col-span-2 md:p-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {portfolio.availability}
        </div>
        <h1 className="font-mono text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-gradient">{portfolio.name}</span>
          <span className="text-muted-foreground">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
          {portfolio.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
            <a href="#work">View work <ArrowRight /></a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${portfolio.email}`}><Mail /> Get in touch</a>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-2 font-mono">
          {["Django", "FastAPI", "Python", "PostgreSQL", "Docker"].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </Tile>
      <Tile className="md:p-0" delay={0.15}>
        <Terminal />
      </Tile>
    </div>
  </section>
);
