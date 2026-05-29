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
    title: dict.nav.services,
    description: dict.services.lede,
    alternates: alternates(loc, "/services/"),
  };
}

export default async function Services({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.services;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="mx-auto max-w-site px-5 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-2xl border border-black/5 bg-paper p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold tracking-tight">{s.name}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/65">
                {s.body}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm text-ink/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-site px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.stepsTitle}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {t.steps.map((s, i) => (
              <div key={s.t}>
                <div className="text-sm font-semibold text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink/65">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} dict={dict} />
    </>
  );
}
