/**
 * Tiny locale picker — replaces the `isAr ? ar : en` pattern with a
 * 3-way structure so Hebrew users get Hebrew copy instead of English fallback.
 *
 * Usage:
 *   const text = pick(locale, { en: "Hello", ar: "مرحبا", he: "שלום" });
 *
 * If `he` is omitted, falls back to `en` (matches the editorial-content
 * convention: bilingual EN+AR for body copy, Hebrew for chrome only).
 */
export type LocaleStrings = {
  en: string;
  ar: string;
  he?: string;
};

export function pick(locale: string, s: LocaleStrings): string {
  if (locale === "ar") return s.ar;
  if (locale === "he") return s.he ?? s.en;
  return s.en;
}

/** Like pick(), but returns the locale's language tag for `lang=` and `dir=` */
export function langFor(locale: string): "en" | "ar" | "he" {
  if (locale === "ar") return "ar";
  if (locale === "he") return "he";
  return "en";
}

/** RTL-flag for use in dir attributes */
export function isRtl(locale: string): boolean {
  return locale === "ar" || locale === "he";
}
