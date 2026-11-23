"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cream px-5 py-20 text-center md:px-8">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-mustard/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/2 translate-x-1/2 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-mustard p-4 shadow-[0_10px_30px_-10px_rgba(240,184,0,0.35)]"
        >
          <span className="text-4xl">😅</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl"
        >
          Oops, this crunch went missing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-4 text-muted max-w-sm mx-auto"
        >
          The page you&apos;re looking for isn&apos;t here — but our snacks are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-mustard px-7 py-3.5 font-semibold text-ink shadow-[0_8px_0_0_#e0b000] transition hover:translate-y-[4px] hover:shadow-[0_4px_0_0_#e0b000]"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-semibold text-ink shadow-[0_6px_0_0_rgba(28,18,20,0.08)] transition hover:translate-y-[3px] hover:shadow-[0_3px_0_0_rgba(28,18,20,0.08)]"
          >
            Browse Products
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
