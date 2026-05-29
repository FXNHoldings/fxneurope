import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections";
import { isLocale, localized, alternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return {
    title: dict.sitemap.title,
    description: dict.sitemap.lede,
    alternates: alternates(isLocale(lang) ? lang : "en", "/sitemap/"),
  };
}

export default async function SitemapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const pages: { path: string; label: string }[] = [
    { path: "/", label: dict.nav.home },
    { path: "/about/", label: dict.nav.about },
    { path: "/services/", label: dict.nav.services },
    { path: "/contact/", label: dict.nav.contact },
    { path: "/privacy/", label: dict.footer.legal.privacy },
    { path: "/cookies/", label: dict.footer.legal.cookies },
    { path: "/terms/", label: dict.footer.legal.terms },
    { path: "/sitemap/", label: dict.sitemap.title },
  ];

  return (
    <>
      <PageHero eyebrow="Sitemap" title={dict.sitemap.title} lede={dict.sitemap.lede} />

      <section className="mx-auto max-w-site px-5 py-16">
        <ul className="grid gap-3 sm:grid-cols-2">
          {pages.map((p) => (
            <li key={p.path}>
              <Link
                href={localized(lang, p.path)}
                className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-mist px-5 py-4 text-base font-medium transition-colors hover:text-brand-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink/55">
          <a
            href={`${site.url}/sitemap.xml`}
            className="font-medium text-brand-600 underline"
          >
            {dict.sitemap.xml}
          </a>
        </p>
      </section>
    </>
  );
}
