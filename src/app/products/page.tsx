import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, productIds } from "@/data/products";

export const metadata = {
  title: "Flavors — CRISPO",
  description:
    "Explore all CRISPO flavors — Classic Salted, Spicy Chili, Cheese Blast, Truffle Parmesan, Sour Cream Onion and BBQ Smoke.",
};

export default function Products() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-7xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                All Our Products
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted">
                Six crowd favorites, each with its own personality — and that
                CRISPO snap. Pick your crunch.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {productIds.map((id, i) => {
                const p = products[id];
                return (
                  <Reveal key={id} delay={0.06 * i}>
                    <ProductCard
                      image={p.image}
                      imageAlt={p.imageAlt}
                      name={p.name}
                      description={p.tagline}
                      accent={p.accent}
                      accentDeep={p.accentDeep}
                      chip={p.chip}
                      rating={p.rating}
                      href={`/products/${p.id}`}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
