"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BUILT_EXPERIENCE_META } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  GraduationCap,
  PenTool,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  PenTool,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Store,
};

export function BuiltExperiences() {
  const { t } = useLanguage();

  return (
    <div className="mt-24 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-indigo-950/30 via-ghost-deep/50 to-purple-950/20 p-8 sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="section-label mx-auto">{t.builtExperiences.label}</span>
        <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          {t.builtExperiences.title}
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          {t.builtExperiences.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
          },
        }}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {BUILT_EXPERIENCE_META.map((item) => {
          const Icon = iconMap[item.icon] ?? Store;
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)" }}
              className="glass-card flex flex-col items-center gap-3 p-5 text-center transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-purple-500/15">
                <Icon className="h-5 w-5 text-indigo-300" />
              </div>
              <span className="text-sm font-medium text-slate-200">
                {t.builtExperiences.items[item.id]}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
