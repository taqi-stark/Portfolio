import { portfolio } from "@/content/portfolio";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
      <div>© {new Date().getFullYear()} {portfolio.name}. Built with React + Tailwind.</div>
      <a href="#top" className="hover:text-foreground">↑ back to top</a>
    </div>
  </footer>
);
