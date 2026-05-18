"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.span
              key={industry}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.4)",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
              }}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
