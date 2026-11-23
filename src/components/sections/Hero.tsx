"use client";

import Image from "next/image";
import { CalendarHeart, Clock, Languages, Phone, Users, Utensils } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Balloon, Butterfly, Cloud, Flower, Rainbow, Sparkle, Star, Sun, Tulip, Wave } from "../decor/Shapes";

const factStyles = [
  { icon: Users, box: "bg-lavender-soft ring-lavender", ico: "bg-lavender text-lavender-deep" },
  { icon: Languages, box: "bg-sky-soft ring-sky", ico: "bg-sky text-sky-deep" },
  { icon: Utensils, box: "bg-mint-soft ring-mint", ico: "bg-mint text-mint-deep" },
  { icon: Clock, box: "bg-peach-soft ring-peach", ico: "bg-peach text-peach-deep" },
];

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#d9f3fb_0%,#eef9fc_38%,#fff9ed_100%)] pt-(--header-h)"
    >
      {/* Фон: облака и звёзды */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Cloud className="absolute top-[14%] left-[3%] w-20 animate-drift opacity-90 sm:w-28" />
        <Cloud className="absolute top-[9%] right-[30%] hidden w-24 animate-drift opacity-80 [animation-delay:-9s] lg:block" />
        <Cloud className="absolute top-[58%] -left-4 hidden w-16 animate-drift opacity-70 [animation-delay:-4s] md:block" />
        <Sparkle className="absolute top-[24%] left-[44%] hidden w-4 animate-twinkle lg:block" color="#FFD84D" />
        <Sparkle className="absolute top-[30%] right-[6%] w-3 animate-twinkle [animation-delay:-1.5s]" color="#C4A9F5" />
        <Star className="absolute bottom-[22%] left-[46%] hidden w-5 animate-twinkle [animation-delay:-.8s] lg:block" color="#FFC6A8" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-6 pb-14 sm:px-6 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8 lg:pt-6 lg:pb-16 xl:gap-12">
        {/* Текст */}
        <div className="relative z-10 text-center lg:text-left">
          <p
            data-reveal
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-extrabold text-berry shadow-soft ring-1 ring-pink sm:text-[0.95rem]"
          >
            <Sparkle className="size-3.5" color="#FFC94D" />
            {h.badge}
            <Sparkle className="size-3.5" color="#C4A9F5" />
          </p>

          <h1
            id="hero-title"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-4 text-[1.7rem] leading-[1.2] font-bold text-ink min-[400px]:text-[2rem] sm:text-[2.6rem] sm:leading-[1.16] lg:text-[2.35rem] xl:text-[2.7rem] 2xl:text-[3rem]"
          >
            <span className="relative inline-block text-berry">
              {h.titleAccent}
              <svg
                aria-hidden
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full sm:h-3"
              >
                <path d="M3 9c30-7 60-7 97-2s65 4 97-3" stroke="#FFD84D" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            {h.titleRest}
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0"
          >
            {h.subtitle}
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center lg:mx-0 lg:max-w-none lg:justify-start"
          >
            <a
              href="#contacts"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-berry px-7 text-base font-extrabold text-white shadow-[0_10px_24px_-10px_rgb(208_68_111/0.7)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-berry-hover"
            >
              <Phone className="size-5" aria-hidden />
              {h.ctaContact}
            </a>
            <a
              href="#groups"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-extrabold text-ink shadow-soft ring-2 ring-sun transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-sun-soft"
            >
              <Star className="size-5" color="#F5B800" />
              {h.ctaGroups}
            </a>
          </div>

          <ul
            data-reveal
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-2.5 sm:gap-3 lg:mx-0"
          >
            {h.facts.map((fact, i) => {
              const s = factStyles[i % factStyles.length];
              const Icon = s.icon;
              return (
                <li
                  key={fact}
                  className={`flex items-center gap-2.5 rounded-2xl p-2.5 text-left text-[0.88rem] leading-snug font-bold text-ink ring-1 sm:gap-3 sm:p-3 sm:text-[0.95rem] ${s.box}`}
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-xl sm:size-10 ${s.ico}`}>
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">{fact}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Визуальная композиция */}
        <div
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="relative mx-auto w-full max-w-[260px] min-[400px]:max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[410px]"
        >
          <div className="relative aspect-[5/6]">
            {/* Радуга и солнце за фото */}
            <Rainbow className="absolute -top-2 -left-6 w-28 opacity-90 sm:-left-10 sm:w-36 lg:w-40" />
            <Sun className="absolute -top-5 -right-3 z-20 w-16 animate-float-slow sm:w-20 lg:-right-6" />

            {/* Главное фото в арке-окошке */}
            <div className="absolute inset-x-[9%] top-[7%] bottom-[5%] -rotate-2 rounded-t-[999px] rounded-b-[44px] bg-white p-2.5 shadow-lift sm:p-3">
              <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[36px] bg-sky-soft">
                <Image
                  src="/images/gallery/facade.jpg"
                  alt={h.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 330px, 280px"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </div>

            {/* Круглое фото площадки */}
            <div className="absolute -bottom-2 -left-2 z-10 size-[38%] rotate-3 rounded-full bg-white p-1.5 shadow-lift sm:-left-6 sm:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/gallery/playground.jpg"
                  alt={h.photo2Alt}
                  fill
                  sizes="(min-width: 1024px) 180px, 130px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Наклейка «С апреля 2025» */}
            <div className="absolute right-[-2%] bottom-[16%] z-20 flex rotate-6 items-center gap-1.5 rounded-2xl bg-sun px-3 py-2 text-sm font-extrabold text-ink shadow-soft sm:right-[-6%] sm:text-[0.95rem]">
              <CalendarHeart className="size-4 text-berry" aria-hidden />
              {h.since}
            </div>

            {/* Мелкие фигурки */}
            <Balloon className="absolute top-[30%] -right-4 hidden w-9 animate-float [animation-delay:-2s] sm:block lg:-right-8 lg:w-10" color="#FFD2E2" />
            <Balloon className="absolute top-[40%] -left-5 w-7 animate-float sm:-left-8 sm:w-8" color="#A9E4F5" />
            <Butterfly className="absolute top-[3%] left-[36%] z-20 w-9 animate-sway sm:w-11" />
            <Flower className="absolute right-[10%] -bottom-3 z-20 w-8 animate-sway sm:w-10" color="#FFB3C7" />
            <Tulip className="absolute right-[2%] -bottom-2 z-20 w-4 sm:w-5" color="#D9C7FA" />
            <Star className="absolute bottom-[38%] left-[2%] z-20 w-5 animate-twinkle" color="#FFD84D" />
          </div>
        </div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-8 w-full sm:h-12" color="#fffdf7" />
    </section>
  );
}
