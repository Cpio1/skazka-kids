"use client";

import { asset } from "@/lib/paths";
import { Download, ExternalLink, FileText, FileType2, FolderOpen, Link2, MessageCircle, type LucideIcon } from "lucide-react";
import { documents, type DocumentKind } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Dots, Squiggle, Star, Wave } from "../decor/Shapes";

const kindStyle: Record<DocumentKind, { icon: LucideIcon; box: string }> = {
  pdf: { icon: FileText, box: "bg-pink text-pink-deep" },
  docx: { icon: FileType2, box: "bg-sky text-sky-deep" },
  drive: { icon: FolderOpen, box: "bg-mint text-mint-deep" },
  link: { icon: Link2, box: "bg-lavender text-lavender-deep" },
};

/** Скачивать можно только локальные файлы из public/documents. */
const isLocalFile = (href: string) => href.startsWith("/");

export function Documents() {
  const { t, locale } = useLanguage();
  const d = t.documents;

  return (
    <section
      id="documents"
      aria-labelledby="documents-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f2ff_0%,#fdf9ff_100%)] pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-14 lg:pb-16"
    >
      <Wave className="absolute inset-x-0 -top-px h-8 w-full sm:h-12" color="#f3fbfe" flip />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Dots className="absolute top-[22%] left-[6%] hidden w-14 opacity-70 md:block" color="#D9C7FA" />
        <Squiggle className="absolute right-[7%] bottom-[18%] w-14 opacity-80" color="#FFC6A8" />
        <Star className="absolute top-[18%] right-[12%] w-5 animate-twinkle" color="#FFD84D" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="documents" title={d.title} subtitle={d.subtitle} tone="lavender" />

        {documents.length > 0 ? (
          <ul className="mx-auto mt-7 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => {
              const s = kindStyle[doc.kind];
              const Icon = s.icon;
              const local = isLocalFile(doc.href);
              return (
                <li key={doc.href} data-reveal className="flex flex-col rounded-[26px] bg-white p-5 shadow-soft ring-1 ring-line">
                  <div className="flex items-start gap-3.5">
                    <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${s.box}`}>
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.05rem] leading-snug font-extrabold text-ink">{doc.title[locale]}</h3>
                      <p className="mt-1 text-sm font-bold text-ink-soft">
                        {d.kinds[doc.kind]}
                        {doc.note ? ` · ${doc.note[locale]}` : ""}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={asset(doc.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-lavender-deep px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-[#523a9c]"
                    >
                      <ExternalLink className="size-4" aria-hidden />
                      {d.open}
                    </a>
                    {local && (
                      <a
                        href={asset(doc.href)}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full bg-lavender-soft px-4 py-2 text-sm font-extrabold text-lavender-deep ring-1 ring-lavender transition-colors hover:bg-lavender"
                      >
                        <Download className="size-4" aria-hidden />
                        {d.download}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div
            data-reveal
            className="relative mx-auto mt-7 flex max-w-2xl flex-col items-center overflow-hidden rounded-[32px] bg-white px-6 py-8 text-center shadow-soft ring-1 ring-lavender sm:px-10 sm:py-10"
          >
            {/* Иллюстрация: папка с листочками */}
            <div aria-hidden className="relative h-24 w-32">
              <span className="absolute top-1 left-7 h-18 w-14 -rotate-12 rounded-xl bg-sky-soft ring-2 ring-sky" />
              <span className="absolute top-0 left-12 h-18 w-14 rotate-6 rounded-xl bg-pink-soft ring-2 ring-pink" />
              <span className="absolute bottom-0 left-2 grid h-16 w-28 place-items-center rounded-[18px] bg-lavender text-lavender-deep shadow-soft">
                <FolderOpen className="size-8" />
              </span>
              <Star className="absolute -top-1 right-0 w-5 animate-twinkle" color="#FFD84D" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink sm:text-2xl">{d.emptyTitle}</h3>
            <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">{d.emptyText}</p>
            <a
              href="#contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-[0.95rem] font-extrabold text-white transition-colors hover:bg-[#523a9c]"
            >
              <MessageCircle className="size-4.5" aria-hidden />
              {d.emptyCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
