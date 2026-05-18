"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Calendar,
  Instagram,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type OrbitCard = {
  id: string;
  label: string;
  sub: string;
  position: string;
  floatClass: string;
  colors: string;
  icon?: LucideIcon;
  iconColor?: string;
  isWhatsApp?: boolean;
};

const orbitCards: OrbitCard[] = [
  {
    id: "ai",
    label: "AI Assistant",
    sub: "24/7 replies",
    icon: Bot,
    position: "left-[2%] top-[8%] sm:left-[6%] sm:top-[12%]",
    floatClass: "hero-float",
    colors: "border-indigo-500/30 bg-indigo-500/10",
    iconColor: "text-indigo-300",
  },
  {
    id: "wa",
    label: "WhatsApp",
    sub: "Automation",
    position: "right-[2%] top-[10%] sm:right-[6%] sm:top-[14%]",
    floatClass: "hero-float hero-float-delay-1",
    colors: "border-emerald-500/30 bg-emerald-500/10",
    isWhatsApp: true,
  },
  {
    id: "booking",
    label: "Booking",
    sub: "Smart slots",
    icon: Calendar,
    position: "left-[0%] bottom-[28%] sm:left-[4%] sm:bottom-[30%]",
    floatClass: "hero-float hero-float-delay-2",
    colors: "border-purple-500/30 bg-purple-500/10",
    iconColor: "text-purple-300",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    sub: "Live metrics",
    icon: LayoutDashboard,
    position: "right-[0%] bottom-[26%] sm:right-[4%] sm:bottom-[28%]",
    floatClass: "hero-float hero-float-delay-3",
    colors: "border-blue-500/30 bg-blue-500/10",
    iconColor: "text-blue-300",
  },
  {
    id: "ig",
    label: "Instagram",
    sub: "DM flows",
    icon: Instagram,
    position: "left-1/2 bottom-[4%] -translate-x-1/2 sm:bottom-[6%]",
    floatClass: "hero-float hero-float-delay-4",
    colors: "border-pink-500/30 bg-pink-500/10",
    iconColor: "text-pink-300",
  },
];

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto aspect-[4/5] max-h-[420px] w-full sm:max-h-[480px]">
        {orbitCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`absolute z-20 ${card.position} ${card.floatClass}`}
            >
              <div
                className={`flex items-center gap-2 rounded-xl border px-2.5 py-2 sm:gap-2.5 sm:px-3 sm:py-2.5 ${card.colors}`}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 sm:h-8 sm:w-8">
                  {card.isWhatsApp ? (
                    <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  ) : (
                    Icon && (
                      <Icon
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${card.iconColor ?? ""}`}
                      />
                    )
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-white sm:text-xs">
                    {card.label}
                  </p>
                  <p className="text-[9px] text-slate-400 sm:text-[10px]">
                    {card.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 z-10 w-[42%] max-w-[168px] -translate-x-1/2 -translate-y-[52%] sm:max-w-[190px]">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0a0a12] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:rounded-[2rem]">
            <div className="bg-gradient-to-b from-indigo-600/40 to-purple-900/30 px-3 pb-2 pt-3">
              <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/20" />
              <div className="flex items-center justify-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/30">
                  <Bot className="h-3.5 w-3.5 text-indigo-200" />
                </div>
                <span className="text-[10px] font-semibold text-white sm:text-xs">
                  SalesGhost AI
                </span>
              </div>
            </div>
            <div className="space-y-1.5 p-3">
              <div className="rounded-lg bg-indigo-500/20 px-2 py-1.5 text-[9px] leading-snug text-indigo-100 sm:text-[10px]">
                Hi — how can we help grow your business today?
              </div>
              <div className="ml-auto max-w-[88%] rounded-lg bg-white/10 px-2 py-1.5 text-[9px] text-slate-300 sm:text-[10px]">
                Book a demo →
              </div>
              <div className="mt-2 flex items-center gap-1 border-t border-white/[0.06] pt-2">
                <BarChart3 className="h-3 w-3 text-purple-400" />
                <span className="text-[8px] text-slate-500 sm:text-[9px]">
                  +34% conversion · live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
