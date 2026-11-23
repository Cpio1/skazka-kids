/**
 * Единый конфигурационный файл детского сада «Сказка сад».
 * Все факты взяты из документа «Наш сад.docx». Тексты на двух языках — в src/i18n.
 */

export type Locale = "ru" | "kk";

export type Localized = Record<Locale, string>;

export const site = {
  legalName: { ru: "ТОО «Сказка сад»", kk: "«Сказка сад» ЖШС" } satisfies Localized,
  shortName: "Сказка сад",
  director: { ru: "Алиев Мажит Кадырович", kk: "Алиев Мажит Кадырович" } satisfies Localized,
  openedYear: 2025,
  capacity: 95,
  groupsCount: 4,
  phone: {
    display: "+7 705 286 40 42",
    href: "tel:+77052864042",
  },
  whatsapp: "https://wa.me/77052864042",
  email: {
    display: "skazkasad403@gmail.com",
    href: "mailto:skazkasad403@gmail.com",
  },
  hours: "07:30–18:30",
  address: {
    ru: "г. Алматы, Турксибский район, улица Будённого, 24/61",
    kk: "Алматы қ., Түрксіб ауданы, Будённый көшесі, 24/61",
  } satisfies Localized,
  /**
   * Поиск в 2GIS — без выдуманного идентификатора организации.
   * Проверено (ноябрь 2026): дом 24/61 и сам сад в 2GIS не найдены, а запрос с номером дома
   * показывает посторонние детские сады. Поэтому ссылка ведёт на улицу Будённого.
   * Когда сад появится в 2GIS, замените ссылку на его карточку.
   */
  twoGis: `https://2gis.kz/almaty/search/${encodeURIComponent("улица Буденного")}`,
} as const;

/* ---------------- Группы ---------------- */

export type GroupLevel = "junior" | "middle" | "senior";
export type TeachingLanguage = "kk" | "ru";
export type GroupTheme = "sun" | "honey" | "star" | "flower";

export type Group = {
  name: string;
  level: GroupLevel;
  language: TeachingLanguage;
  theme: GroupTheme;
};

/** Названия групп — как в исходном документе. */
export const groups: Group[] = [
  { name: "Айналайын", level: "junior", language: "kk", theme: "honey" },
  { name: "Күншуак", level: "middle", language: "kk", theme: "sun" },
  { name: "Жүлдызша", level: "middle", language: "ru", theme: "star" },
  { name: "Гүлдер", level: "senior", language: "ru", theme: "flower" },
];

/* ---------------- Галерея ---------------- */

export type GalleryKey =
  | "facade"
  | "playground"
  | "groupRoomPink"
  | "hallArch"
  | "groupRoomBlue"
  | "groupRoomOrange"
  | "playRoom"
  | "bigHall"
  | "hallDecor"
  | "classroom"
  | "staircase"
  | "corridor";

export type GalleryPhoto = {
  key: GalleryKey;
  src: string;
  width: number;
  height: number;
};

/** Реальные фотографии из «Наш сад.docx». Подписи — в словарях (gallery.photos). */
export const gallery: GalleryPhoto[] = [
  { key: "facade", src: "/images/gallery/facade.jpg", width: 569, height: 762 },
  { key: "groupRoomPink", src: "/images/gallery/group-room-pink.jpg", width: 1600, height: 1200 },
  { key: "playground", src: "/images/gallery/playground.jpg", width: 1200, height: 1600 },
  { key: "hallArch", src: "/images/gallery/hall-arch.jpg", width: 1600, height: 1200 },
  { key: "groupRoomBlue", src: "/images/gallery/group-room-blue.jpg", width: 1200, height: 1600 },
  { key: "groupRoomOrange", src: "/images/gallery/group-room-orange.jpg", width: 1600, height: 1200 },
  { key: "hallDecor", src: "/images/gallery/hall-decor.jpg", width: 1500, height: 1500 },
  { key: "playRoom", src: "/images/gallery/play-room.jpg", width: 1200, height: 1600 },
  { key: "bigHall", src: "/images/gallery/big-hall.jpg", width: 1200, height: 1600 },
  { key: "classroom", src: "/images/gallery/classroom.jpg", width: 1200, height: 1600 },
  { key: "corridor", src: "/images/gallery/corridor.jpg", width: 900, height: 1600 },
  { key: "staircase", src: "/images/gallery/staircase.jpg", width: 900, height: 1600 },
];

/* ---------------- Документы ---------------- */

export type DocumentKind = "pdf" | "docx" | "drive" | "link";

export type SiteDocument = {
  title: Localized;
  kind: DocumentKind;
  /** Файл из public/documents/ (например, "/documents/ustav.pdf") или внешняя ссылка. */
  href: string;
  /** Необязательная подпись: дата, размер файла и т. п. */
  note?: Localized;
};

/**
 * Документы детского сада. Пока реальные документы не предоставлены — список пуст,
 * и на сайте показывается нейтральное состояние.
 *
 * Пример добавления:
 * {
 *   title: { ru: "Устав организации", kk: "Ұйым жарғысы" },
 *   kind: "pdf",
 *   href: "/documents/ustav.pdf",
 * },
 */
export const documents: SiteDocument[] = [];
