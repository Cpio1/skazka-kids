/**
 * Подпуть, по которому открывается сайт (на GitHub Pages — "/skazka-kids", локально — "").
 * Значение задаётся в next.config.ts и встраивается при сборке.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Адрес файла из public/ с учётом basePath: asset("/images/x.jpg") → "/skazka-kids/images/x.jpg". */
export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
