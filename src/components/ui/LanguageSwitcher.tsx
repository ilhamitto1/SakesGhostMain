"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/locales";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  className?: string;
  onSelect?: () => void;
}

export function LanguageSwitcher({
  className = "",
  onSelect,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  const options: { code: Locale; label: string; aria: string }[] = [
    { code: "en", label: "EN", aria: t.a11y.switchToEn },
    { code: "az", label: "AZ", aria: t.a11y.switchToAz },
  ];

  return (
    <motion.div
      role="group"
      aria-label="Language"
      className={`inline-flex shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-0.5 ${className}`}
    >
      {options.map(({ code, label, aria }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-label={aria}
            aria-pressed={active}
            onClick={() => {
              setLocale(code);
              onSelect?.();
            }}
            className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </motion.div>
  );
}
