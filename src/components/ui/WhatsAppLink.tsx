"use client";

import { CONTACT, EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { motion, type HTMLMotionProps } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { type ReactNode } from "react";

interface WhatsAppLinkProps extends Omit<HTMLMotionProps<"a">, "href"> {
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppLink({
  children,
  className = "btn-primary",
  showIcon = true,
  ...props
}: WhatsAppLinkProps) {
  return (
    <motion.a
      href={CONTACT.whatsappUrl}
      {...EXTERNAL_LINK_PROPS}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {showIcon && <WhatsAppIcon className="h-4 w-4" />}
      {children}
    </motion.a>
  );
}
