const columns = [
  {
    title: "Products",
    links: [
      { label: "Classic Salted", to: "/products/classic" },
      { label: "Spicy Chili", to: "/products/chili" },
      { label: "Cheese Blast", to: "/products/cheese" },
      { label: "Truffle Parmesan", to: "/products/truffle" },
      { label: "Sour Cream Onion", to: "/products/onion" },
      { label: "BBQ Smoke", to: "/products/bbq" },
    ],
  },
  {
    title: "About Us",
    links: [{ label: "Our Story", to: "/about" }],
  },
  {
    title: "Support",
    links: [{ label: "Contact", to: "/stores" }],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#141014] px-5 pt-16 pb-8 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-pink font-display text-lg font-bold text-burgundy">
              C
            </span>
            <span className="font-display text-2xl font-semibold">Crispo</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Crafted for crunch lovers. Bold flavors, joyful packaging, and
            snacks worth gathering around.
          </p>
          <div className="mt-5 flex gap-3">
            {["ig", "x", "yt"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-bold uppercase transition hover:bg-mustard hover:text-ink"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-lg font-medium">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-sm text-white/60 transition hover:text-mustard"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        id="recipes"
        className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/45"
      >
        © 2026 CRISPO. All rights reserved.
      </div>
    </footer>
  );
}
