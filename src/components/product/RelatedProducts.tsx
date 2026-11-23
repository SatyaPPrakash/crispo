"use client";

import { products, productIds } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export function RelatedProducts({ currentId }: { currentId: string }) {
  const related = productIds
    .filter((id) => id !== currentId)
    .slice(0, 3)
    .map((id) => products[id]);

  return (
    <section className="bg-cream px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            You might also crunch
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={0.08 * i}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
