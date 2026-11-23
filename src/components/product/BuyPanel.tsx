"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, type Product } from "@/data/products";

export function BuyPanel({ product }: { product: Product }) {
  const [selected, setSelected] = useState(
    product.variants.findIndex((v) => v.popular) || 0
  );
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = product.variants[selected];

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section id="buy" className="bg-cream px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            Choose your size
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Every pack is sealed fresh. Free shipping on orders over Rs 499.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {product.variants.map((v, i) => {
              const active = i === selected;
              return (
                <motion.button
                  key={v.size}
                  type="button"
                  onClick={() => setSelected(i)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-2xl border-2 p-4 text-left transition ${
                    active
                      ? "border-burgundy bg-white shadow-[0_10px_30px_-18px_rgba(140,28,51,0.5)]"
                      : "border-ink/10 bg-white/60 hover:border-burgundy/30"
                  }`}
                >
                  {v.popular && (
                    <span className="absolute -top-2.5 right-3 rounded-full bg-pink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-burgundy">
                      Popular
                    </span>
                  )}
                  <span className="block font-display text-lg font-semibold text-ink">
                    {v.size}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-burgundy">
                    {formatPrice(v.price)}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(140,28,51,0.4)] ring-1 ring-burgundy/5 sm:p-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-muted">Subtotal</p>
              <p className="font-display text-4xl font-semibold text-burgundy">
                {formatPrice(variant.price * qty)}
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-cream-deep p-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-9 w-9 place-items-center rounded-full bg-white font-bold text-burgundy shadow-sm transition hover:bg-mustard"
              >
                −
              </button>
              <span className="w-8 text-center font-bold text-ink">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(20, q + 1))}
                className="grid h-9 w-9 place-items-center rounded-full bg-white font-bold text-burgundy shadow-sm transition hover:bg-mustard"
              >
                +
              </button>
            </div>
          </div>

          <p className="mt-6 rounded-2xl bg-cream-deep px-4 py-3 text-sm text-muted">
            {variant.size} · {product.name}
          </p>

          <motion.button
            type="button"
            onClick={handleAdd}
            whileTap={{ scale: 0.98 }}
            className="relative mt-5 flex w-full items-center justify-center overflow-hidden rounded-full bg-burgundy px-6 py-4 font-bold text-white shadow-[0_8px_0_0_#5a0f20] transition hover:translate-y-[4px] hover:shadow-[0_4px_0_0_#5a0f20]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <span aria-hidden>✓</span> Added to cart
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="mt-4 text-center text-xs text-muted">
            Secure checkout · 30-day crunch-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
