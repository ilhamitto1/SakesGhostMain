"use client";

import { getServiceIcon } from "@/components/ui/IconMap";
import { INDUSTRY_CARDS } from "@/lib/constants";

export function Industries() {
  return (
    <section
      id="industries"
      className="px-5 py-8 sm:px-8 sm:py-12 md:py-16 lg:px-12 xl:px-16"
    >
      <div className="section-container">
        <header className="mx-auto max-w-3xl text-center">
          <span className="section-label mx-auto mb-3">Industries</span>
          <h2 className="section-title text-balance">
            Built for Businesses That Need Results
          </h2>
          <p className="section-subtitle mx-auto mt-3 text-balance">
            Whether you run a local salon or a growing SaaS — SalesGhost adapts
            AI systems to your industry and workflow.
          </p>
        </header>

        <ul className="mt-5 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 sm:mt-6 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {INDUSTRY_CARDS.map((industry) => {
            const Icon = getServiceIcon(industry.icon);
            return (
              <li key={industry.id}>
                <article className="group h-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-white/[0.05] sm:rounded-2xl sm:p-4">
                  <div
                    className={`relative mb-2.5 flex h-12 items-center justify-center rounded-lg bg-gradient-to-br sm:mb-3 sm:h-14 sm:rounded-xl ${industry.gradient}`}
                  >
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/20 sm:h-9 sm:w-9">
                      <Icon
                        className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${industry.accent}`}
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
                    {industry.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:mt-1 sm:text-xs">
                    {industry.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
