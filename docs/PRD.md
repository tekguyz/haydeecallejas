# Haydee Callejas website: PRD

Short version of the spec `tekguyz-one/docs/superpowers/specs/2026-11-14-haydee-callejas-site-design.md` (issue tekguyz/tekguyz-one#158, 2026-11-14). The look is in `DESIGN.md`.

## Goals
1. A visitor sees a real designer with a story.
2. A visitor who wants a bag knows how to get it in one tap: each piece has "Pedir por WhatsApp", which opens a chat with the piece already named.
3. Built from her own photos and her own words, in Spanish.

## Not now
- No checkout, cart or payment. A real store (the Cart Reminders code, Shopify, Stripe) is kept for later; the piece data in `lib/site.ts` is shaped so it can move there.
- No prices until she confirms them. No blog, accounts or newsletter.

## Must never
- Look like the July 2026 site or a template shop.
- Show an invented fact, a colour name, a price, or put a phone number in git.

## Page
Hero, Colecciones, Las piezas (tabs by collection), Haydeé (story and timeline), a strip of her world, Cómo pedir la suya with Dónde verlas, footer. Details in `DESIGN.md`.

## Launch quality
- SEO from the start: title, description, canonical, Open Graph and Twitter card, `sitemap.xml`, `robots.txt` (blocks preview deploys), `Organization` structured data with no phone and no address.
- Vercel Analytics and Speed Insights.
- Lighthouse on a phone: Performance 90+, Accessibility 100, Best Practices 100, SEO 100.
