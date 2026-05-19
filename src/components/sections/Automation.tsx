"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  MessageSquare,
  Workflow,
  Zap,
} from "lucide-react";

const icons = [Bot, MessageSquare, Zap, GitBranch, Workflow, MessageSquare];

export function Automation() {
  const { t } = useLanguage();

  return (
    <section id="automation" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[80px] md:h-96 md:w-96 md:blur-[100px]" />
      <motion.div className="pointer-events-none absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-purple-600/8 blur-[70px] md:h-80 md:w-80 md:blur-[100px]" />

      <div className="section-container relative">
        <SectionHeader
          label={t.automation.label}
          title={t.automation.title}
          subtitle={t.automation.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10"
          >
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {t.automation.whatTitle}
            </h3>
            <p className="mt-3 text-slate-400">{t.automation.whatDesc}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.automation.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(99,102,241,0.5)",
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300"
                  >
                    <Icon className="h-4 w-4 text-indigo-400" />
                    {item}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <motion.div className="glass-card flex h-full min-h-[240px] flex-col justify-center p-6 sm:min-h-[280px] sm:p-8 md:p-10">
              <div className="relative mx-auto h-48 w-full max-w-sm">
                {t.automation.nodes.map((label, i) => {
                  const positions = [
                    "top-0 left-0",
                    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "bottom-0 right-0",
                  ];
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      className={`absolute ${positions[i]} glass-card px-4 py-3 text-sm font-medium text-white shadow-glow-sm`}
                    >
                      {label}
                    </motion.div>
                  );
                })}

                <svg
                  className="absolute inset-0 h-full w-full text-indigo-500/30"
                  viewBox="0 0 300 200"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M40 30 Q150 100 260 170"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M260 30 Q150 100 40 170"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </div>

              <p className="mt-12 text-center text-sm text-slate-500">
                {t.automation.flowFooter}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
