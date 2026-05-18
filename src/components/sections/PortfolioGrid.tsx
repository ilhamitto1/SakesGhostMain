"use client";

import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -6 }}
          className="group glass-card flex flex-col overflow-hidden"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-ghost-black via-ghost-black/20 to-transparent" />
            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                  project.type === "live"
                    ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-200"
                    : "border border-purple-500/30 bg-purple-500/20 text-purple-200"
                }`}
              >
                {project.badge}
              </span>
              {project.industry && (
                <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md">
                  {project.industry}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-400">
              {project.description}
            </p>
            <Link
              href={`#project-${project.id}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition hover:text-white"
            >
              {project.type === "live" ? "View case study" : "Explore showcase"}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.article>
      ))}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        className="glass-card flex flex-col items-center justify-center border-dashed p-8 text-center sm:col-span-2 lg:col-span-1"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20">
          <Sparkles className="h-6 w-6 text-indigo-300" />
        </div>
        <p className="text-sm font-semibold text-white">Your project next?</p>
        <p className="mt-2 text-sm text-slate-400">
          We design and build custom AI systems for your industry.
        </p>
        <WhatsAppLink className="btn-secondary mt-5 text-sm !px-5 !py-2.5">
          Start a Project
        </WhatsAppLink>
      </motion.div>
    </motion.div>
  );
}
