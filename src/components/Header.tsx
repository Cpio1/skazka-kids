"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { site, type Locale } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LogoMark } from "./ui/Logo";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export const NAV_IDS = ["about", "groups", "food", "activities", "gallery", "documents", "contacts"] as const;
type NavId = (typeof NAV_IDS)[number];

const navDot: Record<NavId, string> = {
  about: "bg-peach",
  groups: "bg-lavender",
  food: "bg-mint",
  activities: "bg-sun",
  gallery: "bg-sky",
  documents: "bg-pink",
  contacts: "bg-peach",
};

function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  const options: { value: Locale; label: string }[] = [
    { value: "ru", label: "RU" },
    { value: "kk", label: "KZ" },
  ];
  return (
    <div
      role="group"
      aria-label={t.header.langAria}
      className="relative flex shrink-0 items-center rounded-full bg-white p-1 shadow-soft ring-1 ring-line"
    >
      {options.map((o) => {
        const active = locale === o.value;
        return (
          <button
            key={o.value}
            type="button"
            lang={o.value}
            aria-pressed={active}
            onClick={() => setLocale(o.value)}
            className={`rounded-full px-2.5 py-1.5 text-xs font-extrabold tracking-wide transition-colors duration-200 min-[360px]:px-3 min-[360px]:text-sm ${active ? "bg-berry text-white shadow-sm" : "text-ink-soft hover:bg-sun-soft hover:text-ink"}`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Подсветка текущей секции и тень шапки при прокрутке
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as NavId);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const hero = document.getElementById("top");
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    if (hero) heroObserver.observe(hero);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  // Закрытие меню по Escape и по клику вне панели
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !toggleRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  // Меню закрывается, если окно расширили до desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goHome = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-(--header-h) border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-line/80 bg-cream/92 shadow-[0_6px_24px_-16px_rgb(51_65_85/0.35)] backdrop-blur-md"
          : "border-transparent bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center gap-2 px-3 min-[360px]:gap-3 min-[360px]:px-4 sm:px-6 lg:gap-4 lg:px-8">
        <Link href="/" onClick={goHome} aria-label={t.header.homeAria} className="group flex min-w-0 shrink-0 items-center gap-2.5">
          <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6 min-[360px]:size-10 lg:size-11" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-[1.02rem] font-bold whitespace-nowrap text-ink min-[360px]:text-[1.15rem] lg:text-xl">
              Сказка <span className="text-berry">сад</span>
            </span>
            <span className="mt-1 text-[0.72rem] font-bold tracking-wide whitespace-nowrap text-ink-soft lg:text-xs">
              {t.header.logoSub}
            </span>
          </span>
        </Link>

        {/* Desktop-навигация */}
        <nav aria-label={t.header.navAria} className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {NAV_IDS.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-full px-2.5 py-2 text-[0.94rem] font-bold whitespace-nowrap transition-colors duration-200 xl:px-3.5 xl:text-base ${
                      isActive ? "bg-white text-berry shadow-soft" : "text-ink hover:bg-white/80 hover:text-berry"
                    }`}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 min-[360px]:gap-2 lg:ml-0">
          <LanguageSwitch />
          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 place-items-center rounded-2xl bg-white min-[360px]:size-11 text-ink shadow-soft ring-1 ring-line transition-colors hover:bg-sun-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`absolute inset-x-0 top-full origin-top px-3 pt-2 transition-[opacity,transform,visibility] duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav
          aria-label={t.header.navAria}
          className="mx-auto max-h-[calc(100dvh-var(--header-h)-1.5rem)] max-w-md overflow-y-auto rounded-[28px] bg-white p-3 shadow-lift ring-1 ring-line"
        >
          <ul className="grid grid-cols-1 gap-1.5 min-[400px]:grid-cols-2">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-bold transition-colors ${
                    active === id ? "bg-sun-soft text-berry" : "text-ink hover:bg-cream"
                  }`}
                >
                  <span className={`size-3 shrink-0 rounded-full ${navDot[id]}`} aria-hidden />
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-3">
            <a
              href={site.phone.href}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-2xl bg-sky-soft px-3 py-3 text-sm font-extrabold text-sky-deep"
            >
              <Phone className="size-4" aria-hidden />
              {t.contacts.call}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-2xl bg-mint-soft px-3 py-3 text-sm font-extrabold text-mint-deep"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
