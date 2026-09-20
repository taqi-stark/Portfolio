import { useEffect, useState } from "react";

const lines = [
  { p: "~$ ", c: "whoami" },
  { p: "→ ", c: "Ali Taqi — backend engineer." },
  { p: "~$ ", c: "stack --primary" },
  { p: "→ ", c: "Django · FastAPI · Postgres · Redis" },
  { p: "~$ ", c: "status" },
  { p: "→ ", c: "Available for new projects ✓" },
];

export const Terminal = () => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setShown((s) => (s >= lines.length ? 0 : s + 1));
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          ali@portfolio — zsh
        </span>
      </div>
      <div className="flex-1 p-5 font-mono text-sm leading-relaxed">
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} className="animate-fade-up">
            <span className="text-primary-foreground/60">{l.p}</span>
            <span
              className={
                l.p.startsWith("~$")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }
            >
              {l.c}
            </span>
          </div>
        ))}
        <div className="cursor-blink h-5" />
      </div>
    </div>
  );
};
