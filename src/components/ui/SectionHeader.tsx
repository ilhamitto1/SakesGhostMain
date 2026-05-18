"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      <span className={`section-label ${isCenter ? "mx-auto" : ""}`}>
        {label}
      </span>
      <h2
        className={`section-title text-balance ${isCenter ? "mx-auto max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle text-balance ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
