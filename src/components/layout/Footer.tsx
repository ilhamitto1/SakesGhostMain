"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT, NAV_HREFS, SITE } from "@/lib/constants";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-ghost-black/50 pb-24 md:pb-14">
      <div className="section-container section-padding !py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src="/images/logo.jpg"
                  alt={SITE.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {t.footer.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialIcon
                href={CONTACT.instagramUrl}
                label={`Instagram ${CONTACT.instagramHandle}`}
                variant="instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <WhatsAppLink className="btn-secondary whitespace-nowrap text-sm !px-5 !py-2.5">
                {t.buttons.talkWhatsApp}
              </WhatsAppLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              {t.footer.servicesTitle}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-500 transition hover:text-slate-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              {t.footer.navigationTitle}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_HREFS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-300"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-slate-600">
            {CONTACT.instagramHandle} · WhatsApp {CONTACT.whatsappPhone}
          </p>
        </div>
      </div>
    </footer>
  );
}
