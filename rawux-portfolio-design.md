---
version: alpha
name: Raw UX Portfolio
description: Research studio meets design portfolio. Collage composition, editorial serif, monospace annotations, terracotta accent on warm cream.
colors:
  primary: "#1A1A1A"
  secondary: "#6B6560"
  tertiary: "#C0452A"
  neutral: "#F5F0E8"
  surface: "#FAF7F2"
  on-primary: "#FAF7F2"
  dark-surface: "#1E1E1E"
  dark-accent: "#2D3830"
  parchment: "#E8DFD0"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 5rem
    fontWeight: 400
    letterSpacing: "-0.02em"
    lineHeight: 1.0
  h1:
    fontFamily: Fraunces
    fontSize: 3rem
    fontWeight: 400
    letterSpacing: "-0.01em"
  h2:
    fontFamily: Fraunces
    fontSize: 2rem
    fontWeight: 400
  body:
    fontFamily: Public Sans
    fontSize: 1rem
    lineHeight: 1.65
    fontWeight: 400
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.7rem
    letterSpacing: "0.12em"
    textTransform: uppercase
    fontWeight: 400
  nav:
    fontFamily: Public Sans
    fontSize: 0.85rem
    letterSpacing: "0.06em"
    textTransform: uppercase
    fontWeight: 400
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  pill: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
    fontFamily: "{typography.body.fontFamily}"
    fontSize: 0.9rem
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.tertiary}"
    border: 1px solid {colors.tertiary}
    rounded: "{rounded.pill}"
    padding: 14px 28px
  card-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "#E5E5E5"
    rounded: "{rounded.sm}"
    padding: 24px
    fontFamily: "{typography.label.fontFamily}"
  annotation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    border: none
    padding: 16px
    fontFamily: "{typography.label.fontFamily}"
    fontSize: 0.7rem
---
## Overview

A research-studio portfolio aesthetic. Collage-driven composition with asymmetric layouts, torn paper textures, and mixed media zones. Editorial serif headlines at large scale with monospace annotations that add a lab-notebook quality. Single accent color (terracotta vermillion) used for CTAs, numbered indices, dots, and the period at the end of display headlines.

## Colors

- **Primary (`#1A1A1A`):** Headlines, body text, deep ink.
- **Secondary (`#6B6560`):** Captions, metadata, borders.
- **Tertiary (`#C0452A`):** The only accent. Terracotta vermillion. Used for CTAs, numbered indices, dot markers, the period on display headlines. Never used for backgrounds or fills larger than a button.
- **Neutral (`#F5F0E8`):** The warm cream page foundation.
- **Surface (`#FAF7F2`):** Cards and elevated surfaces.
- **Dark surface (`#1E1E1E`):** Data cards, experiment panels, dark annotation blocks.
- **Dark accent (`#2D3830`):** Dark green/forest overlay behind imagery, photographic backdrops.
- **Parchment (`#E8DFD0`):** Annotation card backgrounds, figure labels, sketch-paper zones.

## Typography

Three type families, each with a specific role:

- **Display / H1 / H2:** Fraunces. High-contrast variable serif. Used at massive scale (5rem+) for section headlines. Tight line-height (1.0). The headline IS the section, not a label above it.
- **Body / Nav:** Public Sans. Clean geometric sans. Used for descriptions, navigation, and supporting text.
- **Label / Annotation:** JetBrains Mono. Used for figure numbers ("fig. 07"), experiment labels ("EXPERIMENT 14"), confidence scores ("COHERENCE 0.78"), pagination ("2 OF 8"), and studio metadata. Always uppercase, wide tracking.

## Layout Principles

The layout is NOT a grid. It is a collage.

- **Split composition:** Left ~40% for typography (headlines, descriptions, CTAs). Right ~60% for visual collage (overlapping images, cards, annotations).
- **Overlap is intentional:** Elements cross boundaries. Images overlap. Cards sit on top of images. Torn paper edges create organic transitions between sections.
- **Z-depth matters:** Shadows are subtle (2-4px blur) but elements clearly layer. Annotation cards float above imagery. Dark data cards sit at a different plane than photography.
- **Numbered sections:** Use terracotta-colored numbers ("01", "02", etc.) as visual anchors. These appear above cards, at section breaks, and inline with column headers.
- **Red dots:** Small filled circles in tertiary color mark section transitions and act as visual punctuation.
- **The period:** Display headlines end with a period rendered in tertiary color. This is a signature element.

## Texture and Materiality

- Torn paper edges between sections (organic, not geometric dividers).
- Parchment/sketch paper textures behind annotation zones.
- Dark green (#2D3830) photographic backdrops.
- Monospace data panels with dark backgrounds showing metrics, scores, and signal labels.
- No gradients. No glass morphism. No blur effects. The texture comes from material photography and paper, not CSS effects.

## Do's and Don'ts

- **Do** use asymmetric, collage-style layouts. No two sections should feel identical.
- **Do** use the period-in-accent-color at the end of display headlines.
- **Do** include monospace annotation cards (dark bg, JetBrains Mono) with labels like "CONFIDENCE", "SIGNAL / NOISE", "COHERENCE".
- **Do** use numbered indices (01, 02, 03) in tertiary color as visual anchors.
- **Do** leave generous whitespace on the typography side while layering density on the collage side.
- **Don't** use a uniform grid. Columns should be unequal.
- **Don't** use any color besides tertiary as an accent. No blue, no purple, no amber/gold/warm yellow-orange.
- **Don't** use rounded corners on images or cards (0px border-radius everywhere except pill buttons).
- **Don't** use stock photography placeholders. Use solid color blocks, geometric shapes, or abstract textures.
- **Don't** center-align layouts. Left-aligned typography with right-heavy collage is the core pattern.
