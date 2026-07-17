# Haydee Callejas — Brand Master Knowledge Base
Prepared by TEKGUYZ | Project Files reference document

## 1. The Designer
- Name: Haydee Callejas ("HC"). Origin: Nicaragua. Works in luxury fashion accessories using high-end exotic leathers, distinctive grains and textures.
- Non-technical — her domain is physical design, material quality, tactile experience, visual craft. All strategic and technical decisions route through TEKGUYZ; she owns final creative/business approval.
- Contact: business email now `hc@haydeecallejas.com` (Google Workspace, live) · previously `hc@haydeecallejas.net`, being retired · (505) 8900 0408
- Relationship: TEKGUYZ's aunt, engaged as a formal client. She initiated by requesting a social/brand analysis and a 6-month proposal for launching her new collection "under TEKGUYZ standards" while preserving the brand's essence and history.
- Identity/billing verification with Google Workspace is complete — confirmed via her national ID that the payment method on file is her own (a legal-name abbreviation triggered an automated mismatch flag; resolved through Google's standard verification). No identity document numbers, DOB, or address are stored in this file — see CLAUDE.md's PII handling rule.

## 2. Engagement Structure
- Haydee: the designer. Owns the creative vision, product line, and brand essence — this doesn't transfer to TEKGUYZ. She weighs in when asked on specific things (a color, a photo, how something feels).
- TEKGUYZ: handles everything technical and organizational — execution, systems, copy production — so Haydee can stay focused on the craft. Not a creative director standing in for her; a technical/organizational partner clearing the path.
- Check-ins happen continuously (not just at phase boundaries) — TEKGUYZ is reachable any day, weekends included.
- **Domain/infrastructure ownership:** Haydee holds ultimate ownership (WHOIS being updated to her legal name/info). TEKGUYZ retains operational admin access (DNS, Vercel, Google Workspace) on her behalf — a deliberate arrangement so she "has the keys" without having to manage the technical side herself.
- **Payment structure (verbal agreement, formal written version in progress — see Section 16):** TEKGUYZ fronted the domain cost (~$45, 3-year GoDaddy registration) and is reimbursed as part of an initial fee once a defined set of deliverables is complete (media assets, campaign package, social handle rebranding across platforms, plus items still being finalized). Work beyond that initial fee — future phases — will be billed based on TEKGUYZ's estimated hours per project/phase, with structure (upfront, split, or flat) varying by complexity. She has agreed she should know exactly what she's paying for and what's been delivered at each point — a written itemized summary is being prepared (see Section 16).

## 3. Phase Roadmap (current — supersedes any earlier version, including any AI-assisted drafts that proposed different phase numbering)
| Phase | Scope | Gate to close |
|---|---|---|
| 1. Clearance Campaign + Sales Fix (built, live, client-approved) | Sell the 4 leftover pieces; good photos/copy/media; Next.js (App Router) site with Vercel-native rendering — product showcase, WhatsApp-first contact | Client approves campaign creative + confirms the site is live and usable — **done, Haydee has seen and loves it** |
| 2. Brand Identity + Local Presence | Google Business Profile setup + local SEO copy; brand book (voice, OKLCH palette, typography) — **social rebranding (new logo, unified bio/copy across platforms) is happening now, ahead of formal gate closure, at Haydee's request.** GBP setup itself is **pending** — waiting to confirm with Haydee whether her showroom is a standalone location, a shared/consignment space (possibly tied to "Shap Collective Store"), or by-appointment-only, before any listing is created. | Client signs off on brand book and GBP copy |
| 3. Social & Media Infrastructure | Instagram/Facebook/Pinterest/TikTok setup; banner/cover layouts; grid rules; video overlay copy bank — **actively starting now** (see Section 16) | Client approves platform setup and asset templates |
| 4. Full Custom Platform (optional/later) | Full Next.js/Supabase storefront with entire product line (not just the 4 clearance items), brand-story sections, real payment integration. Haydee has expressed interest in this for the future — **not committed, not scheduled, not currently in progress.** Deferred specifically because receiving payments from Nicaragua has real unresolved friction (see Section 10) — Phase 1 was built instead to solve the actual urgent need: a real purchase path, replacing the prior Beacons link that only offered a generic WhatsApp auto-message and a newsletter signup. | Client-facing requirements finalized here; execution rules live in TEKGUYZ Engineering workspace |

**Note on scope:** Phase 2 and Phase 3 work (social platform rebranding, campaign assets) is happening concurrently/early rather than strictly sequentially, because Haydee asked for it directly after seeing Phase 1. This is not a new phase or a renumbering — it's early execution within the existing roadmap. Any external tool or draft that proposes a different phase structure (e.g., "Phase 1 = infra + social, Phase 2 = full site") does not reflect this project's actual roadmap and should be disregarded.

**Status as of now:** Phase 1 built, live, and personally approved by Haydee — she loves the site and the media assets. Currently executing: unified branding rollout across her social platforms (new black-mark logo, matching visual identity, standardized bio copy), campaign asset production for the Instagram push, and defining the exact deliverable set that closes out the initial payment.

## 3a. Domain Status
- `haydeecallejas.net` — **being retired.** Previously used only for her email; Haydee has decided not to renew it once her new business email is stable. Her son holds credentials. Do not touch MX/email DNS records until retirement is actually executed and confirmed.
- `haydeecallejas.com` — **live and canonical.** DNS points at Vercel; apex 308-redirects to `www.haydeecallejas.com`, which serves the site. `metadataBase`, canonical tags, and OG URLs all point at `www`. WHOIS registrant being updated to Haydee's legal name/info; TEKGUYZ retains operational admin.
- Prior interim URL `https://haydeecallejas.vercel.app` still resolves but is no longer referenced anywhere in the code.

## 3b. Phase 1 Stack Decision (settled)
Next.js App Router + TypeScript + Tailwind, deployed Vercel-native — not the earlier-considered single-page React + Vite build, and not a static export. Deliberate call: Vercel-native rendering made `next/image` optimization, OG/share-image generation, meta tags, and Analytics wiring meaningfully easier than a bare Vite SPA or static export. Settled, not open for revisit absent a real forcing function.

## 4. Brand Voice
Sophisticated, artistic, authentic, exclusive — never spammy or discount-driven. Language should read like it comes from someone who understands leather craftsmanship, not a retail copywriter. Avoid urgency clichés ("Limited time!", "Don't miss out!"); convey scarcity and exclusivity through restraint, not volume.

## 5. Visual Direction
Clean, minimalist, high-end aesthetic in the vein of Apple/Stripe design sensibility, adapted for tactile luxury goods — leather grain and texture should be the visual hero, not competing with busy layouts.

## 6. Asset Library Workflow
No live connector exists between Google Photos and this project. Working process:
1. Export/select images and video from Google Photos.
2. Upload directly to this project's Files (or attach in chat for one-off use).
3. Tag each batch on upload: product name, leather type/texture, color, intended use (campaign / evergreen / GBP / social), target phase.

**Current scale:** the Google Photos campaign asset library now holds 49 files — 4 logo variants (icon+wordmark and icon-only, light/dark) + 2 animated versions (6 logo files total, see Section 11), plus campaign photos/videos.

## 7. AI Content Generation Stack
- **Google Pomelli** — brand DNA + campaign generation. Business DNA entered manually, not auto-scraped — preserves luxury tone, no dependency on a live site existing.
- **Nano Banana Pro** — image generation (Pomelli's Photoshoot feature; also standalone). Direct fix for phone-shot product photo quality.
- **Google Flow** — video creation, Veo 3.1 (higher-fidelity) and Gemini Omni Flash (fast, conversational edits).
- Claude writes the DNA text, catalog copy, campaign narrative, image/video prompts. Pomelli/Nano Banana Pro/Flow apply that at speed. Claude does final tone/QA on anything generated externally.
- **Note:** general-purpose AI tools other than Claude (e.g., Google Gemini used ad hoc for business/billing questions) do not have this project's context and should not be treated as a source of scope, phase structure, or deliverable decisions — TEKGUYZ confirmed this after Gemini proposed an incompatible phase framework based on incomplete information. Claude (this project + Claude Code in the repo) remains the sole source of truth for scope and documentation.
- **Active use as of now:** TEKGUYZ is producing lifestyle/campaign videos per-product and as a group campaign piece for the Instagram push — see Section 16 for current prompt templates and campaign copy bank.

## 8. Domain & Email Infrastructure
- `haydeecallejas.com` — live, canonical domain. WHOIS being updated to Haydee's name; TEKGUYZ retains admin.
- `haydeecallejas.net` — being retired (see Section 3a).
- **Business email: resolved and live** — Google Workspace (Business Starter), `hc@haydeecallejas.com`. Billing identity verification complete (see Section 1).

## 9. Current Deliverable (Phase 1): Mid-Year Clearance Campaign — LOCKED, live in `products.ts`
Products to move — leftover inventory Haydee wants cleared to make room for new work.

| Product | Description | Colors | Price |
|---|---|---|---|
| Mini bag crossbody | Gamuza italiana. Tacto suave, ideal para uso diario. | Violeta, Café, Crema (3) | $75.00 |
| Cartera corazón | Cuero italiano genuino. Diseño llamativo, acabado sobrio. | Rojo, Café, Negro, Plateado (4) | $95.00 |
| Telefonera cuero | Cuero italiano genuino. Compacta, ideal para lo esencial. | Violeta, Naranja, Crema, Plateado, Verde (5) | $75.00 |
| Telefonera rafia | Cuero italiano genuino y rafia. Textura natural, toque artesanal. | Violeta, Dorado (2) | $75.00 |

14 total color/style variants across 4 product lines. Price shown as bare "$" figure — USD implied, córdobas never used. **"Genuino" required on all three genuine-leather products** — never drop it; the crossbody is suede, correctly has no "genuino" claim. "Telefonera" renamed "Telefonera cuero" and two descriptions lightly reworded — purely to fix mobile line-wrap alignment across the 4-card grid; meaning and material claims unchanged. CTA button text changed from "Consultar" to "Me interesa" — the former read too formal/legal in Spanish, the latter matches the pre-filled WhatsApp message tone.

## 10. Current Sales Channel & Context
- Primary sales channel is now the live site + WhatsApp deep links, replacing the prior Beacons link, which only offered a generic WhatsApp auto-message and a newsletter signup — no real purchase path. The full multi-product catalog site (Phase 4) was deferred specifically because receiving payments from Nicaragua has real unresolved friction; Phase 1 was built instead to solve the client's actual urgent need directly.
- A multi-product cart is in progress (see `PRD.md` Section 7, item 4): users will be able to select more than one product/color, and the WhatsApp CTA will itemize all selections with individual prices and a total, instead of one message per product.
- Strong organic traction — 12.8K Instagram following in Nicaragua, frequent unsolicited interest — previously undercut by inconsistent response capacity, not lack of demand.
- She's disengaged from the current leftover inventory and wants to refocus on new exotic-leather pieces — campaign clears space for that, framed positively.
- **Never state specific remaining-quantity numbers** anywhere client-facing. More of any color/style can genuinely be produced on demand — stays internal, never surfaced to buyers.

## 11. Logo Status — DONE
Rebuilt from Pixel-enhanced source via solid-background generation. Final assets — 4 static variants (1760×1760 each) plus 2 animated versions, 6 logo files total. Exact filenames and use-case mapping (2026-07-17):
- `cover-light-bg.png` — icon + wordmark, solid white/light background — on-site header logo.
- `cover-dark-bg.png` — icon + wordmark, solid black background — on-site footer logo.
- `profile-light-bg.png` — icon only, solid light background — reserve/alternate profile-picture source.
- `profile-dark-bg.png` — icon only, solid black background — source for the full favicon set (`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`), the OG share-image logo element, and social profile pictures (Instagram profile photo already updated from this file). **Known issue:** a faint gray smudge artifact is visible in the upper-right of the frame at full resolution — confirmed a source-file issue, not introduced by any resizing/compositing done on it. Still usable at current sizes (barely visible downscaled), but pending a TEKGUYZ/client decision on whether to get it corrected.
- 2 animated versions (light-bg/dark-bg) — unchanged, not part of this file swap.

These four static files replaced the earlier `haydee-logo-for-light-bg` / `haydee-logo-for-dark-bg` pair referenced in older notes — those are superseded and no longer in the site repo. Rollout to all other social platforms (Facebook, WhatsApp Business, etc.) is in progress as part of the current social takeover. Part of the 49-file Google Photos campaign asset library (Section 6).

## 12. Contact Mechanism Decision (Phase 1 site)
- **Primary CTA: WhatsApp deep link per product**, pre-filled message with product name/color/price. Button text "Me interesa." This is the card's *only* action.
- **Secondary contact — footer only, not per-product:** Instagram → Facebook → phone → email, in that order. Instagram and Facebook icon links also appear in the header (added 2026-07-16).
- **WhatsApp "call" link — not implemented** (no reliable cross-platform deep-link scheme).

## 13. Media Asset Status (Phase 1 campaign)
- Logos: done — 6 files (4 static variants + 2 animated), see Section 11. Now rolling out across all social platforms, not just the site and Instagram. Profile logo and contact email are already updated on Facebook and Threads, not just Instagram (bio-link replacement below remains Instagram-specific — that's where the Beacons link lived).
- Hero video: `hero-heart-web.mp4` (604KB) live on-site. Other 3 product hero videos + 2 texture macro videos + the 51-second highlight video are campaign/social assets only, not in the site repo, available for the Instagram push.
- Flat-lay images: removed from site use entirely; backed up in Google Photos, available for marketing use outside the site.
- Lifestyle/in-use shots: in active production via Veo3/Nano Banana Pro/Pomelli, for both the Instagram campaign and possible future on-site use — not yet finalized for either.
- 14 curated product stills: done, in active use (site + OG image).
- OG/share image, favicon set: done — rebuilt 2026-07-17 from `profile-dark-bg.png` (see Section 11 for the known source-file artifact on that file).
- Instagram profile updated: new high-res logo as profile photo; bio link replaced (Beacons removed) with direct link to `haydeecallejas.com`, link title "Compra aquí."

## 14. Open Items
- [x] Domain, logo, contact mechanism, stack, product descriptions, OG/metadata, custom domain, business email — all resolved.
- [x] Client approval on Phase 1 site — resolved, Haydee has seen it and loves it.
- [x] Billing/identity verification for Google Workspace — resolved.
- [ ] GBP (Google Business Profile) listing — pending confirmation from Haydee on showroom type (standalone / shared-consignment, possibly tied to "Shap Collective Store" / by-appointment-only) before any listing is created.
- [ ] Corrected source file for `profile-dark-bg.png` — visible smudge artifact in the upper-right of the frame (see Section 11); low-visibility at current use sizes, not blocking, TEKGUYZ/client call on whether to fix.
- [ ] Multi-product cart — in progress; WhatsApp CTA to itemize all selected products with a total (see `PRD.md` Section 7, item 4).
- [ ] WHOIS transfer to Haydee's name — in progress.
- [ ] Lifestyle/in-use shots (4 needed) — in progress via AI video generation, not finalized.
- [ ] `haydeecallejas.net` retirement — decision made, execution/timing TBD.
- [ ] Exact scope of the additional element Haydee wants added to the current site — undefined, needs direct follow-up.
- [ ] Full itemized deliverable list for the initial payment fee — being finalized (media assets, campaign package, social rebrand confirmed; "a few more things" still needs to be made explicit — see Section 16).
- [ ] Written payment terms document for Haydee — draft in progress (see Section 16).
- [ ] Brand Book — Haydee is searching for it (cloud or physical); not currently in TEKGUYZ's possession.
- [ ] Full product line beyond the 4 clearance items (Phase 4, not scheduled).
- [ ] Target markets beyond local (regional/national/international).
- [ ] Nicaragua-compatible payment processor (only if/when Phase 4 happens).

## 15. Social Presence
- Instagram: `@haydeecallejas` — 12.8K followers, primary platform by audience size.
- Facebook: `https://www.facebook.com/haydeecallejas/` — linked directly from the site header and footer alongside Instagram (added 2026-07-16). Logo and contact email already updated to current branding.
- Threads: exists, part of the current social takeover — logo and contact email already updated, same as Facebook. Not yet linked from the site (client hasn't asked for that, and TEKGUYZ held off adding it alongside the Facebook link).
- Bio: "Haydee Callejas Official," Designer, "Carteras • Accesorios • Arte de Vivir," "Cuero Genuino & Pieles Exóticas." Core bio unchanged; a temporary campaign line during the clearance window is TEKGUYZ's call, minor, easily reverted.
- **Profile link:** `haydeecallejas.com`, title "Compra aquí" — replaced prior Beacons link (generic WhatsApp auto-message), on Instagram specifically.
- Prior promoted posts have real reach (one hit 4.2K views/engagement per client-shared screenshot) — worth boosting the campaign reveal post and at least one mid-campaign product carousel.
- **Unified copy/tone mandate:** every platform (Instagram, Facebook, Threads, WhatsApp Business, any others) needs matching bio copy, contact info (pointing to the new `.com` email, not `.net`), and visual branding (new logo, matching banners/covers). Logo and contact email are already live on Facebook and Threads, not just Instagram (see Section 13) — full bio copy/banner parity across all platforms is still rolling out as part of the active "social takeover" work.

## 16. Instagram Campaign & Client Deliverables — Mid-Year Clearance (new section)
Campaign is starting now, at Haydee's request, ahead of the formal Phase 3 timeline.

**Campaign copy bank (Spanish, locked phrases for use across video/image/caption text):**
- **"Liquidación de Medio Año"** — established headline, already live on-site. Use as an opening title card in videos; stay consistent with on-site language.
- **"Todo debe venderse"** — strongest, most definitive line. Use as a closing CTA card in videos, immediately before the WhatsApp/site prompt.
- **"Aquí empieza la liquidación"** — better suited as caption text on the reveal post than baked into video footage; don't stack all three phrases in a single asset.

**Cadence guidance:** reveal post/Reel announcing the site first (standalone) → per-product carousels using the 14 curated stills → one boosted post mid-campaign → reminder near the end. One consistent CTA per asset (site link in bio), not a mix of DM/comment/link asks.

**Client deliverable/payment tracking:** the initial fee is tied to a specific deliverable set TEKGUYZ has described verbally (media assets, campaign info package, social handle rebrand to the new logo across platforms, "a few more things" — not yet itemized). Before invoicing, this list needs to be made explicit and written down — see the separate client-facing payment terms draft. Do not treat any deliverable as "done" for billing purposes until it's on that explicit list and actually verified complete.
