import type { Metadata, Viewport } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: "800", style: "normal", variable: "--font-bodoni", display: "swap" });
const albert = Albert_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-albert", display: "swap" });

const title = "Haydee Callejas · Carteras de autor, hechas en Nicaragua";
const description =
  "Carteras de cuero genuino y pieles exóticas, diseñadas por Haydeé Callejas y hechas a mano en Nicaragua. Pedidos por WhatsApp.";

export const viewport: Viewport = { themeColor: "#000000" };

export const metadata: Metadata = { title, description };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bodoni.variable} ${albert.variable}`}>
      <body>{children}</body>
    </html>
  );
}
