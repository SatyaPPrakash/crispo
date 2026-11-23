"use client";

import { motion } from "framer-motion";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "dot";
};

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition";
  const styles = {
    default: "bg-mustard text-ink shadow-[0_4px_0_0_#e0b000]",
    outline: "border border-ink/20 bg-white/60 text-ink",
    dot: "bg-pink text-ink",
  };

  return (
    <motion.span
      whileTap={{ scale: 0.92 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
