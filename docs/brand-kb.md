# Haydee Callejas — Brand Master Knowledge Base
Prepared by TEKGUYZ | Full rewrite — supersedes every prior version, including the stale one that predates the live site, the domain migration, and tonight's product corrections.

## 1. The Designer
Haydee Callejas ("HC"). Nicaragua. Luxury accessories, genuine Italian leather and exotic hides. Non-technical — her domain is physical design, material, craft. TEKGUYZ (her nephew) handles all technical/organizational execution; she owns final creative/business approval. Business email `hc@haydeecallejas.com`. Personal phone and business WhatsApp are two different numbers — see Section 3 below, this distinction matters and was recently a live bug.

## 2. Engagement Structure
Haydee owns creative vision/product line. TEKGUYZ owns execution — not a creative director standing in for her, a technical/organizational partner. Domain/infrastructure: Haydee holds ultimate ownership, TEKGUYZ retains operational admin (DNS, Vercel, Google Workspace) on her behalf. Payment: informal family-rate arrangement, Phase 1 fee (~$1,200, covering site + brand assets + campaign media) invoiced once Phase 1 media is fully complete; future phases billed separately by hours, never bundled into a prior phase's fee.

## 3. ⚠️ Contact Numbers — Corrected, Verify Site Reflects This
- **Business WhatsApp (correct, use everywhere client-facing):** `+505 8903 3134` / `wa.me/50589033134`
- **Personal phone (NOT for business use, do not use in any WhatsApp deep link):** the number ending in `0408`.
- **Known issue as of this writing:** the live site's per-product WhatsApp deep links were built using the personal `0408` number by mistake. This needs a Claude Code fix — replace every `wa.me` reference in the codebase with `50589033134`. Confirm fixed before treating this as resolved.

## 4. Phase Roadmap
1. **Clearance Campaign + Sales Fix** — site built, live, Haydee-approved. Campaign media (video/images) still being produced.
2. **Brand Identity + Local Presence** — GBP setup pending (blocked on confirming her showroom type — standalone / shared space possibly tied to "Shap Collective Store" / by-appointment). Social rebrand (logo, unified bio/contact) happening now, ahead of formal gate.
3. **Social & Media Infrastructure** — actively in progress now, concurrently with Phase 2, at Haydee's request.
4. **Full Custom Platform** — deferred, not scheduled. Specifically deferred because receiving payments from Nicaragua has real unresolved friction; the Phase 1 site was built instead to solve the actual urgent need (replacing a Beacons link that only offered a generic WhatsApp auto-message and newsletter signup — no real purchase path).

## 5. Website Status — Important Current Context
`haydeecallejas.com` still exists, is still live technically, but **the link has been removed from all of Haydee's social profiles at her explicit request.** She doesn't want her name/brand associated with clearance-priced product on a site that isn't fully polished yet. Current sales channel is **100% direct WhatsApp** via Click-to-WhatsApp ads and organic posts — not the site. The site's product/price/color data is now known to be **out of date** (see Section 7) and should not be treated as source of truth until it's rebuilt. Domain, email, and hosting infrastructure remain valid and in use regardless.

## 6. Brand Voice
Sophisticated, restrained, never discount-driven. No urgency clichés, no exclamation-heavy copy. Reads like someone who has handled the leather, not a retail copywriter.

## 7. ✅ Current Real Product Data — LOCKED, corrects all earlier color/price info
This supersedes every earlier product table in any prior version of this document, `products.ts`, or any campaign material generated before tonight.

| Product | Material | Colors | Price |
|---|---|---|---|
| Cartera corazón | Cuero italiano genuino | Negro, Plateado, Caramelo, Rojo | $125.00 |
| Telefonera cuero | Cuero italiano genuino | Azul bebé, Naranja, Verde, Nude | $95.00 |
| Telefonera cuero y rafia | Cuero italiano genuino y rafia tejida a mano | Dorado, Fucsia | $95.00 |
| Mini bag crossbody | **Suede italiano** (not genuine leather — never say "cuero" or "genuino" for this one) | Fucsia, Nude, Caramelo | $95.00 |

**Critical rule: never name a specific color anywhere public-facing** — not in captions, not in video/image text overlay, not in voiceover (there is none — see Section 9). Say "varios tonos," "opciones disponibles," never the specific word. Color names are used ONLY inside AI-generation prompts (the fidelity lock), never in anything a customer sees. This exists specifically to avoid promising a color that turns out to be unavailable — which happened once already this campaign.

**#HaydeeCallejasShowroom** is the current campaign hashtag — supersedes earlier hashtag sets used before tonight's correction.

## 8. Copy Template — Locked Format
> Liquidación de Medio Año.
> [Producto] en [material]: $[precio]
>
> • Envíos a toda Nicaragua
> • Pedidos por WhatsApp · Link en bio
>
> #HaydeeCallejasShowroom

Crossbody variant: opens with "Liquidación de Medio Año" only, product line reads "Mini bag crossbody en suede italiano" — never mentions leather/cuero/genuino anywhere.

## 9. Video/Image Creative Rules — Current
- **No voiceover** — Haydee's explicit decision. Text overlay only.
- **Max 2 colors per generated asset, ever** — never show or reference more than 2 in a single video or image, even though more colors exist. Reduces AI generation errors and matches what she's agreed is enough per asset.
- **Structure:** Hook & Catch (3-4 seconds) → Lifestyle/Pivot. Total length 8-10 seconds (Veo 3.1 caps at 8s; Omni Flash can do 8 or 10s). Don't mention exact seconds inside the prompt text itself.
- **On-screen message, 3 leather products:** "Liquidación de Medio Año — Cuero genuino italiano."
- **On-screen message, crossbody:** "Liquidación de Medio Año" only — no leather language.
- **Price treatment:** appears briefly near the end, small and discreet typography, never loud or animated — balances the "people always ask price" problem against the restrained luxury tone.
- **Closing CTA card, all videos:** "Escríbenos por WhatsApp — link en bio."
- See the separate Campaign Prompt Bank document for ready-to-use prompts (video, 4 image styles).

## 10. Social Presence
Instagram bio (current): "👜 Carteras • Accesorios • Arte de Vivir / Cuero Genuino & Pieles Exóticas / Compra aquí 👇" + `wa.me/50589033134` link. No website link anywhere. Facebook, Threads mirror the same logo/contact info (in progress — Phase 2/3 concurrent work, not yet fully unified across all platforms).

## 11. Open Items
- [ ] **WhatsApp number fix on live site — urgent, confirm with Claude Code.**
- [ ] GBP — blocked on showroom-type confirmation with Haydee.
- [ ] Brand Book — still not in TEKGUYZ's possession.
- [ ] Site rebuild with current real product data — deferred until after this campaign push.
- [ ] Full written payment terms document — in progress.
