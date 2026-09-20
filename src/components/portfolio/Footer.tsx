import { portfolio } from "@/content/portfolio";

export const Footer = () => (
  <footer className="border-t border-slate-200/90 bg-[#f3f6f8] py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center font-mono text-xs text-slate-500 md:flex-row md:text-left">
      <div>© {new Date().getFullYear()} {portfolio.name} · {portfolio.role}</div>
      <div className="text-slate-400">
        AI Systems · Data Pipelines · Resilient Backend Architecture
      </div>
    </div>
  </footer>
);

