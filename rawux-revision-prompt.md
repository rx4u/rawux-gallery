# Raw UX Portfolio — Revision Prompt

Paste this into the existing Claude Design session.

---

```
Revise the current Raw UX portfolio design with the following changes. Keep the design system, typography, colors, annotation card patterns, and collage composition style exactly as they are.

## Core positioning shift

Raw UX ships MVPs in 21 days. 3 weeks. That is the core offer. The site should be structured around this promise. Every section either states the promise, explains how it works, proves it with shipped work, or invites the visitor to start.

The identifier line next to the R / U monogram everywhere it appears:
WE DESIGN . BUILD . SHIP

## Structural change

Remove Section 3 (Experience / "Twenty years of building what matters"). Delete entirely. No career timeline, no company names, no role titles.

Page is now 7 sections. Renumber all pagination labels:
1. Hero (no pagination label)
2. Philosophy (2 OF 7)
3. Selected Work (3 OF 7)
4. Process (4 OF 7)
5. Capabilities (5 OF 7)
6. Tools (6 OF 7)
7. Contact + Intake (7 OF 7)

## Global copy rules

- Replace every "I" with "we", "my" with "our". The site speaks as a team.
- Remove all location references. No "HYDERABAD, INDIA" or any city. Delete everywhere.
- Remove any individual person's name. No "Raja", no "About Raja", no personal name links.
- Replace "DESIGN STUDIO" with "WE DESIGN . BUILD . SHIP" everywhere.
- No em dashes anywhere in the copy.

## Section-by-section

### Section 1: Hero
- Eyebrow: red dot + "DESIGN. AI. PRODUCT. LEADERSHIP." in monospace.
- Display headline: Rework to lead with the 21-day promise. Something in the spirit of "Your MVP. Shipped in 21 days." or "From idea to shipped product in 21 days." Find the version that fits the Fraunces display scale and the manifesto tone of the existing design. End with terracotta period.
- Subtext: One line grounding the promise. We design, build, and deploy production products in 3 weeks. Not mockups. Not concepts. Shipped.
- CTAs: "See the work" (filled terracotta pill), "Start your 21 days" (outlined pill).
- Studio identifier bottom-left: R / U monogram + "WE DESIGN . BUILD . SHIP" in monospace. No location.
- Collage zone on right: no changes to the visual composition.

### Section 2: Philosophy (2 OF 7)
- Rework the headline to connect craft philosophy to the speed promise. The point: we ship fast because we think clearly, not because we cut corners.
- Subtext: Connect design rigor to delivery speed. Clear thinking produces fast shipping. The 21 days work because the process is tight, not because corners are cut.
- Four pillars: Keep Design Systems, AI Product Design, Design Leadership, Full-Stack Craft. Update all descriptions to "we" voice.
- Keep all annotation cards and collage elements.

### Section 3: Selected Work (3 OF 7)
- Headline: "Shipped." with terracotta period. Or "What we shipped." Simple. The work proves the promise.
- Subtext: "Products we designed, built, and deployed. Not concepts. Not mockups. Live and running."
- Keep the asymmetric card layout, numbered indices, annotation cards.
- No changes to the visual composition.

### Section 4: Process (4 OF 7)
- Headline: "How we ship in 21 days." with terracotta period.
- Subtext: "Three weeks. From first conversation to deployed product."
- Annotation card top-right: "METHOD / IDEA TO DEPLOYED IN 21 DAYS"
- The phases should map to the 3-week timeline. Either 3 panels (one per week) or keep 4 panels splitting Week 1 into Discover and Design. Choose whichever reads better visually:
  - **Week 1: Discover + Design** — Research, decisions, and rapid prototyping. We understand the problem and design the solution in the first 7 days.
  - **Week 2: Build** — Production code. Real data. Integrations. The product takes shape.
  - **Week 3: Ship** — Polish, review, deploy. Live on day 21.
- Keep red dot markers and terracotta arrow links.

### Section 5: Capabilities (5 OF 7)
- Dark background section.
- Headline: "What we ship." with terracotta period.
- Six capability cards on dark green, framed as what clients can bring:
  - AI Product Design: "Interfaces for LLMs, agents, and intelligent workflows."
  - SaaS Platforms: "Dashboards, admin panels, and data-dense products."
  - Landing Pages: "Narrative-driven pages that convert intent into action."
  - Mobile Apps: "Touch-native experiences from onboarding to retention."
  - Design Systems: "Scalable foundations that keep products coherent at scale."
  - Marketplaces: "Multi-sided platforms with booking flows and role-based experiences."
- Keep monospace labels, dark green cards, terracotta annotations.

### Section 6: Tools (6 OF 7)
- Headline: "The stack behind the speed." with terracotta period. Or "Why 21 days is possible."
- Keep the two rows of tool pills (Design: Figma, Claude Design, Framer. Engineering: Next.js, Supabase, Tailwind, Vercel, Claude Code, Claude API).
- Annotation card: "MODERN STACK / IDEA TO PRODUCTION IN 21 DAYS"

### Section 7: Contact + Intake Form (7 OF 7)
- Dark background (#1E1E1E).
- Two-part layout: CTA on the left, intake form on the right.

**Left side (40%):**
- Pagination: "CONTACT 7 OF 7" in monospace with terracotta number.
- Display headline: "Start your 21 days." with terracotta period. Cream text.
- Subtext: "Tell us what you want to build. We get back within 24 hours."
- Below subtext: hello@rawux.studio (underlined, cream text) as fallback.
- Social links: DRIBBBLE  LINKEDIN  X (monospace, spaced, muted cream).

**Right side (60%):**
- A client intake form on a dark surface card (#2D2D2D or slightly lighter than background). No border radius on the card.
- Form title: red dot + "PROJECT BRIEF" in monospace.

**Form fields (6 fields):**

1. YOUR NAME
   - Single line text input
   - Transparent background, bottom border only (muted cream), cream text

2. EMAIL
   - Single line text input
   - Same styling

3. WHAT ARE WE BUILDING?
   - Textarea, 3 rows
   - Placeholder in muted text: "An AI dashboard, a SaaS platform, a marketplace..."

4. PRODUCT TYPE
   - Selectable pills (not a dropdown). Options: WEB APP / MOBILE APP / LANDING PAGE / DASHBOARD / MARKETPLACE / OTHER
   - Pill styling: outlined in muted cream, terracotta fill on selected state. Monospace text. Multiple selection allowed.

5. BUDGET RANGE
   - Selectable pills. Options: $3K-5K / $5K-10K / $10K-20K / $20K+
   - Same pill styling. Single selection.

6. TIMELINE
   - Selectable pills. Options: ASAP / THIS MONTH / NEXT MONTH / EXPLORING
   - Same pill styling. Single selection.

**Submit button:**
- Full width across the form card
- Filled terracotta pill
- Text: "Send brief"
- Below button in small muted monospace: "We respond within 24 hours."

**Form design rules:**
- No rounded corners on the form card or inputs. 0px radius. Only the submit button and selectable pills get pill rounding.
- Labels: JetBrains Mono, uppercase, wide tracking, muted cream.
- Input text: Public Sans, regular weight, cream.
- Bottom-border-only inputs on transparent background. No boxed fields.
- The form should feel like part of the dark annotation card aesthetic, not a generic contact form.

**Footer (below form):**
- Thin muted divider line full width.
- Left: R / U monogram + "RAW UX / WE DESIGN . BUILD . SHIP" in monospace. No location.
- Right: "© 2026 RAW UX"

## Do not change
- The design system, typography, colors, or annotation card visual style
- The collage composition patterns
- The R / U monogram design
- The terracotta period on headlines
- The overall page rhythm (cream sections alternating with dark sections)
- Any visual element that is already working

## Variations
Provide 3 variations as Tweaks:
- Variation 1: The 21-day promise is present but understated. Mentioned in the hero and contact, implied elsewhere. The work and craft speak louder than the timeline.
- Variation 2: The 21-day promise is the clear throughline. Every section connects back to it. Balanced between promise and proof.
- Variation 3: The 21-day promise is bold and dominant. "21" gets large typographic treatment as a visual element. The number becomes part of the design language alongside the annotation cards.
```
