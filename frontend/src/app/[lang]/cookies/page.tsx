import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocView from "@/components/LegalDocView";
import { isLocale, alternates } from "@/i18n/config";
import { getLegal, updatedLabels } from "@/i18n/legal";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const loc = isLocale(lang) ? lang : "en";
  const doc = getLegal(loc).cookies;
  return {
    title: doc.title,
    description: doc.lede,
    alternates: alternates(loc, "/cookies/"),
  };
}

export default async function Cookies({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const doc = getLegal(lang).cookies;
  return (
    <LegalDocView
      doc={doc}
      updatedLabel={updatedLabels[lang]}
      note={lang !== "en" ? getDictionary(lang).legalNote : undefined}
    />
  );
}
