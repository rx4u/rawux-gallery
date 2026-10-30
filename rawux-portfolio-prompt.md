# Claude Design Prompt: Raw UX Portfolio

Copy this into Claude Design. Upload the `rawux-portfolio-design.md` file as the design system first.

---

```
## Design System
Apply the uploaded design system (rawux-portfolio-design.md).

## Brief
Design a portfolio website for Raw UX, a solo design studio run by Raja (Rajaraman Arumugam), a design leader with 20 years of experience across AI platforms, enterprise SaaS, fintech, logistics, and healthcare. The site should feel like a research lab and creative studio, not a traditional portfolio grid.

**Goal:** Position Raw UX as a premium design-engineering practice. The site should communicate craft, depth, and intentionality. Visitors (potential clients, hiring managers, collaborators) should feel they are entering a studio, not browsing a resume.

**Target visitor:** Design leaders, CTOs, product managers, and founders evaluating a senior design partner for AI/SaaS product work.

**Tagline:** Design. AI. Product. Leadership.

**Screens to design (8 sections, single scrolling page):**

1. **Hero / Home (Section 1 of 8)**
   - Display headline: a statement about designing for AI, intention, or craft. NOT "Welcome to my portfolio." Think manifesto.
   - Subtext: one line about what Raw UX does (research, interfaces, systems for AI products).
   - Two CTAs: "See work" (filled terracotta pill) and "Start a project" (outlined pill).
   - Right side: collage zone with project screenshots (use abstract color blocks as placeholders), annotation cards, and figure labels.
   - Studio identifier bottom-left: "R / U" monogram + "DESIGN STUDIO / HYDERABAD, INDIA" in monospace.
   - Layout: asymmetric split. Left 40% typography, right 60% collage.

2. **Manifesto / About (Section 2 of 8)**
   - Pagination label top-left: "ABOUT / MANIFESTO 2 OF 8" in monospace.
   - Display headline: a statement about how design thinking works (like "We study how ideas become taste" but for Raw UX's perspective on design + AI + product).
   - Subtext: 2-3 sentences about the approach.
   - Four pillars in a 2x2 grid, numbered 01-04 in terracotta. Each has a title (Fraunces) and a two-line description (Public Sans). Pillars: Design Systems, AI Product Design, Design Leadership, Full-Stack Craft.
   - Right side: continued collage with annotation cards ("OBSERVATION: ...") and studio notes.
   - Two CTAs at bottom.

3. **Experience / Background (Section 3 of 8)**
   - Display headline about experience or journey.
   - Timeline or credential strip showing key roles: Kore.ai (Director of Product Design), PropertyGuru, Quincus, 8x8, Qatar Airways.
   - 20 years across AI, SaaS, fintech, logistics, telecom, healthcare.
   - Dark annotation cards showing domain expertise areas with monospace labels.
   - Minimal, not a full resume. Think curated highlights.

4. **Selected Work (Section 4 of 8)**
   - Pagination: "4 / 8" in terracotta.
   - Display headline: "Selected experiments." with terracotta period.
   - Subtext about explorations at the intersection of AI, interfaces, and product design.
   - 3 project cards in asymmetric layout (one large, two smaller stacked):
     - Card 1 (large): A dashboard/SaaS project. Title in Fraunces, subtitle in Public Sans, dark data panel with "MOOD VECTOR" or similar annotation, confidence score.
     - Card 2: A design system or component project. Shows technical drawings or structured visuals.
     - Card 3: A landing page or marketing project. Shows editorial layout.
   - Each card has a numbered index (01, 02, 03) in terracotta.
   - "View all work" CTA linking to gallery.

5. **Process (Section 5 of 8)**
   - Display headline: "How I work" in massive serif.
   - Subtext about process: curiosity, craft, moving from insight to iteration.
   - Full-width image strip with 4 panels (torn paper edges between them), each showing a process phase.
   - Below the strip: 4 columns with red dot markers:
     - Discover: listening, research, pattern finding.
     - Design: fast prototypes, testing ideas.
     - Review: challenging assumptions, critique.
     - Ship: polish, intentional details.
   - Each column has a Fraunces title, Public Sans description, and a terracotta arrow link.

6. **Skills / Capabilities (Section 6 of 8)**
   - Display headline about what Raw UX builds or solves.
   - Capability cards in dark theme (dark-surface background):
     - AI Product Design
     - Design Systems & Tokens
     - SaaS Dashboards
     - Landing Pages & Marketing
     - Mobile App Design
     - Design Leadership & Strategy
   - Each card: monospace label, short description, relevant metric or annotation.
   - Asymmetric card sizes. Not a uniform grid.

7. **Tools & Stack (Section 7 of 8)**
   - Light section. Display headline about tools.
   - Two rows:
     - Design: Figma, Claude Design, Framer
     - Engineering: Next.js, Supabase, Tailwind, Vercel, Claude Code, Claude API
   - Monospace labels, small icons or text-only. Minimal.
   - An annotation card: "TOOLS FOR DESIGN ENGINEERING" in dark theme.

8. **Contact / Footer (Section 8 of 8)**
   - Display headline: "Start a project." with terracotta period.
   - Email, social links (Dribbble, LinkedIn, X).
   - Studio identifier: "RAW UX / DESIGN STUDIO / HYDERABAD, INDIA"
   - Monogram bottom-left.

## Constraints
Hi-fi, production-ready visual fidelity.
Desktop-first (1440px viewport). Mobile adaptation is secondary.

Do not use a uniform grid. Every section should have asymmetric, collage-style composition.
Do not use rounded corners on images or cards (0px radius). Only pill-shaped buttons have rounding.
Do not use any accent color besides terracotta (#C0452A). No blue, no purple, no amber, no gold, no warm yellow-orange.
Do not use gradients, glassmorphism, or blur effects.
Do not use stock photography. Use solid color blocks (#2D3830, #E8DFD0, #1E1E1E) as image placeholders.
Do not use Inter, Roboto, Arial, or system-ui fonts.
Do not center-align section layouts. Left-aligned headlines with right-heavy visual collage.
Do not use generic card grids with equal spacing and identical card sizes.
Do not add sections beyond what is listed.
Do not use em dashes anywhere in copy.

Every display headline must end with a period rendered in tertiary color (#C0452A).
Include monospace annotation cards with labels like "COHERENCE", "SIGNAL / NOISE", "CONFIDENCE", "fig. 01".
Use torn paper edge textures between sections where photography meets background.
Include "X OF 8" pagination markers in monospace at section transitions.
Use red filled dots (8px) as visual markers at column/section breaks.

Commit to one cohesive aesthetic direction. Do not blend multiple styles.
Every element earns its place. No filler content.

## Output Spec
Artifact: landing page (single scrolling page, 8 sections)
Responsive: desktop-first (1440px)
Provide 3 variations as Tweaks. Vary across visual intensity:
- Variation 1: Restrained, more whitespace, fewer collage elements, let typography dominate
- Variation 2: Balanced, reference design fidelity, equal weight between type and collage
- Variation 3: Dense, maximum collage layering, more annotation cards, more overlap, more texture
```
