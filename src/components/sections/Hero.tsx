"use client";

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 md:pt-24"
    >
      <AnimatedBackground />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25 md:opacity-35" />

      <div className="section-container relative z-20 w-full px-5 pb-12 pt-6 sm:px-8 sm:pb-16 md:pb-20 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/images/logo.jpg"
              alt={SITE.name}
              width={64}
              height={64}
              className="mx-auto rounded-2xl ring-2 ring-white/10 md:h-[72px] md:w-[72px]"
              priority
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            AI Automation & Digital Product Studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI Systems That Turn{" "}
            <span className="gradient-text">Business Interactions</span> Into
            Sales
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-5 max-w-2xl text-balance text-base text-slate-400 sm:text-lg md:mt-6 md:text-xl"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row"
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
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/[0.06] pt-8 sm:max-w-xl sm:gap-6 sm:pt-10"
          >
            {[
              { value: "24/7", label: "AI Operations" },
              { value: "5+", label: "Products & Showcases" },
              { value: "11+", label: "Industries" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl font-bold gradient-text sm:text-2xl md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-10 sm:mt-14">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
