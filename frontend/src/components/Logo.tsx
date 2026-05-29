import Link from "next/link";
import { localized, type Locale } from "@/i18n/config";

/** The standalone FXN monogram mark (gradient tile + geometric F + accent). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-brand-700))] text-paper shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[62%] w-[62%]"
        fill="none"
        aria-hidden
      >
        <rect x="6.6" y="5" width="3.3" height="14" rx="1.4" fill="white" />
        <rect x="6.6" y="5" width="7.2" height="3.3" rx="1.3" fill="white" />
        <rect x="6.6" y="10.5" width="5.4" height="3.1" rx="1.3" fill="white" />
        <rect
          x="14.7"
          y="5"
          width="3.7"
          height="3.7"
          rx="1.2"
          fill="var(--color-accent)"
        />
      </svg>
    </span>
  );
}

/** Full lockup: mark + wordmark, links to the localized home page. */
export default function Logo({
  lang,
  className = "",
}: {
  lang: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localized(lang)}
      aria-label="FXN Europe — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 transition-transform group-hover:scale-105" />
      <span
        className="text-lg tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="font-extrabold text-black">FXN</span>
        <span className="font-bold text-brand-600"> Europe</span>
      </span>
    </Link>
  );
}
