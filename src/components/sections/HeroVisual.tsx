"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BarChart3,
  Bot,
  Calendar,
  Globe,
  Instagram,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function MiniBar({ height }: { height: string }) {
  return (
    <motion.div
      className="w-2 rounded-full bg-gradient-to-t from-indigo-600 to-purple-400"
      style={{ height }}
    />
  );
}

export function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative mx-auto w-full max-w-5xl"
      style={{ perspective: 1200 }}
    >
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-600/25 via-purple-600/30 to-blue-600/20 blur-3xl" />

      <motion.div style={{ rotateX, rotateY }} className="relative">
        <motion.div className="glass-card overflow-hidden p-2 sm:p-3">
          <div className="relative aspect-[16/10] min-h-[240px] overflow-hidden rounded-xl bg-gradient-to-br from-[#06060e] via-ghost-deep to-[#0b1020] sm:min-h-[300px] md:min-h-[360px]">
            <motion.div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)
                `,
                backgroundSize: "36px 36px",
              }}
              animate={{ backgroundPosition: ["0 0", "36px 36px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute left-1/2 top-[14%] z-10 h-20 w-20 -translate-x-1/2 sm:h-28 sm:w-28"
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 50px rgba(99,102,241,0.45)",
                  "0 0 70px rgba(139,92,246,0.55)",
                  "0 0 50px rgba(99,102,241,0.45)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-600" />
              <div className="absolute inset-2 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                <Sparkles className="h-7 w-7 text-white sm:h-9 sm:w-9" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-[6%] top-[12%] z-20 flex items-center gap-1 rounded-full border border-purple-500/35 bg-purple-500/15 px-2 py-1 backdrop-blur-md sm:left-[10%]"
            >
              <Instagram className="h-3 w-3 text-purple-300" />
              <span className="text-[8px] font-medium text-purple-200">IG</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 0.4 }}
              className="absolute right-[6%] top-[14%] z-20 flex items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/15 px-2 py-1 backdrop-blur-md sm:right-[10%]"
            >
              <WhatsAppIcon className="h-3 w-3 text-emerald-400" />
              <span className="text-[8px] font-medium text-emerald-200">WA</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute left-[5%] top-[30%] z-20 hidden w-[24%] max-w-[110px] sm:left-[8%] sm:block"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5.5, repeat: Infinity }}
                className="overflow-hidden rounded-[1.2rem] border-2 border-white/15 bg-[#0a0a12] shadow-glow-sm"
              >
                <div className="bg-gradient-to-b from-indigo-600/50 to-purple-900/40 px-2 py-2.5">
                  <motion.div className="mx-auto mb-1.5 h-1 w-7 rounded-full bg-white/25" />
                  <div className="flex items-center gap-1">
                    <Bot className="h-3 w-3 text-indigo-200" />
                    <span className="text-[8px] font-semibold text-white">
                      AI Chat
                    </span>
                  </div>
                </div>
                <div className="space-y-1 p-2">
                  <div className="rounded-md bg-indigo-500/25 px-1.5 py-1 text-[7px] text-indigo-100">
                    How can I help?
                  </div>
                  <motion.div className="ml-auto w-[88%] rounded-md bg-white/10 px-1.5 py-1 text-[7px] text-slate-300">
                    Book a demo
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute right-[5%] top-[32%] z-20 hidden w-[26%] max-w-[120px] sm:right-[8%] sm:block"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-2 backdrop-blur-md"
              >
                <div className="mb-1.5 flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-purple-400" />
                  <span className="text-[8px] font-semibold text-white">
                    Booking
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-0.5">
                  {[1, 2, 3, 4].map((d) => (
                    <span
                      key={d}
                      className={`flex h-4 items-center justify-center rounded text-[6px] ${
                        d === 2
                          ? "bg-indigo-500 text-white"
                          : "bg-white/5 text-slate-500"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="mt-1.5 rounded bg-emerald-500/20 py-0.5 text-center text-[7px] text-emerald-300">
                  Confirmed
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute left-1/2 top-[40%] z-10 w-[78%] max-w-md -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
                  <motion.div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-green-500/70" />
                  </motion.div>
                  <span className="flex-1 text-center text-[10px] text-slate-500">
                    SalesGhost AI Command Center
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-3">
                  {[
                    { label: "AI Active", value: "24/7", icon: Bot },
                    { label: "Flows", value: "12+", icon: Zap },
                    { label: "Growth", value: "+34%", icon: TrendingUp },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
                    >
                      <item.icon className="mb-1 h-3 w-3 text-indigo-400" />
                      <p className="text-[9px] text-slate-500">{item.label}</p>
                      <p className="text-xs font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-between gap-1 border-t border-white/[0.06] px-3 py-2">
                  {[35, 55, 40, 70, 50, 85, 60].map((h, i) => (
                    <MiniBar key={i} height={`${h}%`} />
                  ))}
                  <BarChart3 className="mb-0.5 h-4 w-4 text-purple-400" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute bottom-[14%] left-[10%] z-20 hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5 sm:flex"
            >
              <Globe className="h-3 w-3 text-blue-400" />
              <span className="text-[8px] text-slate-300">Website</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-[18%] left-1/2 z-20 max-w-[140px] -translate-x-1/2 rounded-lg border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-2 backdrop-blur-md sm:bottom-[16%] sm:left-auto sm:right-[10%] sm:translate-x-0"
            >
              <div className="flex items-start gap-1.5">
                <MessageCircle className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" />
                <p className="text-[8px] leading-relaxed text-indigo-100">
                  Lead qualified · Auto-reply sent
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium text-slate-300">
                  AI · Booking · Automation online
                </span>
              </div>
              <span className="text-[10px] text-indigo-300">salesghost.studio</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
