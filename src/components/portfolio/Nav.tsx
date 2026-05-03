import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary text-primary-foreground text-sm font-bold">
            {portfolio.initials}
          </span>
          <span className="text-sm text-muted-foreground">~/ali-taqi</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-gradient-primary shadow-glow">
            <a href={`mailto:${portfolio.email}`}>Hire me</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="mt-10 flex flex-col gap-6">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="font-mono text-lg">
                    {l.label}
                  </a>
                ))}
                <Button asChild className="bg-gradient-primary">
                  <a href={`mailto:${portfolio.email}`}>Hire me</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
