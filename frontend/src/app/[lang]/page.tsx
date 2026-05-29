import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections";
import { localized, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-site px-5 py-24 md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.badge}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-paper md:text-7xl">
            {t.titleBefore}
            <span className="text-brand-300">{t.titleHighlight}</span>
            {t.titleAfter}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
            {dict.brand.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={localized(lang, "/services/")}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand-600"
            >
              {t.ctaServices}
            </Link>
            <Link
              href={localized(lang, "/about/")}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-white/10"
            >
              {t.ctaAbout}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black/5 bg-paper">
        <div className="mx-auto grid max-w-site grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-semibold tracking-tight text-ink">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink/55">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-site px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            {t.pillarsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.pillarsTitle}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/5 bg-mist p-7 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="bg-mist">
        <div className="mx-auto max-w-site px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                {t.principlesEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.principlesTitle}
              </h2>
              <p className="mt-4 text-ink/65">{t.principlesLede}</p>
            </div>
            <div className="grid gap-5">
              {t.principles.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-5 rounded-2xl bg-paper p-6 shadow-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500 text-sm font-semibold text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-ink/65">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operations feature — text + image */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-24 md:grid-cols-2">
          <img
            src="/img/home.jpg"
            alt=""
            className="w-full rounded-3xl shadow-lg ring-1 ring-black/5"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {t.featureEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.featureTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              {t.featureBody}
            </p>
            <ul className="mt-6 space-y-3">
              {t.featurePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-600">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
