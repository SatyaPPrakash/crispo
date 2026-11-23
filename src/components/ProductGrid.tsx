"use client";

import Link from "next/link";
import { products, productIds } from "@/data/products";
import { ProductCard } from "./ui/ProductCard";
import { Reveal } from "./ui/Reveal";

export function ProductGrid() {
  return (
    <section id="products" className="bg-cream px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
              Top-Rated Products
            </h2>
            <p className="mt-4 text-muted">
              Six crowd favorites, each with its own personality — and that
              CRISPO snap.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productIds.map((id, i) => {
            const p = products[id];
            return (
              <Reveal key={p.id} delay={0.06 * i} as="article">
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

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-mustard px-7 py-3.5 font-semibold text-ink shadow-[0_8px_0_0_#e0b000] transition hover:translate-y-[4px] hover:shadow-[0_4px_0_0_#e0b000]"
            >
              View all products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
