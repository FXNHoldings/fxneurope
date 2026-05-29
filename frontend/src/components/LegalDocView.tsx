import { Fragment } from "react";
import { PageHero } from "@/components/sections";
import type { LegalDoc } from "@/i18n/legal";
import { site } from "@/lib/site";

const TOKENS: Record<string, string> = {
  email: site.email,
  vat: site.vat,
  registry: site.registryCode || "[Estonian registry code]",
  address: site.address.line,
  url: "www.fxneurope.eu",
};

function applyTokens(s: string): string {
  return s.replace(/\{(email|vat|registry|address|url)\}/g, (_, k) => TOKENS[k] ?? `{${k}}`);
}

/** Replace tokens, then turn emails and URLs into clickable links. */
function renderText(raw: string): React.ReactNode {
  const text = applyTokens(raw);
  const re = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w.-]+\.\w{2,})/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.includes("@")) {
      out.push(
        <a key={i++} href={`mailto:${tok}`}>
          {tok}
        </a>,
      );
    } else {
      out.push(
        <a key={i++} href={tok} target="_blank" rel="noopener noreferrer">
          {tok.replace(/^https?:\/\//, "")}
        </a>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function LegalDocView({
  doc,
  updatedLabel,
  note,
}: {
  doc: LegalDoc;
  updatedLabel: string;
  note?: string;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} lede={doc.lede} />
      <article className="prose-legal mx-auto max-w-site px-5 py-16">
        <p className="text-sm text-ink/45">
          {updatedLabel}: {doc.updated}
        </p>
        {note ? (
          <p className="rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-ink/70">
            {note}
          </p>
        ) : null}

        {doc.sections.map((s, idx) => (
          <Fragment key={idx}>
            <h2>{s.h}</h2>
            {s.p?.map((para, i) => <p key={i}>{renderText(para)}</p>)}
            {s.ul ? (
              <ul>
                {s.ul.map((li, i) => (
                  <li key={i}>{renderText(li)}</li>
                ))}
              </ul>
            ) : null}
            {s.table ? (
              <table>
                <thead>
                  <tr>
                    <th>{s.table.head[0]}</th>
                    <th>{s.table.head[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r, i) => (
                    <tr key={i}>
                      <td>{renderText(r[0])}</td>
                      <td>{renderText(r[1])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </Fragment>
        ))}
      </article>
    </>
  );
}
