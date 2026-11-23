"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

/** Плавающая кнопка WhatsApp: правый нижний угол с учётом безопасной зоны телефона. */
export function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappFloat}
      className="group fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-2 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden rounded-full bg-white px-3.5 py-2 text-sm font-extrabold whitespace-nowrap text-ink opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block">
        {t.whatsappFloat}
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-wa text-white shadow-[0_10px_24px_-8px_rgb(26_143_76/0.7)] ring-4 ring-white transition-[transform,background-color] duration-200 group-hover:scale-105 group-hover:bg-wa-hover">
        <WhatsAppIcon className="size-7" />
      </span>
    </a>
  );
}
