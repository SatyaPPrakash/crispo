"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";

const perks = [
  "Small-batch seasoning for bigger taste",
  "Zero greasy aftertaste — just clean crunch",
  "From classic salted to daring heat",
];

export function FlavorStory() {
  return (
    <section id="about" className="relative bg-cream">
      <div className="h-8 bg-burgundy" />
      <div className="relative bg-pink-soft py-20 md:py-24">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-1 h-8 text-burgundy"
          style={{
            background:
              "radial-gradient(circle at 16px 0, transparent 15px, currentColor 16px) left top / 32px 16px repeat-x",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 -bottom-1 h-8 rotate-180 text-cream"
          style={{
            background:
              "radial-gradient(circle at 16px 0, transparent 15px, currentColor 16px) left top / 32px 16px repeat-x",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-4 rounded-full bg-mustard/80 blur-sm" />
              <div className="relative overflow-hidden rounded-full border-[10px] border-mustard shadow-[0_20px_50px_-20px_rgba(140,28,51,0.35)]">
                <Image
                  src="/images/lifestyle-crunch.jpg"
                  alt="Someone enjoying CRISPO crisps"
                  width={640}
                  height={640}
                  className="aspect-square object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                From Classic to Bold, Every Bite Hits Different
              </h2>
              <p className="mt-5 max-w-md text-muted">
                We redesigned CRISPO around one idea: snacks should feel joyful
                the moment you open the bag — bright, bold, and unforgettable.
              </p>
              <ul className="mt-8 space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mustard text-sm font-bold text-ink">
                      ✓
                    </span>
                    <span className="font-semibold text-ink">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
