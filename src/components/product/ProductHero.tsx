"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/data/products";

const floatChips = [
  { top: "10%", left: "6%", rotate: -18, delay: 0 },
  { top: "16%", right: "8%", rotate: 22, delay: 0.4 },
  { bottom: "14%", left: "12%", rotate: 12, delay: 0.7 },
  { bottom: "8%", right: "14%", rotate: -26, delay: 0.2 },
];

export function ProductHero({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-cream pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 noise opacity-40" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${product.accent}55` }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto mb-8 max-w-7xl px-5 md:px-8"
      >
        <nav className="flex items-center gap-2 text-sm font-semibold text-muted">
          <Link href="/" className="transition hover:text-burgundy">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/products" className="transition hover:text-burgundy">
            Products
          </Link>
          <span aria-hidden>/</span>
          <span className="text-burgundy">{product.name}</span>
        </nav>
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="dot" className="mb-4">
              ★ {product.rating}.0 · Fan favorite
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-burgundy sm:text-5xl lg:text-6xl"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-4 max-w-md text-lg font-semibold text-ink/80"
          >
            {product.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-md leading-relaxed text-muted"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-full bg-mustard px-7 py-3.5 font-semibold text-ink shadow-[0_8px_0_0_#e0b000] transition-all duration-200 hover:translate-y-[4px] hover:shadow-[0_4px_0_0_#e0b000] active:scale-[0.97]"
            >
              Grab a Bag
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-semibold text-ink shadow-[0_6px_0_0_rgba(28,18,20,0.08)] transition-all duration-200 hover:translate-y-[3px] hover:shadow-[0_3px_0_0_rgba(28,18,20,0.08)]"
            >
              All Products
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-[6%] rounded-full border border-mustard/50 animate-pulse-ring" />
          <div className="absolute inset-[15%] rounded-full border border-mustard/40 animate-pulse-ring [animation-delay:0.6s]" />
          <div className="absolute inset-[24%] rounded-full border border-mustard/30 animate-pulse-ring [animation-delay:1.2s]" />

          {floatChips.map((c, i) => (
            <span
              key={i}
              className="absolute z-10 h-9 w-12 rounded-[40%] shadow-md animate-float"
              style={{
                top: c.top,
                left: c.left,
                right: c.right,
                bottom: c.bottom,
                rotate: `${c.rotate}deg`,
                animationDelay: `${c.delay}s`,
                background: `linear-gradient(135deg, ${product.accent}, ${product.accentDeep})`,
              }}
            />
          ))}

          {/* Main product image */}
          <motion.div
            key={product.gallery[selectedImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 mx-auto flex h-full w-[62%] items-center justify-center animate-float"
          >
            <Image
              src={product.gallery[selectedImage]}
              alt={product.imageAlt}
              width={700}
              height={700}
              priority={selectedImage === 0}
              className="h-auto w-full object-contain drop-shadow-[0_18px_40px_-16px_rgba(140,28,51,0.35)]"
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="mt-4 flex items-center gap-2 justify-center">
            {product.gallery.map((img, i) => {
              const active = i === selectedImage;
              return (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelectedImage(i)}
                  className={`h-10 w-10 rounded-full object-cover transition ${active ? "ring-2 ring-burgundy ring-offset-2 ring-offset-white" : "opacity-60 hover:opacity-100 hover:scale-110"}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail`}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
