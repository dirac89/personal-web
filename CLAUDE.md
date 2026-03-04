# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

No test runner is configured. There is a manual test file at `src/test/projects-test.js`.

## Stack

- **React 19** + **Vite 6** — single-page app, no router
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — animations (`motion` components, `whileInView`, `animate`)
- **react-icons** — icon library (fa, si, tb, bi, gi icon sets used)

## Architecture

Single-page personal portfolio. All sections render sequentially in `App.jsx`:

```
Navbar (top, static) → Hero → About → Projects → Contact → Footer
NavbarFloating (fixed bottom pill nav, always visible)
```

### Key patterns

**Section IDs for navigation** — Each section uses an `id` for anchor linking and scroll tracking: `#inicio` (Hero), `#proyectos` (Projects), `#about` (About), `#contact` (Contact). The floating navbar references these IDs.

**Active section detection** — `src/hooks/useActiveSection.js` listens to scroll and returns the currently-visible section ID by checking `getBoundingClientRect()` against the viewport midpoint. Used by `NavbarFloating` to highlight the active icon.

**Static data** — Project entries live in `src/data/projects.js`. Each project has `title`, `description`, `tech[]`, optional `github`, and `featured: boolean`. Hero derives the "Delivered Solutions" counter from `projects.length`.

**Dynamic experience years** — `src/utils/getExperienceYears.js` computes years since 2018 using the current year. Called in Hero to display the stats counter.

**AnimatedCounter** — `src/components/AnimatedCounter.jsx` counts up from 0 to a target on mount via `setInterval`. Props: `end`, `duration` (default 1500ms), `className`.

**AtomicSkills** — `src/components/AtomicSkills.jsx` renders skills as orbiting icons around a central profile photo using absolute positioning + Framer Motion rotation. Currently unused in `App.jsx` but available.

### Styling conventions

Emerald green (`emerald-600`, `emerald-700`) is the primary accent color. Dark sections use `bg-gray-900 text-white`, light sections use `bg-white`.

### Assets

Active profile image: `src/assets/profile_javier_new.png`. Multiple profile variants exist in `src/assets/` from iteration. CV is linked from `/CV_Javier_Aguilera.pdf` (must be placed in `public/` — not committed to the repo).