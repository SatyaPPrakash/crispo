"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Stores", href: "/stores" },
  { label: "Recipes", href: "/recipes" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-pink text-sm font-bold text-burgundy shadow-[0_4px_0_0_#e07aa8]">
            <span className="font-display text-lg leading-none">C</span>
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-burgundy">
            Crispo
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink/75 transition hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <IconButton label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton label="Cart">
            <CartIcon />
          </IconButton>
          <a
            href="#signin"
            className="rounded-full bg-mustard px-5 py-2.5 text-sm font-bold text-ink shadow-[0_5px_0_0_#e0b000] transition hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#e0b000]"
          >
            Sign In
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full bg-mustard lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-bold">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-ink/5 bg-cream px-5 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-semibold text-ink hover:bg-mustard/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function IconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-mustard text-ink shadow-[0_4px_0_0_#e0b000] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#e0b000]"
    >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h2l2.2 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L21 9H8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}
