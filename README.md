# Сказка сад — сайт детского сада

Одностраничный двуязычный (RU/KZ) сайт детского сада ТОО «Сказка сад», г. Алматы.

**Стек:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · lucide-react · next/image.

## Локальный запуск

```bash
npm install
npm run dev        # http://localhost:3000
```

Проверки и сборка:

```bash
npm run lint
npm run typecheck
npm run build
npm run start      # запуск собранной версии
```

## Структура

```
src/
  app/                 layout (шрифты, метаданные, светлая тема), page, globals.css, icon.svg
  data/site.ts         ВСЕ данные сада: контакты, группы, галерея, документы
  i18n/                ru.ts, kk.ts — словари; LanguageProvider — переключение языка
  components/
    Header.tsx         шапка, навигация, RU/KZ, мобильное меню
    Footer.tsx, WhatsAppFloat.tsx
    sections/          Hero, About, Groups, Food, Activities, Gallery, Documents, Contacts
    decor/             SVG-фигурки (облака, звёзды, радуга, цветы, еда и т. д.)
    ui/                логотип, заголовок секции, анимация появления
public/
  images/gallery/      реальные фото из «Наш сад.docx»
  images/og-image.jpg  превью для соцсетей
  documents/           сюда класть PDF/DOCX
```

## Как редактировать

- **Контакты, группы** — `src/data/site.ts`.
- **Тексты** — `src/i18n/ru.ts` и `src/i18n/kk.ts` (структура словарей одинаковая, TypeScript проверяет, что казахский перевод полный).
- **Фото галереи** — положить файл в `public/images/gallery/`, добавить запись в массив `gallery` (`src/data/site.ts`) с реальными шириной и высотой, а подпись — в `gallery.photos` обоих словарей.
- **Документы** — положить файл в `public/documents/` (или взять ссылку Google Drive) и добавить запись в массив `documents`:

  ```ts
  { title: { ru: "Устав", kk: "Жарғы" }, kind: "pdf", href: "/documents/ustav.pdf" }
  ```

  Пока массив пуст, на сайте показывается нейтральное состояние «Документы скоро появятся».

## Важные решения

- **Только светлая тема.** `color-scheme: only light`, вариант `dark:` в Tailwind отключён, `prefers-color-scheme` не используется.
- **Язык меняется только вручную.** По умолчанию русский; выбор хранится в `localStorage` (`skazka-lang`). Язык браузера, системы и геолокация не учитываются.
- **Казахские буквы.** Шрифты Nunito и Comfortaa подключены с подмножеством `cyrillic-ext` — Ә Ғ Қ Ң Ө Ұ Ү Һ І отображаются тем же шрифтом.
- **Якоря.** У секций `scroll-margin-top` равен высоте шапки (`--header-h`), заголовки не прячутся под шапкой.
- **2GIS.** Дом 24/61 и сам сад в 2GIS пока не найдены, поэтому кнопка открывает улицу Будённого. Когда сад появится в 2GIS, замените `twoGis` в `site.ts` на ссылку его карточки.
- **Instagram** намеренно не добавлен.

## Публикация (позже)

Репозиторий пока не создан. Для публикации:

1. `git init`, первый коммит, создать репозиторий на GitHub и выполнить `git push`.
2. **Vercel (рекомендуется):** импортировать репозиторий — настройки по умолчанию подходят, `next/image` оптимизирует фото автоматически.
3. После подключения домена задать переменную окружения `NEXT_PUBLIC_SITE_URL=https://ваш-домен` — она нужна для корректных Open Graph-ссылок.
