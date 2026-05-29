"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  locales,
  localeNames,
  flagUrl,
  isLocale,
  type Locale,
} from "@/i18n/config";

/** Swap the locale segment of the current path, preserving the rest. */
function pathForLocale(pathname: string, target: Locale): string {
  const parts = pathname.split("/"); // ["", "et", "about", ""]
  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/");
  }
  return `/${target}/`;
}

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() || `/${lang}/`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-base font-medium text-ink/70 transition-colors hover:text-ink"
      >
        <img
          src={flagUrl(lang)}
          alt=""
          width={20}
          height={15}
          className="h-[15px] w-5 rounded-[2px] object-cover ring-1 ring-black/10"
        />
        <span className="uppercase">{lang}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-black/10 bg-paper py-1 shadow-xl"
        >
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={pathForLocale(pathname, l)}
                hrefLang={l}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2 text-sm transition-colors hover:bg-mist ${
                  l === lang ? "font-semibold text-brand-600" : "text-ink/75"
                }`}
              >
                <img
                  src={flagUrl(l)}
                  alt=""
                  width={20}
                  height={15}
                  className="h-[15px] w-5 rounded-[2px] object-cover ring-1 ring-black/10"
                />
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
