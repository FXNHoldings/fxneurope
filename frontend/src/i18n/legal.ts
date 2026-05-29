import type { Locale } from "./config";

/**
 * Structured, token-based legal content so company facts stay centralised
 * ({email} {vat} {registry} {address} {url}) and links stay clickable.
 * English is the authoritative version; other languages are convenience
 * translations (a localized note is shown on non-English pages).
 */
export type LegalSection = {
  h: string;
  p?: string[];
  ul?: string[];
  table?: { head: [string, string]; rows: [string, string][] };
};
export type LegalDoc = {
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
};
export type LegalContent = {
  privacy: LegalDoc;
  cookies: LegalDoc;
  terms: LegalDoc;
};

export const updatedLabels: Record<Locale, string> = {
  en: "Last updated",
  et: "Viimati uuendatud",
  es: "Última actualización",
  de: "Zuletzt aktualisiert",
  fr: "Dernière mise à jour",
};

const en: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    lede: "How we collect, use and protect your personal data, in line with the EU General Data Protection Regulation (GDPR).",
    updated: "29 May 2026",
    sections: [
      {
        h: "1. Who we are",
        p: [
          "This website, {url} (the “Website”), is operated by FXN Europe OÜ (“we”, “us”, “our”), a private limited company incorporated in Estonia.",
          "Registered address: {address}. Estonian registry code: {registry}. VAT number: {vat}. Contact email: {email}.",
          "For the purposes of the EU GDPR (Regulation (EU) 2016/679), the UK GDPR and the Estonian Personal Data Protection Act, FXN Europe OÜ is the data controller of the personal data processed through the Website. As we are established in the EU, we are not required to appoint a representative under Article 27 GDPR.",
        ],
      },
      {
        h: "2. The personal data we collect",
        p: [
          "This is an informational corporate website. It does not sell products or services, require an account, or use analytics or advertising tracking. We keep data collection to a minimum.",
        ],
        ul: [
          "Information you give us: when you contact us by email or any form, we receive your name, email address and the contents of your message.",
          "Technical data collected automatically: our hosting provider and web server may log limited technical information such as IP address, browser type, device information, referring page, and the date and time of your visit.",
          "Cookies: we use only strictly necessary storage — see our Cookie Policy.",
        ],
      },
      {
        h: "3. Why we process your data and our legal bases",
        table: {
          head: ["Purpose", "Legal basis (Article 6 GDPR)"],
          rows: [
            ["Responding to your enquiries and correspondence", "Legitimate interests (Art. 6(1)(f)); or steps taken at your request prior to a contract (Art. 6(1)(b))"],
            ["Operating, maintaining and securing the Website", "Legitimate interests (Art. 6(1)(f))"],
            ["Complying with legal obligations", "Legal obligation (Art. 6(1)(c))"],
          ],
        },
        p: [
          "Where we rely on legitimate interests, we have assessed that those interests are not overridden by your rights and freedoms. You may object at any time (see Section 7). We do not carry out automated decision-making or profiling under Article 22 GDPR, and we do not knowingly collect special categories of data (Article 9 GDPR).",
        ],
      },
      {
        h: "4. How we share your data",
        p: ["We do not sell your personal data and do not share it for advertising purposes. We may disclose data to:"],
        ul: [
          "service providers acting as our processors (such as our hosting and email providers), under a data-processing agreement;",
          "professional advisers (such as lawyers or accountants) where necessary;",
          "public authorities or regulators where required by law.",
        ],
      },
      {
        h: "5. International transfers",
        p: [
          "Where a provider processes data outside the EEA or the UK, we ensure an appropriate safeguard is in place, such as an EU adequacy decision or Standard Contractual Clauses under Article 46 GDPR (and, for UK data, the UK International Data Transfer Agreement or Addendum).",
        ],
      },
      {
        h: "6. How long we keep your data",
        ul: [
          "Enquiry and correspondence data: kept only as long as needed to handle your enquiry and a reasonable period afterwards, then deleted.",
          "Server-log data: kept for a short period for security and diagnostics, then deleted or anonymised.",
        ],
        p: ["We may keep certain information longer where required to comply with a legal obligation or to establish, exercise or defend legal claims."],
      },
      {
        h: "7. Your rights",
        p: [
          "Under the GDPR and UK GDPR you have the right to access, rectification, erasure, restriction, data portability, to object to processing based on legitimate interests, and to withdraw consent where processing is based on consent.",
          "To exercise any of these rights, email us at {email}. We will respond within one month, as required by Article 12 GDPR.",
        ],
      },
      {
        h: "8. Complaints",
        p: ["If you believe we have not handled your data properly, please contact us first. You also have the right to lodge a complaint with a supervisory authority:"],
        ul: [
          "Estonia (our lead authority): Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn — https://www.aki.ee",
          "United Kingdom: Information Commissioner’s Office (ICO) — https://www.ico.org.uk",
          "Or the supervisory authority in your country of residence within the EEA.",
        ],
      },
      {
        h: "9. Visitors from outside the EU/EEA",
        ul: [
          "United Kingdom: we process UK visitors’ data under the UK GDPR and Data Protection Act 2018.",
          "California, USA: we do not sell or share your personal information as defined under the CCPA/CPRA; California residents may exercise rights to know, delete and correct by contacting us.",
          "Australia: we handle personal information consistently with the Australian Privacy Principles under the Privacy Act 1988 (Cth).",
          "Other countries: we comply with applicable data-protection laws where we operate.",
        ],
      },
      {
        h: "10. Children",
        p: ["The Website is not directed at children and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it."],
      },
      {
        h: "11. Changes to this Privacy Policy",
        p: ["We may update this policy from time to time. The date above shows the latest revision; material changes will be posted on this page."],
      },
      {
        h: "12. Contact",
        p: ["Questions about this Privacy Policy or your personal data: FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    lede: "How this website uses cookies and similar local-storage technologies.",
    updated: "29 May 2026",
    sections: [
      {
        h: "1. What cookies are",
        p: ["Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and pixels."],
      },
      {
        h: "2. The cookies we use",
        p: [
          "This Website uses only strictly necessary cookies — essential for it to function and be secure. We do not use analytics, performance, advertising or social-media tracking cookies, and we do not build profiles about visitors.",
          "Under the EU ePrivacy Directive (and the UK PECR), strictly necessary cookies do not require prior consent, but we must tell you about them.",
          "This Website does not set any cookies. The only client-side storage we use is a single entry in your browser’s local storage that remembers your response to our cookie notice; it stays on your device and is not transmitted to us. If we later add analytics or marketing tools, we will add a consent banner and update this policy.",
        ],
      },
      {
        h: "3. Managing cookies",
        p: ["Most browsers let you view, manage, delete and block cookies. Because we use only strictly necessary storage, blocking it may stop parts of the Website from working. Guidance is available at https://www.aboutcookies.org or in your browser’s help section."],
      },
      {
        h: "4. Changes to this Cookie Policy",
        p: ["If our use of cookies changes, we will update this page and, where required by law, ask for your consent."],
      },
      {
        h: "5. Contact",
        p: ["Questions about cookies: {email}. See also our Privacy Policy."],
      },
    ],
  },
  terms: {
    title: "Website Terms of Use",
    lede: "The terms that govern your access to and use of the FXN Europe website.",
    updated: "29 May 2026",
    sections: [
      {
        h: "1. About these terms",
        p: ["These Terms of Use govern your access to and use of {url} (the “Website”), operated by FXN Europe OÜ, {address} (registry code {registry}; VAT {vat}). By using the Website, you agree to these terms. If you do not agree, please do not use the Website."],
      },
      {
        h: "2. The Website is informational only",
        p: ["The Website provides general information about FXN Europe OÜ and its activities. Nothing on it is an offer to sell goods or services, financial, legal or professional advice, or a binding commitment. Do not rely on the content as a substitute for professional advice."],
      },
      {
        h: "3. Intellectual property",
        p: ["Unless stated otherwise, all content — including text, graphics, logos, the “FXN” and “FXN Europe” names and marks, images and layout — is owned by or licensed to FXN Europe OÜ and protected by intellectual-property laws. You may view and print pages for personal, non-commercial use; you may not copy, reproduce, republish, distribute or commercially exploit any content without our prior written permission."],
      },
      {
        h: "4. Acceptable use",
        p: ["You agree not to:"],
        ul: [
          "use the Website unlawfully, fraudulently or for any harmful purpose;",
          "attempt to gain unauthorised access to the Website, its server or any connected system;",
          "introduce viruses or other malicious code;",
          "scrape or systematically extract data without our consent;",
          "use the Website in a way that could damage, disable or impair it or interfere with other users.",
        ],
      },
      {
        h: "5. Disclaimer",
        p: ["The Website and its content are provided “as is” and “as available” without warranties of any kind, to the fullest extent permitted by law. We do not warrant that the Website will be uninterrupted, secure or error-free, or that the information is accurate or complete."],
      },
      {
        h: "6. Limitation of liability",
        p: [
          "To the fullest extent permitted by law, FXN Europe OÜ will not be liable for any indirect, incidental or consequential loss, or any loss of data, profits or business, arising from your use of (or inability to use) the Website.",
          "Nothing excludes or limits our liability where it would be unlawful to do so — including for death or personal injury caused by negligence, for fraud, or for mandatory consumer rights under applicable law.",
        ],
      },
      {
        h: "7. Third-party links",
        p: ["The Website may link to third-party websites for convenience. We do not control and are not responsible for their content, policies or practices. Links do not imply endorsement."],
      },
      {
        h: "8. Changes",
        p: ["We may change the Website or these Terms at any time. The current version applies each time you use the Website; the date above shows the latest revision."],
      },
      {
        h: "9. Governing law and jurisdiction",
        p: ["These Terms are governed by the laws of Estonia. The courts of Estonia have jurisdiction over any dispute, except that consumers retain the benefit of mandatory consumer-protection rules and the right to bring proceedings in their country of residence where the applicable law gives that right."],
      },
      {
        h: "10. Contact",
        p: ["FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
};

const et: LegalContent = {
  privacy: {
    title: "Privaatsuspoliitika",
    lede: "Kuidas me kogume, kasutame ja kaitseme sinu isikuandmeid kooskõlas EL-i isikuandmete kaitse üldmäärusega (GDPR).",
    updated: "29. mai 2026",
    sections: [
      {
        h: "1. Kes me oleme",
        p: [
          "Seda veebisaiti {url} („veebisait“) haldab FXN Europe OÜ („meie“), Eestis registreeritud osaühing.",
          "Registreeritud aadress: {address}. Eesti registrikood: {registry}. KMKR number: {vat}. Kontakt-e-post: {email}.",
          "EL-i GDPR-i (määrus (EL) 2016/679), Ühendkuningriigi GDPR-i ja Eesti isikuandmete kaitse seaduse tähenduses on FXN Europe OÜ veebisaidi kaudu töödeldavate isikuandmete vastutav töötleja. Kuna oleme asutatud EL-is, ei pea me määrama esindajat GDPR-i artikli 27 alusel.",
        ],
      },
      {
        h: "2. Milliseid isikuandmeid me kogume",
        p: ["See on informatiivne ettevõtte veebisait. See ei müü tooteid ega teenuseid, ei nõua konto loomist ega kasuta analüütika- või reklaamijälgimist. Hoiame andmete kogumise minimaalsena."],
        ul: [
          "Andmed, mille sa meile annad: kui võtad meiega ühendust e-posti või vormi kaudu, saame su nime, e-posti aadressi ja sõnumi sisu.",
          "Automaatselt kogutavad tehnilised andmed: meie majutuspakkuja ja veebiserver võivad logida piiratud tehnilist teavet, näiteks IP-aadressi, brauseri tüüpi, seadme teavet, viitavat lehte ning külastuse kuupäeva ja kellaaega.",
          "Küpsised: kasutame ainult rangelt vajalikku salvestust — vaata meie küpsiste poliitikat.",
        ],
      },
      {
        h: "3. Miks me andmeid töötleme ja meie õiguslikud alused",
        table: {
          head: ["Eesmärk", "Õiguslik alus (GDPR artikkel 6)"],
          rows: [
            ["Päringutele ja kirjavahetusele vastamine", "Õigustatud huvi (art 6(1)(f)); või sinu taotlusel enne lepingut tehtavad sammud (art 6(1)(b))"],
            ["Veebisaidi haldamine, hooldamine ja turvamine", "Õigustatud huvi (art 6(1)(f))"],
            ["Juriidiliste kohustuste täitmine", "Juriidiline kohustus (art 6(1)(c))"],
          ],
        },
        p: ["Õigustatud huvile tuginedes oleme hinnanud, et need huvid ei kaalu üles sinu õigusi ja vabadusi. Võid igal ajal esitada vastuväite (vt jaotis 7). Me ei tee automatiseeritud otsuseid ega profiilianalüüsi GDPR-i artikli 22 tähenduses ega kogu teadlikult eriliigilisi andmeid (artikkel 9)."],
      },
      {
        h: "4. Kuidas me andmeid jagame",
        p: ["Me ei müü su isikuandmeid ega jaga neid reklaami eesmärgil. Võime avaldada andmeid:"],
        ul: [
          "volitatud töötlejatena tegutsevatele teenusepakkujatele (näiteks majutus- ja e-posti pakkujad) andmetöötluslepingu alusel;",
          "kutselistele nõustajatele (näiteks juristid või raamatupidajad) vajaduse korral;",
          "avaliku sektori asutustele või järelevalveasutustele, kui seadus seda nõuab.",
        ],
      },
      {
        h: "5. Rahvusvahelised edastused",
        p: ["Kui teenusepakkuja töötleb andmeid väljaspool EMP-d või Ühendkuningriiki, tagame asjakohase kaitsemeetme, näiteks EL-i kaitse piisavuse otsuse või GDPR-i artikli 46 kohased tüüptingimused (ning Ühendkuningriigi andmete puhul UK IDTA või lisa)."],
      },
      {
        h: "6. Kui kaua me andmeid säilitame",
        ul: [
          "Päringu- ja kirjavahetusandmed: säilitame ainult nii kaua, kui on vaja su päringu lahendamiseks, ja mõistliku aja pärast seda, seejärel kustutame.",
          "Serverilogi andmed: säilitame lühikest aega turvalisuse ja diagnostika eesmärgil, seejärel kustutame või anonüümime.",
        ],
        p: ["Võime teatud teavet säilitada kauem, kui see on vajalik juriidilise kohustuse täitmiseks või õigusnõuete koostamiseks, esitamiseks või kaitsmiseks."],
      },
      {
        h: "7. Sinu õigused",
        p: [
          "GDPR-i ja Ühendkuningriigi GDPR-i alusel on sul õigus andmetega tutvuda, neid parandada, kustutada, töötlemist piirata, andmeid üle kanda, esitada vastuväide õigustatud huvil põhinevale töötlemisele ja nõusolek tagasi võtta, kui töötlemine põhineb nõusolekul.",
          "Nende õiguste kasutamiseks kirjuta meile aadressil {email}. Vastame ühe kuu jooksul, nagu nõuab GDPR-i artikkel 12.",
        ],
      },
      {
        h: "8. Kaebused",
        p: ["Kui arvad, et me ei ole su andmeid korrektselt käidelnud, võta palun esmalt meiega ühendust. Sul on ka õigus esitada kaebus järelevalveasutusele:"],
        ul: [
          "Eesti (meie juhtiv asutus): Andmekaitse Inspektsioon, Tatari 39, 10134 Tallinn — https://www.aki.ee",
          "Ühendkuningriik: Information Commissioner’s Office (ICO) — https://www.ico.org.uk",
          "Või järelevalveasutusele su elukohariigis EMP-s.",
        ],
      },
      {
        h: "9. Külastajad väljaspool EL-i/EMP-d",
        ul: [
          "Ühendkuningriik: töötleme Ühendkuningriigi külastajate andmeid vastavalt Ühendkuningriigi GDPR-ile ja 2018. aasta andmekaitseseadusele.",
          "California, USA: me ei müü ega jaga su isikuandmeid CCPA/CPRA tähenduses; California elanikud saavad kasutada õigust teada, kustutada ja parandada, võttes meiega ühendust.",
          "Austraalia: käitleme isikuandmeid kooskõlas Austraalia privaatsuspõhimõtetega 1988. aasta privaatsusseaduse alusel.",
          "Muud riigid: järgime kohaldatavaid andmekaitseseadusi seal, kus tegutseme.",
        ],
      },
      {
        h: "10. Lapsed",
        p: ["Veebisait ei ole suunatud lastele ja me ei kogu teadlikult laste isikuandmeid. Kui arvad, et laps on meile isikuandmeid esitanud, võta ühendust ja me kustutame need."],
      },
      {
        h: "11. Selle privaatsuspoliitika muudatused",
        p: ["Võime seda poliitikat aeg-ajalt uuendada. Ülaltoodud kuupäev näitab viimast muudatust; olulised muudatused avaldatakse sellel lehel."],
      },
      {
        h: "12. Kontakt",
        p: ["Küsimused selle privaatsuspoliitika või su isikuandmete kohta: FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
  cookies: {
    title: "Küpsiste poliitika",
    lede: "Kuidas see veebisait kasutab küpsiseid ja sarnaseid kohaliku salvestuse tehnoloogiaid.",
    updated: "29. mai 2026",
    sections: [
      {
        h: "1. Mis on küpsised",
        p: ["Küpsised on väikesed tekstifailid, mis salvestatakse su seadmesse veebisaiti külastades. Sarnased tehnoloogiad on näiteks kohalik salvestus ja pikslid."],
      },
      {
        h: "2. Milliseid küpsiseid me kasutame",
        p: [
          "See veebisait kasutab ainult rangelt vajalikke küpsiseid — neid, mis on saidi toimimiseks ja turvalisuseks hädavajalikud. Me ei kasuta analüütika-, jõudlus-, reklaami- ega sotsiaalmeedia jälgimisküpsiseid ega koosta külastajate profiile.",
          "EL-i e-privaatsuse direktiivi (ja Ühendkuningriigi PECR-i) kohaselt ei vaja rangelt vajalikud küpsised eelnevat nõusolekut, kuid peame sind neist teavitama.",
          "See veebisait ei sea ühtegi küpsist. Ainus kasutatav kliendipoolne salvestus on üks kirje su brauseri kohalikus salvestuses, mis jätab meelde su vastuse küpsiseteatele; see jääb su seadmesse ega edastata meile. Kui lisame hiljem analüütika- või turundustööriistu, lisame nõusolekuribade ja uuendame seda poliitikat.",
        ],
      },
      {
        h: "3. Küpsiste haldamine",
        p: ["Enamik brausereid võimaldab küpsiseid vaadata, hallata, kustutada ja blokeerida. Kuna kasutame ainult rangelt vajalikku salvestust, võib selle blokeerimine takistada saidi osade tööd. Juhised leiad aadressilt https://www.aboutcookies.org või oma brauseri abijaotisest."],
      },
      {
        h: "4. Selle küpsiste poliitika muudatused",
        p: ["Kui meie küpsiste kasutus muutub, uuendame seda lehte ja küsime seaduse nõudmisel sinu nõusolekut."],
      },
      {
        h: "5. Kontakt",
        p: ["Küsimused küpsiste kohta: {email}. Vaata ka meie privaatsuspoliitikat."],
      },
    ],
  },
  terms: {
    title: "Veebisaidi kasutustingimused",
    lede: "Tingimused, mis reguleerivad sinu juurdepääsu FXN Europe’i veebisaidile ja selle kasutamist.",
    updated: "29. mai 2026",
    sections: [
      {
        h: "1. Nendest tingimustest",
        p: ["Need kasutustingimused reguleerivad sinu juurdepääsu veebisaidile {url} („veebisait“) ja selle kasutamist; haldajaks on FXN Europe OÜ, {address} (registrikood {registry}; KMKR {vat}). Veebisaiti kasutades nõustud nende tingimustega. Kui sa ei nõustu, palun ära kasuta veebisaiti."],
      },
      {
        h: "2. Veebisait on üksnes informatiivne",
        p: ["Veebisait pakub üldist teavet FXN Europe OÜ ja selle tegevuse kohta. Miski sellel ei ole pakkumine müüa kaupu või teenuseid, finants-, õigus- ega kutsenõu ega siduv kohustus. Ära toetu sisule professionaalse nõu asendajana."],
      },
      {
        h: "3. Intellektuaalomand",
        p: ["Kui pole märgitud teisiti, kuulub kogu sisu — sealhulgas tekst, graafika, logod, nimed ja kaubamärgid „FXN“ ja „FXN Europe“, pildid ja kujundus — FXN Europe OÜ-le või on talle litsentsitud ning kaitstud intellektuaalomandi seadustega. Võid lehti vaadata ja printida isiklikuks, mitteäriliseks kasutuseks; sa ei tohi sisu kopeerida, reprodutseerida, taasavaldada, levitada ega ärilistel eesmärkidel kasutada ilma meie eelneva kirjaliku loata."],
      },
      {
        h: "4. Lubatud kasutus",
        p: ["Sa nõustud, et ei:"],
        ul: [
          "kasuta veebisaiti ebaseaduslikult, pettuse eesmärgil ega kahjulikul viisil;",
          "ürita saada volituseta juurdepääsu veebisaidile, selle serverile või ühendatud süsteemidele;",
          "lisa viiruseid ega muud pahatahtlikku koodi;",
          "kraabi ega ekstrakti süstemaatiliselt andmeid ilma meie nõusolekuta;",
          "kasuta veebisaiti viisil, mis võiks seda kahjustada, halvata või häirida teisi kasutajaid.",
        ],
      },
      {
        h: "5. Vastutuse välistus",
        p: ["Veebisait ja selle sisu on esitatud „nagu on“ ja „nagu saadaval“ ilma igasuguste garantiideta seadusega lubatud ulatuses. Me ei garanteeri, et veebisait on katkematu, turvaline või veatu või et teave on täpne või täielik."],
      },
      {
        h: "6. Vastutuse piiramine",
        p: [
          "Seadusega lubatud maksimaalses ulatuses ei vastuta FXN Europe OÜ kaudse, juhusliku ega kaasneva kahju ega andmete, kasumi või äri kaotuse eest, mis tuleneb veebisaidi kasutamisest (või kasutamise võimatusest).",
          "Miski ei välista ega piira meie vastutust seal, kus see oleks ebaseaduslik — sealhulgas hooletusest põhjustatud surma või kehavigastuse, pettuse või kohaldatava õiguse kohustuslike tarbijaõiguste eest.",
        ],
      },
      {
        h: "7. Kolmandate osapoolte lingid",
        p: ["Veebisait võib mugavuse huvides linkida kolmandate osapoolte saitidele. Me ei kontrolli neid ega vastuta nende sisu, poliitikate ega tavade eest. Lingid ei tähenda heakskiitu."],
      },
      {
        h: "8. Muudatused",
        p: ["Võime veebisaiti või neid tingimusi igal ajal muuta. Iga kord, kui veebisaiti kasutad, kehtib kehtiv versioon; ülaltoodud kuupäev näitab viimast muudatust."],
      },
      {
        h: "9. Kohaldatav õigus ja kohtualluvus",
        p: ["Neid tingimusi reguleerib Eesti õigus. Vaidlused alluvad Eesti kohtutele, kuid tarbijatele jäävad kohustuslikud tarbijakaitse-eeskirjad ja õigus pöörduda oma elukohariigi kohtusse, kui kohaldatav õigus seda võimaldab."],
      },
      {
        h: "10. Kontakt",
        p: ["FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
};

const es: LegalContent = {
  privacy: {
    title: "Política de privacidad",
    lede: "Cómo recopilamos, usamos y protegemos tus datos personales, conforme al Reglamento General de Protección de Datos de la UE (RGPD).",
    updated: "29 de mayo de 2026",
    sections: [
      {
        h: "1. Quiénes somos",
        p: [
          "Este sitio web, {url} (el «Sitio»), está operado por FXN Europe OÜ («nosotros»), una sociedad de responsabilidad limitada constituida en Estonia.",
          "Domicilio social: {address}. Código de registro estonio: {registry}. Número de IVA: {vat}. Correo de contacto: {email}.",
          "A efectos del RGPD de la UE (Reglamento (UE) 2016/679), el RGPD del Reino Unido y la Ley estonia de protección de datos personales, FXN Europe OÜ es el responsable del tratamiento de los datos personales tratados a través del Sitio. Al estar establecidos en la UE, no estamos obligados a designar un representante conforme al artículo 27 del RGPD.",
        ],
      },
      {
        h: "2. Los datos personales que recopilamos",
        p: ["Este es un sitio web corporativo informativo. No vende productos ni servicios, no requiere cuenta y no usa analítica ni seguimiento publicitario. Reducimos la recopilación de datos al mínimo."],
        ul: [
          "Información que nos facilitas: cuando nos contactas por correo o cualquier formulario, recibimos tu nombre, correo electrónico y el contenido de tu mensaje.",
          "Datos técnicos recopilados automáticamente: nuestro proveedor de alojamiento y el servidor pueden registrar información técnica limitada, como la dirección IP, el tipo de navegador, datos del dispositivo, la página de referencia y la fecha y hora de tu visita.",
          "Cookies: solo usamos almacenamiento estrictamente necesario — consulta nuestra Política de cookies.",
        ],
      },
      {
        h: "3. Por qué tratamos tus datos y nuestras bases legales",
        table: {
          head: ["Finalidad", "Base legal (artículo 6 RGPD)"],
          rows: [
            ["Responder a tus consultas y correspondencia", "Interés legítimo (art. 6(1)(f)); o medidas a tu solicitud previas a un contrato (art. 6(1)(b))"],
            ["Operar, mantener y proteger el Sitio", "Interés legítimo (art. 6(1)(f))"],
            ["Cumplir obligaciones legales", "Obligación legal (art. 6(1)(c))"],
          ],
        },
        p: ["Cuando nos basamos en el interés legítimo, hemos evaluado que no prevalece sobre tus derechos y libertades. Puedes oponerte en cualquier momento (ver Sección 7). No realizamos decisiones automatizadas ni elaboración de perfiles conforme al artículo 22 del RGPD, ni recopilamos a sabiendas categorías especiales de datos (artículo 9)."],
      },
      {
        h: "4. Cómo compartimos tus datos",
        p: ["No vendemos tus datos personales ni los compartimos con fines publicitarios. Podemos comunicar datos a:"],
        ul: [
          "proveedores de servicios que actúan como encargados del tratamiento (como nuestros proveedores de alojamiento y correo), bajo un acuerdo de tratamiento de datos;",
          "asesores profesionales (como abogados o contables) cuando sea necesario;",
          "autoridades públicas o reguladores cuando lo exija la ley.",
        ],
      },
      {
        h: "5. Transferencias internacionales",
        p: ["Cuando un proveedor trata datos fuera del EEE o del Reino Unido, garantizamos una salvaguarda adecuada, como una decisión de adecuación de la UE o las Cláusulas Contractuales Tipo conforme al artículo 46 del RGPD (y, para datos del Reino Unido, el IDTA o Adenda del Reino Unido)."],
      },
      {
        h: "6. Cuánto tiempo conservamos tus datos",
        ul: [
          "Datos de consultas y correspondencia: se conservan solo el tiempo necesario para gestionar tu consulta y un periodo razonable después, y luego se eliminan.",
          "Datos de registro del servidor: se conservan un breve periodo por seguridad y diagnóstico, y luego se eliminan o anonimizan.",
        ],
        p: ["Podemos conservar cierta información más tiempo cuando sea necesario para cumplir una obligación legal o para formular, ejercer o defender reclamaciones."],
      },
      {
        h: "7. Tus derechos",
        p: [
          "Conforme al RGPD y al RGPD del Reino Unido, tienes derecho de acceso, rectificación, supresión, limitación, portabilidad, a oponerte al tratamiento basado en el interés legítimo y a retirar el consentimiento cuando el tratamiento se base en él.",
          "Para ejercer cualquiera de estos derechos, escríbenos a {email}. Responderemos en el plazo de un mes, según exige el artículo 12 del RGPD.",
        ],
      },
      {
        h: "8. Reclamaciones",
        p: ["Si crees que no hemos tratado tus datos correctamente, contáctanos primero. También tienes derecho a presentar una reclamación ante una autoridad de control:"],
        ul: [
          "Estonia (nuestra autoridad principal): Inspección de Protección de Datos de Estonia (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallin — https://www.aki.ee",
          "Reino Unido: Information Commissioner’s Office (ICO) — https://www.ico.org.uk",
          "O la autoridad de control de tu país de residencia en el EEE.",
        ],
      },
      {
        h: "9. Visitantes fuera de la UE/EEE",
        ul: [
          "Reino Unido: tratamos los datos de los visitantes del Reino Unido conforme al RGPD del Reino Unido y la Data Protection Act 2018.",
          "California, EE. UU.: no vendemos ni compartimos tu información personal según se define en la CCPA/CPRA; los residentes de California pueden ejercer los derechos de conocer, eliminar y corregir contactándonos.",
          "Australia: tratamos la información personal conforme a los Australian Privacy Principles de la Privacy Act 1988 (Cth).",
          "Otros países: cumplimos las leyes de protección de datos aplicables allí donde operamos.",
        ],
      },
      {
        h: "10. Menores",
        p: ["El Sitio no está dirigido a menores y no recopilamos a sabiendas datos personales de menores. Si crees que un menor nos ha facilitado datos personales, contáctanos y los eliminaremos."],
      },
      {
        h: "11. Cambios en esta Política de privacidad",
        p: ["Podemos actualizar esta política de vez en cuando. La fecha anterior indica la última revisión; los cambios importantes se publicarán en esta página."],
      },
      {
        h: "12. Contacto",
        p: ["Preguntas sobre esta Política de privacidad o tus datos personales: FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    lede: "Cómo este sitio web usa cookies y tecnologías de almacenamiento local similares.",
    updated: "29 de mayo de 2026",
    sections: [
      {
        h: "1. Qué son las cookies",
        p: ["Las cookies son pequeños archivos de texto que se colocan en tu dispositivo al visitar un sitio web. Tecnologías similares incluyen el almacenamiento local y los píxeles."],
      },
      {
        h: "2. Las cookies que usamos",
        p: [
          "Este Sitio usa únicamente cookies estrictamente necesarias, esenciales para que funcione y sea seguro. No usamos cookies de analítica, rendimiento, publicidad ni seguimiento en redes sociales, y no elaboramos perfiles de los visitantes.",
          "Conforme a la Directiva ePrivacy de la UE (y al PECR del Reino Unido), las cookies estrictamente necesarias no requieren consentimiento previo, pero debemos informarte de ellas.",
          "Este Sitio no establece ninguna cookie. El único almacenamiento del lado del cliente que usamos es una entrada en el almacenamiento local de tu navegador que recuerda tu respuesta al aviso de cookies; permanece en tu dispositivo y no se nos transmite. Si más adelante añadimos herramientas de analítica o marketing, incorporaremos un banner de consentimiento y actualizaremos esta política.",
        ],
      },
      {
        h: "3. Gestión de cookies",
        p: ["La mayoría de los navegadores permiten ver, gestionar, eliminar y bloquear cookies. Como solo usamos almacenamiento estrictamente necesario, bloquearlo puede impedir que partes del Sitio funcionen. Hay orientación disponible en https://www.aboutcookies.org o en la sección de ayuda de tu navegador."],
      },
      {
        h: "4. Cambios en esta Política de cookies",
        p: ["Si cambia nuestro uso de cookies, actualizaremos esta página y, cuando lo exija la ley, solicitaremos tu consentimiento."],
      },
      {
        h: "5. Contacto",
        p: ["Preguntas sobre cookies: {email}. Consulta también nuestra Política de privacidad."],
      },
    ],
  },
  terms: {
    title: "Condiciones de uso del sitio web",
    lede: "Las condiciones que rigen tu acceso y uso del sitio web de FXN Europe.",
    updated: "29 de mayo de 2026",
    sections: [
      {
        h: "1. Sobre estas condiciones",
        p: ["Estas Condiciones de uso rigen tu acceso y uso de {url} (el «Sitio»), operado por FXN Europe OÜ, {address} (código de registro {registry}; IVA {vat}). Al usar el Sitio, aceptas estas condiciones. Si no estás de acuerdo, por favor no uses el Sitio."],
      },
      {
        h: "2. El Sitio es solo informativo",
        p: ["El Sitio ofrece información general sobre FXN Europe OÜ y sus actividades. Nada en él constituye una oferta de venta de bienes o servicios, asesoramiento financiero, jurídico o profesional, ni un compromiso vinculante. No te bases en el contenido como sustituto de asesoramiento profesional."],
      },
      {
        h: "3. Propiedad intelectual",
        p: ["Salvo que se indique lo contrario, todo el contenido — incluidos texto, gráficos, logotipos, los nombres y marcas «FXN» y «FXN Europe», imágenes y diseño — es propiedad de o está licenciado a FXN Europe OÜ y está protegido por las leyes de propiedad intelectual. Puedes ver e imprimir páginas para uso personal y no comercial; no puedes copiar, reproducir, republicar, distribuir ni explotar comercialmente ningún contenido sin nuestro permiso previo por escrito."],
      },
      {
        h: "4. Uso aceptable",
        p: ["Aceptas no:"],
        ul: [
          "usar el Sitio de forma ilícita, fraudulenta o con cualquier fin dañino;",
          "intentar acceder sin autorización al Sitio, su servidor o cualquier sistema conectado;",
          "introducir virus u otro código malicioso;",
          "extraer datos de forma sistemática (scraping) sin nuestro consentimiento;",
          "usar el Sitio de forma que pueda dañarlo, inhabilitarlo o interferir con otros usuarios.",
        ],
      },
      {
        h: "5. Exención de garantías",
        p: ["El Sitio y su contenido se ofrecen «tal cual» y «según disponibilidad», sin garantías de ningún tipo, en la máxima medida permitida por la ley. No garantizamos que el Sitio sea ininterrumpido, seguro o libre de errores, ni que la información sea exacta o completa."],
      },
      {
        h: "6. Limitación de responsabilidad",
        p: [
          "En la máxima medida permitida por la ley, FXN Europe OÜ no será responsable de pérdidas indirectas, incidentales o consecuentes, ni de pérdida de datos, beneficios o negocio, derivadas de tu uso (o imposibilidad de uso) del Sitio.",
          "Nada excluye ni limita nuestra responsabilidad cuando sea ilícito hacerlo, incluida la responsabilidad por muerte o lesiones personales causadas por negligencia, por fraude, o por derechos imperativos del consumidor conforme a la ley aplicable.",
        ],
      },
      {
        h: "7. Enlaces de terceros",
        p: ["El Sitio puede enlazar a sitios de terceros por comodidad. No controlamos ni somos responsables de su contenido, políticas o prácticas. Los enlaces no implican respaldo."],
      },
      {
        h: "8. Cambios",
        p: ["Podemos cambiar el Sitio o estas Condiciones en cualquier momento. La versión vigente se aplica cada vez que uses el Sitio; la fecha anterior indica la última revisión."],
      },
      {
        h: "9. Ley aplicable y jurisdicción",
        p: ["Estas Condiciones se rigen por las leyes de Estonia. Los tribunales de Estonia tienen jurisdicción sobre cualquier disputa, salvo que los consumidores conservan el beneficio de las normas imperativas de protección al consumidor y el derecho a iniciar acciones en su país de residencia cuando la ley aplicable lo permita."],
      },
      {
        h: "10. Contacto",
        p: ["FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
};

const de: LegalContent = {
  privacy: {
    title: "Datenschutzerklärung",
    lede: "Wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen — im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO).",
    updated: "29. Mai 2026",
    sections: [
      {
        h: "1. Wer wir sind",
        p: [
          "Diese Website, {url} (die „Website“), wird von der FXN Europe OÜ („wir“, „uns“) betrieben, einer in Estland eingetragenen Gesellschaft mit beschränkter Haftung.",
          "Eingetragene Anschrift: {address}. Estnischer Registercode: {registry}. USt-IdNr.: {vat}. Kontakt-E-Mail: {email}.",
          "Im Sinne der EU-DSGVO (Verordnung (EU) 2016/679), der UK-DSGVO und des estnischen Datenschutzgesetzes ist die FXN Europe OÜ der Verantwortliche für die über die Website verarbeiteten personenbezogenen Daten. Da wir in der EU niedergelassen sind, müssen wir keinen Vertreter nach Artikel 27 DSGVO benennen.",
        ],
      },
      {
        h: "2. Welche personenbezogenen Daten wir erheben",
        p: ["Dies ist eine informative Unternehmenswebsite. Sie verkauft keine Produkte oder Dienstleistungen, erfordert kein Konto und verwendet kein Analyse- oder Werbe-Tracking. Wir halten die Datenerhebung auf ein Minimum."],
        ul: [
          "Daten, die Sie uns geben: Wenn Sie uns per E-Mail oder Formular kontaktieren, erhalten wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht.",
          "Automatisch erhobene technische Daten: Unser Hosting-Anbieter und Webserver können begrenzte technische Informationen protokollieren, etwa IP-Adresse, Browsertyp, Geräteinformationen, verweisende Seite sowie Datum und Uhrzeit Ihres Besuchs.",
          "Cookies: Wir verwenden nur unbedingt erforderlichen Speicher — siehe unsere Cookie-Richtlinie.",
        ],
      },
      {
        h: "3. Warum wir Ihre Daten verarbeiten und unsere Rechtsgrundlagen",
        table: {
          head: ["Zweck", "Rechtsgrundlage (Artikel 6 DSGVO)"],
          rows: [
            ["Beantwortung Ihrer Anfragen und Korrespondenz", "Berechtigte Interessen (Art. 6 Abs. 1 lit. f); oder vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b)"],
            ["Betrieb, Wartung und Sicherung der Website", "Berechtigte Interessen (Art. 6 Abs. 1 lit. f)"],
            ["Erfüllung rechtlicher Pflichten", "Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)"],
          ],
        },
        p: ["Soweit wir uns auf berechtigte Interessen stützen, haben wir geprüft, dass diese nicht von Ihren Rechten und Freiheiten überwogen werden. Sie können jederzeit widersprechen (siehe Abschnitt 7). Wir treffen keine automatisierten Entscheidungen und kein Profiling nach Artikel 22 DSGVO und erheben nicht wissentlich besondere Kategorien von Daten (Artikel 9)."],
      },
      {
        h: "4. Wie wir Ihre Daten weitergeben",
        p: ["Wir verkaufen Ihre personenbezogenen Daten nicht und geben sie nicht zu Werbezwecken weiter. Wir können Daten weitergeben an:"],
        ul: [
          "Dienstleister, die als Auftragsverarbeiter handeln (z. B. unsere Hosting- und E-Mail-Anbieter), auf Grundlage eines Auftragsverarbeitungsvertrags;",
          "professionelle Berater (z. B. Anwälte oder Steuerberater), soweit erforderlich;",
          "Behörden oder Aufsichtsbehörden, soweit gesetzlich vorgeschrieben.",
        ],
      },
      {
        h: "5. Internationale Übermittlungen",
        p: ["Wenn ein Anbieter Daten außerhalb des EWR oder des Vereinigten Königreichs verarbeitet, stellen wir geeignete Garantien sicher, etwa einen EU-Angemessenheitsbeschluss oder Standardvertragsklauseln nach Artikel 46 DSGVO (und für UK-Daten das UK IDTA oder den Zusatz)."],
      },
      {
        h: "6. Wie lange wir Ihre Daten speichern",
        ul: [
          "Anfrage- und Korrespondenzdaten: nur so lange wie nötig zur Bearbeitung Ihrer Anfrage und für einen angemessenen Zeitraum danach, dann gelöscht.",
          "Serverprotokolldaten: für kurze Zeit zu Sicherheits- und Diagnosezwecken, dann gelöscht oder anonymisiert.",
        ],
        p: ["Wir können bestimmte Informationen länger aufbewahren, soweit dies zur Erfüllung einer rechtlichen Pflicht oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist."],
      },
      {
        h: "7. Ihre Rechte",
        p: [
          "Nach der DSGVO und der UK-DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch gegen eine auf berechtigten Interessen beruhende Verarbeitung sowie auf Widerruf der Einwilligung, sofern die Verarbeitung auf Einwilligung beruht.",
          "Um eines dieser Rechte auszuüben, schreiben Sie uns an {email}. Wir antworten innerhalb eines Monats, wie in Artikel 12 DSGVO vorgesehen.",
        ],
      },
      {
        h: "8. Beschwerden",
        p: ["Wenn Sie der Ansicht sind, dass wir Ihre Daten nicht ordnungsgemäß behandelt haben, kontaktieren Sie uns bitte zuerst. Sie haben außerdem das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen:"],
        ul: [
          "Estland (unsere federführende Behörde): Estnische Datenschutzaufsicht (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn — https://www.aki.ee",
          "Vereinigtes Königreich: Information Commissioner’s Office (ICO) — https://www.ico.org.uk",
          "Oder die Aufsichtsbehörde Ihres Wohnsitzlandes im EWR.",
        ],
      },
      {
        h: "9. Besucher außerhalb der EU/des EWR",
        ul: [
          "Vereinigtes Königreich: Wir verarbeiten Daten von UK-Besuchern nach der UK-DSGVO und dem Data Protection Act 2018.",
          "Kalifornien, USA: Wir verkaufen oder teilen Ihre personenbezogenen Daten nicht im Sinne des CCPA/CPRA; Einwohner Kaliforniens können die Rechte auf Auskunft, Löschung und Berichtigung ausüben, indem sie uns kontaktieren.",
          "Australien: Wir behandeln personenbezogene Daten im Einklang mit den Australian Privacy Principles des Privacy Act 1988 (Cth).",
          "Andere Länder: Wir halten die anwendbaren Datenschutzgesetze dort ein, wo wir tätig sind.",
        ],
      },
      {
        h: "10. Kinder",
        p: ["Die Website richtet sich nicht an Kinder, und wir erheben nicht wissentlich personenbezogene Daten von Kindern. Wenn Sie glauben, dass uns ein Kind Daten übermittelt hat, kontaktieren Sie uns, und wir löschen sie."],
      },
      {
        h: "11. Änderungen dieser Datenschutzerklärung",
        p: ["Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das obige Datum zeigt die letzte Überarbeitung; wesentliche Änderungen werden auf dieser Seite veröffentlicht."],
      },
      {
        h: "12. Kontakt",
        p: ["Fragen zu dieser Datenschutzerklärung oder Ihren personenbezogenen Daten: FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
  cookies: {
    title: "Cookie-Richtlinie",
    lede: "Wie diese Website Cookies und ähnliche Technologien zur lokalen Speicherung verwendet.",
    updated: "29. Mai 2026",
    sections: [
      {
        h: "1. Was Cookies sind",
        p: ["Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Ähnliche Technologien sind etwa lokale Speicherung und Pixel."],
      },
      {
        h: "2. Welche Cookies wir verwenden",
        p: [
          "Diese Website verwendet nur unbedingt erforderliche Cookies — solche, die für Funktion und Sicherheit der Website unerlässlich sind. Wir verwenden keine Analyse-, Leistungs-, Werbe- oder Social-Media-Tracking-Cookies und erstellen keine Profile von Besuchern.",
          "Nach der EU-ePrivacy-Richtlinie (und dem UK PECR) bedürfen unbedingt erforderliche Cookies keiner vorherigen Einwilligung, wir müssen Sie jedoch darüber informieren.",
          "Diese Website setzt keine Cookies. Der einzige clientseitige Speicher, den wir verwenden, ist ein Eintrag im lokalen Speicher Ihres Browsers, der Ihre Antwort auf den Cookie-Hinweis merkt; er verbleibt auf Ihrem Gerät und wird nicht an uns übertragen. Sollten wir später Analyse- oder Marketing-Tools hinzufügen, fügen wir einen Einwilligungsbanner hinzu und aktualisieren diese Richtlinie.",
        ],
      },
      {
        h: "3. Cookies verwalten",
        p: ["Die meisten Browser erlauben es, Cookies anzuzeigen, zu verwalten, zu löschen und zu blockieren. Da wir nur unbedingt erforderlichen Speicher verwenden, kann das Blockieren Teile der Website beeinträchtigen. Hinweise finden Sie unter https://www.aboutcookies.org oder im Hilfebereich Ihres Browsers."],
      },
      {
        h: "4. Änderungen dieser Cookie-Richtlinie",
        p: ["Wenn sich unsere Verwendung von Cookies ändert, aktualisieren wir diese Seite und holen, wo gesetzlich erforderlich, Ihre Einwilligung ein."],
      },
      {
        h: "5. Kontakt",
        p: ["Fragen zu Cookies: {email}. Siehe auch unsere Datenschutzerklärung."],
      },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen der Website",
    lede: "Die Bedingungen für Ihren Zugriff auf die FXN-Europe-Website und deren Nutzung.",
    updated: "29. Mai 2026",
    sections: [
      {
        h: "1. Über diese Bedingungen",
        p: ["Diese Nutzungsbedingungen regeln Ihren Zugriff auf {url} (die „Website“) und deren Nutzung; betrieben von der FXN Europe OÜ, {address} (Registercode {registry}; USt-IdNr. {vat}). Mit der Nutzung der Website stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht."],
      },
      {
        h: "2. Die Website ist rein informativ",
        p: ["Die Website bietet allgemeine Informationen über die FXN Europe OÜ und ihre Tätigkeiten. Nichts darauf ist ein Angebot zum Verkauf von Waren oder Dienstleistungen, eine Finanz-, Rechts- oder Fachberatung oder eine verbindliche Verpflichtung. Verlassen Sie sich nicht als Ersatz für professionelle Beratung auf den Inhalt."],
      },
      {
        h: "3. Geistiges Eigentum",
        p: ["Sofern nicht anders angegeben, sind alle Inhalte — einschließlich Text, Grafiken, Logos, der Namen und Marken „FXN“ und „FXN Europe“, Bilder und Layout — Eigentum der FXN Europe OÜ oder an sie lizenziert und durch Gesetze zum Schutz geistigen Eigentums geschützt. Sie dürfen Seiten für den persönlichen, nicht kommerziellen Gebrauch ansehen und drucken; Sie dürfen keine Inhalte ohne unsere vorherige schriftliche Genehmigung kopieren, vervielfältigen, erneut veröffentlichen, verbreiten oder kommerziell verwerten."],
      },
      {
        h: "4. Zulässige Nutzung",
        p: ["Sie verpflichten sich, nicht:"],
        ul: [
          "die Website rechtswidrig, betrügerisch oder zu schädlichen Zwecken zu nutzen;",
          "unbefugten Zugriff auf die Website, ihren Server oder verbundene Systeme zu versuchen;",
          "Viren oder anderen Schadcode einzuschleusen;",
          "Daten ohne unsere Zustimmung systematisch auszulesen (Scraping);",
          "die Website so zu nutzen, dass sie beschädigt, beeinträchtigt oder andere Nutzer gestört werden.",
        ],
      },
      {
        h: "5. Haftungsausschluss",
        p: ["Die Website und ihre Inhalte werden „wie besehen“ und „wie verfügbar“ ohne jegliche Gewährleistung im gesetzlich zulässigen Höchstmaß bereitgestellt. Wir gewährleisten nicht, dass die Website ununterbrochen, sicher oder fehlerfrei ist oder dass die Informationen richtig oder vollständig sind."],
      },
      {
        h: "6. Haftungsbeschränkung",
        p: [
          "Im gesetzlich zulässigen Höchstmaß haftet die FXN Europe OÜ nicht für indirekte, zufällige oder Folgeschäden oder für den Verlust von Daten, Gewinnen oder Geschäften, die aus Ihrer Nutzung (oder Nichtnutzbarkeit) der Website entstehen.",
          "Nichts schließt unsere Haftung aus oder beschränkt sie, wo dies rechtswidrig wäre — einschließlich der Haftung für durch Fahrlässigkeit verursachte Todesfälle oder Körperverletzungen, für Betrug oder für zwingende Verbraucherrechte nach anwendbarem Recht.",
        ],
      },
      {
        h: "7. Links Dritter",
        p: ["Die Website kann der Einfachheit halber auf Websites Dritter verlinken. Wir kontrollieren deren Inhalte, Richtlinien oder Praktiken nicht und sind dafür nicht verantwortlich. Links bedeuten keine Billigung."],
      },
      {
        h: "8. Änderungen",
        p: ["Wir können die Website oder diese Bedingungen jederzeit ändern. Es gilt jeweils die aktuelle Fassung, wenn Sie die Website nutzen; das obige Datum zeigt die letzte Überarbeitung."],
      },
      {
        h: "9. Anwendbares Recht und Gerichtsstand",
        p: ["Diese Bedingungen unterliegen dem Recht Estlands. Die Gerichte Estlands sind für Streitigkeiten zuständig, wobei Verbrauchern die zwingenden Verbraucherschutzvorschriften und das Recht erhalten bleiben, in ihrem Wohnsitzland Verfahren einzuleiten, soweit das anwendbare Recht dies vorsieht."],
      },
      {
        h: "10. Kontakt",
        p: ["FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
};

const fr: LegalContent = {
  privacy: {
    title: "Politique de confidentialité",
    lede: "Comment nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement général sur la protection des données de l’UE (RGPD).",
    updated: "29 mai 2026",
    sections: [
      {
        h: "1. Qui nous sommes",
        p: [
          "Ce site web, {url} (le « Site »), est exploité par FXN Europe OÜ (« nous »), une société à responsabilité limitée constituée en Estonie.",
          "Adresse du siège : {address}. Code de registre estonien : {registry}. Numéro de TVA : {vat}. E-mail de contact : {email}.",
          "Aux fins du RGPD de l’UE (règlement (UE) 2016/679), du RGPD du Royaume-Uni et de la loi estonienne sur la protection des données, FXN Europe OÜ est le responsable du traitement des données personnelles traitées via le Site. Étant établis dans l’UE, nous ne sommes pas tenus de désigner un représentant au titre de l’article 27 du RGPD.",
        ],
      },
      {
        h: "2. Les données personnelles que nous collectons",
        p: ["Il s’agit d’un site web d’entreprise informatif. Il ne vend ni produits ni services, ne requiert pas de compte et n’utilise ni analytique ni suivi publicitaire. Nous limitons la collecte de données au minimum."],
        ul: [
          "Informations que vous nous fournissez : lorsque vous nous contactez par e-mail ou via un formulaire, nous recevons votre nom, votre adresse e-mail et le contenu de votre message.",
          "Données techniques collectées automatiquement : notre hébergeur et notre serveur web peuvent enregistrer des informations techniques limitées telles que l’adresse IP, le type de navigateur, des informations sur l’appareil, la page de provenance ainsi que la date et l’heure de votre visite.",
          "Cookies : nous utilisons uniquement un stockage strictement nécessaire — voir notre Politique relative aux cookies.",
        ],
      },
      {
        h: "3. Pourquoi nous traitons vos données et nos bases légales",
        table: {
          head: ["Finalité", "Base légale (article 6 RGPD)"],
          rows: [
            ["Répondre à vos demandes et à votre correspondance", "Intérêt légitime (art. 6(1)(f)) ; ou mesures prises à votre demande avant un contrat (art. 6(1)(b))"],
            ["Exploiter, maintenir et sécuriser le Site", "Intérêt légitime (art. 6(1)(f))"],
            ["Respecter des obligations légales", "Obligation légale (art. 6(1)(c))"],
          ],
        },
        p: ["Lorsque nous nous appuyons sur l’intérêt légitime, nous avons évalué qu’il ne prévaut pas sur vos droits et libertés. Vous pouvez vous y opposer à tout moment (voir la section 7). Nous ne prenons pas de décision automatisée ni de profilage au sens de l’article 22 du RGPD et ne collectons pas sciemment de catégories particulières de données (article 9)."],
      },
      {
        h: "4. Comment nous partageons vos données",
        p: ["Nous ne vendons pas vos données personnelles et ne les partageons pas à des fins publicitaires. Nous pouvons communiquer des données à :"],
        ul: [
          "des prestataires agissant comme sous-traitants (tels que nos hébergeurs et fournisseurs de messagerie), dans le cadre d’un accord de traitement des données ;",
          "des conseillers professionnels (tels qu’avocats ou comptables) lorsque cela est nécessaire ;",
          "des autorités publiques ou des régulateurs lorsque la loi l’exige.",
        ],
      },
      {
        h: "5. Transferts internationaux",
        p: ["Lorsqu’un prestataire traite des données hors de l’EEE ou du Royaume-Uni, nous veillons à mettre en place une garantie appropriée, telle qu’une décision d’adéquation de l’UE ou des clauses contractuelles types au titre de l’article 46 du RGPD (et, pour les données du Royaume-Uni, l’IDTA ou l’avenant britannique)."],
      },
      {
        h: "6. Combien de temps nous conservons vos données",
        ul: [
          "Données de demande et de correspondance : conservées uniquement le temps nécessaire au traitement de votre demande et une période raisonnable ensuite, puis supprimées.",
          "Données de journaux serveur : conservées pour une courte période à des fins de sécurité et de diagnostic, puis supprimées ou anonymisées.",
        ],
        p: ["Nous pouvons conserver certaines informations plus longtemps lorsque cela est nécessaire pour respecter une obligation légale ou pour constater, exercer ou défendre des droits en justice."],
      },
      {
        h: "7. Vos droits",
        p: [
          "Au titre du RGPD et du RGPD du Royaume-Uni, vous avez le droit d’accès, de rectification, d’effacement, de limitation, de portabilité, de vous opposer au traitement fondé sur l’intérêt légitime et de retirer votre consentement lorsque le traitement repose sur celui-ci.",
          "Pour exercer l’un de ces droits, écrivez-nous à {email}. Nous répondrons dans un délai d’un mois, comme l’exige l’article 12 du RGPD.",
        ],
      },
      {
        h: "8. Réclamations",
        p: ["Si vous estimez que nous n’avons pas traité vos données correctement, contactez-nous d’abord. Vous avez également le droit d’introduire une réclamation auprès d’une autorité de contrôle :"],
        ul: [
          "Estonie (notre autorité chef de file) : Inspection estonienne de la protection des données (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn — https://www.aki.ee",
          "Royaume-Uni : Information Commissioner’s Office (ICO) — https://www.ico.org.uk",
          "Ou l’autorité de contrôle de votre pays de résidence dans l’EEE.",
        ],
      },
      {
        h: "9. Visiteurs hors UE/EEE",
        ul: [
          "Royaume-Uni : nous traitons les données des visiteurs britanniques conformément au RGPD du Royaume-Uni et au Data Protection Act 2018.",
          "Californie, États-Unis : nous ne vendons ni ne partageons vos informations personnelles au sens du CCPA/CPRA ; les résidents de Californie peuvent exercer les droits de savoir, de supprimer et de corriger en nous contactant.",
          "Australie : nous traitons les informations personnelles conformément aux Australian Privacy Principles du Privacy Act 1988 (Cth).",
          "Autres pays : nous respectons les lois applicables en matière de protection des données là où nous opérons.",
        ],
      },
      {
        h: "10. Enfants",
        p: ["Le Site ne s’adresse pas aux enfants et nous ne collectons pas sciemment de données personnelles d’enfants. Si vous pensez qu’un enfant nous a fourni des données personnelles, contactez-nous et nous les supprimerons."],
      },
      {
        h: "11. Modifications de cette politique de confidentialité",
        p: ["Nous pouvons mettre à jour cette politique de temps à autre. La date ci-dessus indique la dernière révision ; les modifications importantes seront publiées sur cette page."],
      },
      {
        h: "12. Contact",
        p: ["Questions sur cette politique de confidentialité ou vos données personnelles : FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
  cookies: {
    title: "Politique relative aux cookies",
    lede: "Comment ce site web utilise les cookies et des technologies de stockage local similaires.",
    updated: "29 mai 2026",
    sections: [
      {
        h: "1. Que sont les cookies",
        p: ["Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site web. Les technologies similaires incluent le stockage local et les pixels."],
      },
      {
        h: "2. Les cookies que nous utilisons",
        p: [
          "Ce Site utilise uniquement des cookies strictement nécessaires — essentiels à son fonctionnement et à sa sécurité. Nous n’utilisons pas de cookies d’analytique, de performance, de publicité ou de suivi sur les réseaux sociaux, et nous n’établissons pas de profils de visiteurs.",
          "Selon la directive ePrivacy de l’UE (et le PECR du Royaume-Uni), les cookies strictement nécessaires ne requièrent pas de consentement préalable, mais nous devons vous en informer.",
          "Ce Site ne dépose aucun cookie. Le seul stockage côté client que nous utilisons est une entrée dans le stockage local de votre navigateur qui mémorise votre réponse à l’avis sur les cookies ; elle reste sur votre appareil et ne nous est pas transmise. Si nous ajoutons ultérieurement des outils d’analytique ou de marketing, nous ajouterons une bannière de consentement et mettrons à jour cette politique.",
        ],
      },
      {
        h: "3. Gérer les cookies",
        p: ["La plupart des navigateurs permettent d’afficher, gérer, supprimer et bloquer les cookies. Comme nous n’utilisons qu’un stockage strictement nécessaire, le bloquer peut empêcher certaines parties du Site de fonctionner. Des conseils sont disponibles sur https://www.aboutcookies.org ou dans la section d’aide de votre navigateur."],
      },
      {
        h: "4. Modifications de cette politique relative aux cookies",
        p: ["Si notre utilisation des cookies change, nous mettrons à jour cette page et, lorsque la loi l’exige, demanderons votre consentement."],
      },
      {
        h: "5. Contact",
        p: ["Questions sur les cookies : {email}. Voir aussi notre Politique de confidentialité."],
      },
    ],
  },
  terms: {
    title: "Conditions d’utilisation du site web",
    lede: "Les conditions qui régissent votre accès au site web de FXN Europe et son utilisation.",
    updated: "29 mai 2026",
    sections: [
      {
        h: "1. À propos de ces conditions",
        p: ["Ces Conditions d’utilisation régissent votre accès à {url} (le « Site ») et son utilisation ; il est exploité par FXN Europe OÜ, {address} (code de registre {registry} ; TVA {vat}). En utilisant le Site, vous acceptez ces conditions. Si vous n’êtes pas d’accord, veuillez ne pas utiliser le Site."],
      },
      {
        h: "2. Le Site est uniquement informatif",
        p: ["Le Site fournit des informations générales sur FXN Europe OÜ et ses activités. Rien sur celui-ci ne constitue une offre de vente de biens ou de services, un conseil financier, juridique ou professionnel, ni un engagement contraignant. Ne vous fiez pas au contenu comme substitut à un conseil professionnel."],
      },
      {
        h: "3. Propriété intellectuelle",
        p: ["Sauf indication contraire, tout le contenu — y compris les textes, graphismes, logos, les noms et marques « FXN » et « FXN Europe », images et mise en page — appartient à FXN Europe OÜ ou lui est concédé sous licence, et est protégé par les lois sur la propriété intellectuelle. Vous pouvez consulter et imprimer des pages pour un usage personnel et non commercial ; vous ne pouvez pas copier, reproduire, republier, distribuer ni exploiter commercialement le contenu sans notre autorisation écrite préalable."],
      },
      {
        h: "4. Utilisation acceptable",
        p: ["Vous acceptez de ne pas :"],
        ul: [
          "utiliser le Site de manière illégale, frauduleuse ou à des fins nuisibles ;",
          "tenter d’accéder sans autorisation au Site, à son serveur ou à tout système connecté ;",
          "introduire des virus ou autre code malveillant ;",
          "extraire des données de manière systématique (scraping) sans notre consentement ;",
          "utiliser le Site d’une manière susceptible de l’endommager, de le désactiver ou de gêner d’autres utilisateurs.",
        ],
      },
      {
        h: "5. Avertissement",
        p: ["Le Site et son contenu sont fournis « tels quels » et « selon disponibilité », sans garantie d’aucune sorte, dans toute la mesure permise par la loi. Nous ne garantissons pas que le Site sera ininterrompu, sécurisé ou exempt d’erreurs, ni que les informations sont exactes ou complètes."],
      },
      {
        h: "6. Limitation de responsabilité",
        p: [
          "Dans toute la mesure permise par la loi, FXN Europe OÜ ne sera pas responsable des pertes indirectes, accessoires ou consécutives, ni de la perte de données, de bénéfices ou d’activité, découlant de votre utilisation (ou impossibilité d’utiliser) du Site.",
          "Rien n’exclut ni ne limite notre responsabilité lorsque ce serait illégal — y compris la responsabilité en cas de décès ou de dommage corporel causé par négligence, de fraude, ou au titre des droits impératifs des consommateurs selon la loi applicable.",
        ],
      },
      {
        h: "7. Liens de tiers",
        p: ["Le Site peut, par commodité, renvoyer vers des sites tiers. Nous ne contrôlons pas et ne sommes pas responsables de leur contenu, de leurs politiques ou de leurs pratiques. Les liens n’impliquent aucune approbation."],
      },
      {
        h: "8. Modifications",
        p: ["Nous pouvons modifier le Site ou ces Conditions à tout moment. La version en vigueur s’applique à chaque utilisation du Site ; la date ci-dessus indique la dernière révision."],
      },
      {
        h: "9. Droit applicable et juridiction",
        p: ["Ces Conditions sont régies par le droit estonien. Les tribunaux estoniens sont compétents pour tout litige, étant entendu que les consommateurs conservent le bénéfice des règles impératives de protection des consommateurs et le droit d’agir dans leur pays de résidence lorsque la loi applicable le permet."],
      },
      {
        h: "10. Contact",
        p: ["FXN Europe OÜ — {email} — {address}."],
      },
    ],
  },
};

const content: Record<Locale, LegalContent> = { en, et, es, de, fr };

export function getLegal(locale: Locale): LegalContent {
  return content[locale];
}
