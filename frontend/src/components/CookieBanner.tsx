"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localized, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const STORAGE_KEY = "cookie-consent";

type Consent = "accepted" | "rejected";

export default function CookieBanner({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== "accepted" && stored !== "rejected") setVisible(true);
  }, []);

  function choose(value: Consent) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-black/10 bg-paper/95 p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink/75">
          {dict.cookie.message}{" "}
          <Link
            href={localized(lang, "/cookies/")}
            className="font-semibold text-brand-600 underline"
          >
            {dict.cookie.policyLink}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mist"
          >
            {dict.cookie.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
          >
            {dict.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** True only if the visitor has actively accepted. Use to gate analytics. */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}
