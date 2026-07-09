import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-8 px-4 py-16 sm:px-6">
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
