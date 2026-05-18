"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { getServiceIcon } from "@/components/ui/IconMap";
import { INDUSTRY_CARDS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Industries"
          title="Built for Businesses That Need Results"
          subtitle="Whether you run a local salon or a growing SaaS — SalesGhost adapts AI systems to your industry and workflow."
          align="center"
        />

        <motion.div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRY_CARDS.map((industry, index) => {
            const Icon = getServiceIcon(industry.icon);
            return (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-white/[0.05] sm:rounded-2xl sm:p-4"
              >
                <div
                  className={`relative mb-3 flex h-14 items-center justify-center rounded-lg bg-gradient-to-br sm:h-16 sm:rounded-xl ${industry.gradient}`}
                >
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 sm:h-10 sm:w-10">
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${industry.accent}`} />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"
                    aria-hidden
                  />
                </div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {industry.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs sm:leading-relaxed">
                  {industry.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
