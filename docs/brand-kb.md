# Haydee Callejas — Brand Master Knowledge Base
Prepared by TEKGUYZ | Project Files reference document

## 1. The Designer
- Name: Haydee Callejas ("HC"). Origin: Nicaragua. Works in luxury fashion accessories using high-end exotic leathers, distinctive grains and textures.
- Non-technical — her domain is physical design, material quality, tactile experience, visual craft. All strategic and technical decisions route through TEKGUYZ; she owns final creative/business approval.
- Contact: hc@haydeecallejas.net · (505) 8900 0408
- Relationship: TEKGUYZ's aunt, engaged as a formal client. She initiated by requesting a social/brand analysis and a 6-month proposal for launching her new collection "under TEKGUYZ standards" while preserving the brand's essence and history.

## 2. Engagement Structure
- Haydee: the designer. Owns the creative vision, product line, and brand essence — this doesn't transfer to TEKGUYZ. She weighs in when asked on specific things (a color, a photo, how something feels).
- TEKGUYZ: handles everything technical and organizational — execution, systems, copy production — so Haydee can stay focused on the craft. Not a creative director standing in for her; a technical/organizational partner clearing the path.
- Check-ins happen continuously (not just at phase boundaries) — TEKGUYZ is reachable any day, weekends included.

## 3. Phase Roadmap (current — supersedes any earlier version)
| Phase | Scope | Gate to close |
|---|---|---|
| 1. Clearance Campaign + Sales Fix (current) | Sell the 4 leftover pieces; good photos/copy/media; **Next.js (App Router) site with Vercel-native rendering — product showcase, WhatsApp-first contact, lightweight backup form** so interested buyers have somewhere to actually purchase instead of hitting the generic auto-reply | Client approves campaign creative + confirms the site is live and usable |
| 2. Brand Identity + Local Presence | Google Business Profile setup + local SEO copy; brand book (voice, OKLCH palette, typography) | Client signs off on brand book and GBP copy |
| 3. Social & Media Infrastructure | Instagram/Facebook/Pinterest/TikTok setup; banner/cover layouts; grid rules; video overlay copy bank | Client approves platform setup and asset templates |
| 4. Full Custom Platform (optional/later) | Only if the business outgrows the Phase 1 site — full Next.js/Supabase storefront with real payment integration (Nicaragua-compatible processor TBD via separate research). Not committed to yet. | Client-facing requirements finalized here; execution rules live in TEKGUYZ Engineering workspace |

No phase begins before the prior phase's client sign-off is confirmed. **Status as of now: logos are done (see Section 11), most Phase 1 media assets are done (see Section 13), site build in progress (see Section 3b for stack decision), copy centralized into `lib/siteCopy.ts` and product descriptions finalized (see Section 9).** Onboarding email sent. Domain purchase in progress.

## 3a. Domain Status
- `haydeecallejas.net` — registered, parked (Namecheap default page, no site attached), actively used for her email (`hc@haydeecallejas.net`). Her son holds credentials. Do not touch MX/email DNS records on this domain when building anything.
- `haydeecallejas.com` — being purchased now (TEKGUYZ account, informal family arrangement, transfer to her later if it ever matters). Will be canonical domain for the new site once live; `.net` can redirect to it or stay as-is for email only.
- **Interim working URL:** `https://haydeecallejas.vercel.app` — changed 2026-07-09 via Vercel dashboard → Settings → Domains: added this domain directly, then deleted the old `haydee-callejas-site.vercel.app` domain (confirmed now 404s). This was a manual domain swap, **not** a project rename — renaming a Vercel project does not automatically move or create domains. `app/layout.tsx`'s `metadataBase` was updated to match and redeployed same day.

## 3b. Phase 1 Stack Decision (settled)
Next.js App Router + TypeScript + Tailwind, deployed Vercel-native — not the earlier-considered single-page React + Vite build, and not a static export. Deliberate call, not drift: Vercel-native rendering conventions made `next/image`'s on-demand Image Optimization, OG/share-image generation, meta tags, and Analytics wiring meaningfully easier to get right than bolting them onto a bare Vite SPA or a static export. Given the amount already shipped on this stack (video hero, lightbox, OG/meta, Analytics), this is the settled Phase 1 stack, full stop — not open for revisit absent a real forcing function.

## 4. Brand Voice
Sophisticated, artistic, authentic, exclusive — never spammy or discount-driven. Language should read like it comes from someone who understands leather craftsmanship, not a retail copywriter. Avoid urgency clichés ("Limited time!", "Don't miss out!"); convey scarcity and exclusivity through restraint, not volume.

## 5. Visual Direction
Clean, minimalist, high-end aesthetic in the vein of Apple/Stripe design sensibility, adapted for tactile luxury goods — leather grain and texture should be the visual hero, not competing with busy layouts.

## 6. Asset Library Workflow
No live connector exists between Google Photos and this project. Working process:
1. Export/select images and video from Google Photos.
2. Upload directly to this project's Files (or attach in chat for one-off use).
3. Tag each batch on upload: product name, leather type/texture, color, intended use (campaign / evergreen / GBP / social), target phase.

## 7. AI Content Generation Stack
- **Google Pomelli** — brand DNA + campaign generation. Business DNA is entered manually (not auto-scraped from a website) — preserves luxury tone and removes any dependency on a live site existing first.
- **Nano Banana Pro** — image generation model behind Pomelli's Photoshoot feature; also usable standalone. Direct fix for current phone-shot product photo quality.
- **Google Flow** — video creation, using Veo 3.1 (higher-fidelity) and Gemini Omni Flash (fast, conversational multi-turn edits).
- Claude writes the DNA text, catalog copy, campaign narrative, and image/video prompts. Pomelli/Nano Banana Pro/Flow apply that at speed and scale. Claude does final tone/QA pass on anything generated externally.

## 8. Domain & Email Infrastructure
- `haydeecallejas.com` — purchased/in progress under TEKGUYZ account, registrant contact set to Haydee's name/email, WHOIS privacy on. Canonical domain for the new site.
- `haydeecallejas.net` — stays as-is for her existing email; not touched by the new site build.
- Business email provider (PurelyMail/Google Workspace/Microsoft 365) — still undecided, not urgent, not a Phase 1 blocker.

## 9. Current Deliverable (Phase 1): Mid-Year Clearance Campaign — LOCKED, live in `products.ts`
Products to move — leftover inventory Haydee wants cleared to make room for new work.

| Product | Description | Colors | Price |
|---|---|---|---|
| Mini bag crossbody | Gamuza italiana. Tacto suave, uso diario. | Violeta, Café, Crema (3) | $75.00 |
| Cartera corazón | Cuero italiano genuino. Diseño llamativo, acabado impecable. | Rojo, Café, Negro, Plateado (4) | $95.00 |
| Telefonera | Cuero italiano genuino. Compacta, ideal para lo esencial. | Violeta, Naranja, Crema, Plateado, Verde (5) | $75.00 |
| Telefonera rafia | Cuero italiano genuino y rafia. Textura natural, toque artesanal. | Violeta, Dorado (2) | $75.00 |

14 total color/style variants across 4 product lines. Price shown as bare "$" figure — USD is implied, córdobas never used, no "USD" suffix added per client instruction. **"Genuino" is a required word on all three genuine-leather products — do not drop it in any future copy pass; the crossbody is suede, correctly has no "genuino" claim.** Cartera corazón's description revised 2026-07-09: "Diseño statement" was Spanglish, replaced with "Diseño llamativo" — pure Spanish, same meaning, material info unchanged.

## 10. Current Sales Channel & Context
- Sole sales channel today: WhatsApp, with a generic auto-reply for inbound purchase interest.
- Strong organic traction — sizable Instagram/Facebook following in Nicaragua, frequent unsolicited interest/purchase inquiries — undercut by inconsistent response capacity, not lack of demand.
- She's disengaged from the current leftover inventory and wants to return focus to new exotic-leather pieces — this campaign clears space for that, framed positively, not as an admission of failure.
- **Never state specific remaining-quantity numbers** anywhere client-facing ("solo quedan X"), even if true at some point. More of any color/style can genuinely be produced on demand if worth it — this stays internal, never surfaced to buyers, and is exactly why exact-count scarcity claims must never appear on-site.

## 11. Logo Status — DONE
Rebuilt from Pixel-enhanced source via solid-background generation (not transparency — generative models can't produce real alpha channels reliably; solid-fill was the correct approach). Final assets:
- `haydee-logo-for-light-bg` — black mark, solid white background, square + 3:4 crop, animated version done
- `haydee-logo-for-dark-bg` — white mark, solid black background, square + 3:4 crop, animated version done
Both uploaded to Project Files and archived in the shared Google Photos album.

## 12. Contact Mechanism Decision (Phase 1 site) — revised 2026-07-09
- **Primary CTA: WhatsApp deep link per product**, pre-filled message with product name/color/price (`wa.me/50589000408?text=...`). No payment processor needed — she confirms and closes the sale over WhatsApp as she does now, just without the generic-auto-reply gap. This is now the *only* action on each product card.
- **Secondary contact — footer only, not per-product.** Originally a `mailto:` link duplicated on every product card; consolidated 2026-07-09 into a single footer block (Instagram → phone → email) since repeating the same contact channel four times per page was clutter, not redundancy-as-safety-net. EmailJS form was considered earlier and dropped for the same reason a plain link was preferred over any form: zero build cost, zero friction.
- **WhatsApp "call" link — not implemented.** No reliable universal deep-link scheme for triggering a WhatsApp voice call from a website across platforms; only the message deep link is dependable. Message-based CTA is the one that ships.

## 13. Media Asset Status (Phase 1 campaign) — site-usage status updated 2026-07-09
- Logos: done (Section 11). Dark-bg version's background was color-corrected 2026-07-09 (was pure #000000, now #0a0a0a) to match the site's actual near-black token — was showing as a visibly darker square against the surrounding UI.
- Hero zoom videos: 4 total exist (one per product line), 1080p, Veo 3.1 Fast — **only one is used on-site at a time** (compressed and swapped into the repo as needed; crossbody was the hero video, swapped to the heart-bag video 2026-07-09, compressed to `hero-heart-web.mp4`, 604KB). The other 3 are campaign/social assets, not wired into the website, and don't live in the site repo — added/removed from `public/video/` as whichever is currently the active hero, backed up externally otherwise.
- Texture macro videos: 2 exist, **not used on-site** — campaign/social assets only, not in the site repo.
- ~~Flat-lay images~~ — resolved 2026-07-09: removed entirely (the `flatlayUrl` field, its data, and all 4 source images). Root cause wasn't mobile sizing — the collage-grid format (multiple product shots stitched into one image) doesn't work as a single card thumbnail at any size, too much visual information compressed too small. Backed up in Google Photos, available for marketing use outside the site.
- Lifestyle/in-use shots: **not started** — target one per product line (4 total)
- 51-second highlight video (licensed in-app track, brightness/contrast enhanced): both audio and silent versions exist, **not used on-site** — the hero originally used this, later swapped to the crossbody product video instead; removed from the site repo 2026-07-09, campaign/social asset only now.
- 14 curated product stills (one per color/style variant, Pixel-enhanced): done, **in active use** — every product card image and the OG share image (Section 13a) are sourced from these.
- **New 2026-07-09: OG/share image** — a dedicated 1200×630 composite (not a stretched product still): `heart-red.jpg` product photo (left panel) + logo + headline/tagline on an ink panel (right panel), vertically centered. Verified live via direct byte comparison against the deployed file.
- **New 2026-07-09: favicon set** — `.ico` (32×32), `icon.png` (512×512), `apple-icon.png` (180×180), all generated from the light-bg logo.

## 14. Open Items (fill in as they're resolved)
- [x] Domain ownership status for haydeecallejas.net — resolved: parked, no site, son holds credentials, actively used for her email only
- [x] Domain for the new site — resolved: haydeecallejas.com purchased
- [x] Logo — resolved, done
- [x] Contact mechanism — resolved: WhatsApp deep link primary, mailto link backup
- [x] Instagram handle/follower count — resolved: @haydeecallejas, 12.8K (see Section 15)
- [x] Phase 1 stack — resolved: Next.js App Router, Vercel-native (see Section 3b)
- [x] Product descriptions — resolved: tightened copy, genuino preserved on genuine-leather items, no Spanglish (see Section 9)
- [x] OG/share image, favicons, page metadata — resolved 2026-07-09 (see Section 13)
- [x] Vercel domain switch — resolved 2026-07-09: live at `haydeecallejas.vercel.app`, done via Settings → Domains, not a project rename (see Section 3a)
- [x] Flat-lay dead-field cleanup — resolved 2026-07-09: removed entirely (see Section 13)
- [ ] Business email provider decision
- [ ] Lifestyle/in-use shots (4 needed)
- [ ] Full product line beyond the 4 clearance items (for later phases)
- [ ] Target markets beyond local (regional / national / international)
- [ ] Nicaragua-compatible payment processor (needed only if/when Phase 4 happens)

## 15. Social Presence
- Instagram: `@haydeecallejas` — **12.8K followers**, primary and only active social platform. Bio: "Haydee Callejas Official," Designer, "Carteras • Accesorios • Arte de Vivir," "Cuero Genuino & Pieles Exóticas."
- This is real, verifiable trust signal for site visitors — link to the actual profile directly (header or footer icon/link to `instagram.com/haydeecallejas`), don't just cite the follower count as unlinked text.