import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { CONTACT, FOOTER_SERVICES, NAV_LINKS, SITE } from "@/lib/constants";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
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
              SalesGhost is an AI automation and digital product studio. We build
              intelligent systems — assistants, booking platforms, e-commerce AI
              and custom SaaS products — that help businesses sell smarter and
              operate around the clock.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialIcon
                href={CONTACT.instagramUrl}
                label={`Instagram ${CONTACT.instagramHandle}`}
                variant="instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <WhatsAppLink className="btn-secondary text-sm !px-5 !py-2.5">
                Talk on WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
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
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            {CONTACT.instagramHandle} · WhatsApp {CONTACT.whatsappPhone}
          </p>
        </div>
      </div>
    </footer>
  );
}
