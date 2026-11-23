"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type ProductCardProps = {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  accent: string;
  accentDeep: string;
  chip: string;
  rating: number;
  href: string;
  className?: string;
};

export function ProductCard({
  image,
  imageAlt,
  name,
  description,
  accent,
  accentDeep,
  chip,
  rating,
  href,
  className = "",
}: ProductCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className={`group flex h-full flex-col items-center rounded-[2rem] bg-white/70 px-6 pb-7 pt-4 text-center shadow-[0_10px_40px_-24px_rgba(140,28,51,0.35)] ring-1 ring-burgundy/5 transition-all duration-300 ${className}`}
      >
        <div className="relative mb-2 flex h-56 w-full items-end justify-center">
          <div className="absolute bottom-6 h-36 w-36 rounded-full border border-mustard/40" />
          <div className="absolute bottom-10 h-28 w-28 rounded-full border border-mustard/30" />
          <div className="absolute bottom-14 h-20 w-20 rounded-full border border-mustard/20" />

          <motion.div
            className={`relative z-10 w-36 rounded-full p-2 transition duration-300 group-hover:scale-105`}
            style={{ backgroundColor: `${accent}20`, boxShadow: `0 18px 30px -12px ${accentDeep}66` }}
            whileHover={{ rotate: [-2, 2, 0] }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={240}
              height={240}
              className="h-auto w-auto rounded-full object-contain"
              priority={false}
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: chip }}
            aria-hidden
          />
          <h3 className="font-display text-2xl font-semibold text-ink">
            {name}
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted">{description}</p>

        <div className="mt-3 flex items-center justify-center gap-1 text-mustard" aria-hidden>
          {Array.from({ length: 5 }).map((_, star) => (
            <span
              key={star}
              className={star < rating ? "opacity-100" : "opacity-25"}
            >
              ★
            </span>
          ))}
        </div>

        <span className="mt-5 w-full rounded-full bg-mustard px-5 py-3 text-sm font-bold text-ink shadow-[0_6px_0_0_#e0b000] transition group-hover:translate-y-[3px] group-hover:shadow-[0_3px_0_0_#e0b000]">
          View Flavor
        </span>
      </motion.div>
    </Link>
  );
}
