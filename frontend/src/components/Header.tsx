"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localized, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { path: "/", label: dict.nav.home },
    { path: "/about/", label: dict.nav.about },
    { path: "/services/", label: dict.nav.services },
    { path: "/contact/", label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-8px_rgba(0,0,0,0.18)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5">
        <Logo lang={lang} />

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 md:flex">
            {items.map((item) => {
              const href = localized(lang, item.path);
              const active =
                item.path === "/"
                  ? pathname === href || pathname === `/${lang}`
                  : pathname.startsWith(href);
              return (
                <Link
                  key={item.path}
                  href={href}
                  className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    active ? "text-brand-600" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitcher lang={lang} />

          <div className="hidden md:block">
            <Link
              href={localized(lang, "/contact/")}
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              {dict.common.getInTouch}
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-ink md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-paper px-5 py-3 md:hidden">
          {items.map((item) => (
            <Link
              key={item.path}
              href={localized(lang, item.path)}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-mist"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localized(lang, "/contact/")}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-paper"
          >
            {dict.common.getInTouch}
          </Link>
        </nav>
      )}
    </header>
  );
}
