"use client";

import { CalendarRange, CheckCircle2, ClipboardList } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Apple, Banana, Broccoli, Carrot, Cherries, JuiceGlass, Pear, PlateSet } from "../decor/FoodArt";
import { Blob, Cloud, Sparkle, Wave } from "../decor/Shapes";

const mealColors = [
  "bg-sun-soft text-sun-deep ring-sun",
  "bg-peach-soft text-peach-deep ring-peach",
  "bg-sky-soft text-sky-deep ring-sky",
  "bg-lavender-soft text-lavender-deep ring-lavender",
];

const factIcons = [CalendarRange, ClipboardList];

export function Food() {
  const { t } = useLanguage();
  const f = t.food;

  return (
    <section
      id="food"
      aria-labelledby="food-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e9f8ee_0%,#f4fbf3_100%)] pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-14 lg:pb-16"
    >
      <Wave className="absolute inset-x-0 -top-px h-8 w-full sm:h-12" color="#fff3f7" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Blob className="absolute top-[20%] -right-24 w-64 opacity-50" color="#FFE68A" />
        <Blob className="absolute -bottom-20 -left-16 w-56 rotate-90 opacity-40" color="#FFC6A8" />
        <Cloud className="absolute top-[14%] left-[4%] hidden w-20 animate-drift md:block" />
        <Sparkle className="absolute top-[30%] left-[46%] hidden w-3.5 animate-twinkle lg:block" color="#FFC94D" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="food" eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} tone="mint" />

        <div className="mt-7 grid items-center gap-8 lg:mt-8 lg:items-start lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Тарелка: 4 приёма пищи */}
          <div data-reveal className="mx-auto w-full max-w-[440px]">
            <PlateSet className="mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[350px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display text-6xl leading-none font-bold text-berry sm:text-7xl">4</span>
                <span className="mt-1 max-w-[42%] text-sm leading-tight font-extrabold text-ink sm:text-base">
                  {f.mealsLabel}
                </span>
              </div>
              <Apple className="absolute top-[4%] left-[22%] w-[11%] animate-float" />
              <Carrot className="absolute top-[2%] right-[22%] w-[9%] rotate-12 animate-float [animation-delay:-2s]" />
              <Broccoli className="absolute bottom-[2%] left-[20%] w-[11%] animate-float [animation-delay:-3s]" />
              <Cherries className="absolute right-[20%] bottom-[1%] w-[11%] animate-float [animation-delay:-1s]" />
              <Pear className="absolute top-[40%] left-[13%] hidden w-[7%] sm:block" />
              <Banana className="absolute top-[42%] right-[11%] hidden w-[12%] -rotate-12 sm:block" />
            </PlateSet>

            <ol className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
              {f.meals.map((meal, i) => (
                <li
                  key={meal}
                  className={`flex items-center gap-2 rounded-2xl px-2.5 py-2 text-[0.85rem] font-extrabold ring-1 sm:gap-2.5 sm:px-3 sm:py-2.5 sm:text-base ${mealColors[i]}`}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white font-display text-base shadow-sm">
                    {i + 1}
                  </span>
                  <span className="min-w-0 leading-tight">{meal}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Перекус, меню и принципы */}
          <div className="grid gap-4">
            <div
              data-reveal
              className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(120deg,#FFE68A_0%,#FFC6A8_100%)] p-5 shadow-soft sm:p-6"
            >
              <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                <div className="grid size-20 shrink-0 place-items-center rounded-[28px_28px_28px_10px] bg-white shadow-soft sm:size-24">
                  <span className="font-display text-2xl font-bold text-berry sm:text-3xl">{f.snackTime}</span>
                </div>
                <div className="min-w-0 pr-14 sm:pr-24">
                  <h3 className="text-xl leading-tight font-bold text-ink sm:text-2xl">{f.snackTitle}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink sm:text-base">{f.snackText}</p>
                </div>
              </div>
              <div aria-hidden className="absolute right-3 bottom-2 flex items-end gap-1 sm:right-5">
                <JuiceGlass className="w-8 sm:w-11" />
                <Apple className="w-7 sm:w-9" />
              </div>
              <Sparkle className="absolute top-3 right-6 w-4 animate-twinkle" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {f.facts.map((fact, i) => {
                const Icon = factIcons[i % factIcons.length];
                return (
                  <div
                    key={fact.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                    className="rounded-[26px] bg-white p-5 shadow-soft ring-1 ring-mint"
                  >
                    <span
                      className={`grid size-11 place-items-center ${i === 0 ? "rounded-full bg-sky text-sky-deep" : "rounded-2xl bg-lavender text-lavender-deep"}`}
                    >
                      <Icon className="size-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-3 text-[1.05rem] leading-snug font-extrabold text-ink">{fact.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">{fact.text}</p>
                  </div>
                );
              })}
            </div>

            <div data-reveal className="rounded-[26px] bg-white/85 p-5 shadow-soft ring-1 ring-line sm:p-6">
              <h3 className="text-lg font-bold text-ink sm:text-xl">{f.principlesTitle}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-5">
                {f.principles.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[0.95rem] leading-snug text-ink">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint-deep" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
