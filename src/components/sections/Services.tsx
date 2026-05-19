"use client";

import { getServiceIcon } from "@/components/ui/IconMap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICE_META } from "@/lib/constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <SectionHeader
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICE_META.map((service) => {
            const Icon = getServiceIcon(service.icon);
            const copy = t.services.items[service.id];
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group glass-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-purple-500/15 ring-1 ring-indigo-500/20 transition group-hover:from-indigo-500/35 group-hover:to-purple-500/25">
                  <Icon className="h-6 w-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {copy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {copy.description}
                </p>
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
