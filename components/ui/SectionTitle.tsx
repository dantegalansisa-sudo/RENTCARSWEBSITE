"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className="text-[var(--color-accent)] font-[family-name:var(--font-dm-sans)] font-semibold text-sm tracking-[3px] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase ${
          light ? "text-neutral-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed font-[family-name:var(--font-dm-sans)] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-neutral-600" : "text-[var(--color-text-secondary)]"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
