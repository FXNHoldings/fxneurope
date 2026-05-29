/* =========================================================
   Central place for company facts + nav.
   Note: marketing copy (tagline, description, parent) is still
   placeholder — confirm/replace when ready.
   ========================================================= */

export const site = {
  name: "FXN Europe",
  legalName: "FXN Europe OÜ",
  tagline: "Building Europe's next generation of digital commerce brands.",
  description:
    "FXN Europe builds, operates and scales online retail, lifestyle and travel ventures across the European market — from a base in Tallinn, Estonia.",
  domain: "www.fxneurope.eu",
  url: "https://www.fxneurope.eu",
  email: "contact@fxneurope.eu",
  address: {
    city: "Tallinn",
    country: "Estonia",
    line: "Tartu mnt 67/1-13b, Kesklinna linnaosa, 10115 Tallinn, Harju maakond, Estonia",
  },
  vat: "EE102989757",
  registryCode: "17514051", // Estonian äriregister registrikood
  registry: "Reg. 17514051 · VAT EE102989757",
  parent: "Part of the FXN group, alongside FXN Holdings Ltd (UK).",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "What we do" },
  { href: "/contact", label: "Contact" },
] as const;
