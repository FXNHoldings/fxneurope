import { PageHero } from "@/components/sections";

/** Shared shell for legal/policy pages — hero + readable prose column. */
export default function LegalPage({
  title,
  lede,
  updated,
  children,
}: {
  title: string;
  lede: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={lede} />
      <article className="prose-legal mx-auto max-w-site px-5 py-16">
        {updated ? (
          <p className="text-sm text-ink/45">Last updated: {updated}</p>
        ) : null}
        {children}
      </article>
    </>
  );
}

/** Highlighted blank that still needs a real value filled in. */
export function Ph({ children }: { children: React.ReactNode }) {
  return <span className="ph">{children}</span>;
}
