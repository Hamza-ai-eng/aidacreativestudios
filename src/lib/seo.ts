/**
 * Per-route hreflang + canonical helper for next-intl + Next.js metadata.
 *
 * Use inside generateMetadata to produce locale-correct alternates for any
 * page. Without this, every page would inherit alternates from the layout,
 * which point to the homepage URLs and confuse Google.
 */

const BASE = "https://aidacreativestudios.com";

/** Public locales that surface in hreflang. Hebrew is kept indexed per Path B
 *  decision (translations live in messages/he.json + matriarch components). */
export const SEO_LOCALES = ["en", "ar", "he"] as const;
export type SeoLocale = (typeof SEO_LOCALES)[number];

/** x-default destination — set to English per existing site convention. */
const X_DEFAULT_LOCALE: SeoLocale = "en";

/**
 * Build alternates for a given page in the current locale.
 *
 * @param locale - the current request locale ("en" | "ar" | "he")
 * @param path - the path segment after the locale (e.g. "/khadija/notes" or "")
 * @returns an alternates object ready for Metadata.alternates
 *
 * @example
 *   export async function generateMetadata({ params }) {
 *     const { locale } = await params;
 *     return { alternates: localeAlternates(locale, "/khadija/notes") };
 *   }
 */
export function localeAlternates(locale: string, path: string = "") {
  const cleanPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  const languages: Record<string, string> = {};
  for (const l of SEO_LOCALES) {
    languages[l] = `${BASE}/${l}${cleanPath}`;
  }
  languages["x-default"] = `${BASE}/${X_DEFAULT_LOCALE}${cleanPath}`;

  return {
    canonical: `${BASE}/${locale}${cleanPath}`,
    languages,
  };
}

/** Convenience: shorthand for the most common case (no extra path). */
export function homeAlternates(locale: string) {
  return localeAlternates(locale, "");
}

/** Build a fully-qualified URL for a given route. Useful for OG tags,
 *  canonical fields in JSON-LD, and explicit links. */
export function absoluteUrl(locale: string, path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${BASE}/${locale}${cleanPath}`;
}
