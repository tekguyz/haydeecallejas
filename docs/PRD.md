# PRD & Technical Roadmap — Haydee Callejas Phase 1 Campaign Site
For: TEKGUYZ Engineering | Client context lives in the Client — Haydee Callejas project; this doc is implementation-facing.

## 1. Purpose
Replace "message me on WhatsApp and hope I reply" with a real, mobile-first product showcase that routes directly into a pre-filled WhatsApp conversation per product. Phase 1 fix for lost sales — not a full e-commerce build.

**Status: built, deployed, live at `www.haydeecallejas.com`, and client-approved** (Haydee has seen and approved the site in person).

## 2. Non-Goals (explicit, so scope doesn't creep)
- No payment processing (Phase 4 territory, if it ever happens — Haydee has expressed future interest in a full-catalog site, not committed/scheduled)
- No user accounts, cart persistence, or order history — the multi-product cart being added (Section 7) is a session-only selection that feeds a single WhatsApp handoff message; it does not persist across visits and creates no account/order record
- No CMS/admin panel — content changes happen via code edits (14 fixed products, low change frequency)
- No backend server — Vercel-native rendering used only for `next/image` optimization

## 3. Users & Context
- **Primary audience:** existing Instagram/Facebook followers in Nicaragua (12.8K on Instagram), following a campaign post/story link.
- **Device reality:** 80%+ mobile, variable connection speed — confirmed via throttled Lighthouse testing; hero video load time under "4G Slow" conditions was a real finding (Speed Index 11.6s), though typical Nicaraguan 4G (Claro/Tigo in Managua/Granada/León, 15-30 Mbps) performs much better than that worst-case simulation. A poster-frame/compression mitigation for the hero video was flagged — confirm status before considering this fully closed.
- **Language:** Spanish primary; English not required for v1.

## 4. Stack
- **Framework:** Next.js (App Router), Vercel-native rendering (not static export).
- **Styling:** Tailwind CSS.
- **Hosting:** Vercel, custom domain `haydeecallejas.com` (apex 308-redirects to `www`, which serves the site). `metadataBase`, canonical, and OG URLs all point to the `www` host deliberately.
- **Images:** `next/image`, Vercel Image Optimization API.
- **No database, no CMS, no auth.**

## 5. Content Inventory
- 14 product stills (in active use — site + OG image)
- 4 hero zoom videos (1 in active site use; other 3 are campaign/social assets)
- 2 texture macro videos (campaign/social assets only)
- 1 existing 51-second highlight video (campaign/social asset only)
- Logo: 4 static variants + 2 animated versions, 6 logo files total. Exact use-case mapping (2026-07-17): `cover-light-bg.png` / `cover-dark-bg.png` (icon + wordmark, 1760×1760) → on-site header/footer logo; `profile-light-bg.png` / `profile-dark-bg.png` (icon-only, 1760×1760) → favicon set, OG share-image logo element, and social profile pictures (dark-bg icon also now used as Instagram profile photo; rollout to other platforms in progress)
- Lifestyle/in-use shots: in active production (Veo3/Nano Banana Pro/Pomelli) for the Instagram campaign; not yet finalized for on-site use
- Google Photos campaign asset library now holds 49 files total (the 6 logo files above plus campaign photos/videos) — see `brand-kb.md` Section 6

## 6. Product Data Model
```
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
```
4 Product entries, 14 total Variants (3 + 4 + 5 + 2). Descriptions and names are locked — see `brand-kb.md` Section 9. "Telefonera" was renamed "Telefonera cuero" and two descriptions (crossbody, Cartera corazón) were reworded — purely to fix mobile grid alignment (title/description line-wrap consistency across all 4 cards), not a content or material change. `flatlayUrl` field was removed entirely (never rendered; collage format didn't work at thumbnail scale).

## 7. Page Structure — current
1. **Header** — logo (`cover-light-bg.png`, 80px), Instagram and Facebook icon links.
2. **Hero** — full-bleed compressed product video (`hero-heart-web.mp4`, 604KB), dark scrim at 55% opacity (measured contrast 6.39:1, above 4.5:1 AA floor), eyebrow/headline/subhead/Instagram-trust-line stack from `lib/siteCopy.ts`.
3. **Product grid** — 4 cards, tap-to-enlarge lightbox, name, description, price, swatches (4 visible + "+N" overflow tile). Fixed/reserved heights on title, description, and swatch-row zones ensure price and CTA button positions stay pixel-aligned across all 4 cards regardless of content length — must be preserved if any product content changes in the future.
4. **Per-product CTA** — WhatsApp deep link, button text "Me interesa" (changed from "Consultar," which read too formal/legal in Spanish), forced single-line via `white-space: nowrap`. **In progress:** a multi-product cart, letting a user select more than one product/color before contacting WhatsApp — once built, one WhatsApp send itemizes every selected product (name, color, price) plus a total, rather than a separate message per card. Card-level selection UX and whether "Me interesa" remains the button copy at cart level are still to be worked out.
5. **Footer** — logo (`cover-dark-bg.png`, 96px), Instagram → Facebook → phone → email.
6. **Metadata** — title/description, OG + Twitter Card tags, 1200×630 OG share image (red heart-bag product photo + logo/headline composite), full favicon set, `@vercel/analytics`. `<meta name="theme-color">` set to match the light/canvas header background (`#ffffff`) via Next.js App Router's `viewport` export — confirmed correct in code/preview; a real-device check (Pixel 9a) showed a possible minor discrepancy, may be an Android theme-color platform quirk rather than a code bug, worth a follow-up if it recurs. **SEO update — done (2026-07-16):** `<title>` changed from `"Haydee Callejas — Liquidación de Medio Año"` (repeated the brand name already in OG `siteName`) to `"Cuero Genuino & Pieles Exóticas — Liquidación de Medio Año"`, leading with category language instead (`lib/siteCopy.ts`). Meta description confirmed correctly wired: `siteCopy.meta.description` flows through `Metadata.description` in `app/layout.tsx` into Next.js's generated `<meta name="description">` tag on the rendered page — verified in browser, not just present in source. **Under consideration, not yet scheduled:** JSON-LD structured data — Product schema per item, Organization/LocalBusiness schema for the brand — to improve search result appearance; LocalBusiness/address fields should stay consistent with whatever GBP listing eventually gets created (Section 10). **Favicon/OG rebuild — done (2026-07-17):** favicon set (`app/favicon.ico` 32×32, `app/icon.png` 512×512, `app/apple-icon.png` 180×180) regenerated from `public/images/profile-dark-bg.png` — `.ico` hand-built as a minimal PNG-in-ICO container, no ICO-encoder library was available in the project. OG share image (`public/images/og-image.jpg`) rebuilt in code (same layout: `heart-red.jpg` product photo left, `#0a0a0a` panel right) with the icon element replaced by a chroma-keyed, trimmed crop of `profile-dark-bg.png` for a clean edge against the panel background. **Known issue:** `profile-dark-bg.png` has a faint gray smudge artifact in the upper-right of the frame, present in the source file itself and therefore inherited by the regenerated favicon/OG assets — not a processing bug, left untouched pending a TEKGUYZ/client decision on a corrected source.

## 8. Design Direction
- Ink/canvas palette with WhatsApp-green as the single accent (confirmed stable, settled — not open for revisit).
- Playfair Display serif for the hero headline; Geist sans elsewhere (settled).
- Mobile-first, confirmed via real-device testing (Pixel 9a) at multiple points, not just dev-tools resize.

## 9. Build Sequence — complete
All 8 original steps (project setup through mobile QA and domain pointing) are done. Site is live and client-approved. Ongoing work is now maintenance/refinement (layout alignment fixes, copy polish, domain/email infra) rather than initial build.

## 10. Resolved / Ongoing
- EmailJS, palette/type, Vercel domain switch, flatlayUrl, custom domain — all resolved, see `brand-kb.md` for detail.
- Business email — resolved: Google Workspace live under `haydeecallejas.com`, billing identity verification complete.
- **Ongoing:** `haydeecallejas.net` retirement (decision made by client, execution pending).
- **Ongoing:** WHOIS transfer to client's name (domain admin remains with TEKGUYZ).
- **Ongoing:** exact scope of one additional site element Haydee requested — undefined, needs a direct follow-up conversation before any work starts.
- **Ongoing:** GitHub remote connected (`github.com/tekguyz/haydeecallejas`) — commits now pushed there; `git push` is a manual step after committing, not automatic.
- **Pending:** GBP (Google Business Profile) listing — blocked on client confirming showroom type (standalone location / shared-consignment space, possibly tied to "Shap Collective Store" / by-appointment-only). Do not create the listing before this is confirmed.
- **In progress:** multi-product cart (Section 7, item 4).
- **Resolved (2026-07-16):** SEO/metadata update — new page title, meta description confirmed correctly wired (Section 7, item 6). Footer contact email corrected from `hc@haydeecallejas.net` to `hc@haydeecallejas.com` in `lib/siteCopy.ts`, matching the live Google Workspace address. Facebook icon link added to header and footer alongside Instagram (`https://www.facebook.com/haydeecallejas/`); Threads was intentionally held off for now.
- **Resolved (2026-07-17):** header/footer logo files replaced with the new `cover-light-bg.png` / `cover-dark-bg.png`; favicon set and OG share image regenerated from `profile-light-bg.png`/`profile-dark-bg.png` (Section 5, Section 7 item 6).
- **Pending:** decision on whether to get a corrected source file for `profile-dark-bg.png` (visible smudge artifact, see Section 7 item 6) — not blocking, flagged for TEKGUYZ/client judgment call.
- **Under consideration:** JSON-LD structured data — Product + Organization/LocalBusiness schema (Section 7, item 6).
