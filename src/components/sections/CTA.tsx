"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-container"
      >
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/50 via-ghost-deep to-purple-950/40 p-8 sm:p-10 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/15 blur-[60px] md:h-64 md:w-64 md:blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[60px] md:h-64 md:w-64 md:blur-[80px]" />

          <div className="relative text-center">
            <span className="section-label mx-auto">{t.cta.label}</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-slate-400 sm:text-lg">
              {t.cta.subtitle}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <SocialIcon
                href={CONTACT.instagramUrl}
                label={`Follow ${CONTACT.instagramHandle} on Instagram`}
                variant="instagram"
              >
                <Instagram className="h-5 w-5" />
              </SocialIcon>
              <span className="text-sm text-slate-500">
                {CONTACT.instagramHandle}
              </span>
            </div>

            <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <WhatsAppLink className="btn-primary group whitespace-nowrap">
                {t.buttons.contactSalesGhost}
              </WhatsAppLink>
              <WhatsAppLink className="btn-secondary group whitespace-nowrap">
                {t.buttons.getStarted}
              </WhatsAppLink>
              <Link
                href="#projects"
                className="btn-secondary group hidden whitespace-nowrap sm:inline-flex"
              >
                {t.buttons.viewProjects}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
