import { BRAND } from "./site";

export const SITE_URL = "https://haydeecallejas.com";

export const TITLE = "Haydee Callejas · Carteras de autor, hechas en Nicaragua";
export const DESCRIPTION =
  "Carteras de cuero genuino y pieles exóticas, diseñadas por Haydeé Callejas y hechas a mano en Nicaragua. Pedidos por WhatsApp.";

/** Organization structured data. No telephone and no address until Haydee confirms them. */
export function siteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/og.jpg`,
    description: DESCRIPTION,
    email: BRAND.email,
    sameAs: [BRAND.instagram, BRAND.facebook],
    founder: { "@type": "Person", name: BRAND.designer, jobTitle: "Diseñadora" },
  };
}
