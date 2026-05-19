"use client";

import { BuiltExperiences } from "@/components/sections/BuiltExperiences";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProjectCaseStudy } from "@/components/sections/ProjectCaseStudy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getConceptProjects,
  getLiveProjects,
  getLocalizedProjects,
} from "@/lib/i18n/data";
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
  const { t } = useLanguage();
  const allProjects = getLocalizedProjects(t);
  const liveProjects = getLiveProjects(t);
  const conceptProjects = getConceptProjects(t);

  return (
    <section id="projects" className="section-padding relative">
      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-purple-950/10" />

      <div className="section-container relative">
        <SectionHeader
          label={t.portfolio.label}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
          align="center"
        />

        <PortfolioGrid projects={allProjects} />

        <motion.div className="mt-24">
          <SectionDivider
            label={t.portfolio.live.label}
            labelClass="text-emerald-400"
            title={t.portfolio.live.title}
            description={t.portfolio.live.description}
          />

          <motion.div className="space-y-28 md:space-y-36">
            {liveProjects.map((project, index) => (
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
            label={t.portfolio.concept.label}
            labelClass="text-purple-400"
            title={t.portfolio.concept.title}
            description={t.portfolio.concept.description}
          />

          <motion.div className="space-y-28 md:space-y-36">
            {conceptProjects.map((project, index) => (
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
