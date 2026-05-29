#!/usr/bin/env node
// Generate a clean, pretty-printed sitemap.xml (one element per line),
// matching the originfacts.com format. Writes to frontend/public/sitemap.xml
// so the static export serves it verbatim. Run by publish.sh before build.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://www.fxneurope.eu";
const locales = ["en", "et", "es", "de", "fr"];
const pages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "about", changefreq: "monthly", priority: "0.8" },
  { path: "services", changefreq: "monthly", priority: "0.8" },
  { path: "contact", changefreq: "monthly", priority: "0.6" },
  { path: "sitemap", changefreq: "monthly", priority: "0.4" },
  { path: "privacy", changefreq: "yearly", priority: "0.3" },
  { path: "cookies", changefreq: "yearly", priority: "0.3" },
  { path: "terms", changefreq: "yearly", priority: "0.3" },
];

const lastmod = new Date().toISOString();
const urls = [];
for (const p of pages) {
  for (const l of locales) {
    urls.push({
      loc: `${BASE}/${l}${p.path ? `/${p.path}` : ""}/`,
      changefreq: p.changefreq,
      priority: p.priority,
    });
  }
}

// 1) Pretty-printed XML sitemap.
const body = urls
  .map(
    (u) =>
      `<url>\n` +
      `<loc>${u.loc}</loc>\n` +
      `<lastmod>${lastmod}</lastmod>\n` +
      `<changefreq>${u.changefreq}</changefreq>\n` +
      `<priority>${u.priority}</priority>\n` +
      `</url>\n`,
  )
  .join("");
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  body +
  `</urlset>\n`;

// 2) Plain-text fallback sitemap (one URL per line, UTF-8).
const txt = urls.map((u) => u.loc).join("\n") + "\n";

const pub = join(__dirname, "..", "frontend", "public");
writeFileSync(join(pub, "sitemap.xml"), xml);
writeFileSync(join(pub, "sitemap.txt"), txt);
console.log(`wrote sitemap.xml + sitemap.txt (${urls.length} urls)`);
