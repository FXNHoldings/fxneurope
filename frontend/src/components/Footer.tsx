import Link from "next/link";
import Logo from "./Logo";
import { localized, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const navItems = [
    { path: "/", label: dict.nav.home },
    { path: "/about/", label: dict.nav.about },
    { path: "/services/", label: dict.nav.services },
    { path: "/sitemap/", label: dict.sitemap.title },
    { path: "/contact/", label: dict.nav.contact },
  ];
  const legalLinks = [
    { path: "/privacy/", label: dict.footer.legal.privacy },
    { path: "/cookies/", label: dict.footer.legal.cookies },
    { path: "/terms/", label: dict.footer.legal.terms },
  ];

  return (
    <footer className="mt-auto border-t border-black/5 bg-mist">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-3">
        <div className="max-w-sm">
          <Logo lang={lang} />
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            {dict.brand.description}
          </p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
            {dict.footer.navigate}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={localized(lang, item.path)}
                  className="text-sm text-ink/70 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
            {site.legalName}
          </h3>
          <address className="mt-4 space-y-2.5 text-base not-italic text-ink/70">
            <p>{site.address.line}</p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand-600"
              >
                {site.email}
              </a>
            </p>
            <p className="text-ink/45">{site.registry}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-ink/45 sm:flex-row">
          <div className="text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {site.legalName}. {dict.footer.rights}
            </p>
            <p className="mt-1">{dict.footer.parent}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink/55">
            {legalLinks.map((l) => (
              <Link
                key={l.path}
                href={localized(lang, l.path)}
                className="transition-colors hover:text-brand-600"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
