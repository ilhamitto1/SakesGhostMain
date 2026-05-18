"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CONTACT, EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={CONTACT.whatsappUrl}
      {...EXTERNAL_LINK_PROPS}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Talk on WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.45),0_0_60px_rgba(139,92,246,0.25)] ring-2 ring-purple-500/30 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(37,211,102,0.55),0_0_80px_rgba(139,92,246,0.35)] md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
