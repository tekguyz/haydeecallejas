# PRD & Technical Roadmap — Haydee Callejas Phase 1 Campaign Site
For: TEKGUYZ Engineering | Client context lives in the Client — Haydee Callejas project; this doc is implementation-facing.

## 1. Purpose
Replace "message me on WhatsApp and hope I reply" with a real, mobile-first product showcase that routes directly into a pre-filled WhatsApp conversation per product. This is the Phase 1 fix for lost sales — not a full e-commerce build, no payment processing, no backend, no database.

## 2. Non-Goals (explicit, so scope doesn't creep)
- No payment processing (Nicaragua-compatible processor research is a separate, later task — Phase 4 territory)
- No user accounts, cart persistence, or order history
- No CMS/admin panel — content changes happen via code edits for now (14 fixed products, low change frequency)
- No backend server — no custom API routes/database; Vercel-native rendering is still used for `next/image` optimization (see Section 4)

## 3. Users & Context
- **Primary audience:** existing Instagram/Facebook followers in Nicaragua, following a campaign post/story link
- **Device reality:** 80%+ mobile, likely variable connection speed — mobile performance is a hard constraint, not a nice-to-have
- **Language:** Spanish primary (client and audience are Nicaraguan); English not required for v1

## 4. Stack
- **Framework:** Next.js (App Router), Vercel-native rendering (not static export) — dropped `output: 'export'` on 2026-07-08 so `next/image` can use Vercel's built-in Image Optimization API instead of shipping unoptimized full-size originals. Site is not portable to a plain static host (Netlify, S3) without revisiting this decision.
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (required, not optional — see rendering note above)
- **Images:** `next/image` for automatic responsive sizing/lazy-loading, using Vercel's Image Optimization API — critical given asset count and mobile bandwidth constraints
- **No database, no CMS, no auth**

## 5. Content Inventory (already produced — see Client project file 02, Sections 11–13 for full detail)
- 14 product stills (one per color/style variant across 4 product lines)
- 4 flat-lay images (one per product line, showing full color range)
- 2 texture macro videos
- 4 hero zoom videos (one per product line)
- 1 existing 51-second highlight video (audio + silent versions)
- Logo: light-bg and dark-bg versions, static + animated

## 6. Product Data Model
Static data, no database — a single structured file (`products.ts`) is sufficient:

Product {
  id: string
  name: string
  description: string
  price: number
  variants: Variant[]
}

Variant {
  colorLabel: string
  imageUrl: string
}

4 Product entries, 14 total Variants (3 + 4 + 5 + 2). Descriptions are locked — see Client brand-kb.md Section 9. A `flatlayUrl` field existed briefly for a collage-style lead image but was removed 2026-07-09 — the collage format doesn't work compressed to a card-thumbnail size (too much visual information at too small a scale), so it was never actually rendered; the field, data, and 4 source images were all deleted (backed up externally).

## 7. Page Structure (single page, no routing needed) — current as of 2026-07-09
1. **Header** — logo (light-bg version, 80px), Instagram icon link only. No "Contact" nav item (removed — footer covers contact comprehensively).
2. **Hero** — full-bleed compressed product video (`hero-heart-web.mp4`, 604KB — swapped from the crossbody video 2026-07-09) with dark scrim at 55% opacity (bumped from 40% the same day — verified via actual pixel-sampling + WCAG contrast math across multiple points in the video's playback, not just eyeballed, minimum contrast now 6.39:1, comfortably above the 4.5:1 AA floor), eyebrow/headline/subhead/Instagram-trust-line stack, all text sourced from `lib/siteCopy.ts`. Not the original 51-second highlight video (swapped out earlier, later removed from the repo — see Section 13).
3. **Product grid** — 4 product cards; each shows a tap-to-enlarge lead image (full-screen lightbox, closes via tap-outside/X/Escape), name, description, price, and color variants as swatches — up to 4 real swatches shown, a 5th+ variant collapses into a "+N" tile (N = true remaining count) that expands to show the rest on tap. Card-height alignment across a grid row is handled by CSS Grid's row stretch + `margin-top: auto` on the CTA, which holds regardless of how many swatch rows a card's content wraps to — verified by exact pixel measurement, not assumption.
4. **Per-product CTA** — WhatsApp deep link button, pre-filled message including product name + selected color + price: `https://wa.me/50589000408?text=` + URL-encoded "Hola, me interesa [product name] en [color] ($[price])". This is the card's *only* action — the per-product `mailto:` link described in earlier revisions of this doc was removed 2026-07-09 (it duplicated a channel that belongs once, in the footer, not four times per page).
5. ~~Backup contact form~~ — no standalone form, no EmailJS. Backup contact (Instagram, phone, `mailto:hc@haydeecallejas.net`) now lives once in the footer, not per-product (see item 6).
6. **Footer** — logo (dark-bg version, 96px), brand name, then Instagram → phone → email in that order (Instagram leads as the highest-trust/highest-traffic channel; phone ranks above email since it's a genuinely different action — a real call — from the WhatsApp CTA; email last since this audience is WhatsApp-native).
7. **Metadata** — page title/description, Open Graph + Twitter Card tags, a dedicated 1200×630 OG share image (composited: product photo + logo + headline, not a stretched product still), and a full favicon set (`.ico`, `icon.png`, `apple-icon.png`) — all sourced from `lib/siteCopy.ts` where applicable. `@vercel/analytics` installed and mounted for pageview tracking.

## 8. Design Direction (from Client project file 02, Section 5)
- Warm off-black / cream palette, not pure black/white — pure contrast reads "tech landing page," not leather goods
- One accent color max, pulled from product photos (violet/magenta or orange are candidates), used sparingly (e.g. WhatsApp CTA button only)
- Typography: pick one direction — clean serif ("atelier" feel) or high-contrast sans ("modern minimalist") — don't mix both for headlines
- Mobile is the primary design target, not an adapted afterthought — build and test mobile viewport first

## 9. Build Sequence (phase-gate discipline applies)
1. Set up Next.js project (App Router, Vercel-native rendering), Tailwind, deploy pipeline to Vercel preview URL
2. Build product data model + product grid with placeholder styling — verify data/layout logic works before design polish
3. Apply real design direction (palette, type, spacing)
4. Wire up WhatsApp deep links — test the pre-filled message actually opens correctly on a real mobile device, not just desktop browser
5. Wire up backup contact — originally a per-product `mailto:` link, later consolidated into a single footer contact block (Section 7, items 5–6); no form, no EmailJS either way
6. Integrate media (hero video, product images, texture/lifestyle clips where used)
7. Mobile QA pass — real device testing, not just responsive dev-tools resize, given the 80%+ mobile stat is load-bearing for this whole approach
8. Present to TEKGUYZ for review → present to Haydee for approval (gate) → point `haydeecallejas.com` at it

## 10. Open Questions Before Build Starts
- ~~EmailJS account setup~~ — resolved 2026-07-08: no EmailJS anywhere, backup contact is a footer-level link (Section 7, items 5–6).
- ~~Confirm final palette/type choice~~ — resolved: ink/canvas/whatsapp-green palette, Playfair Display serif, stable across many rounds.
- Lifestyle shots (4, not yet produced) — decide whether to block launch on these or ship without and add later
- ~~Vercel domain switch~~ — resolved 2026-07-09: interim live URL was `haydeecallejas.vercel.app`, changed via Settings → Domains (delete old + add new) — not a project rename, that's a separate action that doesn't move domains on its own. Since superseded by the custom domain below.
- ~~`flatlayUrl` dead field~~ — resolved 2026-07-09: removed entirely (field, data, source images) — see Section 6.
- ~~Custom domain~~ — resolved 2026-07-09: `haydeecallejas.com` purchased and connected via Vercel, canonical URL is `https://www.haydeecallejas.com` (apex redirects there). `metadataBase` in `app/layout.tsx` updated to match.