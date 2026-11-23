"use client";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export function NutritionPanel({ product }: { product: Product }) {
  const rows = [
    { label: "Calories", value: product.nutrition.calories },
    { label: "Total Fat", value: product.nutrition.fat },
    { label: "Carbs", value: product.nutrition.carbs },
    { label: "Protein", value: product.nutrition.protein },
    { label: "Sodium", value: product.nutrition.sodium },
  ];

  return (
    <section className="bg-cream-deep px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-burgundy sm:text-4xl">
            The story behind the crunch
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">
            {product.story}
          </p>

          <h3 className="mt-8 font-display text-xl font-semibold text-ink">
            Perfect pairing
          </h3>
          <p className="mt-2 max-w-prose leading-relaxed text-muted">
            {product.pairing}
          </p>

          <h3 className="mt-8 font-display text-xl font-semibold text-ink">
            Ingredients
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, i) => (
              <motion.li
                key={ingredient}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-ink ring-1 ring-burgundy/10"
              >
                {ingredient}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(140,28,51,0.35)] ring-1 ring-burgundy/5 sm:p-8"
        >
          <div className="border-b-4 border-ink pb-3">
            <p className="font-display text-2xl font-bold text-ink">
              Nutrition Facts
            </p>
            <p className="text-sm text-muted">Per 28 g serving</p>
          </div>

          <dl className="mt-2 divide-y divide-ink/10">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-3"
              >
                <dt className="font-semibold text-ink">{row.label}</dt>
                <dd className="font-display text-lg font-semibold text-burgundy">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Values are indicative. See packaging for the exact nutritional
            panel of each batch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
