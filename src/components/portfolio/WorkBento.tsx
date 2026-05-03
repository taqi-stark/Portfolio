import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { SectionHeader } from "./StackBento";
import { ArrowUpRight, Github } from "lucide-react";

export const WorkBento = () => (
  <section id="work" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeader
      kicker="// selected work"
      title="Things I've shipped"
      subtitle="A handful of projects spanning APIs, pipelines, and platforms."
    />
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {portfolio.projects.map((p, i) => (
        <Tile
          key={p.name}
          delay={i * 0.05}
          className={`group flex flex-col justify-between ${
            p.featured ? "md:col-span-2 md:row-span-1" : ""
          }`}
        >
          <div>
            <TileLabel>project_{String(i + 1).padStart(2, "0")}</TileLabel>
            <h3 className="font-mono text-2xl font-bold">{p.name}</h3>
            <p className="mt-2 text-muted-foreground">{p.summary}</p>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-xs text-muted-foreground">
                {p.role}
              </span>
              <div className="flex gap-3">
                <a
                  href={p.repo}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`${p.name} repo`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={p.live}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`${p.name} live`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Tile>
      ))}
    </div>
  </section>
);
