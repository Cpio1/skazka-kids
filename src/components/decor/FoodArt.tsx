/** Иллюстрации для раздела «Питание»: фрукты, овощи, тарелка и приборы. */

type ArtProps = { className?: string };
const base = { "aria-hidden": true, focusable: false } as const;

export function Apple({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 48 52" className={className}>
      <path d="M24 14c-4-3-11-4-16 1-6 6-5 18 1 27 4 6 8 9 12 8 2-1 4-1 6 0 4 1 8-2 12-8 6-9 7-21 1-27-5-5-12-4-16-1Z" fill="#FF7A7A" />
      <path d="M24 15c0-5 1-9 4-12" stroke="#8A5A2B" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M27 8c4-5 10-5 13-3-3 5-9 6-13 3Z" fill="#6CC28A" />
      <ellipse cx="14" cy="24" rx="3" ry="6" fill="#fff" opacity=".45" transform="rotate(20 14 24)" />
    </svg>
  );
}

export function Pear({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 40 56" className={className}>
      <path d="M20 10c-5 0-7 5-7 10 0 4-8 9-8 19 0 9 7 15 15 15s15-6 15-15c0-10-8-15-8-19 0-5-2-10-7-10Z" fill="#C9E46B" />
      <path d="M20 11V3" stroke="#8A5A2B" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 6c3-4 8-4 10-2-3 4-7 4-10 2Z" fill="#6CC28A" />
    </svg>
  );
}

export function Carrot({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 40 60" className={className}>
      <path d="M13 18c-2 6 2 30 7 38 5-8 9-32 7-38-2-4-12-4-14 0Z" fill="#FF9F43" />
      <path d="M15 28h5M17 38h5M18 47h3" stroke="#E07B1F" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 17c-1-6-5-10-10-11 1 6 5 10 10 11Zm0 0c0-7 2-12 6-15 1 6-2 12-6 15Zm0 0c3-5 8-7 13-6-2 5-8 7-13 6Z" fill="#6CC28A" />
    </svg>
  );
}

export function Cherries({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 48 48" className={className}>
      <path d="M14 34c2-12 8-22 18-28M34 34c-1-10-1-20-2-28" stroke="#5E9E5E" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M32 6c5-3 11-1 13 2-5 3-10 2-13-2Z" fill="#7CCF96" />
      <circle cx="13" cy="37" r="9" fill="#E8466A" />
      <circle cx="35" cy="37" r="9" fill="#F05A7E" />
      <circle cx="10" cy="34" r="2.2" fill="#fff" opacity=".6" />
      <circle cx="32" cy="34" r="2.2" fill="#fff" opacity=".6" />
    </svg>
  );
}

export function Broccoli({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 48 52" className={className}>
      <path d="M19 30h10l2 20H17Z" fill="#A8D87A" />
      <g fill="#5DBB7E">
        <circle cx="14" cy="22" r="9" />
        <circle cx="24" cy="15" r="10" />
        <circle cx="34" cy="22" r="9" />
        <circle cx="24" cy="26" r="9" />
      </g>
      <circle cx="20" cy="12" r="2.5" fill="#8FD9B0" />
      <circle cx="31" cy="20" r="2" fill="#8FD9B0" />
    </svg>
  );
}

export function Banana({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 56 40" className={className}>
      <path d="M6 10c4 14 16 24 32 22 6-1 11-4 13-8-8 4-18 4-27-2C17 17 12 12 9 6c-1-2-4-1-3 4Z" fill="#FFD84D" />
      <path d="M8 6 6 2" stroke="#8A5A2B" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 14c5 7 12 12 22 13" stroke="#F5B800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function JuiceGlass({ className }: ArtProps) {
  return (
    <svg {...base} viewBox="0 0 40 56" className={className}>
      <path d="M26 4 22 18" stroke="#FF8FA3" strokeWidth="3" strokeLinecap="round" />
      <path d="M7 16h26l-3 34c0 2-2 4-4 4H14c-2 0-4-2-4-4Z" fill="#E3F6FC" />
      <path d="M8.5 26h23l-2 24c0 1.5-1.5 2.8-3 2.8H13.5c-1.5 0-3-1.3-3-2.8Z" fill="#FFB347" />
      <circle cx="33" cy="17" r="6" fill="#FFD84D" />
      <circle cx="33" cy="17" r="3.5" fill="#FFE68A" />
    </svg>
  );
}

/** Тарелка с приборами — центральная композиция раздела. */
export function PlateSet({ className, children }: ArtProps & { children?: React.ReactNode }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg {...base} viewBox="0 0 320 240" className="h-auto w-full">
        {/* вилка */}
        <g fill="#C7D2E0">
          <rect x="22" y="96" width="9" height="122" rx="4.5" />
          <path d="M14 26c0-3 4-3 4 0v44h4V26c0-3 4-3 4 0v44h4V26c0-3 4-3 4 0v44h4V26c0-3 4-3 4 0v50c0 12-7 20-15 22-8-2-15-10-15-22Z" />
        </g>
        {/* ложка */}
        <g fill="#C7D2E0">
          <rect x="289" y="96" width="9" height="122" rx="4.5" />
          <ellipse cx="293.5" cy="58" rx="19" ry="34" />
        </g>
        {/* тарелка */}
        <circle cx="160" cy="120" r="104" fill="#ffffff" />
        <circle cx="160" cy="120" r="104" fill="none" stroke="#F0E4CF" strokeWidth="3" />
        <circle cx="160" cy="120" r="80" fill="#FFF9ED" />
        <circle cx="160" cy="120" r="80" fill="none" stroke="#FFD2E2" strokeWidth="4" strokeDasharray="2 12" strokeLinecap="round" />
      </svg>
      {children}
    </div>
  );
}
