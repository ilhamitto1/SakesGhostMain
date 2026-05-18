"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ghost-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="#" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg ring-1 ring-white/10 transition group-hover:ring-indigo-500/40">
            <Image
              src="/images/logo.jpg"
              alt={SITE.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.div className="hidden items-center gap-3 md:flex">
          <SocialIcon
            href={CONTACT.instagramUrl}
            label="Instagram"
            variant="instagram"
          >
            <Instagram className="h-4 w-4" />
          </SocialIcon>
          <WhatsAppLink className="btn-primary text-sm !px-5 !py-2.5">
            Talk on WhatsApp
          </WhatsAppLink>
        </motion.div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/[0.06] bg-ghost-black/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <SocialIcon
                  href={CONTACT.instagramUrl}
                  label="Instagram"
                  variant="instagram"
                >
                  <Instagram className="h-4 w-4" />
                </SocialIcon>
                <WhatsAppLink
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 !rounded-full !px-5 !py-3 text-sm"
                >
                  Talk on WhatsApp
                </WhatsAppLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
