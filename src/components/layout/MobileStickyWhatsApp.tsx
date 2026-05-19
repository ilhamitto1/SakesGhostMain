"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT, EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { motion } from "framer-motion";

export function MobileStickyWhatsApp() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-ghost-black/90 p-3 backdrop-blur-xl md:hidden"
    >
      <a
        href={CONTACT.whatsappUrl}
        {...EXTERNAL_LINK_PROPS}
        className="btn-primary flex w-full items-center justify-center gap-2 whitespace-nowrap !py-3.5 shadow-[0_0_30px_rgba(37,211,102,0.25),0_0_40px_rgba(139,92,246,0.2)]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {t.buttons.talkWhatsApp}
      </a>
    </motion.div>
  );
}
