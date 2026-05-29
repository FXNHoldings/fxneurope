import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/sections";
import { isLocale, alternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const loc = isLocale(lang) ? lang : "en";
  const dict = getDictionary(loc);
  return {
    title: dict.nav.about,
    description: dict.about.title,
    alternates: alternates(loc, "/about/"),
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.about;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={dict.brand.description} />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="space-y-6 text-lg leading-relaxed text-ink/75">
          {t.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-site px-5 py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.valuesTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-paper p-7 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/65">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with — text left, image holder right */}
      <section className="mx-auto max-w-site px-5 py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left: text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {t.partnersEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.partnersTitle}
            </h2>
            <p className="mt-4 text-ink/65">{t.partnersLede}</p>
            <div className="mt-8 space-y-5">
              {t.partners.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-black/5 bg-mist p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/65">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image holder */}
          <div className="md:sticky md:top-24">
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-dashed border-black/15 bg-mist text-ink/25">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="8.5" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 18l5-5 4 4 2.5-2.5L20 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Vision band */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-5 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.visionTitle}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            {t.visionBody}
          </p>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
