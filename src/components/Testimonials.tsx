"use client";

import { Reveal } from "./ui/Reveal";

const reviews = [
  {
    name: "Aisha K.",
    role: "Snack curator",
    quote:
      "The redesign matches the crunch — bright, bold, and impossible to share once you open a bag.",
    initials: "AK",
  },
  {
    name: "Marco L.",
    role: "Weekend host",
    quote:
      "Truffle Parmesan disappeared first at our party. CRISPO somehow made gourmet feel fun.",
    initials: "ML",
  },
  {
    name: "Priya S.",
    role: "Flavor hunter",
    quote:
      "Spicy Chili has the perfect slow burn. Packaging looks as good as it tastes.",
    initials: "PS",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-deep px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
            What Our Customers Say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={0.1 * i}>
              <article className="h-full rounded-3xl bg-white p-6 shadow-[0_16px_40px_-24px_rgba(240,184,0,0.85)] ring-1 ring-mustard/30">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-pink font-bold text-burgundy">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-ink">{review.name}</p>
                    <p className="text-xs text-muted">{review.role}</p>
                  </div>
                </div>
                <div className="mt-3 text-mustard">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  “{review.quote}”
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
