# Portfolio for Ali Taqi — Python Backend Engineer

A bold, dark, developer-flavored portfolio with a bento-grid layout. Monospaced headings give it a "code editor" personality; deep indigo palette with electric indigo accents keeps it sophisticated and tech-forward.

## Design direction

- **Palette**: Midnight Indigo — `#0a0a1a` background, `#141432` surface, `#1e1e5a` elevated, `#4f46e5` primary accent. Soft indigo glows behind hero elements.
- **Typography**: JetBrains Mono for headings, code snippets, labels, numbers. Work Sans for body copy.
- **Motion**: Subtle entrance fades on scroll, a typing/cursor blink in the hero, hover lifts on bento tiles, animated gradient ring on the avatar tile.
- **Texture**: Faint dotted grid background, soft radial glow behind hero, terminal-style chrome on selected tiles.

## Page structure (single-page, anchor nav)

1. **Sticky top nav** — initials mark "AT", links: Work · Stack · About · Contact, plus a "Resume" button.

2. **Hero (bento row, full width)**
   - Left tile (large): Name "Ali Taqi", tagline "Backend engineer crafting scalable Python systems with Django & FastAPI.", primary CTA "View Work", secondary "Get in touch", availability pill ("Open to freelance & full-time").
   - Right tile: animated terminal panel showing `~$ whoami` → printing a short bio line by line.

3. **Bento grid — Stack & Highlights**
   Mixed tile sizes featuring:
   - Big tile: **Core stack** — Django, FastAPI, Django REST Framework, Celery, PostgreSQL, Redis, Docker, AWS (icon chips).
   - Stat tiles: "5+ yrs Python", "30+ APIs shipped", "10M+ requests/day handled".
   - Tile: **Languages** — Python, SQL, TypeScript, Bash.
   - Tile: **Tooling** — Docker, GitHub Actions, Nginx, Pytest, Sentry.
   - Tile: a code snippet showing a clean FastAPI endpoint (syntax-highlighted look).

4. **Selected Work** (bento of project cards, 3–4 placeholder projects)
   Each card: project name, one-line summary, tech badges, role, link icons (Live · GitHub). Examples:
   - "Ledger API" — high-throughput FastAPI service, Postgres, Redis.
   - "CMS Platform" — Django + DRF multi-tenant CMS.
   - "Async Worker Pipeline" — Celery + RabbitMQ ETL.
   - "Realtime Dashboard" — FastAPI + WebSockets.

5. **About** (two-tile row)
   - Tile: short bio paragraph + location + years of experience.
   - Tile: "Currently" list — what Ali is learning/building/reading.

6. **Experience timeline** (compact list inside one wide tile) — role, company placeholder, dates, one-line impact.

7. **Contact** (bento footer)
   - Big tile: "Let's build something" with email button (mailto) and a copy-email action.
   - Small tiles: GitHub, LinkedIn, X/Twitter links.

8. **Footer**: built-with line, copyright, back-to-top.

## Content notes
- All projects, stats, and links use editable placeholders Ali can swap later.
- Email and social handles are placeholders; easy to replace in one config object.

## Technical details
- Single `Index.tsx` page composed of section components: `Nav`, `Hero`, `StackBento`, `WorkBento`, `AboutBento`, `ExperienceBento`, `ContactBento`, `Footer`.
- Centralize content in `src/content/portfolio.ts` so everything is editable in one file.
- Add design tokens in `index.css`: indigo palette in HSL, accent gradient, glow shadow, dotted-grid background utility, mono font family token. Wire fonts via Google Fonts in `index.html`.
- Extend `tailwind.config.ts` with `font-mono` (JetBrains Mono), `font-sans` (Work Sans), accent colors, custom shadow + radial-glow background.
- Use shadcn `Button`, `Card`, `Badge`; custom `BentoTile` wrapper for consistent radius/border/hover.
- Animations via `framer-motion` (already a common add) for fade-in-on-view; pure CSS for terminal typing and cursor blink.
- Fully responsive: bento collapses to single column on mobile; nav becomes a sheet menu.
- No backend needed for v1.
