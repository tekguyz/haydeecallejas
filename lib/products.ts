export type Variant = {
  colorLabel: string;
  imageUrl: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Which variant is pre-selected on load — independent of the order variants are listed/displayed in. */
  defaultColorLabel: string;
  variants: Variant[];
};

export const products: Product[] = [
  {
    id: "mini-bag-crossbody",
    name: "Mini bag crossbody",
    description: "Gamuza italiana. Tacto suave, ideal para uso diario.",
    price: 95,
    defaultColorLabel: "Caramelo",
    variants: [
      {
        colorLabel: "Fucsia",
        imageUrl: "/images/products/crossbody-violet.jpg",
      },
      {
        colorLabel: "Caramelo",
        imageUrl: "/images/products/crossbody-brown.jpg",
      },
      {
        colorLabel: "Nude",
        imageUrl: "/images/products/crossbody-cream.jpg",
      },
    ],
  },
  {
    id: "cartera-corazon",
    name: "Cartera corazón",
    description: "Cuero italiano genuino. Diseño llamativo, acabado sobrio.",
    price: 125,
    defaultColorLabel: "Negro",
    variants: [
      {
        colorLabel: "Rojo",
        imageUrl: "/images/products/heart-red.jpg",
      },
      {
        colorLabel: "Caramelo",
        imageUrl: "/images/products/heart-brown.jpg",
      },
      {
        colorLabel: "Negro",
        imageUrl: "/images/products/heart-black.jpg",
      },
      {
        colorLabel: "Plateado",
        imageUrl: "/images/products/heart-silver.jpg",
      },
    ],
  },
  {
    id: "telefonera-estilo-1",
    name: "Telefonera cuero",
    description: "Cuero italiano genuino. Compacta, ideal para lo esencial.",
    price: 95,
    defaultColorLabel: "Azul bebé",
    variants: [
      {
        colorLabel: "Azul bebé",
        imageUrl: "/images/products/telefonera1-grey.jpg",
      },
      {
        colorLabel: "Naranja",
        imageUrl: "/images/products/telefonera1-orange.jpg",
      },
      {
        colorLabel: "Verde",
        imageUrl: "/images/products/telefonera1-green.jpg",
      },
      {
        colorLabel: "Nude",
        imageUrl: "/images/products/telefonera1-cream.jpg",
      },
    ],
  },
  {
    id: "telefonera-estilo-2",
    name: "Telefonera rafia",
    description: "Cuero italiano genuino y rafia. Textura natural, toque artesanal.",
    price: 95,
    defaultColorLabel: "Fucsia",
    variants: [
      {
        colorLabel: "Fucsia",
        imageUrl: "/images/products/telefonera2-violet.jpg",
      },
    ],
  },
];
