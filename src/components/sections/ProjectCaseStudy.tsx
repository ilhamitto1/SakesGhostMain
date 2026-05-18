"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCaseStudyProps extends Project {
  reversed?: boolean;
}

export function ProjectCaseStudy({
  id,
  title,
  description,
  type,
  badge,
  liveUrl,
  images,
  features,
  accent,
  glow,
  industry,
  reversed = false,
}: ProjectCaseStudyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLive = type === "live";

  return (
    <RevealOnScroll>
      <div
        id={`project-${id}`}
        className={`scroll-mt-28 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={reversed ? "lg:[direction:ltr]" : ""}>
          <motion.div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-block rounded-full bg-gradient-to-r ${accent} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-200`}
            >
              {badge}
            </span>
            {industry && (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                {industry}
              </span>
            )}
            {isLive && (
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Deployed
              </span>
            )}
          </motion.div>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-400">{description}</p>

          {!isLive && (
            <p className="mt-3 text-xs text-slate-500">
              Concept experience — product direction, UX and visual systems by
              SalesGhost. Available as a custom build for your business.
            </p>
          )}

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                  <Check className="h-3 w-3 text-indigo-400" />
                </span>
                <span className="text-sm text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {isLive && liveUrl ? (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex"
              >
                View Live Demo
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            ) : (
              <WhatsAppLink className="btn-primary inline-flex">
                Request Similar Build
                <ArrowUpRight className="h-4 w-4" />
              </WhatsAppLink>
            )}
            <WhatsAppLink className="btn-secondary inline-flex text-sm">
              Discuss this system
            </WhatsAppLink>
          </div>
        </div>

        <div className={reversed ? "lg:[direction:ltr]" : ""}>
          <motion.div
            className="relative"
            style={{ filter: `drop-shadow(0 0 40px ${glow})` }}
          >
            <div className="glass-card overflow-hidden p-3 sm:p-4">
              <div className="mb-3 flex items-center gap-2 rounded-lg bg-ghost-deep/80 px-3 py-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 rounded-md bg-white/5 px-3 py-1 text-center">
                  <span className="truncate text-[10px] text-slate-500 sm:text-xs">
                    {isLive && liveUrl
                      ? liveUrl.replace("https://", "")
                      : `salesghost.studio / ${id}`}
                  </span>
                </div>
              </div>

              <motion.div
                className="relative aspect-[16/10] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={images[activeIndex]}
                  alt={`${title} screenshot ${activeIndex + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((src, index) => (
                <motion.button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-indigo-500 shadow-glow-sm"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="150px"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
