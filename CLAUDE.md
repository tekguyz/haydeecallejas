# CLAUDE.md — Haydee Callejas Phase 1 Campaign Site

## What this is
A Next.js site for a mid-year clearance campaign — 4 leather/exotic-material products, 14 color/style variants total. No CMS, no database, no payment processing. Primary conversion path is a WhatsApp deep link per product. Backup contact (Instagram, phone, email) lives once in the footer — changed 2026-07-09, no longer a per-product `mailto:` link on each card (that was consolidated to reduce clutter).

Live at `https://www.haydeecallejas.com` — custom domain purchased on GoDaddy and connected 2026-07-09 (DNS pointed at Vercel, added as the Vercel project's custom domain and set as production target). The apex `haydeecallejas.com` 308-redirects to `www.haydeecallejas.com`, which is what actually serves the site — `metadataBase` in `app/layout.tsx` points at the `www` host for that reason, not the apex. The old `haydeecallejas.vercel.app` URL still resolves (Vercel keeps it live alongside custom domains) but is no longer the canonical address anywhere in the code. This is **separate** from `haydeecallejas.net`, which is a different domain used for the client's existing email — do not touch its DNS/email records (see `docs/brand-kb.md` Section 3a).

Prior to the custom domain, the site briefly lived at `https://haydeecallejas.vercel.app` (2026-07-09 domain swap, itself not a project rename — renaming a Vercel project does not automatically move or create domains; that swap replaced an even earlier `haydee-callejas-site.vercel.app`, now 404s). This project is now a local git repository (`git init` run 2026-07-09) with history starting from an initial commit capturing that working state.

Full requirements: see `docs/PRD.md`. Brand voice/visual direction: see `docs/brand-kb.md`. Read both before writing any code.

## Stack (non-negotiable for this build)
- Next.js, App Router, deployed on Vercel — runs Vercel-native (not a static export). Changed 2026-07-08: originally `output: 'export'`, dropped so `next/image` can use Vercel's built-in Image Optimization API (on-demand resize/compress) instead of shipping unoptimized full-size originals. This means the site is no longer portable to a plain static host (Netlify, S3, etc.) without revisiting this decision.
- Tailwind CSS
- `next/image` for all product/logo images — required given asset volume and mobile-first, bandwidth-constrained audience (80%+ mobile users in Nicaragua)
- No CMS, no auth, no database — product data lives in a single static `products.ts`/`.json` file

## Working discipline (same phase-gate standard as the TEKGUYZ CRM project)
Build → present to TEKGUYZ for review → verify in browser (mobile viewport primary, not desktop) → get explicit confirmation → proceed to next step. Do not silently chain multiple build steps together and present them all at once — checkpoint after each numbered step in `docs/PRD.md` Section 9.

## Critical constraints
- **Mobile-first is a hard requirement, not a default responsive afterthought.** Build and test the mobile viewport first; treat desktop as the adapted view.
- **Price is shown on-page for every product** — this is a clearance campaign, not an exclusive drop; hiding price recreates the exact friction this site exists to remove.
- **Spanish is the primary language** for all client-facing copy on this site.
- **WhatsApp deep link format:** `https://wa.me/50589000408?text=` + URL-encoded message including product name, selected color, and price. Test on an actual mobile device that the pre-filled message opens correctly — desktop browser testing isn't sufficient here.
- Brand voice avoids urgency clichés and exclamation-heavy copy — see `docs/brand-kb.md` Section 4 before writing any on-site copy.

## Known open items (don't silently resolve these — flag back to TEKGUYZ)
- ~~Final color palette/typography choice not yet locked~~ — resolved: ink/canvas/whatsapp-green palette and Playfair Display serif have been live and stable across many rounds now (see `DESIGN.md`, itself due for a refresh — several rounds of visual changes since it was last touched).
- Lifestyle/in-use product shots (4 needed) not yet produced — site should be built to accommodate them being added later without a restructure, not blocked waiting on them now
- ~~Vercel domain switch~~ — resolved 2026-07-09, see note above (not a project rename — that's a separate action that doesn't move domains on its own).
- ~~Custom domain (`haydeecallejas.com`)~~ — resolved 2026-07-09, see note above. Canonicalized to `www.haydeecallejas.com` since the apex redirects there rather than serving content directly.
- ~~`flatlayUrl` dead field~~ — resolved 2026-07-09: removed from the `Product` type, `products.ts` data, and the repo (4 flat-lay images deleted, confirmed backed up in Google Photos by the client).