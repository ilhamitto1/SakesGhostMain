"use client";

import { BuiltExperiences } from "@/components/sections/BuiltExperiences";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProjectCaseStudy } from "@/components/sections/ProjectCaseStudy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ALL_PROJECTS,
  CONCEPT_PROJECTS,
  LIVE_PROJECTS,
} from "@/lib/constants";
import { motion } from "framer-motion";

function SectionDivider({
  label,
  labelClass,
  title,
  description,
}: {
  label: string;
  labelClass: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left"
    >
      <div>
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}
        >
          {label}
        </span>
        <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <p className="max-w-md text-sm text-slate-500">{description}</p>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-purple-950/10" />

      <div className="section-container relative">
        <SectionHeader
          label="Portfolio"
          title="Products, Live Demos & SalesGhost Showcases"
          subtitle="Two deployed systems you can try today — plus concept experiences that show how we design AI platforms for clinics, restaurants, academies and more."
          align="center"
        />

        <PortfolioGrid projects={ALL_PROJECTS} />

        <motion.div className="mt-24">
          <SectionDivider
            label="Live Products"
            labelClass="text-emerald-400"
            title="Deployed & Ready to Explore"
            description="Fully functional demos — open in a new tab and experience the systems in action."
          />

          <motion.div className="space-y-28 md:space-y-36">
            {LIVE_PROJECTS.map((project, index) => (
              <ProjectCaseStudy
                key={project.id}
                {...project}
                reversed={index % 2 === 1}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="mt-28">
          <SectionDivider
            label="SalesGhost Showcase"
            labelClass="text-purple-400"
            title="Concept Experiences & Product Direction"
            description="Premium UI concepts and product visions — built under SalesGhost direction. Each can become your custom platform."
          />

          <motion.div className="space-y-28 md:space-y-36">
            {CONCEPT_PROJECTS.map((project, index) => (
              <ProjectCaseStudy
                key={project.id}
                {...project}
                reversed={index % 2 === 1}
              />
            ))}
          </motion.div>
        </motion.div>

        <BuiltExperiences />
      </div>
    </section>
  );
}
