import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { Tile, TileLabel } from "./Tile";
import { Copy, Github, Linkedin, Mail, Twitter, Check } from "lucide-react";
import { useState } from "react";

export const ContactBento = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-4 md:grid-cols-3">
        <Tile className="relative md:col-span-2 md:p-10">
          <div className="absolute inset-0 -z-10 bg-radial-glow opacity-60" />
          <TileLabel>contact</TileLabel>
          <h2 className="font-mono text-3xl font-bold md:text-5xl">
            Let's build <span className="text-gradient">something</span>.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Got a Python backend that needs scale, structure, or a second pair of eyes? I'd love to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
              <a href={`mailto:${portfolio.email}`}><Mail /> {portfolio.email}</a>
            </Button>
            <Button onClick={copy} size="lg" variant="outline">
              {copied ? <><Check /> Copied</> : <><Copy /> Copy email</>}
            </Button>
          </div>
        </Tile>
        <div className="grid gap-4">
          <SocialTile href={portfolio.socials.github} label="GitHub" Icon={Github} />
          <SocialTile href={portfolio.socials.linkedin} label="LinkedIn" Icon={Linkedin} />
          <SocialTile href={portfolio.socials.twitter} label="Twitter / X" Icon={Twitter} />
        </div>
      </div>
    </section>
  );
};

const SocialTile = ({
  href, label, Icon,
}: { href: string; label: string; Icon: typeof Github }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="tile group flex items-center justify-between p-5"
  >
    <span className="flex items-center gap-3 font-mono">
      <Icon className="h-5 w-5 text-primary-glow" />
      {label}
    </span>
    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
      → open
    </span>
  </a>
);
