"use client";

import { Reveal } from "./ui/Reveal";

const features = [
  {
    title: "Premium Ingredients",
    description:
      "Hand-selected potatoes and clean spices for a crisp that tastes handmade.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <circle cx="24" cy="24" r="22" fill="#FFD130" />
        <path
          d="M16 25l5 5 11-12"
          stroke="#8C1C33"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description:
      "Fresh bags land at your door before the craving cools off.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <rect x="4" y="16" width="28" height="16" rx="3" fill="#FF9F43" />
        <path d="M32 22h8l4 6v4h-12V22z" fill="#FFD130" />
        <circle cx="14" cy="34" r="4" fill="#fff" />
        <circle cx="36" cy="34" r="4" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Loved Nationwide",
    description:
      "Millions of crunchy moments shared across kitchens and game nights.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path
          d="M24 40s-14-8.5-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 9.5-14 18-14 18z"
          fill="#F49AC1"
        />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-burgundy px-5 py-20 text-white md:px-8 md:py-24">
      <div className="pointer-events-none absolute -left-10 top-8 h-64 w-64 rounded-[45%] border-[18px] border-white/5 rotate-12" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-[40%] border-[22px] border-white/5 -rotate-6" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Why Choose CRISPO?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            Every bag is tuned for flavor, freshness, and that signature snap.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.1 * i}>
              <article className="rounded-3xl bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="font-display text-2xl font-medium">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
