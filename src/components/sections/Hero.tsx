"use client";

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { SITE } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const floatingCards = [
  {
    icon: Bot,
    label: "AI Assistant",
    stat: "24/7 Active",
    position: "left-[4%] top-[28%]",
    delay: 0,
    className: "hidden lg:flex",
  },
  {
    icon: BarChart3,
    label: "Live Analytics",
    stat: "+34% Conversions",
    position: "right-[4%] top-[32%]",
    delay: 0.15,
    className: "hidden lg:flex",
  },
  {
    icon: Zap,
    label: "Automation",
    stat: "3.2s Response",
    position: "left-[8%] bottom-[22%]",
    delay: 0.3,
    className: "hidden md:flex",
  },
  {
    icon: Sparkles,
    label: "Smart Offers",
    stat: "Real-time AI",
    position: "right-[8%] bottom-[26%]",
    delay: 0.45,
    className: "hidden md:flex",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <AnimatedBackground />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40" />

      {floatingCards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
            className={`absolute ${card.position} ${card.className} z-10`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5 + card.delay * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card flex items-center gap-3 px-4 py-3"
            >
              <motion.div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20">
                <Icon className="h-5 w-5 text-indigo-300" />
              </motion.div>
              <div>
                <p className="text-xs font-medium text-slate-400">{card.label}</p>
                <p className="text-sm font-semibold text-white">{card.stat}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        style={{ y, opacity }}
        className="section-container relative z-20 w-full section-padding pb-28 pt-8"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.jpg"
              alt={SITE.name}
              width={72}
              height={72}
              className="mx-auto rounded-2xl ring-2 ring-white/10 shadow-glow-sm"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            AI Automation & Digital Product Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI Systems That Turn{" "}
            <span className="gradient-text">Business Interactions</span> Into
            Sales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-2xl text-balance text-base text-slate-400 sm:text-lg md:text-xl"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <WhatsAppLink className="btn-primary group">
              Book a Demo
            </WhatsAppLink>
            <Link href="#projects" className="btn-secondary group">
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/[0.06] pt-10 sm:max-w-xl"
          >
            {[
              { value: "24/7", label: "AI Operations" },
              { value: "5+", label: "Products & Showcases" },
              { value: "10+", label: "Industries" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-bold gradient-text sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}
