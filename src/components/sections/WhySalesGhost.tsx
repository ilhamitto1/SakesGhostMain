"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function WhySalesGhost() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label={t.why.label}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.why.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card group p-7"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
