// Every word and photo on the page. Haydee's answers change this file, not the layout.
// Rules (checked by site.test.ts): Spanish, formal "usted", no colour names, no prices, no phone numbers.
// Piece names follow her own captions where she named them; the rest are working names to confirm with her.
// Photos are hers, from her public Instagram (docs/photo-sources.md), in public/photos/.

export type Collection = { id: string; name: string; line: string; photo: string };
export type Piece = { name: string; collection: string; photo: string; note: string };
export type StoryItem = { year: string; title: string; text: string };
export type Place = { name: string; detail: string };
export type Photo = { photo: string; alt: string };

export const BRAND = {
  name: "Haydee Callejas",
  designer: "Haydeé Callejas Montealegre",
  email: "hc@haydeecallejas.com",
  instagram: "https://www.instagram.com/haydeecallejas/",
  facebook: "https://www.facebook.com/HaydeeCallejas/",
};

export const HERO: Photo & { title: string; line: string } = {
  photo: "pool-yute-tote.jpg",
  alt: "Una mujer camina junto a una piscina con el tote de yute bordado Sagrado Corazón",
  title: "Carteras de autor, hechas en Nicaragua",
  line: "Cuero genuino y pieles exóticas, diseñadas por Haydeé Callejas y hechas a mano con maestros artesanos.",
};

export const COLLECTIONS: Collection[] = [
  { id: "florence", name: "Florence", line: "Siluetas amplias en cuero, en pitón y en animal print.", photo: "florence-python.jpg" },
  { id: "essentials", name: "Essentials", line: "Cuero italiano, líneas limpias, lo justo para el día.", photo: "telefoneras-four.jpg" },
  { id: "yute", name: "Yute bordado", line: "Yute con bordados hechos a mano. Cada una es única.", photo: "yute-sacred-heart-tote.jpg" },
  { id: "exoticas", name: "Pieles exóticas", line: "Pitón y cocodrilo, en ediciones pequeñas.", photo: "python-group.jpg" },
  { id: "minis", name: "Minis", line: "Gigi, metálicas y bandoleras para la noche.", photo: "gigi-scarf.jpg" },
];

export const PIECES: Piece[] = [
  { name: "Tote de yute Sagrado Corazón", collection: "yute", photo: "yute-sacred-heart-tote.jpg", note: "Bordado a mano" },
  { name: "Florence en pitón", collection: "florence", photo: "florence-python.jpg", note: "Piel exótica" },
  { name: "Gigi mini bag", collection: "minis", photo: "gigi-scarf.jpg", note: "Varios tonos" },
  { name: "Telefonera Essentials", collection: "essentials", photo: "telefonera.jpg", note: "Cuero italiano" },
  { name: "Florence animal print", collection: "florence", photo: "florence-tote-leopard.jpg", note: "Cuero" },
  { name: "Cartera pitón", collection: "exoticas", photo: "python-tote-red.jpg", note: "Piel exótica" },
  { name: "Bolso cubo", collection: "essentials", photo: "bucket-bag-seated.jpg", note: "Cuero italiano" },
  { name: "Mini metálica", collection: "minis", photo: "metallic-mini.jpg", note: "Para la noche" },
  { name: "Tote calado", collection: "exoticas", photo: "cutout-tote-rocks.jpg", note: "Cuero cortado a mano" },
  { name: "Florence", collection: "florence", photo: "florence-tote-plain.jpg", note: "Cuero" },
  { name: "Bandolera acolchada", collection: "minis", photo: "quilted-crossbody.jpg", note: "Cuero" },
  { name: "Gigi croco", collection: "minis", photo: "gigi-croc-palm.jpg", note: "Grabado cocodrilo" },
];

export const DESIGNER: Photo & { lead: string } = {
  photo: "haydee-showroom-door.jpg",
  alt: "Haydeé Callejas en la puerta de su showroom",
  lead: "Nació en Chinandega y se formó en Nicaragua, Estados Unidos y Europa. Diseña carteras de lujo para usar todos los días: cómodas, con glamour, para la mujer que lo hace todo.",
};

export const STORY: StoryItem[] = [
  { year: "1991", title: "Arte de Vivir", text: "Como agregada cultural organiza, con apoyo de la UNESCO, muestras de pintura centroamericana. Ahí nace su manera de ver lo nuestro." },
  { year: "2000", title: "Con los artesanos", text: "Empieza a diseñar mano a mano con maestros artesanos del cuero, en pieles exóticas." },
  { year: "2016", title: "Madrid", text: "Finalista de la Bienal Iberoamericana de Diseño, en Matadero Madrid, con la Colección Carla." },
  { year: "2023", title: "Su showroom", text: "Abre el showroom Haydee Callejas, su casa para recibir a sus clientas." },
];

export const STRIP: Photo[] = [
  { photo: "bags-on-boat.jpg", alt: "Carteras sobre una lancha pintada a mano" },
  { photo: "cutout-tote-iguana.jpg", alt: "Tote calado sobre una roca, junto a una iguana" },
  { photo: "bucket-bag-smile.jpg", alt: "Una clienta sonríe con su bolso cubo" },
  { photo: "wallets-mural.jpg", alt: "Billeteras de cuero sobre un mural nicaragüense" },
];

export const STEPS: string[] = [
  "Elija la pieza y toque «Pedir por WhatsApp».",
  "Le contamos qué tonos hay y cuándo está lista.",
  "Se la enviamos, o la recoge en el showroom.",
];

export const SHIPPING = "Envíos a toda Nicaragua.";

// Not yet confirmed by Haydee: showroom city and hours, and the three stockists (named in her May 2026 captions).
export const PLACES: Place[] = [
  { name: "Showroom Haydee Callejas", detail: "Ciudad y horario por confirmar" },
  { name: "Shap Collective", detail: "Tienda aliada, por confirmar" },
  { name: "Mukul Resort", detail: "Tienda aliada, por confirmar" },
  { name: "Rancho Santana", detail: "Tienda aliada, por confirmar" },
];

/** Collections that have at least one piece, so a tab never opens an empty grid. */
export function visibleCollections(collections: Collection[] = COLLECTIONS, pieces: Piece[] = PIECES): Collection[] {
  const used = new Set(pieces.map((p) => p.collection));
  return collections.filter((c) => used.has(c.id));
}
