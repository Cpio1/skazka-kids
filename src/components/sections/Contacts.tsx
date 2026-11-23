"use client";

import { Clock, Mail, MapPin, Navigation, Phone, UserRound, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { Balloon, Cloud, Flower, House, Sparkle, Tree, Wave } from "../decor/Shapes";

function InfoRow({ icon: Icon, label, tone, children }: { icon: LucideIcon; label: string; tone: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3.5">
      <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${tone}`}>
        <Icon className="size-5.5" aria-hidden />
      </span>
      <div className="min-w-0">
        <dt className="text-sm font-bold text-ink-soft">{label}</dt>
        <dd className="mt-0.5 text-[1.02rem] leading-snug font-extrabold break-words text-ink">{children}</dd>
      </div>
    </div>
  );
}

export function Contacts() {
  const { t, locale } = useLanguage();
  const c = t.contacts;

  const actions = [
    { href: site.phone.href, label: c.call, icon: <Phone className="size-5.5" aria-hidden />, cls: "bg-sky-deep hover:bg-[#095c74] text-white", external: false },
    { href: site.whatsapp, label: c.whatsapp, icon: <WhatsAppIcon className="size-5.5" />, cls: "bg-wa hover:bg-wa-hover text-white", external: true },
    { href: site.email.href, label: c.writeEmail, icon: <Mail className="size-5.5" aria-hidden />, cls: "bg-berry hover:bg-berry-hover text-white", external: false },
    { href: site.twoGis, label: c.open2gis, icon: <Navigation className="size-5.5" aria-hidden />, cls: "bg-white hover:bg-sun-soft text-ink ring-2 ring-sun", external: true },
  ];

  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff1e8_0%,#ffeef4_100%)] pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-14 lg:pb-16"
    >
      <Wave className="absolute inset-x-0 -top-px h-8 w-full sm:h-12" color="#fdf9ff" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Cloud className="absolute top-[12%] left-[5%] w-16 animate-drift sm:w-20" />
        <Balloon className="absolute top-[14%] right-[6%] hidden w-9 animate-float md:block" color="#D9C7FA" />
        <Sparkle className="absolute bottom-[10%] left-[48%] w-3.5 animate-twinkle" color="#FFC94D" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="contacts" title={c.title} subtitle={c.subtitle} tone="peach" />

        <div className="mt-7 grid gap-5 lg:mt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          {/* Карточка с контактами */}
          <div data-reveal className="rounded-[32px] bg-white p-5 shadow-soft ring-1 ring-line sm:p-7">
            <p className="font-display text-xl font-bold text-berry sm:text-2xl">{site.legalName[locale]}</p>
            <dl className="mt-5 grid gap-5 sm:grid-cols-2">
              <InfoRow icon={MapPin} label={c.address} tone="bg-peach-soft text-peach-deep">
                {site.address[locale]}
              </InfoRow>
              <InfoRow icon={Phone} label={c.phone} tone="bg-sky-soft text-sky-deep">
                <a href={site.phone.href} className="whitespace-nowrap underline-offset-4 hover:text-berry hover:underline">
                  {site.phone.display}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label={c.email} tone="bg-pink-soft text-pink-deep">
                <a href={site.email.href} className="break-all underline-offset-4 hover:text-berry hover:underline">
                  {site.email.display}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label={c.hours} tone="bg-mint-soft text-mint-deep">
                {c.hoursValue}
                <span className="mt-0.5 block text-sm font-bold text-ink-soft">{c.weekend}</span>
              </InfoRow>
            </dl>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              <UserRound className="size-5 shrink-0 text-lavender-deep" aria-hidden />
              <p className="text-[0.95rem] text-ink-soft">
                {c.director}: <strong className="font-extrabold text-ink">{site.director[locale]}</strong>
              </p>
            </div>

            <div className="mt-6 grid gap-2.5 min-[480px]:grid-cols-2">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-5 text-center text-[0.95rem] font-extrabold shadow-sm transition-[background-color,transform] duration-200 hover:-translate-y-0.5 ${a.cls}`}
                >
                  {a.icon}
                  {a.label}
                </a>
              ))}
            </div>
          </div>

          {/* Сказочная «карта» — ведёт в 2GIS */}
          <a
            data-reveal
            href={site.twoGis}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${c.open2gis}: ${site.address[locale]}`}
            className="group relative block min-h-72 overflow-hidden rounded-[32px] bg-[#eaf7ef] shadow-soft ring-1 ring-mint transition-shadow hover:shadow-lift"
          >
            <svg aria-hidden viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
              <rect width="400" height="320" fill="#EAF7EF" />
              <path d="M-10 230C80 200 140 250 230 215S350 150 420 170" stroke="#fff" strokeWidth="26" fill="none" />
              <path d="M120 -10C140 80 110 160 150 330" stroke="#fff" strokeWidth="20" fill="none" />
              <path d="M290 -10c-20 90 20 170-10 330" stroke="#fff" strokeWidth="14" fill="none" />
              <path d="M-10 230C80 200 140 250 230 215S350 150 420 170" stroke="#FFE68A" strokeWidth="3" strokeDasharray="10 10" fill="none" />
              <circle cx="60" cy="90" r="34" fill="#BDEBCB" />
              <circle cx="350" cy="270" r="40" fill="#BDEBCB" />
              <ellipse cx="340" cy="70" rx="38" ry="22" fill="#A9E4F5" opacity=".8" />
            </svg>
            <Tree className="absolute top-[12%] left-[8%] w-10" />
            <Tree className="absolute right-[10%] bottom-[14%] w-12" color="#A8E0B9" />
            <Flower className="absolute bottom-[30%] left-[14%] w-7" color="#FFD2E2" />
            <House className="absolute top-[30%] left-[54%] w-16 -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="absolute top-[14%] left-[54%] -translate-x-1/2 animate-float text-berry">
              <MapPin className="size-10 fill-white drop-shadow" aria-hidden />
            </span>
            <span className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-soft sm:inset-x-5 sm:bottom-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sun text-ink">
                <Navigation className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.98rem] font-extrabold text-ink">{c.mapTitle}</span>
                <span className="block text-sm text-ink-soft">{c.mapText}</span>
              </span>
              <span className="ml-auto hidden shrink-0 rounded-full bg-berry px-3 py-1.5 text-xs font-extrabold text-white sm:inline">
                2GIS
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
