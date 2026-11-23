"use client";

import { Languages, MessageCircleQuestion } from "lucide-react";
import { groups, site, type GroupTheme } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Balloon, Cloud, Flower, Heart, Moon, Rainbow, Sparkle, Star, Sun, Tulip, Wave } from "../decor/Shapes";

const themes: Record<GroupTheme, { card: string; scene: string; pill: string; name: string }> = {
  honey: {
    card: "ring-pink",
    scene: "bg-[linear-gradient(160deg,#FFE3EC,#FFD2E2)]",
    pill: "bg-pink-soft text-pink-deep",
    name: "text-pink-deep",
  },
  sun: {
    card: "ring-sun",
    scene: "bg-[linear-gradient(160deg,#FFF4C7,#FFE68A)]",
    pill: "bg-sun-soft text-sun-deep",
    name: "text-sun-deep",
  },
  star: {
    card: "ring-lavender",
    scene: "bg-[linear-gradient(160deg,#EDE4FD,#D9C7FA)]",
    pill: "bg-lavender-soft text-lavender-deep",
    name: "text-lavender-deep",
  },
  flower: {
    card: "ring-mint",
    scene: "bg-[linear-gradient(160deg,#E6F8EB,#BDEBCB)]",
    pill: "bg-mint-soft text-mint-deep",
    name: "text-mint-deep",
  },
};

/** Небольшая тематическая сценка для каждой группы. */
function GroupScene({ theme }: { theme: GroupTheme }) {
  switch (theme) {
    case "honey":
      return (
        <>
          <Heart className="absolute top-1/2 left-1/2 w-12 sm:w-16 -translate-x-1/2 -translate-y-1/2 animate-float" color="#FF8FA3" />
          <Balloon className="absolute top-3 left-[18%] w-6 animate-float [animation-delay:-1.5s]" color="#FFC6A8" />
          <Balloon className="absolute top-5 right-[16%] w-5 animate-float [animation-delay:-3s]" color="#A9E4F5" />
          <Sparkle className="absolute bottom-4 left-[30%] w-3" color="#fff" />
        </>
      );
    case "sun":
      return (
        <>
          <Sun className="absolute top-1/2 left-1/2 w-14 sm:w-20 -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
          <Cloud className="absolute bottom-3 left-[10%] w-10 animate-drift sm:w-14" />
          <Cloud className="absolute top-3 right-[8%] w-10 animate-drift [animation-delay:-8s]" />
        </>
      );
    case "star":
      return (
        <>
          <Star className="absolute top-1/2 left-1/2 w-12 sm:w-16 -translate-x-1/2 -translate-y-1/2 animate-twinkle" color="#FFD84D" />
          <Moon className="absolute top-3 left-[16%] w-7" color="#FFF4C7" />
          <Sparkle className="absolute top-5 right-[20%] w-3.5 animate-twinkle [animation-delay:-1s]" />
          <Sparkle className="absolute right-[30%] bottom-4 w-2.5 animate-twinkle [animation-delay:-2s]" />
          <Star className="absolute bottom-4 left-[28%] w-4" color="#fff" />
        </>
      );
    case "flower":
      return (
        <>
          <Flower className="absolute top-1/2 left-1/2 w-12 sm:w-16 -translate-x-1/2 -translate-y-1/2 animate-sway" color="#FF9FB8" />
          <Tulip className="absolute bottom-1 left-[16%] w-5" color="#D9C7FA" />
          <Tulip className="absolute right-[18%] bottom-1 w-4" color="#FFC6A8" />
          <Flower className="absolute top-3 right-[12%] w-7 animate-sway [animation-delay:-2s]" color="#fff" accent="#FFC94D" />
        </>
      );
  }
}

export function Groups() {
  const { t } = useLanguage();
  const g = t.groups;

  return (
    <section
      id="groups"
      aria-labelledby="groups-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f1ff_0%,#fff3f7_100%)] pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-14 lg:pb-16"
    >
      <Wave className="absolute inset-x-0 -top-px h-8 w-full sm:h-12" color="#fffdf7" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Rainbow className="absolute top-[18%] -left-6 hidden w-28 -rotate-12 opacity-70 md:block" />
        <Cloud className="absolute top-[22%] right-[5%] w-16 animate-drift sm:w-20" />
        <Star className="absolute bottom-[12%] left-[7%] w-5 animate-twinkle" color="#FFD84D" />
        <Sparkle className="absolute right-[9%] bottom-[18%] w-4 animate-twinkle [animation-delay:-1s]" color="#C4A9F5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="groups" eyebrow={g.eyebrow} title={g.title} subtitle={g.subtitle} tone="lavender" />

        <ul className="mx-auto mt-7 grid max-w-md gap-4 sm:max-w-none sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {groups.map((group, i) => {
            const th = themes[group.theme];
            return (
              <li
                key={group.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className={`group relative flex items-center gap-3 overflow-hidden rounded-[28px] bg-white p-2.5 sm:flex-col sm:items-stretch sm:gap-0 sm:rounded-[30px] shadow-soft ring-2 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift ${th.card}`}
              >
                <div
                  className={`relative size-24 shrink-0 overflow-hidden rounded-[44%_56%_48%_52%/55%_45%_55%_45%] sm:h-32 sm:w-auto sm:rounded-t-[999px] sm:rounded-b-[22px] ${th.scene}`}
                  aria-hidden
                >
                  <GroupScene theme={group.theme} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-start py-1 pr-2 text-left sm:items-center sm:px-3 sm:pt-4 sm:pb-3 sm:text-center">
                  <span className={`rounded-full px-3 py-1 text-[0.8rem] font-extrabold ${th.pill}`}>
                    {g.levels[group.level]}
                  </span>
                  <h3 lang="kk" className={`mt-1.5 text-xl font-bold sm:mt-3 sm:text-2xl ${th.name}`}>
                    «{group.name}»
                  </h3>
                  <p className="mt-auto flex items-center gap-2 pt-1.5 text-[0.9rem] text-ink-soft sm:pt-3 sm:text-[0.95rem]">
                    <Languages className="size-4.5 shrink-0" aria-hidden />
                    <span>
                      {g.langLabel}: <strong className="font-extrabold text-ink">{g.languages[group.language]}</strong>
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div
          data-reveal
          className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3 rounded-3xl bg-white/80 px-5 py-4 text-center shadow-soft ring-1 ring-line sm:flex-row sm:text-left"
        >
          <MessageCircleQuestion className="size-7 shrink-0 text-lavender-deep" aria-hidden />
          <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{g.note}</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-lavender-deep px-5 py-2.5 text-sm font-extrabold text-white transition-colors hover:bg-[#523a9c]"
          >
            {g.ask}
          </a>
        </div>
      </div>
    </section>
  );
}
