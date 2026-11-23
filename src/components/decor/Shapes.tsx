/**
 * Сказочные декоративные SVG-фигурки. Все — чисто декоративные (aria-hidden),
 * размер и положение задаются снаружи через className.
 */

type ShapeProps = { className?: string; color?: string; accent?: string };

const base = { "aria-hidden": true, focusable: false } as const;

export function Cloud({ className, color = "#ffffff" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 120 64" className={className}>
      <path
        d="M24 56c-11 0-19-7-19-16s8-16 18-16c2-11 12-19 24-19 10 0 18 5 22 13 3-2 7-3 11-3 11 0 20 8 21 18 8 1 14 7 14 14 0 5-5 9-11 9H24Z"
        fill={color}
      />
    </svg>
  );
}

export function Star({ className, color = "#FFD84D" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <path
        d="M20 2.5c1 0 1.8.6 2.2 1.5l4 9 9.7 1c1 .1 1.8.8 2.1 1.7.3 1-.0 2-.7 2.6l-7.3 6.6 2.1 9.6c.2 1-.2 2-1 2.5-.8.6-1.9.6-2.7.1L20 33.1l-8.4 5c-.8.5-1.9.5-2.7-.1-.8-.6-1.2-1.6-1-2.5l2.1-9.6-7.3-6.6c-.7-.7-1-1.7-.7-2.6.3-1 1.1-1.6 2.1-1.7l9.7-1 4-9c.4-.9 1.2-1.5 2.2-1.5Z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className, color = "#ffffff" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M12 0c.7 6.3 5 10.7 12 12-7 1.3-11.3 5.7-12 12-.7-6.3-5-10.7-12-12 7-1.3 11.3-5.7 12-12Z" fill={color} />
    </svg>
  );
}

export function Rainbow({ className }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 120 64" className={className} fill="none" strokeLinecap="round">
      <path d="M8 60a52 52 0 0 1 104 0" stroke="#FF9FB8" strokeWidth="9" />
      <path d="M19 60a41 41 0 0 1 82 0" stroke="#FFC46B" strokeWidth="9" />
      <path d="M30 60a30 30 0 0 1 60 0" stroke="#FFE68A" strokeWidth="9" />
      <path d="M41 60a19 19 0 0 1 38 0" stroke="#8FD9B0" strokeWidth="9" />
      <path d="M52 60a8 8 0 0 1 16 0" stroke="#86CFEA" strokeWidth="8" />
    </svg>
  );
}

export function Flower({ className, color = "#FF9FB8", accent = "#FFD84D" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 48 48" className={className}>
      <g fill={color}>
        <circle cx="24" cy="11" r="9" />
        <circle cx="36.4" cy="20" r="9" />
        <circle cx="31.6" cy="34.5" r="9" />
        <circle cx="16.4" cy="34.5" r="9" />
        <circle cx="11.6" cy="20" r="9" />
      </g>
      <circle cx="24" cy="24" r="7.5" fill={accent} />
      <circle cx="21.5" cy="22" r="2" fill="#fff" opacity=".7" />
    </svg>
  );
}

export function Tulip({ className, color = "#FF8FA3" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 32 64" className={className}>
      <path d="M16 62V30" stroke="#5DBB7E" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 46c-6-1-10-6-11-12 6 0 10 4 11 12Zm0-4c5-1 9-5 10-10-5 0-9 4-10 10Z" fill="#7CCF96" />
      <path d="M5 8c3 2 6 5 7 9 1-5 3-9 4-13 1 4 3 8 4 13 1-4 4-7 7-9 1 12-3 22-11 22S4 20 5 8Z" fill={color} />
    </svg>
  );
}

export function Balloon({ className, color = "#A9E4F5" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 40 80" className={className}>
      <path d="M20 50c-1 8 4 12 0 18s2 10 1 12" stroke="#94A3B8" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="20" cy="22" rx="17" ry="21" fill={color} />
      <path d="M16 43h8l-4 6Z" fill={color} />
      <ellipse cx="13" cy="14" rx="4" ry="7" fill="#fff" opacity=".55" transform="rotate(20 13 14)" />
    </svg>
  );
}

export function Butterfly({ className, color = "#D9C7FA", accent = "#FFC6A8" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 56 44" className={className}>
      <path d="M27 21C21 6 8 0 4 6s4 18 23 15Z" fill={color} />
      <path d="M29 21C35 6 48 0 52 6s-4 18-23 15Z" fill={color} />
      <path d="M27 23C16 22 9 30 12 36s12 2 15-13Z" fill={accent} />
      <path d="M29 23c11-1 18 7 15 13s-12 2-15-13Z" fill={accent} />
      <rect x="26" y="12" width="4" height="24" rx="2" fill="#475569" />
      <path d="M27 13c-2-4-5-6-8-7M29 13c2-4 5-6 8-7" stroke="#475569" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function House({ className, color = "#FFC6A8", accent = "#FF8FA3" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 64 64" className={className}>
      <rect x="11" y="28" width="42" height="32" rx="5" fill={color} />
      <path d="M5 31 32 7l27 24c1.4 1.3.5 3.6-1.4 3.6H6.4C4.5 34.6 3.6 32.3 5 31Z" fill={accent} />
      <rect x="40" y="10" width="7" height="13" rx="2" fill={accent} />
      <path d="M26 60V46a6 6 0 0 1 12 0v14Z" fill="#fff" opacity=".85" />
      <circle cx="21" cy="40" r="4" fill="#FFF3B0" />
      <circle cx="44" cy="40" r="4" fill="#FFF3B0" />
    </svg>
  );
}

export function Tree({ className, color = "#8FD9B0" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 48 64" className={className}>
      <rect x="21" y="36" width="6" height="26" rx="3" fill="#C99A6B" />
      <path d="M24 2c9 0 15 7 15 14 5 3 7 8 6 13-1 7-8 11-15 10H18c-7 1-14-3-15-10-1-5 1-10 6-13C9 9 15 2 24 2Z" fill={color} />
      <circle cx="16" cy="18" r="2.5" fill="#FF9FB8" />
      <circle cx="31" cy="26" r="2.5" fill="#FF9FB8" />
      <circle cx="27" cy="12" r="2" fill="#FFE68A" />
    </svg>
  );
}

export function Sun({ className }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 64 64" className={className}>
      <g stroke="#FFC94D" strokeWidth="4" strokeLinecap="round">
        <path d="M32 3v8M32 53v8M3 32h8M53 32h8M11.5 11.5l5.7 5.7M46.8 46.8l5.7 5.7M11.5 52.5l5.7-5.7M46.8 17.2l5.7-5.7" />
      </g>
      <circle cx="32" cy="32" r="15" fill="#FFD84D" />
      <circle cx="27" cy="30" r="1.8" fill="#7C5A12" />
      <circle cx="37" cy="30" r="1.8" fill="#7C5A12" />
      <path d="M27 36c3 3 7 3 10 0" stroke="#7C5A12" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Moon({ className, color = "#FFE68A" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <path d="M26 3a17 17 0 1 0 11 27A15 15 0 0 1 26 3Z" fill={color} />
    </svg>
  );
}

export function Heart({ className, color = "#FF9FB8" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 40 36" className={className}>
      <path d="M20 34S2 23 2 11C2 5.5 6 2 10.8 2c3.9 0 7 2.4 9.2 5.6C22.2 4.4 25.3 2 29.2 2 34 2 38 5.5 38 11c0 12-18 23-18 23Z" fill={color} />
    </svg>
  );
}

/** Мягкая «капля» — абстрактная фигура для фона. */
export function Blob({ className, color = "#BDEBCB" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 200 200" className={className}>
      <path
        d="M43.6-58.4C56.4-49.4 66.1-35.6 70.4-20.1 74.7-4.6 73.6 12.6 66.2 26.3 58.8 40 45.1 50.2 30 58.3 14.9 66.4-1.6 72.4-17.2 69.6-32.8 66.8-47.5 55.3-57.6 40.7-67.7 26.1-73.2 8.5-70.7-7.9-68.2-24.3-57.8-39.5-44.4-48.6-31-57.7-15.5-60.8 .3-61.2 16.1-61.6 30.8-67.4 43.6-58.4Z"
        transform="translate(100 100)"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ className, color = "#D9C7FA" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 80 20" className={className} fill="none">
      <path d="M3 12c6-9 11-9 16 0s11 9 16 0 11-9 16 0 11 9 16 0 7-7 10-4" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Dots({ className, color = "#FFC6A8" }: ShapeProps) {
  return (
    <svg {...base} viewBox="0 0 60 60" className={className}>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => <circle key={`${r}-${c}`} cx={8 + c * 15} cy={8 + r * 15} r="3.2" fill={color} />),
      )}
    </svg>
  );
}

/** Волнистый разделитель между секциями. Цвет — цвет следующей секции. */
export function Wave({ className, color = "#FFF9ED", flip = false }: ShapeProps & { flip?: boolean }) {
  return (
    <svg
      {...base}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0 32c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v28H0Z"
        fill={color}
      />
    </svg>
  );
}
