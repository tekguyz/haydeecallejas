import type { Metadata, Viewport } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/JsonLd";
import { DESCRIPTION, SITE_URL, TITLE } from "@/lib/seo";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: "800", style: "normal", variable: "--font-bodoni", display: "swap" });
const albert = Albert_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-albert", display: "swap" });

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Una mujer camina con el tote de yute bordado Sagrado Corazón, con el logo de Haydee Callejas",
};

export const viewport: Viewport = { themeColor: "#000000" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_NI",
    siteName: "Haydee Callejas",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [ogImage.url] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bodoni.variable} ${albert.variable}`}>
      <body>
        {children}
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
