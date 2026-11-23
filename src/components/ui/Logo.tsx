type LogoMarkProps = { className?: string };

/** Знак «Сказка сад»: сказочный домик со звёздочкой. */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <rect width="64" height="64" rx="20" fill="#FFF4C7" />
      <circle cx="13" cy="51" r="6" fill="#BDEBCB" />
      <circle cx="53" cy="52" r="5" fill="#A9E4F5" />
      <rect x="16" y="30" width="32" height="24" rx="5" fill="#FFC6A8" />
      <path d="M10 32 32 13l22 19c1.2 1 .5 3-1.1 3H11.1c-1.6 0-2.3-2-1.1-3Z" fill="#D0446F" />
      <path d="M27 54V44.5a5 5 0 0 1 10 0V54Z" fill="#fff" />
      <circle cx="22.5" cy="40" r="2.6" fill="#FFF3B0" />
      <circle cx="41.5" cy="40" r="2.6" fill="#FFF3B0" />
      <path d="M48.5 5.5l1.9 4 4.4.5-3.3 3 .9 4.4-3.9-2.2-3.9 2.2.9-4.4-3.3-3 4.4-.5Z" fill="#F5B800" />
    </svg>
  );
}
