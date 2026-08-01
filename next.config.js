/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'sdmntprnortheu.oaiusercontent.com'
      }
    ]
  },
  async redirects() {
    return [
      // Cybercrime consolidation redirects - Phase 1
      // Hinweis: cyberbetrug-1 und cyberbetrug-2 werden weiter unten
      // (Konsolidierung Priorität A) auf ihre jeweils passenden Ziele geführt.
      {
        source: '/blog/cyberbetrug-23-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cyberbetrug-grundlagen-unternehmen-schutz',
        permanent: true,
      },
      // Modern cybercrime techniques consolidation redirects - Phase 1
      {
        source: '/blog/cyberbetrug-24-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-25-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-26-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-27-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-28-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-29-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-30-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-31-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-32-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-33-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-34-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },

      // Cybercrime prevention and response consolidation
      {
        source: '/blog/cyberbetrug-35-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-40-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-45-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-50-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-55-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      // Batch consolidation of remaining prevention/response duplicates
      {
        source: '/blog/cyberbetrug-36-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-37-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-38-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-39-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-41-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-42-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-43-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-44-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-46-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-47-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-48-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-49-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-51-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-52-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-53-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-54-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },

      // Digital investigations consolidation redirects - Phase 1
      // (Will be added as consolidation progresses)

      // Background checks consolidation redirects - Phase 2
      // (Will be added as consolidation progresses)

      // Corporate fraud consolidation redirects - Phase 2
      // (Will be added as consolidation progresses)

      // Corporate Services consolidation redirects - Background Checks Series
      {
        source: '/blog/hintergrundpruefung-58-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-59-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-60-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-61-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-62-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-63-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-64-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-65-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-66-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-67-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-68-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-69-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-70-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-71-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-72-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-73-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-74-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-75-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },

      // Corporate Services consolidation redirects - Corporate Fraud Series
      {
        source: '/blog/unternehmensbetrug-92-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-93-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-94-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-95-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-96-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-97-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-98-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-99-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-100-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-101-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-102-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-103-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-104-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-105-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-106-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-107-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-108-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-109-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-110-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },

      // Legal & Educational consolidation redirects - Legal Series (14 duplicates)
      {
        source: '/blog/rechtliche-aspekte-112-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-113-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-114-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-115-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-116-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-117-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-118-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-119-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-120-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-121-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-122-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-123-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-124-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-125-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },

      // Legal & Educational consolidation redirects - FAQ Series (9 duplicates)
      {
        source: '/blog/haeufige-fragen-182-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-183-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-184-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-185-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-186-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-187-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-188-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-189-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-190-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },

      // Louvre Heist Series consolidation redirects (6 → 2 articles)
      {
        source: '/blog/internationale-ermittlungen-200',
        destination: '/blog/louvre-raub-komplette-ermittlungsgeschichte',
        permanent: true,
      },
      {
        source: '/blog/louvre-raub-die-nacht-die-die-kunstwelt-erschuetterte',
        destination: '/blog/louvre-raub-komplette-ermittlungsgeschichte',
        permanent: true,
      },
      {
        source: '/blog/louvre-sicherheitsluecken-analyse',
        destination: '/blog/louvre-raub-komplette-ermittlungsgeschichte',
        permanent: true,
      },
      {
        source: '/blog/mona-lisa-72-stunden-danach',
        destination: '/blog/louvre-raub-komplette-ermittlungsgeschichte',
        permanent: true,
      },
      {
        source: '/blog/louvre-verdaechtige-profile',
        destination: '/blog/louvre-raub-verdaechtige-beweise',
        permanent: true,
      },
      {
        source: '/blog/louvre-forensische-beweise',
        destination: '/blog/louvre-raub-verdaechtige-beweise',
        permanent: true,
      },

      // Konsolidierung Priorität A (August 2026): 78 → 54 Artikel
      // Love Scam / Romance Scam
      {
        source: '/blog/cyberbetrug-2-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/love-scam-romance-betrug-aufdecken',
        permanent: true,
      },
      {
        source: '/blog/romance-scam-liebesbetrug-erkennen-aufdecken',
        destination: '/blog/love-scam-romance-betrug-aufdecken',
        permanent: true,
      },
      // Hintergrundprüfung
      {
        source: '/blog/hintergrundpruefung-1-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      {
        source: '/blog/hintergrundpruefung-3-worauf-arbeitgeber-achten-sollten',
        destination: '/blog/hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence',
        permanent: true,
      },
      // Privatdetektiv-FAQ
      {
        source: '/blog/haeufige-fragen-1-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      {
        source: '/blog/haeufige-fragen-2-antworten-vom-privatdetektiv',
        destination: '/blog/privatdetektiv-faq-kompletleitfaden-kosten-ablauf',
        permanent: true,
      },
      // Rechtliche Grundlagen
      {
        source: '/blog/rechtliche-aspekte-1-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      {
        source: '/blog/rechtliche-aspekte-2-was-detektive-in-deutschland-duerfen',
        destination: '/blog/rechtliche-grundlagen-detektive-deutschland-kompletleitfaden',
        permanent: true,
      },
      // Internationale Ermittlungen
      {
        source: '/blog/internationale-ermittlungen-1-grenzen-ueberschreitende-faelle-loesen',
        destination: '/blog/internationale-ermittlungen-deutsche-detektive-im-ausland',
        permanent: true,
      },
      {
        source: '/blog/internationale-ermittlungen-2-grenzen-ueberschreitende-faelle-loesen',
        destination: '/blog/internationale-ermittlungen-deutsche-detektive-im-ausland',
        permanent: true,
      },
      // Unternehmensbetrug / HR
      {
        source: '/blog/unternehmensbetrug-1-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      {
        source: '/blog/unternehmensbetrug-2-risiken-und-loesungen-fuer-hr',
        destination: '/blog/unternehmensbetrug-ermittlungsleitfaden-hr-compliance',
        permanent: true,
      },
      // Ermittlungs-Tools
      {
        source: '/blog/technologie-tools-2-die-wichtigsten-werkzeuge-fuer-ermittlungen',
        destination: '/blog/technologie-tools-1-die-wichtigsten-werkzeuge-fuer-ermittlungen',
        permanent: true,
      },
      // Cybercrime-Statistik
      {
        source: '/blog/branchenstatistik-2-aktuelle-trends-im-cybercrime',
        destination: '/blog/branchenstatistik-1-aktuelle-trends-im-cybercrime',
        permanent: true,
      },
      // Sicherheitsleitfaden
      {
        source: '/blog/leitfaden-2-schritt-fuer-schritt-zur-eigenen-sicherheit',
        destination: '/blog/leitfaden-1-schritt-fuer-schritt-zur-eigenen-sicherheit',
        permanent: true,
      },
      // Cyberbetrug-Grundlagen, KI-Trends, Prävention
      {
        source: '/blog/cyberbetrug-1-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cyberbetrug-grundlagen-unternehmen-schutz',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-3-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-moderne-techniken-ki-betrug',
        permanent: true,
      },
      {
        source: '/blog/cyberbetrug-4-neue-maschen-und-wie-man-sich-schuetzt',
        destination: '/blog/cybercrime-praevention-sofortmassnahmen',
        permanent: true,
      },
      // Allgemeine digitale Ermittlungen
      {
        source: '/blog/digitale-spur-1-moderne-ermittlungstechniken-im-netz',
        destination: '/blog/internet-detektei-online-ermittlungen-digitale-beweise',
        permanent: true,
      },
      {
        source: '/blog/digitale-spur-2-moderne-ermittlungstechniken-im-netz',
        destination: '/blog/internet-detektei-online-ermittlungen-digitale-beweise',
        permanent: true,
      },
      {
        source: '/blog/digitale-spur-8-moderne-ermittlungstechniken-im-netz',
        destination: '/blog/internet-detektei-online-ermittlungen-digitale-beweise',
        permanent: true,
      },
      {
        source: '/blog/digitale-spur-9-moderne-ermittlungstechniken-im-netz',
        destination: '/blog/internet-detektei-online-ermittlungen-digitale-beweise',
        permanent: true,
      },
      // Untreue
      {
        source: '/blog/untreue-2-wie-man-digitale-hinweise-erkennt',
        destination: '/blog/untreue-1-wie-man-digitale-hinweise-erkennt',
        permanent: true,
      },
      {
        source: '/blog/untreue-3-wie-man-digitale-hinweise-erkennt',
        destination: '/blog/untreue-1-wie-man-digitale-hinweise-erkennt',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
