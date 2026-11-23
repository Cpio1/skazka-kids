type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Цвет «ярлычка» над заголовком */
  tone?: "sun" | "peach" | "sky" | "mint" | "lavender" | "pink";
  align?: "center" | "left";
};

const toneClasses: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
  sun: "bg-sun-soft text-sun-deep ring-sun",
  peach: "bg-peach-soft text-peach-deep ring-peach",
  sky: "bg-sky-soft text-sky-deep ring-sky",
  mint: "bg-mint-soft text-mint-deep ring-mint",
  lavender: "bg-lavender-soft text-lavender-deep ring-lavender",
  pink: "bg-pink-soft text-pink-deep ring-pink",
};

export function SectionHeading({ id, eyebrow, title, subtitle, tone = "sun", align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`relative ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`} data-reveal>
      {eyebrow && eyebrow !== title && (
        <span
          className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-sm font-bold ring-1 ${toneClasses[tone]}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5" fill="currentColor">
            <path d="M12 0c.7 6.3 5 10.7 12 12-7 1.3-11.3 5.7-12 12-.7-6.3-5-10.7-12-12 7-1.3 11.3-5.7 12-12Z" />
          </svg>
          {eyebrow}
        </span>
      )}
      <h2 id={`${id}-title`} className="text-[1.75rem] leading-tight font-bold text-ink sm:text-[2.1rem] lg:text-[2.2rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2.5 text-base leading-relaxed text-ink-soft sm:text-[1.05rem] ${centered ? "mx-auto max-w-xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
