"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";

const chips = [
  { top: "12%", left: "8%", rotate: -18, delay: 0 },
  { top: "18%", right: "6%", rotate: 22, delay: 0.3 },
  { bottom: "16%", left: "14%", rotate: 12, delay: 0.55 },
  { bottom: "10%", right: "12%", rotate: -28, delay: 0.2 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-cream pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 noise opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mustard/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display mb-3 text-3xl font-semibold tracking-tight text-pink sm:text-4xl"
          >
            CRISPO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-burgundy sm:text-5xl lg:text-6xl"
          >
            Feel the Ultimate Taste of Every Crisp
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            Bold flavors. Perfect crunch. CRISPO brings snack-time energy with
            premium crisps made for everyday celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/products">Explore Products</Button>
            <Button href="#stores" variant="secondary">
              Shop Now
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          <div className="absolute inset-[8%] rounded-full border border-mustard/50 animate-pulse-ring" />
          <div className="absolute inset-[16%] rounded-full border border-mustard/40 animate-pulse-ring [animation-delay:0.6s]" />
          <div className="absolute inset-[24%] rounded-full border border-mustard/30 animate-pulse-ring [animation-delay:1.2s]" />

          {chips.map((chip, i) => (
            <motion.span
              key={i}
              className="absolute z-10 h-10 w-14 rounded-[40%] bg-gradient-to-br from-mustard to-mustard-deep shadow-md animate-float"
              style={{
                top: chip.top,
                left: chip.left,
                right: chip.right,
                bottom: chip.bottom,
                rotate: `${chip.rotate}deg`,
                animationDelay: `${chip.delay}s`,
              }}
            />
          ))}

          <div className="relative z-20 mx-auto flex h-full w-[78%] items-center justify-center animate-float">
            <Image
              src="/images/hero-bag.jpg"
              alt="CRISPO chip bag"
              width={560}
              height={560}
              priority
              className="h-auto w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-20px_rgba(140,28,51,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
