import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import et from "./dictionaries/et";
import es from "./dictionaries/es";
import de from "./dictionaries/de";
import fr from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, et, es, de, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
