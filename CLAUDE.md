# CLAUDE.md — Haydee Callejas Phase 1 Campaign Site

## What this is
A Next.js site for a mid-year clearance campaign — 4 leather/exotic-material products, 14 color/style variants total. No CMS, no database, no payment processing. Primary conversion path is a WhatsApp deep link per product. Backup contact (Instagram, Facebook, phone, email) lives once in the footer; Instagram and Facebook icon links also sit in the header.

Live at `https://www.haydeecallejas.com` — custom domain purchased on GoDaddy and connected 2026-07-09 (DNS pointed at Vercel, added as the Vercel project's custom domain and set as production target). The apex `haydeecallejas.com` 308-redirects to `www.haydeecallejas.com`, which is what actually serves the site — `metadataBase`, canonical tags, and OG URLs all point at the `www` host deliberately (canonicalizing to a URL that itself redirects rather than serves content is bad practice for crawlers/OG scrapers). The old `haydeecallejas.vercel.app` URL still resolves but is no longer canonical anywhere in the code.

**`haydeecallejas.net` is being retired** — previously used only for the client's existing email (`hc@haydeecallejas.net`). Haydee has decided not to renew it once her new business email is stable; she doesn't want to keep paying for it. Until it actually lapses, do not touch its DNS/MX records.

**Business email is live:** Google Workspace (Business Starter) under `haydeecallejas.com`. Billing/identity verification with Google is resolved — the payment method belongs to the client herself (confirmed via her national ID; a name-abbreviation mismatch triggered an automated fraud hold, since cleared through Google's standard verification flow).

**Domain administration:** WHOIS registrant contact is being updated to Haydee's legal name/info (previously TEKGUYZ's, while the domain was purchased on her behalf during her travel). TEKGUYZ retains admin/DNS access on her behalf going forward — she holds ultimate ownership, TEKGUYZ manages it operationally. Do not change this arrangement without explicit direction.

**Client has seen and approved the live site** — she loves it, including the media assets. She's now asked TEKGUYZ to extend the same branding (new black-mark logo, matching visual identity) across all her other social platforms, and to help run an Instagram campaign for the clearance push. This work sits within the existing Phase 2/Phase 3 scope (see `docs/brand-kb.md` Section 3), happening earlier/concurrently rather than strictly sequentially, at her request — it is **not** a new or renumbered phase.

She has also expressed interest in eventually building a full catalog website telling the complete brand story (her "why," heritage, full product line) — this remains Phase 4 territory: **not committed, not scheduled, not currently in progress.** A professionally-made Brand Book reportedly exists (from a prior creative director) but is not yet in TEKGUYZ's possession — Haydee is searching for it. Not a blocker for current work; Brand DNA is being built in parallel via Google Pomelli from what she can describe directly.

**Logo asset files (2026-07-17):** four higher-quality files replaced the old `logo-light-bg.jpg`/`logo-dark-bg.jpg` (deleted, no longer in the repo) — `public/images/cover-light-bg.png` and `cover-dark-bg.png` (icon + wordmark, 1760×1760) are used for the on-site header/footer logo; `public/images/profile-light-bg.png` and `profile-dark-bg.png` (icon-only, 1760×1760) are used for the favicon set and the OG share-image logo element, and are the source for the matching social profile pictures. The full favicon set (`app/favicon.ico` 32×32, `app/icon.png` 512×512, `app/apple-icon.png` 180×180) and the OG share image were regenerated from `profile-dark-bg.png`.

This project is a git repository (`git init` 2026-07-09) with a remote connected to GitHub (`github.com/tekguyz/haydeecallejas`). Remember to `git push` after committing — it is not automatic.

Full requirements: see `docs/PRD.md`. Brand voice/visual direction: see `docs/brand-kb.md`. Read both before writing any code.

## Stack (non-negotiable for this build)
- Next.js, App Router, deployed on Vercel — runs Vercel-native (not a static export). Changed 2026-07-08: originally `output: 'export'`, dropped so `next/image` can use Vercel's built-in Image Optimization API (on-demand resize/compress) instead of shipping unoptimized full-size originals. This means the site is no longer portable to a plain static host (Netlify, S3, etc.) without revisiting this decision.
- Tailwind CSS
- `next/image` for all product/logo images — required given asset volume and mobile-first, bandwidth-constrained audience (80%+ mobile users in Nicaragua)
- No CMS, no auth, no database — product data lives in a single static `products.ts`/`.json` file

## Working discipline (same phase-gate standard as the TEKGUYZ CRM project)
Build → present to TEKGUYZ for review → verify in browser (mobile viewport primary, not desktop) → get explicit confirmation → proceed to next step. Do not silently chain multiple build steps together and present them all at once — checkpoint after each numbered step in `docs/PRD.md` Section 9.

**Documentation rule (standing):** whenever a code change affects something documented in this file, `docs/PRD.md`, or `docs/brand-kb.md` (stack decisions, locked product data, contact mechanisms, domain/URL, media asset status, billing/infrastructure ownership, etc.), update the relevant doc(s) directly in the same pass as the code change — don't wait to be asked separately. If a change doesn't affect anything documented, don't touch the docs and don't mention it. Always show before/after diffs for files actually changed.

**PII handling rule:** never write identity-document numbers (cédula/ID numbers), dates of birth, or home addresses into any project documentation, even when verifying billing/ownership matters. Reference that identity was confirmed; do not store the underlying sensitive data in these files.

## Critical constraints
- **Mobile-first is a hard requirement, not a default responsive afterthought.** Build and test the mobile viewport first; treat desktop as the adapted view.
- **Price is shown on-page for every product** — this is a clearance campaign, not an exclusive drop; hiding price recreates the exact friction this site exists to remove.
- **Spanish is the primary language** for all client-facing copy on this site.
- **WhatsApp deep link format:** `https://wa.me/50589033134?text=` + URL-encoded message including product name, selected color, and price. Test on an actual mobile device that the pre-filled message opens correctly. **A multi-product cart is being added** (users can select more than one product/color); once it ships, the CTA message will itemize every selected product with individual prices plus a total, instead of firing one message per product — this per-product format is what's live until the cart lands.
- Brand voice avoids urgency clichés and exclamation-heavy copy — see `docs/brand-kb.md` Section 4 before writing any on-site copy.
- **Card layout must stay vertically aligned across the grid** — title, description, and swatch-row zones use fixed/reserved heights sized to the longest realistic content across all 4 products, so price and CTA button always land at the same vertical position regardless of how much any one card's text wraps. Don't let this regress if content changes again.

## Known open items (don't silently resolve these — flag back to TEKGUYZ)
- Lifestyle/in-use product shots (4 needed) — TEKGUYZ is actively producing campaign/lifestyle video via Veo3/Nano Banana Pro/Pomelli; may eventually supersede this item, but nothing confirmed for on-site use yet.
- `haydeecallejas.net` retirement — decision made, exact lapse timing TBD.
- Exact scope of the "one additional element" Haydee wants added to the current site — undefined, needs a direct follow-up before any work starts on it.
- Payment/invoice terms with Haydee — verbal agreement exists (initial fee after defined deliverables + domain reimbursement, future phases billed by estimated hours), formal written version in progress — not TEKGUYZ Engineering's concern, tracked client-side.
- `theme-color` meta tag — confirmed correct in code, but a real-device check (Pixel 9a) showed a possible minor visual discrepancy on Android Chrome. May be a platform quirk rather than a code bug — worth a follow-up if it recurs.
- **GBP (Google Business Profile) setup — pending.** Waiting to confirm with the client whether her showroom is a standalone location, a shared/consignment space (possibly tied to "Shap Collective Store"), or by-appointment-only, before any listing is created. Do not create a GBP listing until this is resolved.
- **Multi-product cart — in progress.** See the WhatsApp deep link constraint above; this changes the CTA from one-message-per-product to a single itemized message with a total.
- **JSON-LD structured data — under consideration, not yet decided/scheduled.** Product schema per item, plus Organization/LocalBusiness schema for the brand, to improve search result appearance. Flag before implementing in case it should wait on the GBP decision above (LocalBusiness schema and GBP address data should stay consistent).
- **Known artifact in `public/images/profile-dark-bg.png`** — a faint gray smudge is visible in the upper-right of the frame at full resolution, and still faintly visible once downscaled into the regenerated favicon/OG assets. Confirmed to be a source-file issue (present in the file as delivered), not something introduced by the resize/composite pipeline — not silently touched up. Pending a TEKGUYZ/client decision on whether to get a corrected source file.
