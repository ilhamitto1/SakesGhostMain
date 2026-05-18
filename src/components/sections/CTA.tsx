"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-container"
      >
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/50 via-ghost-deep to-purple-950/40 p-10 sm:p-14 md:p-16">
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/15 blur-[80px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative text-center">
            <span className="section-label mx-auto">Get Started</span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to automate your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-slate-400 sm:text-lg">
              Message us on WhatsApp — one click and we&apos;ll discuss your AI
              assistant, booking system, or custom digital product.
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

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <WhatsAppLink className="btn-primary group">
                Contact SalesGhost
              </WhatsAppLink>
              <WhatsAppLink className="btn-secondary group">
                Get Started
              </WhatsAppLink>
              <Link
                href="#projects"
                className="btn-secondary group hidden sm:inline-flex"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
