# CLAUDE.md

Bona Fides — Wirtschaftsdetektei-Website. Noir-Ästhetik, alle Inhalte auf Deutsch,
Fokus B2B (Unternehmen, Versicherer, Kanzleien), B2C als Nebenlinie.

**Stack:** Next 14.2.25 App Router · React 18 · TypeScript strict · Tailwind 4 ·
shadcn/ui (new-york, lucide) · Resend
`package.json` fordert Next ^15 — installiert ist 14.2.25. Keine 15-only-APIs verwenden.

**Schriften:** Playfair (`font-serif`, Überschriften) · Inter (`font-sans`, Fließtext) ·
JetBrains Mono (`font-mono`, Labels und Kennzahlen). Markenfarben: `brass`, `brass-light`.

## Validierung

Zügig arbeiten, nicht jede Änderung durch die volle Kette schicken.

- Inhalts- und Textänderungen: `npm run lint` genügt, dann committen.
- Logik, neue Komponenten, Routen: zusätzlich `npm run typecheck`.
- Vor dem Merge auf `main`: einmal `npm run build`.
- Tests (`npm run test`) nur laufen lassen, wenn die Änderung sie plausibel
  betrifft, oder auf Zuruf. Playwright nutzt Port 3000, anderer Port via
  `PLAYWRIGHT_BASE_URL`. Im Dev-Server flackern sie durch Kompilierungslatenz —
  im Zweifel gegen `next build && next start` prüfen.
- Fremde Tests fallen um: **STOPP und fragen**, nicht nebenbei reparieren.

## Nie

- Nichts Nicht-shadcn nach `components/ui/`
- Externe Bilddomains ohne `remotePatterns` in `next.config.js`
- Direkt auf `main` pushen — immer PR

## Wo was liegt

- `lib/services-data.ts` — Quelle für alle Leistungsseiten, Navigation, Footer, Sitemap
  und Schema.org. Neue Leistung: nur hier eintragen, Seite entsteht automatisch.
- `lib/site-config.ts` — Adresse, E-Mail, Antwortversprechen
- `blog/articles/*.md` — Artikel mit Front Matter; 301-Redirects in `next.config.js`

## Env

`RESEND_API_KEY`, `CONTACT_EMAIL` (kommasepariert möglich) — lokal in `.env.local`,
produktiv in Vercel.
