"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Recipe = {
  id: string;
  name: string;
  accent: string;
  accentDeep: string;
  description: string;
  time: string;
  serves: string;
  ingredients: string[];
  steps: string[];
  badge: string;
};

export const recipes: Recipe[] = [
  {
    id: "nachos",
    name: "Crunchy BBQ Nachos",
    accent: "#8C1C33",
    accentDeep: "#5A0F20",
    description:
      "Loaded tortilla chips with crushed BBQ crisps, melty cheese, jalapeños and ranch drizzle.",
    time: "20 min",
    serves: "4",
    ingredients: [
      "Tortilla chips",
      "BBQ Smoke crisps (crushed)",
      "Shredded cheddar",
      "Pickled jalapeños",
      "Ranch dressing",
    ],
    steps: [
      "Spread tortilla chips on a baking sheet.",
      "Sprinkle cheese and crushed BBQ crisps over the top.",
      "Bake until melted, then top with jalapeños and ranch.",
    ],
    badge: "Party favorite",
  },
  {
    id: "chicken",
    name: "Cheese-Crusted Chicken",
    accent: "#F5B731",
    accentDeep: "#D48A12",
    description:
      "Chicken tenders coated in crushed Cheese Blast crisps, baked golden and crispy.",
    time: "35 min",
    serves: "2",
    ingredients: [
      "Chicken tenders",
      "Cheese Blast crisps (finely crushed)",
      "Egg wash",
      "Flour",
      "Fresh parsley",
    ],
    steps: [
      "Crush Cheese Blast crisps into fine crumbs.",
      "Dredge tenders in flour, egg, then crushed crisps.",
      "Bake at 200 °C / 400 °F for 20–25 minutes.",
      "Garnish with parsley and serve with dip.",
    ],
    badge: "Kid approved",
  },
  {
    id: "bowl",
    name: "Spicy Crunch Bowl",
    accent: "#E24B3B",
    accentDeep: "#B5281C",
    description:
      "Rice bowl with spicy chili crisps, avocado, corn, black beans and lime crema.",
    time: "15 min",
    serves: "1",
    ingredients: [
      "Cooked rice",
      "Spicy Chili crisps",
      "Avocado",
      "Black beans",
      "Corn",
      "Lime crema",
    ],
    steps: [
      "Scoop rice into a bowl.",
      "Top with beans, corn, avocado and chili crisps.",
      "Drizzle with lime crema and eat straight away.",
    ],
    badge: "Quick lunch",
  },
];

export function RecipeGrid() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-10 md:grid-cols-3">
      {recipes.map((recipe) => {
        const open = openId === recipe.id;
        return (
          <article
            key={recipe.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_50px_-24px_rgba(140,28,51,0.25)] ring-1 ring-burgundy/5 transition hover:shadow-[0_24px_60px_-24px_rgba(140,28,51,0.35)]"
          >
            <div className="relative h-48 overflow-hidden">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: `${recipe.accent}20` }}
              >
                <div
                  className="relative grid h-32 w-32 place-items-center rounded-full bg-white shadow-lg"
                  style={{ boxShadow: `0 0 0 8px ${recipe.accentDeep}20` }}
                >
                  <span className="text-6xl" aria-hidden>
                    🥨
                  </span>
                </div>
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-burgundy shadow-sm">
                {recipe.badge}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  {recipe.time}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                  {recipe.serves}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink transition group-hover:text-burgundy">
                {recipe.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {recipe.description}
              </p>

              <button
                type="button"
                onClick={() => setOpenId(open ? null : recipe.id)}
                aria-expanded={open}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-cream-deep px-3 py-1.5 text-xs font-bold text-burgundy transition hover:bg-mustard"
              >
                {open ? "Hide recipe" : "See how it's made"}{" "}
                <span
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="recipe-detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden border-t border-cream-deep bg-white/40"
                >
                  <div className="grid gap-4 p-5">
                    <div>
                      <h4 className="mb-2 font-semibold text-ink">
                        Ingredients
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {recipe.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="rounded-full bg-mustard/15 px-3 py-1.5 text-xs font-semibold text-ink"
                          >
                            {ing}
                          </span>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-ink">Steps</h4>
                      <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-muted">
                        {recipe.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <Link
                      href="/products"
                      className="mt-1 inline-block w-fit rounded-full bg-mustard px-5 py-2 text-sm font-bold text-ink shadow-[0_4px_0_0_#e0b000] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#e0b000]"
                    >
                      Shop this flavor
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
