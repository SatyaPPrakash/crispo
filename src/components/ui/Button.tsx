"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-mustard text-ink shadow-[0_8px_0_0_#e0b000] hover:shadow-[0_4px_0_0_#e0b000] hover:translate-y-[4px]",
  secondary:
    "bg-white text-ink border-2 border-ink/10 shadow-[0_6px_0_0_rgba(28,18,20,0.08)] hover:shadow-[0_3px_0_0_rgba(28,18,20,0.08)] hover:translate-y-[3px]",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
