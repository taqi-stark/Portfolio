import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";

const codeSnippet = `from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}`;

export const StackBento = () => (
  <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeader
      kicker="// stack"
      title="Tools I reach for"
      subtitle="Battle-tested across production systems handling real traffic."
    />
    <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
      <Tile className="md:col-span-2 md:row-span-2">
        <TileLabel>core stack</TileLabel>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {portfolio.coreStack.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-border bg-muted/30 px-4 py-5 text-center font-mono text-sm transition-colors hover:border-primary/60 hover:text-foreground"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-border bg-background/60 p-5">
          <div className="mb-3 font-mono text-xs text-muted-foreground">
            main.py
          </div>
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </Tile>

      {portfolio.stats.map((s, i) => (
        <Tile key={s.label} delay={i * 0.05} className="flex flex-col justify-between">
          <TileLabel>metric_{i + 1}</TileLabel>
          <div>
            <div className="font-mono text-4xl font-bold text-gradient">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        </Tile>
      ))}
    </div>

    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <Tile>
        <TileLabel>languages</TileLabel>
        <div className="flex flex-wrap gap-2">
          {portfolio.languages.map((l) => (
            <span key={l} className="chip">{l}</span>
          ))}
        </div>
      </Tile>
      <Tile>
        <TileLabel>tooling</TileLabel>
        <div className="flex flex-wrap gap-2">
          {portfolio.tooling.map((l) => (
            <span key={l} className="chip">{l}</span>
          ))}
        </div>
      </Tile>
    </div>
  </section>
);

export const SectionHeader = ({
  kicker, title, subtitle,
}: { kicker: string; title: string; subtitle?: string }) => (
  <div className="max-w-2xl">
    <div className="font-mono text-sm text-primary-glow/80">{kicker}</div>
    <h2 className="mt-3 font-mono text-3xl font-bold md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
  </div>
);
