"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
  variant?: "default" | "whatsapp" | "instagram";
}

export function SocialIcon({
  href,
  label,
  children,
  variant = "default",
}: SocialIconProps) {
  const variantStyles = {
    default:
      "hover:border-indigo-500/40 hover:text-white hover:shadow-glow-sm",
    whatsapp:
      "hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_24px_rgba(37,211,102,0.35)]",
    instagram:
      "hover:border-purple-500/50 hover:text-purple-300 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-300 ${variantStyles[variant]}`}
    >
      {children}
    </motion.a>
  );
}
