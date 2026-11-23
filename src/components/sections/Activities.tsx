"use client";

import { BookOpen, Footprints, Music, Volleyball, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary } from "@/i18n/ru";
import { SectionHeading } from "../ui/SectionHeading";
import { Butterfly, Cloud, Rainbow, Sparkle, Star, Wave } from "../decor/Shapes";

type ActivityKey = keyof Dictionary["activities"]["items"];

const order: ActivityKey[] = ["kazakh", "english", "music", "sport", "dance", "speech"];

const styles: Record<ActivityKey, { card: string; art: string; accent: string }> = {
  kazakh: { card: "bg-sky-soft ring-sky", art: "bg-sky", accent: "text-sky-deep" },
  english: { card: "bg-peach-soft ring-peach", art: "bg-peach", accent: "text-peach-deep" },
  music: { card: "bg-lavender-soft ring-lavender", art: "bg-lavender", accent: "text-lavender-deep" },
  sport: { card: "bg-mint-soft ring-mint", art: "bg-mint", accent: "text-mint-deep" },
  dance: { card: "bg-pink-soft ring-pink", art: "bg-pink", accent: "text-pink-deep" },
  speech: { card: "bg-sun-soft ring-sun", art: "bg-sun", accent: "text-sun-deep" },
};

function LetterTiles({ letters, colors }: { letters: string[]; colors: string[] }) {
  return (
    <div className="flex items-end gap-1.5">
      {letters.map((l, i) => (
        <span
          key={l}
          className={`grid size-9 place-items-center rounded-xl bg-white font-display text-lg font-bold shadow-sm ${colors[i % colors.length]} ${
            i % 2 ? "-rotate-6" : "rotate-6"
          }`}
        >
          {l}
        </span>
      ))}
    </div>
  );
}

function IconBubble({ icon: Icon, className }: { icon: LucideIcon; className: string }) {
  return (
    <span className={`grid size-12 place-items-center rounded-full bg-white shadow-sm ${className}`}>
      <Icon className="size-6" aria-hidden />
    </span>
  );
}

/** Маленькая иллюстрация для каждой карточки занятия. */
function ActivityArt({ kind }: { kind: ActivityKey }) {
  switch (kind) {
    case "kazakh":
      return (
        <div className="flex items-end gap-2">
          <IconBubble icon={BookOpen} className="text-sky-deep" />
          <LetterTiles letters={["Ә", "Қ", "Ө"]} colors={["text-sky-deep", "text-berry", "text-mint-deep"]} />
        </div>
      );
    case "english":
      return <LetterTiles letters={["A", "B", "C"]} colors={["text-peach-deep", "text-lavender-deep", "text-sky-deep"]} />;
    case "music":
      return (
        <div className="flex items-end gap-2">
          <IconBubble icon={Music} className="text-lavender-deep" />
          <svg aria-hidden viewBox="0 0 60 40" className="h-9 w-14 animate-sway">
            <path d="M14 30V8l30-6v22" stroke="#6345B8" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="10" cy="31" rx="6" ry="5" fill="#6345B8" />
            <ellipse cx="40" cy="25" rx="6" ry="5" fill="#D0446F" />
          </svg>
        </div>
      );
    case "sport":
      return (
        <div className="flex items-end gap-2">
          <span className="grid size-12 animate-float place-items-center rounded-full bg-white text-mint-deep shadow-sm">
            <Volleyball className="size-7" aria-hidden />
          </span>
          <svg aria-hidden viewBox="0 0 40 20" className="h-4 w-9">
            <path d="M2 16c8 0 12-12 18-12s10 12 18 12" stroke="#1D7A43" strokeWidth="2.5" strokeDasharray="3 5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "dance":
      return (
        <div className="flex items-end gap-2">
          <IconBubble icon={Footprints} className="text-pink-deep" />
          <svg aria-hidden viewBox="0 0 64 36" className="h-9 w-16">
            <path d="M3 26c9-18 18-18 22-6s14 12 20-2 12-10 16-4" stroke="#D0446F" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M3 32c10-10 18-8 24 0" stroke="#FFC6A8" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "speech":
      return (
        <div className="relative h-12 w-24" aria-hidden>
          <span className="absolute top-0 left-0 rounded-[18px_18px_18px_4px] bg-white px-3 py-1 font-display text-sm font-bold text-sun-deep shadow-sm">
            А-а!
          </span>
          <span className="absolute right-0 bottom-0 rounded-[18px_18px_4px_18px] bg-berry px-3 py-1 font-display text-sm font-bold text-white shadow-sm">
            Р-р!
          </span>
        </div>
      );
  }
}

export function Activities() {
  const { t } = useLanguage();
  const a = t.activities;

  return (
    <section
      id="activities"
      aria-labelledby="activities-title"
      className="relative overflow-hidden bg-cream pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-14 lg:pb-16"
    >
      <Wave className="absolute inset-x-0 -top-px h-8 w-full sm:h-12" color="#f4fbf3" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Rainbow className="absolute top-[12%] right-[3%] hidden w-24 rotate-12 opacity-70 lg:block" />
        <Cloud className="absolute top-[16%] left-[4%] w-16 animate-drift sm:w-20" color="#E3F6FC" />
        <Butterfly className="absolute bottom-[8%] right-[6%] hidden w-11 animate-float md:block" />
        <Star className="absolute bottom-[14%] left-[5%] w-6 animate-twinkle" color="#FFD84D" />
        <Sparkle className="absolute top-[40%] left-[2%] w-3 animate-twinkle [animation-delay:-1.4s]" color="#C4A9F5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="activities" eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} tone="sky" />

        <ul className="mx-auto mt-7 grid max-w-md gap-4 sm:max-w-none sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {order.map((key, i) => {
            const item = a.items[key];
            const s = styles[key];
            const isSpeech = key === "speech";
            return (
              <li
                key={key}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
                className={`group relative flex flex-col justify-between gap-3 overflow-hidden rounded-[28px] p-4 sm:min-h-44 sm:gap-4 sm:rounded-[30px] sm:p-5 ring-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-6 ${s.card}`}
              >
                <span
                  aria-hidden
                  className={`absolute -top-10 -right-10 size-32 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-110 ${s.art}`}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <ActivityArt kind={key} />
                  <span className={`rounded-full bg-white/90 px-2.5 py-1 text-[0.75rem] font-extrabold ${s.accent}`}>
                    {isSpeech ? a.speechBadge : a.specialist}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
