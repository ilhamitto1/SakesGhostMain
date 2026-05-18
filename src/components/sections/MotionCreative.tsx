"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { MOTION_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Clapperboard, Play } from "lucide-react";

export function MotionCreative() {
  return (
    <section id="creative" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-ghost-black to-blue-950/20" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="Creative"
          title="Cinematic Product & Brand Content"
          subtitle="Beyond code — SalesGhost produces motion design and AI-powered creatives that make your product impossible to ignore."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOTION_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-xl ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl transition group-hover:bg-purple-500/30" />
              <motion.div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20">
                  {index === 0 ? (
                    <Play className="h-6 w-6 text-purple-300" />
                  ) : (
                    <Clapperboard className="h-6 w-6 text-purple-300" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </motion.div>

              {index === 0 && (
                <motion.div
                  className="mt-6 flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-ghost-deep to-purple-950/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-purple-500/30 backdrop-blur-sm"
                  >
                    <Play className="ml-1 h-6 w-6 fill-white text-white" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Motion reels · Product demos · Launch visuals · Social ad suites
        </motion.p>
      </div>
    </section>
  );
}
