"use client";

import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { NAV_IDS } from "./Header";
import { LogoMark } from "./ui/Logo";
import { Star } from "./decor/Shapes";

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="relative bg-[#f1eafe] pt-10 pb-24 text-ink sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="size-12" />
              <div>
                <p className="font-display text-xl font-bold">
                  Сказка <span className="text-berry">сад</span>
                </p>
                <p className="text-sm font-bold text-ink-soft">{t.footer.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-soft">{site.legalName[locale]}</p>
          </div>

          <nav aria-label={t.header.navAria}>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.95rem] font-bold">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-ink-soft transition-colors hover:text-berry">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="grid gap-2.5 text-[0.95rem]">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4.5 shrink-0 text-peach-deep" aria-hidden />
              <span>{site.address[locale]}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4.5 shrink-0 text-sky-deep" aria-hidden />
              <a href={site.phone.href} className="font-bold hover:text-berry">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4.5 shrink-0 text-pink-deep" aria-hidden />
              <a href={site.email.href} className="font-bold break-all hover:text-berry">
                {site.email.display}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-lavender pt-5 text-sm text-ink-soft sm:flex-row">
          <p className="flex items-center gap-2">
            <Star className="size-4" color="#FFC94D" />© {new Date().getFullYear()} {site.legalName[locale]}
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-bold text-ink shadow-sm hover:text-berry">
            <ArrowUp className="size-4" aria-hidden />
            {t.footer.toTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
