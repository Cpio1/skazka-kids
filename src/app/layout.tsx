import type { Metadata, Viewport } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import { LANG_STORAGE_KEY } from "@/i18n/config";
import { ru } from "@/i18n/ru";
import "./globals.css";

// Подмножество cyrillic-ext содержит казахские буквы Ә Ғ Қ Ң Ө Ұ Ү Һ І —
// без него они подставлялись бы из другого шрифта и выглядели крупнее остальных.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: ru.meta.title,
  description: ru.meta.description,
  applicationName: "Сказка сад",
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    alternateLocale: ["kk_KZ"],
    siteName: "Сказка сад",
    title: ru.meta.title,
    description: ru.meta.description,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Детский сад «Сказка сад»" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ru.meta.title,
    description: ru.meta.description,
    images: ["/images/og-image.jpg"],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "only light",
  themeColor: "#fff9ed",
};

/**
 * Выполняется до отрисовки: включает анимации появления и, если пользователь
 * ранее выбрал казахский язык, ненадолго скрывает страницу, пока React применяет перевод.
 */
const bootstrap = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem(${JSON.stringify(
  LANG_STORAGE_KEY,
)})==='kk'){d.lang='kk';d.classList.add('lang-pending');setTimeout(function(){d.classList.remove('lang-pending')},1500)}}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      translate="no"
      className={`${nunito.variable} ${comfortaa.variable} notranslate antialiased`}
      style={{ colorScheme: "only light" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="only light" />
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
