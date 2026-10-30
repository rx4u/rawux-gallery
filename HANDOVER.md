# Raw UX Gallery — Handover

## What it is
A portfolio gallery for Raw UX, Raja's design practice. It shows project cards with filters and screenshots. The design direction comes from rawux-portfolio-design.md: a research studio meets a design portfolio, with collage composition, an editorial serif, monospace annotations and a terracotta accent on warm cream. Client: none (own brand).

## Stack
- Next.js App Router, React, TypeScript. AGENTS.md warns that this Next.js version has breaking changes, so read the bundled docs in node_modules/next/dist/docs before editing.
- Tailwind CSS (@tailwindcss/postcss), shadcn/ui on @base-ui/react, tw-animate-css
- Framer Motion, lucide-react, class-variance-authority, clsx, tailwind-merge

## How to run
```
npm install         # lockfile: package-lock.json
npm run dev         # Next.js default port 3000
npm run build
npm run lint
```
capture-shots.mjs is a standalone script that captures screenshots. It was not run in this pass.

## Environment variables
None found. There are no .env files.

## Deploy
No deploy config found. The folder has no .vercel link and no vercel.json.

## Where it was left
- Archived: 2026-10-30, repo rx4u/rawux-gallery
- Branch: main
- Last commit: 96455e5 (2026-04-30) Build portfolio gallery with project cards, filters, and screenshots
- Uncommitted changes at archive time: 15 entries. Modified: src/app/globals.css, src/app/layout.tsx, src/app/page.tsx. Untracked: .claude/, "Raw UX-handoff.zip", capture-shots.mjs, public/shots/ and public/images/ files. These were committed as a snapshot commit when archived.
- Git remote: https://github.com/rx4u/rawux-gallery.git (matches the TSV target)

## Notes / next steps
- Prompt files for the portfolio: rawux-portfolio-prompt.md, rawux-portfolio-prompt-v2.md and rawux-revision-prompt.md (a revision pass). The repo does not show whether the revision was applied.
- No unfinished-work list was found in the folder.
