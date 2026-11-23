"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type Store = {
  id: string;
  name: string;
  city: string;
  address: string;
  tags: string[];
};

export const stores: Store[] = [
  {
    id: "1",
    name: "FreshMart Downtown",
    city: "Portland",
    address: "124 Main St, Portland, OR",
    tags: ["Snacks aisle", "Endcap"],
  },
  {
    id: "2",
    name: "Green Basket",
    city: "Seattle",
    address: "318 Pike Pl, Seattle, WA",
    tags: ["Organic section", "Front display"],
  },
  {
    id: "3",
    name: "Corner Pantry",
    city: "Austin",
    address: "902 S Congress Ave, Austin, TX",
    tags: ["Register display"],
  },
  {
    id: "4",
    name: "Sunny Grocer",
    city: "Denver",
    address: "55 Union Blvd, Denver, CO",
    tags: ["Snacks aisle"],
  },
  {
    id: "5",
    name: "Big Value Foods",
    city: "Chicago",
    address: "1100 N Milwaukee Ave, Chicago, IL",
    tags: ["Bulk aisle"],
  },
  {
    id: "6",
    name: "Harbor Market",
    city: "Boston",
    address: "220 Newbury St, Boston, MA",
    tags: ["Front display"],
  },
];

const retailers = [
  { name: "Amazon", logo: "AMZN" },
  { name: "Walmart", logo: "WM" },
  { name: "Target", logo: "TGT" },
  { name: "Whole Foods", logo: "WF" },
  { name: "Instacart", logo: "IC" },
];

const pinPositions = [
  { left: "28%", top: "32%" },
  { left: "62%", top: "24%" },
  { left: "44%", top: "58%" },
  { left: "18%", top: "68%" },
  { left: "74%", top: "52%" },
  { left: "52%", top: "76%" },
];

export function StoreLocator() {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-cream px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
      <div className="relative mx-auto max-w-3xl">
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Search city or store…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full rounded-full border-2 border-ink/10 bg-white px-6 py-4 text-base font-semibold text-ink shadow-lg focus:outline-none focus:border-burgundy transition"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-sm font-semibold">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_420px] mt-16">
        <div className="relative h-[420px]">
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-30px_rgba(140,28,51,0.3)] ring-1 ring-burgundy/5 bg-cream-deep flex items-center justify-center text-muted text-sm font-semibold"
          >
            Map preview — tap a store pin to see details
          </div>
          {filtered.map((store, i) => {
            const pos = pinPositions[i % pinPositions.length];
            return (
              <motion.div
                key={store.id}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHovered(store.id)}
                onMouseLeave={() => setHovered(null)}
                className={`absolute rounded-full bg-white shadow-lg transition-all duration-300 border-2 ${
                  hovered === store.id ? "ring-4 ring-burgundy" : "ring-transparent"
                }`}
                style={{ left: pos.left, top: pos.top, width: 12, height: 12 }}
              >
                <div className="absolute -top-10 -left-10 hidden group-hover:flex w-48 rounded-xl bg-white px-3 py-2 text-xs font-bold text-ink shadow-xl border border-ink/10">
                  {store.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-6">
          {filtered.length === 0 ? (
            <div className="rounded-[2rem] bg-white p-12 text-center shadow-lg ring-1 ring-burgundy/5">
              <p className="text-xl font-semibold text-ink">No stores found</p>
              <p className="mt-2 text-muted">
                Try a different city or check our online retailers below.
              </p>
            </div>
          ) : (
            filtered.map((store) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: -6 }}
                className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-burgundy/5 transition hover:shadow-[0_20px_40px_-20px_rgba(140,28,51,0.25)]"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-display text-lg font-bold text-ink">
                    {store.name}
                  </p>
                  <p className="text-sm font-semibold text-burgundy">
                    {store.city}
                  </p>
                </div>
                <p className="mt-2 text-xs text-muted">
                  {store.address}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {store.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream-deep px-3 py-1 text-[10px] font-bold uppercase text-burgundy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <div className="mt-20 mb-16 bg-burgundy rounded-[2rem] px-5 py-16 text-center text-white md:px-8 md:py-24 sm:rounded-[3rem]">
        <div className="pointer-events-none absolute -left-12 top-16 h-64 w-64 rounded-[45%] border-[16px] border-white/5 rotate-12" />
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Order online
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Prefer delivery? CRISPO ships straight to your door.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {retailers.map((r) => (
            <a
              key={r.name}
              href="#"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 flex flex-col items-center gap-2 transition group hover:bg-white/10 hover:border-white/40"
            >
              <span className="text-2xl font-bold text-mustard group-hover:scale-110 transition-transform">
                {r.logo}
              </span>
              <span className="text-sm font-semibold">{r.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
