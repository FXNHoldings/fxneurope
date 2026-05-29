import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { locales, isLocale, alternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_GB",
  et: "et_EE",
  es: "es_ES",
  de: "de_DE",
  fr: "fr_FR",
};

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const loc: Locale = isLocale(lang) ? lang : "en";
  const dict = getDictionary(loc);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${dict.brand.tagline}`,
      template: `%s · ${site.name}`,
    },
    description: dict.brand.description,
    alternates: alternates(loc, "/"),
    openGraph: {
      title: `${site.name} — ${dict.brand.tagline}`,
      description: dict.brand.description,
      url: `${site.url}/${loc}/`,
      siteName: site.name,
      type: "website",
      locale: OG_LOCALE[loc],
      images: [{ url: "/img/home.jpg", width: 1024, height: 576, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${dict.brand.tagline}`,
      description: dict.brand.description,
      images: ["/img/home.jpg"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${urbanist.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.legalName,
              alternateName: site.name,
              url: site.url,
              email: site.email,
              vatID: site.vat,
              logo: `${site.url}/icon.svg`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tartu mnt 67/1-13b",
                addressLocality: "Tallinn",
                postalCode: "10115",
                addressRegion: "Harju maakond",
                addressCountry: "EE",
              },
            }),
          }}
        />
        <Header lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <CookieBanner lang={lang} dict={dict} />
      </body>
    </html>
  );
}
