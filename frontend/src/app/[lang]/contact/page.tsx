import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections";
import ContactForm from "@/components/ContactForm";
import { isLocale, alternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const loc = isLocale(lang) ? lang : "en";
  const dict = getDictionary(loc);
  return {
    title: dict.nav.contact,
    description: dict.contact.lede,
    alternates: alternates(loc, "/contact/"),
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.contact;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <section className="mx-auto max-w-site px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                {t.emailLabel}
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-medium text-brand-600 hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                {t.officeLabel}
              </h2>
              <p className="mt-2 text-lg">{site.address.line}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                {t.companyLabel}
              </h2>
              <p className="mt-2 text-lg">{site.legalName}</p>
              <p className="text-sm text-ink/55">{site.registry}</p>
              <p className="mt-1 text-sm text-ink/55">{dict.footer.parent}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-mist p-8">
            <ContactForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
