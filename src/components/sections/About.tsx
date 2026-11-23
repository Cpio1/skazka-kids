"use client";

import Image from "next/image";
import {
  Brain,
  Hand,
  Handshake,
  HeartPulse,
  Leaf,
  MessageCircle,
  Palette,
  Bike,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Blob, Butterfly, Cloud, Dots, Flower, Heart, Squiggle, Star, Tree } from "../decor/Shapes";

const directionStyles: { icon: LucideIcon; card: string; icon_bg: string; shape: string }[] = [
  { icon: Palette, card: "bg-pink-soft", icon_bg: "bg-pink text-pink-deep", shape: "rounded-[46%_54%_42%_58%/55%_45%_55%_45%]" },
  { icon: MessageCircle, card: "bg-sky-soft", icon_bg: "bg-sky text-sky-deep", shape: "rounded-2xl rotate-6" },
  { icon: Hand, card: "bg-peach-soft", icon_bg: "bg-peach text-peach-deep", shape: "rounded-full" },
  { icon: Brain, card: "bg-lavender-soft", icon_bg: "bg-lavender text-lavender-deep", shape: "rounded-[60%_40%_55%_45%/45%_60%_40%_55%]" },
  { icon: SprayCan, card: "bg-mint-soft", icon_bg: "bg-mint text-mint-deep", shape: "rounded-[18px_30px_18px_30px]" },
  { icon: Bike, card: "bg-sun-soft", icon_bg: "bg-sun text-sun-deep", shape: "rounded-full" },
  { icon: Handshake, card: "bg-pink-soft", icon_bg: "bg-pink text-pink-deep", shape: "rounded-2xl -rotate-6" },
];

const factColors = ["text-berry", "text-sky-deep", "text-mint-deep", "text-lavender-deep"];

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-milk py-14 sm:py-16 lg:py-14">
      {/* Декор секции */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Blob className="absolute -top-16 -right-20 w-56 opacity-40 sm:w-72" color="#FFE68A" />
        <Blob className="absolute bottom-24 -left-24 w-60 rotate-45 opacity-35" color="#BDEBCB" />
        <Cloud className="absolute top-10 left-[8%] hidden w-20 animate-drift lg:block" color="#E3F6FC" />
        <Star className="absolute top-24 right-[12%] w-5 animate-twinkle" color="#FFC6A8" />
        <Squiggle className="absolute top-[46%] right-[4%] hidden w-16 xl:block" color="#D9C7FA" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Коллаж фотографий */}
          <div data-reveal className="relative order-2 mx-auto w-full max-w-[420px] lg:order-1 lg:max-w-[470px]">
            <div className="relative aspect-[1/1]">
              <div className="absolute top-0 left-0 h-[78%] w-[66%] -rotate-3 rounded-[36px] bg-white p-2 shadow-lift">
                <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                  <Image
                    src="/images/gallery/group-room-blue.jpg"
                    alt={a.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 300px, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 h-[56%] w-[60%] rotate-3 rounded-[50%_50%_32px_32px] bg-white p-2 shadow-lift">
                <div className="relative h-full w-full overflow-hidden rounded-[50%_50%_24px_24px]">
                  <Image
                    src="/images/gallery/hall-arch.jpg"
                    alt={a.photo2Alt}
                    fill
                    sizes="(min-width: 1024px) 280px, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <Tree className="absolute top-[6%] right-[8%] w-12 animate-sway sm:w-14" />
              <Butterfly className="absolute bottom-[8%] left-[6%] w-10 animate-float" color="#FFD2E2" accent="#A9E4F5" />
              <Dots className="absolute top-[58%] left-[50%] w-10 opacity-80" color="#FFC6A8" />
              <Flower className="absolute -bottom-2 left-[38%] w-8 animate-sway [animation-delay:-2s]" color="#D9C7FA" />
            </div>
          </div>

          {/* Текст */}
          <div className="order-1 lg:order-2">
            <SectionHeading id="about" eyebrow={a.eyebrow} title={a.title} tone="peach" align="left" />
            <p data-reveal className="mt-5 text-base leading-relaxed text-ink sm:text-lg">
              {a.lead}
            </p>
            <p data-reveal className="mt-3 text-base leading-relaxed text-ink-soft sm:text-[1.05rem]">
              {a.text}
            </p>

            <dl data-reveal className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {a.facts.map((f, i) => (
                <div key={f.label} className="rounded-3xl bg-white p-3.5 text-center shadow-soft ring-1 ring-line sm:p-4">
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className={`block font-display text-3xl font-bold ${factColors[i % factColors.length]}`}>
                      {f.value}
                    </span>
                    <span className="mt-1 block text-[0.82rem] leading-snug font-bold text-ink-soft">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div data-reveal className="mt-5 flex gap-4 rounded-3xl bg-lavender-soft p-4 ring-1 ring-lavender sm:p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-lavender-deep shadow-soft">
                <Heart className="size-6" color="#B38BF5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{a.familyTitle}</h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{a.familyText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Направления */}
        <div className="mt-12 lg:mt-12">
          <h3 data-reveal className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
            {a.directionsTitle}
          </h3>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {a.directions.map((d, i) => {
              const s = directionStyles[i % directionStyles.length];
              const Icon = s.icon;
              return (
                <li
                  key={d.title}
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 4) * 70}ms` } as React.CSSProperties}
                  className={`group flex gap-3.5 rounded-[26px] p-4 transition-transform duration-300 hover:-translate-y-1 sm:flex-col sm:p-5 ${s.card}`}
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center transition-transform duration-300 group-hover:scale-110 ${s.icon_bg} ${s.shape}`}
                  >
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[1.02rem] leading-snug font-extrabold text-ink">{d.title}</h4>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">{d.text}</p>
                  </div>
                </li>
              );
            })}

            {/* Карточка здоровья — завершает сетку */}
            <li
              data-reveal
              style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
              className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(140deg,#BDEBCB,#A9E4F5)] p-4 sm:p-5"
            >
              <Leaf aria-hidden className="absolute -right-3 -bottom-3 size-20 rotate-12 text-white/40" />
              <div className="relative flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-full bg-white text-mint-deep">
                  <HeartPulse className="size-5" aria-hidden />
                </span>
                <h4 className="text-[1.02rem] font-extrabold text-ink">{a.healthTitle}</h4>
              </div>
              <p className="relative mt-2 text-[0.88rem] leading-relaxed text-ink">{a.healthText}</p>
              <ul className="relative mt-2 flex flex-wrap gap-1.5">
                {a.healthItems.map((item) => (
                  <li key={item} className="rounded-full bg-white/80 px-2.5 py-1 text-[0.8rem] font-bold text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
