import Link from "next/link";
import { localized, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

/** Inner-page hero band with eyebrow + heading + lede. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-site px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/70">
          {lede}
        </p>
      </div>
    </section>
  );
}

/** Closing call-to-action band. */
export function CtaBand({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-site px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center text-paper md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            {dict.cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-paper/70">
            {dict.cta.lede}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={localized(lang, "/contact/")}
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand-50"
            >
              {dict.cta.button}
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-white/10"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
