import type { NextConfig } from "next";

/**
 * Статический сайт для GitHub Pages (папка `out/`, без Node.js-сервера).
 *
 * Сайт публикуется по адресу https://cpio1.github.io/skazka-kids/, поэтому при сборке
 * используется basePath "/skazka-kids". Локально (`npm run dev`) сайт открывается в корне.
 * Для собственного домена задайте BASE_PATH="" и SITE_URL=https://домен.
 */
const isProd = process.env.NODE_ENV === "production";

const basePath = (process.env.BASE_PATH ?? (isProd ? "/skazka-kids" : "")).replace(/\/+$/, "");
const siteUrl = (
  process.env.SITE_URL ?? (isProd ? "https://cpio1.github.io/skazka-kids" : "http://localhost:3000")
).replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  poweredByHeader: false,
  // Значения встраиваются в код при сборке (см. src/lib/paths.ts и src/app/layout.tsx)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    // На GitHub Pages нет сервера для оптимизации — отдаём файлы из public/ как есть
    unoptimized: true,
  },
};

export default nextConfig;
