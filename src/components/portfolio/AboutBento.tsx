import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { SectionHeader } from "./StackBento";
import { MapPin } from "lucide-react";

export const AboutBento = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeader kicker="// about" title="A little about me" />
    <div className="mt-12 grid gap-4 md:grid-cols-5">
      <Tile className="md:col-span-3">
        <TileLabel>bio</TileLabel>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {portfolio.bio}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary-glow" />
            {portfolio.location}
          </span>
          <span className="opacity-50">·</span>
          <span>{portfolio.role}</span>
        </div>
      </Tile>
      <Tile className="md:col-span-2">
        <TileLabel>currently</TileLabel>
        <ul className="space-y-3">
          {portfolio.currently.map((c, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="font-mono text-primary-glow">→</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Tile>
    </div>

    <div className="mt-4">
      <Tile>
        <TileLabel>experience</TileLabel>
        <ul className="divide-y divide-border">
          {portfolio.experience.map((e) => (
            <li key={e.role} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-xs text-muted-foreground md:col-span-2">
                {e.period}
              </span>
              <div className="md:col-span-4">
                <div className="font-mono font-semibold">{e.role}</div>
                <div className="text-sm text-muted-foreground">{e.company}</div>
              </div>
              <p className="text-muted-foreground md:col-span-6">{e.impact}</p>
            </li>
          ))}
        </ul>
      </Tile>
    </div>
  </section>
);
