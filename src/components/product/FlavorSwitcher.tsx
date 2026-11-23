"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products, productIds } from "@/data/products";

export function FlavorSwitcher({ currentId }: { currentId: string }) {
  return (
    <section className="bg-cream px-5 pb-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted">
          Pick your crunch
        </p>
        <div className="flex flex-wrap gap-3">
          {productIds.map((id) => {
            const p = products[id];
            const active = id === currentId;

            return (
              <Link key={id} href={`/products/${id}`} aria-current={active}>
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ring-1 transition ${
                    active
                      ? "bg-burgundy text-white ring-burgundy shadow-[0_6px_0_0_#5a0f20]"
                      : "bg-white text-ink ring-ink/10 hover:ring-burgundy/40"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: p.accent }}
                  />
                  {p.name}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
