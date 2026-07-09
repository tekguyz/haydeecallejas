# Haydee Callejas — DESIGN.md

## Overview
A near-monochrome luxury retail surface — black-and-white canvas matching Haydee's existing Instagram/Facebook brand equity, with a single orange accent sampled from the actual product photography (not a generic web orange). Clean serif display type (atelier feel) paired with a simple sans for body text. Component voltage comes from **real product photography shown at full fidelity inside cards** — not illustrations, not stock imagery. The system reads as confident and restrained: sharp edges, hairline borders, minimal shadow. Softness and heavy rounding are avoided deliberately — they read as consumer-app-friendly, not premium.

## Colors
### Brand & Accent
- **Ink** (`{colors.ink}` — #0a0a0a): Primary text, headlines, default button background. Near-black rather than pure `#000` — slightly warmer, avoids the harshness of true black on screen.
- **Canvas** (`{colors.canvas}` — #ffffff): Default page floor.
- **Accent** (`{colors.accent}` — #b8371f, sampled 2026-07-08 from `public/images/products/telefonera1-orange.jpg`; averaged pixel color across three crops of the bag's front leather panel, all converging within a few hex steps of each other): Revised 2026-07-08 — no longer used as any button's main fill. The warm orange blended into the warm-toned product photography instead of contrasting it, so it was demoted to a single small detail: the WhatsApp glyph inside the CTA button. Never a background fill, never a swatch-selection color.
- **Accent Active** (`{colors.accent-active}` — #972d19, accent darkened ~18%): Slightly darker/deeper shade of accent for press states.

### Surface
- **Surface Dark** (`{colors.surface-dark}` — near-black, matches `{colors.ink}`): Footer background and any inverted section — the deliberate dark moment, used sparingly, same logic as Cal.com's footer-only-dark rule.
- **Hairline** (`{colors.hairline}` — #e5e5e5): 1px borders on cards, inputs, dividers. No drop shadows as the default elevation method — hairlines do the separation work instead.

### Text
- **Ink** — headlines and primary text (see above).
- **Body** (`{colors.body}` — #3a3a3a): Running text, product descriptions.
- **Muted** (`{colors.muted}` — #767676): Captions, secondary labels, color-name text under swatches.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the dark footer/inverted sections.

## Typography
### Font Family
- **Display (headlines):** a clean serif — Fraunces, Playfair Display, or Cormorant (self-hosted, static-export compatible). Used for h1/h2/h3 and the campaign headline only.
- **Body/UI:** a simple, highly legible sans (Inter or similar) — product names, descriptions, buttons, nav, captions. Never set body copy in the serif — hurts readability at small sizes on mobile.

### Hierarchy
| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-lg}` | 40px | 500 | Campaign hero headline — serif |
| `{typography.display-md}` | 28px | 600 | Section heads — serif; also the hero campaign-hook line ("Liquidación de medio año"), set in sans/uppercase, not serif — it's the hook, not the headline, so it borrows the size without borrowing the typeface |
| `{typography.title-md}` | 18px | 600 | Product card titles — sans |
| price (card) | 20px | 700 | Product price — sans, bolder and larger than the card title. Price is the decision-driver in a clearance context and should outweigh the product name |
| `{typography.body-md}` | 16px | 400 | Product descriptions, running text — sans |
| `{typography.caption}` | 13px | 500 | Color/variant labels under swatches — sans |
| `{typography.button}` | 15px | 600 | CTA button labels — sans |

### Principles
Serif is the brand voice for headlines only — the boundary is strict, same as Cal.com's Cal Sans/Inter split. Never put product descriptions or button text in the serif.

## Layout
### Spacing System
- Base unit: 4px. Section padding: 64px (tighter than Cal.com's 96px — this is a single-page campaign site, not a long-scroll marketing site, so the rhythm is more compact).
- Card internal padding: 20px.
- Gutters: 16px between product cards in the grid.

### Grid & Container
- Max content width: ~1100px centered.
- Product grid: 2-up mobile, 4-up desktop (already built in Step 2) — **this is the primary layout, design mobile-first given 80%+ mobile audience**, not desktop-first with a mobile fallback.

## Elevation & Depth
| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, hero |
| Hairline | 1px `{colors.hairline}` border | Product cards, inputs |
| Subtle | Faint shadow only on the active/selected swatch state | `0 1px 3px rgba(0,0,0,0.08)` — the only shadow in the system |

No heavy shadows, no glassmorphism, no soft neumorphic cards — restraint is the luxury signal here, same principle as the brand-voice rule against exclamation-heavy copy.

## Shapes
### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Product photography containers — sharp edges read premium |
| `{rounded.sm}` | 4px | Buttons, inputs — just enough to soften without looking "appy" |
| `{rounded.md}` | 8px | Cards (max radius in the system) |
| `{rounded.full}` | 50% | Color swatches only — circular, same as Cal.com's avatar treatment |

Deliberately capped at 8px — no `xl`/pill shapes. Heavy rounding is the one thing most directly borrowed-and-rejected from Cal.com's friendly-SaaS language; it reads wrong here.

## Components
**`product-card`** — White background, hairline border, `{rounded.md}`, no shadow at rest. Product image is edge-to-edge within the card (no internal padding around the photo — padding applies only to text below it). Color swatches as small circles (`{rounded.full}`) below the image; selected swatch gets a `{colors.ink}` ring with the subtle shadow (accent is reserved for the CTA only, never the swatch state).

**`whatsapp-cta`** — Background `{colors.ink}` (revised 2026-07-08, was accent — orange blended into the warm product photography instead of contrasting it), text white, `{typography.button}`, `{rounded.sm}`, no border, single line ("Consultar" + a small WhatsApp glyph, 16px, to the left of the label). Press state shifts to `{colors.ink}` at reduced opacity. The WhatsApp glyph is rendered in `{colors.accent}` — the only accent-colored element on the card now, a small detail rather than a fill. Pinned to the bottom of the card via `margin-top: auto` inside a flex column, so CTA rows align across cards regardless of how many swatch rows a product wraps to. Revised again 2026-07-08: this is now the card's *only* action — the per-product `mailto:` link was removed (it duplicated a channel that belongs once, in the footer, not four times per page, and was causing mobile wrapping/clutter). Full-width within the card's padding.

**`campaign-hero`** — Full-width hero using the highlight video (silent, autoplay-muted, looping) as background, serif headline overlaid, generous padding for mobile legibility over video motion.

**`footer`** — Inverted `{colors.surface-dark}` background, logo (dark-bg version, doubled to 96px 2026-07-08 — was undersized against the surrounding whitespace), `{colors.on-dark}` text. Now the site's single comprehensive contact block (revised 2026-07-08, consolidated off the product cards and the header): icon + label per line, in order — Instagram (`@haydeecallejas`, highest-trust/highest-traffic channel, leads), phone (`tel:+50589000408`, a genuinely different action from the WhatsApp CTA — a real call, not a message), email (`mailto:hc@haydeecallejas.net`, last — this audience is WhatsApp-native and unlikely to reach for it first).

**`header`** — Logo (light-bg version, doubled to 80px 2026-07-08) on the left, Instagram icon link only on the right (revised 2026-07-08 — the "Contacto" text link was removed as redundant now that the footer covers contact comprehensively).

**`social-proof`** — Instagram is a real, tappable link (`instagram.com/haydeecallejas`) everywhere it appears, never bare text: an icon link in the header and footer, plus a follower-count trust line under the hero subhead (`+12.8K seguidores en Instagram avalan su trabajo`). States a fact plainly — no urgency framing, consistent with `brand-kb.md` §4's restraint rule.

## Do's and Don'ts
### Do
- Keep orange as the only accent color, and pull its exact value from real product photography, not a generic swatch.
- Use real product photography edge-to-edge in cards — never illustration, never stock imagery.
- Keep the serif strictly to headlines; sans everywhere else.
- Test the accent color's contrast on both white and black backgrounds before finalizing.

### Don't
- Don't round corners beyond 8px anywhere in the system.
- Don't add a second accent color, even a "just this once" badge or highlight.
- Don't use drop shadows as a general elevation method — hairlines are the default separator.
- Don't set product descriptions or buttons in the serif typeface.

## Responsive Behavior
- **Mobile (<768px):** primary target, not an afterthought. 2-column product grid, hero headline sized for legibility over video, single-thumb-reachable CTA placement.
- **Desktop (≥1024px):** 4-column product grid, more breathing room, same components — no new components introduced at desktop only.

## Known Gaps
- ~~Exact accent hex not yet sampled from the product photo~~ — resolved, see `{colors.accent}` above.
- Re-verified 2026-07-08 after moving the CTA fill from accent to ink (computed via the WCAG relative-luminance formula, not estimated): white text on `{colors.ink}` background = 19.80:1 (passes AAA, well above the old accent pairing's 6.25:1). Accent now appears only as the WhatsApp glyph on the ink button — accent (#b8371f) against ink (#0a0a0a) = 3.40:1, clearing the 3:1 non-text UI minimum (no text-contrast minimum applies to a decorative icon).
- ~~Serif font choice narrowed to 3 candidates~~ — resolved: Fraunces.
- Animation/transition timing for swatch selection and video autoplay not yet specified — default to instant/no-transition until a deliberate choice is made.
