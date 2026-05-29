// Supported locales. English is the default (also the fallback for legal text).
export const locales = ["en", "et", "es", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  et: "Eesti",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
};

// ISO 3166-1 alpha-2 country codes for flag images (served via flagcdn.com).
export const localeFlags: Record<Locale, string> = {
  en: "gb",
  et: "ee",
  es: "es",
  de: "de",
  fr: "fr",
};

/** flagcdn.com SVG flag URL for a locale. */
export function flagUrl(lang: Locale): string {
  return `https://flagcdn.com/${localeFlags[lang]}.svg`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-prefixed, trailing-slashed href, e.g. localized("et","/about/"). */
export function localized(lang: Locale, path = "/"): string {
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

/** Metadata `alternates` (self canonical + hreflang for every locale) for a page path. */
export function alternates(lang: Locale, path = "/") {
  return {
    canonical: localized(lang, path),
    languages: Object.fromEntries(
      locales.map((l) => [l, localized(l, path)]),
    ) as Record<string, string>,
  };
}
