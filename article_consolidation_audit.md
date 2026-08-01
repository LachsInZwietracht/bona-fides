# Artikel-Konsolidierung: Audit und Umsetzungsstand

Audit: 1. August 2026 · Priorität A umgesetzt: 1. August 2026

## Umfang und Methode

Analysiert wurden die 78 aktiven Markdown-Artikel in `blog/articles`. Backup-Verzeichnisse wurden bewusst ausgeschlossen. Verglichen wurden Titel, Kategorie, Suchintention, Gliederung, inhaltliche Schwerpunkte und die Überschneidung von Fünf-Wort-Folgen im Fließtext.

Die sechs weitgehend templatisierten Stadtseiten für München, Hamburg, Köln, Frankfurt, Stuttgart und Düsseldorf sind untereinander zu rund 75 Prozent wortgleich. Bei den übrigen Empfehlungen ist weniger die wortwörtliche Gleichheit als die gleiche Suchintention und gegenseitige Kannibalisierung ausschlaggebend.

## Ergebnis in Zahlen

- Aktiver Bestand vorher: 78 Artikel
- **Umgesetzt (Priorität A): 78 → 54 Artikel, 24 URLs mit 301 weitergeleitet**
- Offen: die sechs nahezu gleichen Stadtseiten bündeln → etwa 49 Artikel
- Offen: die Louvre-Serie in zwei Dossiers bündeln → etwa 44 Artikel

## Priorität A — umgesetzt

Die einzigartigen Inhalte der Nebenartikel wurden in den jeweiligen Zielartikel eingearbeitet, die Quelldateien entfernt und permanente Weiterleitungen in `next.config.js` eingetragen.

| Themencluster | Zielartikel | Eingearbeitet und weitergeleitet | Reduktion |
| --- | --- | --- | ---: |
| Love Scam / Romance Scam | `love-scam-romance-betrug-aufdecken` | `cyberbetrug-2-…`, `romance-scam-liebesbetrug-erkennen-aufdecken` | 2 |
| Hintergrundprüfung allgemein | `hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence` | `hintergrundpruefung-1-…`, `hintergrundpruefung-3-…` | 2 |
| Privatdetektiv-FAQ | `privatdetektiv-faq-kompletleitfaden-kosten-ablauf` | `haeufige-fragen-1-…`, `haeufige-fragen-2-…` | 2 |
| Rechtliche Grundlagen | `rechtliche-grundlagen-detektive-deutschland-kompletleitfaden` | `rechtliche-aspekte-1-…`, `rechtliche-aspekte-2-…` | 2 |
| Internationale Ermittlungen | `internationale-ermittlungen-deutsche-detektive-im-ausland` | `internationale-ermittlungen-1-…`, `internationale-ermittlungen-2-…` | 2 |
| Unternehmensbetrug / HR | `unternehmensbetrug-ermittlungsleitfaden-hr-compliance` | `unternehmensbetrug-1-…`, `unternehmensbetrug-2-…` | 2 |
| Ermittlungstools | `technologie-tools-1-…` | `technologie-tools-2-…` | 1 |
| Cybercrime-Statistik | `branchenstatistik-1-…` | `branchenstatistik-2-…` | 1 |
| Allgemeiner Sicherheitsleitfaden | `leitfaden-1-…` | `leitfaden-2-…` | 1 |
| Cyberbetrug-Grundlagen | `cyberbetrug-grundlagen-unternehmen-schutz` | `cyberbetrug-1-…` | 1 |
| Cybercrime-Trends / KI | `cybercrime-moderne-techniken-ki-betrug` | `cyberbetrug-3-…` | 1 |
| Prävention und Sofortmaßnahmen | `cybercrime-praevention-sofortmassnahmen` | `cyberbetrug-4-…` | 1 |
| Allgemeine digitale Ermittlungen | `internet-detektei-online-ermittlungen-digitale-beweise` | `digitale-spur-1/2/8/9-…` | 4 |
| Untreue und digitale Hinweise | `untreue-1-wie-man-digitale-hinweise-erkennt` | `untreue-2-…`, `untreue-3-…` | 2 |

Nicht angetastet, weil eigenständig: `hintergrundpruefung-2-…` (Referenzprüfung und Social-Media-Screening) sowie die Spezialartikel `digitale-spur-3` bis `digitale-spur-7` zu Krypto-/Dark-Web-, Mobile-, E-Mail-, Cloud- und IoT-Forensik.

### Begleitend bereinigt

- Alte interne Seriennummern aus allen sichtbaren Titeln und Keywords entfernt (58, 92, 112, 127–130, 152, 162, 182, 192 u. a.)
- Die fünf Fallstudien nach dem tatsächlichen Fall benannt statt durchnummeriert
- Doppelte Dateipräfixe aufgelöst (zweimal `072-`, dreimal `073-` → 076/077/078)
- Alle internen `/blog/`-Links auf existierende Slugs geführt; 34 Dateien betroffen. Darunter auch Altlasten, die schon vor der Konsolidierung ins Leere liefen (Louvre-Serie, Umlaut-Slugs der Stadtseiten, nie existierende `fallstudie-127/128/129`)
- Mehrfach duplizierte „Verwandte Artikel"-Listen entdoppelt, Linktexte an die neuen Titel angepasst
- Widersprüchliche Netzwerkgrößen vereinheitlicht auf **über 40 Partnerdetekteien in 28 Ländern** (vorher: 42 Länder, über 50 Länder, 45 Länder, 40+ Länder)
- Jahreszahl 2025 aus Titeln und Zwischenüberschriften entfernt, wo sie den Inhalt künstlich altern ließ
- Zwei veraltete Weiterleitungen aus Phase 1 entfernt, die `cyberbetrug-1` und `cyberbetrug-2` bereits auf ein falsches Ziel führten, obwohl die Artikel noch existierten

## Priorität B: strategische Entscheidung nötig — offen

### Stadtseiten

Die Seiten für München, Hamburg, Köln, Frankfurt, Stuttgart und Düsseldorf verwenden fast vollständig dasselbe Gerüst und überwiegend denselben Text; im Wesentlichen wird nur der Ortsname ersetzt. Das ist die stärkste messbare Redundanz im verbliebenen Bestand.

Empfehlung: Aus den sechs Seiten einen starken Artikel zu Kosten, Ablauf und bundesweiter Verfügbarkeit bilden und die sechs URLs weiterleiten. Die ausführlichere Berlin-Seite enthält mehr eigenen Stadtbezug und kann bestehen bleiben. Falls lokale Suchanfragen strategisch wichtig sind, sollten die Seiten stattdessen mit echten lokalen Besonderheiten, Einsatzgebieten und belastbaren Referenzen individualisiert werden.

Mögliche Reduktion: weitere 5 Artikel, optional 6 einschließlich Berlin.

### Louvre-Serie

Die fünf Einzelteile und die zwei Sammelartikel decken dieselben zwei Erzählstränge ab:

- `louvre-raub-komplette-ermittlungsgeschichte` kann die Artikel zur Nacht, zu den Sicherheitslücken und zu den ersten 72 Stunden aufnehmen.
- `louvre-raub-verdaechtige-beweise` kann die separaten Artikel zu Verdächtigenprofilen und forensischen Beweisen aufnehmen.

Falls die Serie nicht bewusst als episodisches Kampagnenformat gebraucht wird, lässt sie sich damit von sieben auf zwei Artikel reduzieren.

Mögliche Reduktion: weitere 5 Artikel.

## Offene Punkte

- ~~Zahlen und Statistiken prüfen.~~ **Erledigt am 1. August 2026.** Der Statistikartikel wurde gegen das BKA-Bundeslagebild Cybercrime 2025 und die Bitkom-Studie „Wirtschaftsschutz 2025" neu geschrieben. Nicht belegbare Detailstatistiken (Deepfake-Fallzahlen, KI-Phishing-Erfolgsquoten, Opferquoten nach Alter und Unternehmensgröße) wurden entfernt statt fortgeschrieben. Die Leitzahlen in `cyberbetrug-grundlagen`, `cybercrime-moderne-techniken-ki-betrug`, `cybercrime-praevention-sofortmassnahmen`, `internet-detektei` und `steuerbetrug-steuersaison` wurden auf denselben Stand gezogen, damit sich die Seiten nicht mehr widersprechen.
- **Rankings vor weiteren Löschungen prüfen.** Vor Priorität B sollten Search Console und Analytics je Cluster die stärkste Ziel-URL bestimmen.
- **Nach Veröffentlichung** Indexierung, Rankings und 404-Fehler beobachten.
