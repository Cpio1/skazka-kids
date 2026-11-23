"use client";

import { asset } from "@/lib/paths";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Cloud, Flower, Sparkle, Wave } from "../decor/Shapes";

const frameColors = ["ring-sun", "ring-pink", "ring-sky", "ring-mint", "ring-lavender", "ring-peach"];

function Lightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (i: number) => void }) {
  const { t } = useLanguage();
  const g = t.gallery;
  const photo = gallery[index];
  const total = gallery.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Блокируем прокрутку страницы, пока открыт просмотр
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={g.dialogLabel}
      className="fixed inset-0 z-[60] flex flex-col bg-[#1f2937]/92 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start == null || end == null) return;
        const dx = end - start;
        if (Math.abs(dx) > 50) {
          if (dx > 0) prev();
          else next();
        }
      }}
    >
      <div className="flex items-center justify-between gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 text-white sm:px-6">
        <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={g.close}
          className="grid size-11 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
        >
          <X className="size-6" aria-hidden />
        </button>
      </div>

      <div
        className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 px-3 sm:px-20"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <figure className="relative h-full w-full">
          <Image
            key={photo.src}
            src={asset(photo.src)}
            alt={g.photos[photo.key]}
            fill
            sizes="(min-width: 1280px) 1100px, 100vw"
            className="object-contain"
            priority
          />
        </figure>

        <button
          type="button"
          onClick={prev}
          aria-label={g.prev}
          className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lift transition-transform hover:scale-105 sm:grid"
        >
          <ChevronLeft className="size-7" aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={g.next}
          className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lift transition-transform hover:scale-105 sm:grid"
        >
          <ChevronRight className="size-7" aria-hidden />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={prev}
          aria-label={g.prev}
          className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink sm:hidden"
        >
          <ChevronLeft className="size-7" aria-hidden />
        </button>
        <p className="min-w-0 text-center text-base font-bold text-white" aria-live="polite">
          {g.photos[photo.key]}
        </p>
        <button
          type="button"
          onClick={next}
          aria-label={g.next}
          className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink sm:hidden"
        >
          <ChevronRight className="size-7" aria-hidden />
        </button>
      </div>
    </div>
  );
}

export function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpened = useRef<number | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    const i = lastOpened.current;
    if (i != null) requestAnimationFrame(() => triggerRefs.current[i]?.focus({ preventScroll: true }));
  }, []);

  const change = useCallback((i: number) => {
    lastOpened.current = i;
    setOpenIndex(i);
  }, []);

  const [expanded, setExpanded] = useState(false);

  // Сначала показываем часть фото, чтобы сетка помещалась в экран:
  // телефон и планшет — 6 (2 или 3 ряда), desktop — 8 (2 ряда по 4).
  const hiddenClass = (i: number) => (expanded ? "" : i >= 8 ? "hidden" : i >= 6 ? "hidden lg:block" : "");

  const toggle = () => {
    if (expanded) {
      const section = document.getElementById("gallery");
      if (section && section.getBoundingClientRect().top < 0) section.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e3f6fc_0%,#f3fbfe_100%)] pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-12 lg:pb-10"
    >
      <Wave className="absolute inset-x-0 -top-px h-6 w-full sm:h-9" color="#fff9ed" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Cloud className="absolute top-[9%] right-[5%] w-12 animate-drift sm:w-16" />
        <Flower className="absolute bottom-[5%] left-[3%] hidden w-6 animate-sway lg:block" color="#FFD2E2" />
        <Sparkle className="absolute top-[12%] left-[8%] w-2.5 animate-twinkle" color="#FFC94D" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="gallery" title={g.title} subtitle={g.subtitle} tone="sky" compact />

        <ul id="gallery-grid" className="gallery-grid mx-auto mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:mt-6 lg:grid-cols-4">
          {gallery.map((photo, i) => (
            <li key={photo.key} className={hiddenClass(i)}>
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                onClick={() => change(i)}
                aria-label={`${g.open}: ${g.photos[photo.key]}`}
                className={`group relative block w-full overflow-hidden rounded-[18px] bg-white p-1 shadow-soft ring-2 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:rounded-[22px] sm:p-1.5 ${frameColors[i % frameColors.length]}`}
              >
                {/* Единый квадратный формат превью; целиком фото видно в просмотре */}
                <span className="relative block aspect-square overflow-hidden rounded-[14px] sm:rounded-[17px]">
                  <Image
                    src={asset(photo.src)}
                    alt={g.photos[photo.key]}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 768px) 30vw, 46vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden items-end justify-between gap-2 bg-gradient-to-t from-[#1f2937]/70 to-transparent px-3 pt-8 pb-2.5 text-left text-[0.85rem] leading-snug font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
                    {g.photos[photo.key]}
                    <Expand className="size-4 shrink-0" aria-hidden />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {gallery.length > 6 && (
          <div className="mt-5 flex justify-center lg:mt-6">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls="gallery-grid"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-[0.95rem] font-extrabold text-sky-deep shadow-soft ring-2 ring-sky transition-colors hover:bg-sky-soft"
            >
              <Images className="size-5" aria-hidden />
              {expanded ? g.showLess : `${g.showAll} (${gallery.length})`}
            </button>
          </div>
        )}
      </div>

      {openIndex !== null && <Lightbox index={openIndex} onClose={close} onChange={change} />}
    </section>
  );
}
