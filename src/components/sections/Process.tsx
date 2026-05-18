"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />

      <div className="section-container relative">
        <SectionHeader
          label="Process"
          title="How SalesGhost Works"
          subtitle="A focused three-step approach from business analysis to live automation — no fluff, just systems that work."
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[16.66%] right-[16.66%] top-1/2 hidden h-px origin-left -translate-y-1/2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="glass-card flex h-full flex-col p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold gradient-text opacity-80">
                      {step.step}
                    </span>
                    {index < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="hidden h-5 w-5 text-indigo-400/50 lg:block" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                  <motion.div
                    className="mt-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  />
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="my-4 flex justify-center lg:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90 text-indigo-400/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
