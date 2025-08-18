## Kobo — Africa’s next‑generation super app (Landing Page)

A fast, modern marketing site for Kobo — Africa’s next‑generation super app. Built with Next.js App Router, React 19, and Tailwind CSS v4.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss` via `app/globals.css`)
- **Fonts**: `next/font` with Geist

### Features
- **Responsive, accessible landing page** scaffold
- **SEO‑friendly** metadata via `metadata` in `app/layout.tsx`
- **Fast dev experience** with Turbopack (`npm run dev`)

---

## Getting started

Prerequisites: Node.js 18+ and npm.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## Scripts
- `npm run dev`: Start development server (Turbopack)
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Lint code

---

## Styling notes
- Tailwind v4 is enabled via a single `@import "tailwindcss";` in `app/globals.css`.
- Color and font tokens are defined as CSS variables and respect `prefers-color-scheme` for dark mode.