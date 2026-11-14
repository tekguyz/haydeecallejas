# CLAUDE.md — Haydee Callejas website

## What this is
Haydee Callejas's story site, live at `https://haydeecallejas.com` (`www` redirects to the bare domain). Haydee is a Nicaraguan handbag designer and a TEKGUYZ client. The page has two jobs, in this order: show a real designer with a story, and make ordering a bag one tap away through WhatsApp. No checkout, cart, CMS, database or sign-in.

Issue: tekguyz/tekguyz-one#158. Spec and plan: `tekguyz-one/docs/superpowers/specs/2026-11-14-haydee-callejas-site-design.md` and `tekguyz-one/docs/superpowers/plans/2026-11-14-haydee-callejas-site.md`. Client facts and open questions: `tekguyz-one/clients/haydee-callejas/README.md`.

The July 2026 clearance site is kept only at git tag `july-2026-clearance`. Nothing from it is used. `docs/brand-kb.md` is that era's brand notes, kept as history; the look today is `DESIGN.md`.

## Read first
- `DESIGN.md`: the look (option 1, Portada). It is the rulebook for every screen.
- `docs/PRD.md`: what the site does and does not do.
- `lib/site.ts`: all words and photos on the page. Haydee's answers change this file, not the layout.

## Stack
- Next.js 16 App Router, React 19, Tailwind 4, on Vercel (project `haydeecallejas`, team tekguyz). Push to `master` means live.
- One static page. `next/image` for every photo; photos are her Instagram pictures in `public/photos/` (sources in `docs/photo-sources.md`).
- Fonts by `next/font/google`: Bodoni Moda 800 upright for headings, Albert Sans 400/600 for text.
- Vitest: `npx vitest run <file>` while working, `npm run test:unit` before a commit. Never `npm test`.

## Rules for public text
- Spanish only, formal "usted", no exclamation marks, no urgency.
- Never a colour name ("varios tonos"). Never a price until Haydee confirms prices. The tests in `lib/site.test.ts` check both.
- No phone number in git. The WhatsApp number comes only from the Vercel setting `NEXT_PUBLIC_WHATSAPP_NUMBER`, which the founder enters. With no number, links open WhatsApp's own chooser.
- Anything not confirmed by Haydee (showroom city and hours, stockists, piece names) is shown as "por confirmar", never invented.
- Never write identity numbers, dates of birth or home addresses into these files.

## Domain and email
- `haydeecallejas.com` DNS is at GoDaddy and points at Vercel; the domain sits in the tekguyz Vercel team. TEKGUYZ manages DNS on her behalf; she owns it.
- Email `hc@haydeecallejas.com` runs on Google Workspace. Do not touch MX records.
- `haydeecallejas.net` is being retired; do not touch its DNS until it lapses.

## Open items (flag back to TEKGUYZ, do not resolve silently)
- Showroom city and hours, stockists (Shap Collective, Mukul Resort, Rancho Santana), piece and collection names: to confirm with Haydee.
- Prices: none on the site until she confirms them.
- Google Business Profile and a `LocalBusiness` address in the structured data: wait for the showroom answer.
- The 16 catalog pictures in tekguyz-one `theirs/catalog/`: not used until the founder confirms they are real photos.
