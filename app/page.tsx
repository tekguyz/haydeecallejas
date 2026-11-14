import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Designer } from "@/components/Designer";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">
        Ir al contenido
      </a>
      <Hero />
      <main id="contenido">
        <Catalog />
        <Designer />
        <Order />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
