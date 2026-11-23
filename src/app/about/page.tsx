import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Our Story — CRISPO",
  description:
    "The story behind CRISPO — premium potato crisps built for bold flavors, joyful packaging, and snacks worth gathering around.",
};

const values = [
  {
    title: "Bold flavor",
    description:
      "We season in small batches so every chip tastes like the first one out of the bag.",
  },
  {
    title: "Clean crunch",
    description:
      "No greasy aftertaste — just a satisfying snap you can hear across the room.",
  },
  {
    title: "Joyful packaging",
    description:
      "Bright bags, bold colors, and a brand that doesn't take itself too seriously.",
  },
];

const milestones = [
  { year: "2024", title: "First bake", text: "CRISPO is born in a tiny kitchen with one goal: better crunch." },
  { year: "2025", title: "Six flavors", text: "From Classic Salted to Truffle Parmesan, the lineup grows." },
  { year: "2026", title: "Nationwide", text: "CRISPO bags land on shelves and doorsteps across the country." },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative isolate overflow-hidden bg-cream px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32"
        >
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-mustard/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:flex lg:items-center lg:gap-16">
            <Reveal className="lg:w-1/2">
              <div className="relative mx-auto aspect-square w-full max-w-xs">
                <div className="absolute inset-[10%] rounded-full border border-mustard/50 animate-pulse-ring" />
                <div className="absolute inset-[22%] rounded-full border border-pink/40 animate-pulse-ring [animation-delay:0.8s]" />
                <div className="relative z-10 mx-auto flex h-full w-full items-center justify-center animate-float">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full"
                    aria-hidden
                  >
                    <circle cx="100" cy="100" r="88" fill="#FFD130" />
                    <circle cx="100" cy="100" r="82" fill="#F0A800" />
                    <path
                      d="M62 100a38 38 0 1 0 76 0 38 38 0 0 0-76 0z"
                      fill="#E8B84A"
                    />
                    <ellipse cx="86" cy="92" rx="12" ry="8" fill="#fff" opacity="0.3" />
                    <text
                      x="100"
                      y="106"
                      textAnchor="middle"
                      fill="#8C1C33"
                      fontSize="22"
                      fontWeight="800"
                      fontFamily="Fredoka, sans-serif"
                    >
                      C
                    </text>
                  </svg>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:w-1/2">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                Built for the crunch lovers
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                CRISPO started with one question: why do snacks have to choose
                between bold flavor and a clean crunch? We said they don&apos;t.
              </p>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                Every bag is seasoned in small batches, sealed fresh, and
                designed to be passed around — never hoarded.
              </p>
              <div className="mt-10 flex gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-mustard px-7 py-3.5 font-semibold text-ink shadow-[0_8px_0_0_#e0b000] transition hover:translate-y-[4px]"
                >
                  Shop Flavors
                </Link>
                <Link
                  href="/recipes"
                  className="rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-semibold text-ink transition hover:translate-y-[3px]"
                >
                  Browse Recipes
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-burgundy px-5 py-24 text-white md:px-8 md:py-32">
          <div className="pointer-events-none absolute -left-12 top-16 h-64 w-64 rounded-[45%] border-[16px] border-white/5 rotate-12" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-[40%] border-[20px] border-white/5 -rotate-6" />

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-5xl">
                What we stand for
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
                Three promises in every bag.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={0.08 * i}>
                  <article
                    className="relative rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-white/10">
                      <span className="text-2xl">{i === 0 ? "🌶️" : i === 1 ? "⚡" : "✨"}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                Our journey so far
              </h2>
            </Reveal>

            <div className="mt-14 relative pb-12">
              {/* Timeline connector line */}
              <div className="absolute left-3 top-6 bottom-0 w-1 bg-mustard/20" />

              {milestones.map((m, i) => (
                <Reveal
                  key={m.year}
                  delay={0.1 * i}
                  className="relative min-h-[120px] pl-12 pb-8"
                >
                  <div className="absolute left-0 top-3 h-8 w-8 rounded-full bg-mustard border-4 border-cream ring-8 ring-burgundy z-10" />
                  <time className="block mb-1 text-xs font-bold uppercase tracking-wider text-burgundy">
                    {m.year}
                  </time>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {m.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
