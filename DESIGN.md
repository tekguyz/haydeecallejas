# Haydee Callejas website: design rules

The look the founder picked on 2026-11-14 (issue tekguyz/tekguyz-one#158): **option 1, Portada**, with his change that buttons are black and white and WhatsApp green appears only on the WhatsApp icon. The approved draft is `made/v4/opcion-1-portada.html`; its pictures are `made/v4/opcion-1-portada-desktop.jpg` and `-phone.jpg`. This file moves into the site repo (`tekguyz/haydeecallejas`) as its `DESIGN.md` when the build starts.

## The idea

A fashion-magazine cover built from her own photos. Her real pictures carry the page; type and colour stay out of their way. It must never look like the July 2026 site (quiet cream, thin serif) or a template shop with cut-outs on white tiles.

Two jobs, in this order on every screen: (1) show a real designer with a story, (2) make "I want that bag, how do I get it" one tap away.

## Five columns

| Column | Pick |
| --- | --- |
| Ground | Pure white `#fff`; one soft grey band `#f4f3f1` behind the pieces; black `#000` footer |
| Accent | Black only. WhatsApp green `#25d366` is used only as the fill of the WhatsApp icon, never as a background |
| Display font | Bodoni Moda, weight 800, upright (never italic), tight tracking `-0.015em` |
| Body font | Albert Sans, 400 and 600 |
| Shape | Square corners everywhere. Photos never rounded. Buttons are solid rectangles with a 2px border. The phone's floating WhatsApp button is the one round thing |

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#000` | Text, buttons, rules, footer |
| `--paper` | `#fff` | Page |
| `--band` | `#f4f3f1` | Pieces section |
| `--line` | `#d9d6d0` | Hairlines between rows |
| `--muted` | `#55524d` | Secondary text (passes AA on white and on `--band`) |
| `--wa` | `#25d366` | WhatsApp icon fill only |

## Buttons

- Default: black fill, white text, green icon. Hover: white fill, black text.
- On a photo (the hero): white fill, black text, green icon. Hover: clear fill, white text.
- Per-piece link: black text, 2px black underline, green icon, "Pedir por WhatsApp".
- Phone only: a 56px black circle, bottom right, green icon, no text, `aria-label="Escribir por WhatsApp"`.

## Page order

1. Hero: full-bleed photo (`theirs/instagram/pool-yute-tote.jpg`), white logo, nav, headline "Carteras de autor, hechas en Nicaragua", one line, "Pedir por WhatsApp" and "Ver las piezas".
2. Colecciones: five portrait photos with name and one line. Tapping one filters the pieces.
3. Las piezas: tabs by collection, 4 columns on a laptop, 2 on a phone. Each piece: photo, name, one line, "Pedir por WhatsApp".
4. Haydeé: her in her showroom doorway, her lead paragraph, the timeline (1991, 2000, 2016, 2023).
5. A strip of four photos of her world: boat, iguana, a client, the mural.
6. Cómo pedir la suya: three steps, the WhatsApp button, shipping line, email. Beside it, "Dónde verlas".
7. Footer: black, white logo, Instagram, Facebook, email.

## Words

Spanish only. Formal "usted". Restrained, no urgency, no exclamation marks. Never name a colour ("varios tonos"); at most two tones of one piece side by side. No prices until Haydee confirms them. No phone number in the code: the WhatsApp number is a Vercel setting.

## Known fixes for the build

- Phone hero: the headline sits over the tote. Crop the photo with the tote lower, or put a darker gradient under the text.
- The cover logo is small at 72px; draw the monogram larger and the name below it, or use the monogram alone in the header.
