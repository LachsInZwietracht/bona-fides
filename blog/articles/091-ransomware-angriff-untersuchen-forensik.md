---
title: "Ransomware-Angriff untersuchen: Forensik im Ernstfall"
slug: ransomware-angriff-untersuchen-forensik
keyword: Ransomware-Angriff untersuchen
category: Corporate Fraud & Employee Misconduct
date: 2026-11-02
excerpt: "Ransomware-Angriff untersuchen: So sichern Unternehmen Spuren, steuern Meldefristen und entscheiden über externe Forensik. Jetzt vertraulich sprechen."
---

# Ransomware-Angriff untersuchen: So sichern Unternehmen Spuren und Entscheidungen

Verschlüsselte Server, eine Lösegeldforderung oder ungewöhnliche Administrator-Anmeldungen: Wer einen **Ransomware-Angriff untersuchen** muss, steht unter Zeitdruck. Die IT will Systeme begrenzen und wiederherstellen, die Geschäftsführung braucht Entscheidungsfähigkeit, Datenschutz prüft mögliche Meldefristen. Gleichzeitig kann jeder unkoordinierte Neustart, jede Bereinigung und jede überschriebenen Logdatei eine Spur zerstören.

Dieser Beitrag richtet sich an IT-Leitung, CISO, Datenschutzbeauftragte und Geschäftsführung. Er zeigt, wie Unternehmen einen Angriff so eingrenzen, dass Betrieb, Beweissicherung und rechtliche Bewertung nicht gegeneinander arbeiten. Er ersetzt keine Rechtsberatung und keinen Incident-Response-Plan.

## Was bei einem Ransomware-Verdacht zuerst entschieden werden muss

Ransomware ist nicht nur ein Verschlüsselungsproblem. Angreifende können Zugangsdaten missbrauchen, sich über mehrere Systeme bewegen und Daten kopiert haben, bevor eine sichtbare Verschlüsselung beginnt. Deshalb braucht es in der ersten Lagebesprechung drei getrennte Fragen:

- **Eindämmung:** Welche Systeme, Konten oder Netzwerkverbindungen müssen sofort isoliert werden, damit sich der Vorfall nicht ausbreitet?
- **Betriebsfähigkeit:** Welche Prozesse sind kritisch, welche Wiederanläufe sind vertretbar und welche Backups dürfen zunächst nicht angefasst werden?
- **Aufklärung:** Welche Fakten fehlen für Meldungen, Versicherer, Strafanzeige und die Entscheidung, ob Daten abgeflossen sein könnten?

Diese Fragen gehören in einen kleinen, entscheidungsfähigen Kreis: IT-Verantwortung, Geschäftsführung, Datenschutz und bei Bedarf Rechtsabteilung, Kommunikation und Cyber-Versicherung. Legen Sie eine Kontaktperson, einen Kommunikationskanal außerhalb der möglicherweise betroffenen Infrastruktur und ein Entscheidungsprotokoll fest. Das verhindert, dass technische Sofortmaßnahmen später nicht mehr erklärbar sind.

Das Bundesamt für Sicherheit in der Informationstechnik empfiehlt bei schweren IT-Sicherheitsvorfällen eine geordnete forensische Sicherung, bevor Systeme verändert werden. Seine [Erste-Hilfe-Hinweise für schwere IT-Sicherheitsvorfälle](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Themen/Ransomware_Erste-Hilfe-IT-Sicherheitsvorfall.pdf?__blob=publicationFile&v=3) helfen bei der technischen Erstorientierung. Im konkreten Vorfall gilt jedoch: Abschalten, trennen oder weiterlaufen lassen sind Entscheidungen, die zum betroffenen System und zur Gefahrenlage passen müssen.

## Die ersten Stunden: Eindämmen, ohne Beweise zu verlieren

Schnelligkeit ist wichtig, Aktionismus nicht. Das Ziel lautet nicht, sofort jede Spur selbst zu analysieren, sondern weitere Schäden zu begrenzen und die spätere Rekonstruktion offen zu halten.

### Systeme und Konten kontrolliert isolieren

Trennen Sie betroffene Geräte und Netzsegmente nach einem dokumentierten Plan vom Netz. Sperren oder rotieren Sie kompromittierte Konten, ohne pauschal alle Spuren in Identitäts- und Zugriffsprotokollen zu löschen. Halten Sie fest, wer welche Maßnahme wann veranlasst hat. Für besonders kritische Systeme kann ein Weiterbetrieb unter kontrollierten Bedingungen nötig sein; diese Abwägung trifft das Incident-Response-Team mit der Geschäftsleitung.

### Originale bewahren, mit Kopien arbeiten

Logs, E-Mails, Alarmmeldungen, Konfigurationsstände und Datenträger sind mögliche Beweismittel. Sichern Sie verfügbare Originaldaten so, dass Fundort, Zeitpunkt, verantwortliche Person und Integrität nachvollziehbar bleiben. Forensische Images und kryptografische Hashwerte helfen später zu belegen, dass eine Arbeitskopie dem gesicherten Ausgangsmaterial entspricht. Arbeiten Sie für Analyse und Wiederherstellung getrennt von den Originalen.

Das betrifft auch Backups: Sie sind für den Wiederanlauf wichtig, können aber selbst kompromittiert sein. Das BSI weist darauf hin, dass Angreifende mit administrativen Rechten gezielt Sicherungen suchen und verändern können. Prüfen Sie Wiederherstellungspunkte daher, bevor sie als saubere Grundlage gelten.

### Den Sachverhalt nicht zu früh festschreiben

Eine Lösegeldnotiz beweist weder den Einfallsweg noch einen Datenabfluss. Formulieren Sie prüfbare Hypothesen statt Gewissheiten: Welches Konto wurde zuerst missbraucht? Welche Systeme waren erreichbar? Welche Datenquellen belegen oder widerlegen eine Exfiltration? Diese Trennung schützt vor Fehlentscheidungen in der Kommunikation mit Kunden, Versicherern oder Behörden.

Bei einer auffälligen Zahlungsaufforderung oder einem kompromittierten Postfach ergänzt unser Beitrag zum [CEO-Fraud und zur Sicherung digitaler Beweise](/blog/ceo-fraud-aufklaeren-digitale-beweise-sichern) den Blick auf Zahlungsverkehr und E-Mail-Spuren.

## Recht und Verhältnismäßigkeit: DSGVO, Mitbestimmung, Verwertbarkeit

Ein Cybervorfall ist kein rechtsfreier Raum. Gerade wenn Logdaten, Postfächer oder Endgeräte von Beschäftigten ausgewertet werden, müssen Zweck, Zugriff und Umfang zum Vorfall passen.

### DSGVO: Die Frist läuft parallel zur Aufklärung

Besteht eine Verletzung des Schutzes personenbezogener Daten, ist der Verantwortliche nach [Art. 33 DSGVO](https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=CELEX%3A32016R0679) grundsätzlich verpflichtet, die zuständige Aufsichtsbehörde unverzüglich und möglichst binnen 72 Stunden nach Bekanntwerden zu informieren, sofern kein Risiko für Rechte und Freiheiten natürlicher Personen besteht. Die Frist ist keine Aufforderung zu Spekulationen. Sie verlangt eine dokumentierte Risikobewertung und gegebenenfalls eine Nachmeldung, wenn die Analyse noch läuft.

Der Datenschutzbeauftragte und die Rechtsabteilung sollten deshalb früh festlegen, welche Tatsachen für die Bewertung benötigt werden, wer sie erhält und wie Entscheidungen protokolliert werden. Eine forensische Untersuchung liefert die technische Faktenbasis; die rechtliche Einordnung der Meldepflicht bleibt Aufgabe des Verantwortlichen und seiner Rechtsberatung.

### Beschäftigtendaten und Betriebsrat

Wenn der Vorfall möglicherweise mit einem internen Konto oder Endgerät zusammenhängt, ist eine Untersuchung nicht automatisch eine Vollauswertung aller Mitarbeitenden. [§ 26 BDSG](https://www.gesetze-im-internet.de/bdsg_2018/__26.html) verlangt bei der Aufdeckung von Straftaten dokumentierte tatsächliche Anhaltspunkte, Erforderlichkeit und Verhältnismäßigkeit. Begrenzen Sie die Analyse auf Fragestellung, Zeitraum und erforderliche Datenquellen.

Die Mitbestimmung nach [§ 87 Abs. 1 Nr. 6 BetrVG](https://www.gesetze-im-internet.de/betrvg/__87.html) ist zu prüfen, wenn technische Einrichtungen zur Verhaltens- oder Leistungsüberwachung eingeführt oder angewendet werden. Bestehende Betriebsvereinbarungen zu Protokollierung, E-Mail-Nutzung und Incident Response gehören daher in die Vorfallsakte. Ihre konkrete Anwendung bewertet die Rechtsabteilung oder arbeitsrechtliche Kanzlei.

### Verwertbarkeit beginnt bei der Beweiskette

Für Versicherung, Strafanzeige oder ein späteres Verfahren genügt nicht allein ein technischer Befund. Entscheidend ist, ob Herkunft und Bearbeitung der Daten verständlich dokumentiert sind. Ein Bericht sollte Quellen, Sicherungsmethode, Hashwerte, Analysewege, Feststellungen und verbleibende Unsicherheiten trennen. Das garantiert kein bestimmtes Verfahrensergebnis. Es verhindert aber, dass eine zentrale Feststellung wegen einer unklaren Datenherkunft an Gewicht verliert.

## Intern reagieren oder externe Forensik beauftragen?

Die interne IT kennt Architektur, Verantwortlichkeiten und geschäftskritische Anwendungen. Sie führt daher Eindämmung und Wiederanlauf oft am schnellsten. Externe Forensik ist besonders sinnvoll, wenn die Ursache offen ist, mehrere Systeme betroffen sind, ein Datenabfluss nicht ausgeschlossen werden kann oder Versicherer, Kanzlei oder Behörden eine unabhängige Dokumentation benötigen.

Ein klarer Auftrag trennt Rollen: Das interne Team stabilisiert den Betrieb; die Forensik sichert und analysiert Spuren; Datenschutz und Rechtsberatung steuern Meldungen und rechtliche Konsequenzen. Diese Trennung ist kein Misstrauensvotum gegen die eigene IT. Sie verhindert, dass Wiederherstellungsschritte die einzige Quelle für die spätere Aufklärung verändern.

Gegen einen externen Auftrag sprechen kann ein klar abgegrenzter Fehlalarm, der sich mit vorhandenen Daten zuverlässig entkräften lässt. Auch dann lohnt sich eine kurze, nachvollziehbare Abschlussnotiz. Sie zeigt, warum keine weitergehende Untersuchung erforderlich war.

## Ablauf eines forensischen Mandats nach Ransomware

Ein Mandat beginnt mit einem kurzen Scoping: Was ist sicher bekannt, welche Systeme dürfen keinesfalls verändert werden, welche Fristen bestehen und wer darf entscheiden? Daraus entsteht ein schriftlicher Untersuchungsauftrag mit Systemen, Zeiträumen, Datenquellen, Zugriffsrechten und Berichtsweg.

Danach folgen – abhängig vom Vorfall – die Sicherung von Images, Speicherständen und Logdaten sowie die Auswertung von Identitäts-, Endpoint-, Netzwerk- und Cloud-Protokollen. Die Analyse rekonstruiert einen Zeitstrahl: erste verdächtige Aktivität, Rechteausweitung, Bewegung im Netz, Verschlüsselung und mögliche Datenübertragung. Feststellungen, Indizien und offene Punkte bleiben getrennt.

Der Abschlussbericht übersetzt den technischen Befund in Entscheidungen: Welche Systeme und Daten waren betroffen? Welche Beweise tragen eine Anzeige, eine Versicherungsanzeige oder interne Maßnahmen? Welche Sicherheitslücke sollte geschlossen werden? Beim Verdacht auf Datendiebstahl durch ausscheidende Beschäftigte beschreibt unser Beitrag zum [Datenabfluss durch ausscheidende Mitarbeiter](/blog/datenabfluss-ausscheidende-mitarbeiter-nachweisen) die arbeitsrechtlich sensible Variante dieser Beweissicherung.

## Was Geschäftsführung und CISO parallel steuern sollten

Ein Angriff wird nicht nur am Server entschieden. Geschäftsführung und CISO brauchen einen abgestimmten Takt für Betrieb, Kommunikation und Aufklärung.

1. **Entscheidungen protokollieren:** Isolation, Freigaben, Wiederanlauf und externe Beauftragungen mit Zeitpunkt und Verantwortung festhalten.
2. **Kommunikation begrenzen:** Informationen gehen nur an Personen, die sie für ihre Aufgabe brauchen. Vorläufige Vermutungen sind keine Lageberichte.
3. **Versicherer und Rechtsberatung einbinden:** Prüfen Sie Deckungsbedingungen und Fristen, ohne technische Befunde zu überinterpretieren.
4. **Wiederanlauf kontrollieren:** Systeme nicht nur zurückspielen, sondern auf verbliebene Zugriffe, kompromittierte Konten und sichere Sicherungspunkte prüfen.

Bei komplexeren Angriffen kann die Aufklärung Wochen dauern. Das ist kein Zeichen von Untätigkeit, solange Sofortmaßnahmen, Hypothesen und nächste Prüfschritte transparent dokumentiert sind.

## Häufige Fragen von Entscheidern

### Müssen wir jedes betroffene System sofort ausschalten?

Nein. Manche Systeme müssen schnell isoliert werden, andere können für Beweissicherung oder Betrieb kritisch sein. Die Entscheidung hängt von Ausbreitungsrisiko, Sicherheit und Verfügbarkeit ab und sollte durch IT- und Incident-Response-Verantwortliche dokumentiert werden.

### Reicht ein Backup, um den Vorfall abzuschließen?

Nein. Ein Backup hilft beim Wiederanlauf, erklärt aber nicht, wie Angreifende eindrangen, ob sie Zugang behalten haben oder Daten kopierten. Prüfen Sie es vor der Wiederherstellung auf Manipulation und klären Sie den Einfallsweg parallel.

### Wann beginnt die 72-Stunden-Frist der DSGVO?

Sie knüpft an das Bekanntwerden einer Verletzung des Schutzes personenbezogener Daten an, nicht an den Abschluss der Forensik. Datenschutz und Rechtsberatung sollten die Bewertung unverzüglich dokumentieren und bei unvollständiger Lage gegebenenfalls mit einer Nachmeldung arbeiten.

### Dürfen wir Mitarbeiter-Postfächer und Logs vollständig auswerten?

Nicht pauschal. Umfang und Zweck müssen zum konkreten Vorfall passen; Beschäftigtendatenschutz, Betriebsvereinbarungen und mögliche Mitbestimmung sind vorab zu prüfen. Eine anlasslose Vollauswertung ist kein belastbarer Standard.

### Was muss ein forensischer Bericht enthalten?

Mindestens Auftrag, Datenquellen, Sicherungsschritte, Zeitachse, technische Feststellungen, Grenzen der Analyse und offene Punkte. Für rechtliche Bewertungen und Maßnahmen ist die zuständige Rechtsvertretung verantwortlich.

## Nach dem Angriff: Klarheit vor Wiederanlauf

Wer einen Ransomware-Angriff untersuchen muss, braucht gleichzeitig Eindämmung, Beweissicherung und eine belastbare Entscheidungskette. Bona Fides unterstützt Unternehmen mit [IT-Forensik und Cyber-Ermittlungen](/leistungen/cyber-forensik): von der Sofortsicherung über die Rekonstruktion bis zu einem Bericht, mit dem IT, Datenschutz und Rechtsberatung weiterarbeiten können. Schildern Sie uns Ihren Vorfall vertraulich – wir klären den sinnvollen Untersuchungsumfang mit Ihnen.
