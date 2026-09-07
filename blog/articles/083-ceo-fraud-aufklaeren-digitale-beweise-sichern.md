---
title: "CEO-Fraud aufklären: Digitale Beweise sichern"
slug: ceo-fraud-aufklaeren-digitale-beweise-sichern
keyword: CEO-Fraud aufklären
category: Corporate Fraud & Employee Misconduct
date: 2026-09-07
excerpt: "Verdächtige Zahlungsanweisung im Namen der Geschäftsführung? So sichern Unternehmen digitale Beweise und klären CEO-Fraud rechtssicher auf."
---

# CEO-Fraud aufklären: Was Unternehmen nach einer manipulierten Zahlungsanweisung tun sollten

Eine dringende E-Mail der Geschäftsführung, eine neue Bankverbindung, ein vertraulicher Unternehmenskauf – und die Überweisung ist freigegeben. Erst später fällt auf: Die Nachricht kam nicht vom CEO. Wer CEO-Fraud aufklären muss, steht unter doppeltem Druck. Geld soll, wenn möglich, gestoppt oder zurückgeholt werden. Gleichzeitig müssen E-Mails, Protokolle und Entscheidungen so gesichert werden, dass aus einem Verdacht ein nachvollziehbarer Sachverhalt wird.

Die Versuchung ist groß, das Postfach schnell aufzuräumen, Zugangsdaten zurückzusetzen und den Vorfall als erledigt zu behandeln. Für den laufenden Betrieb kann das richtig sein. Für die Aufklärung wäre es ein Fehler, wenn dabei Beweise überschrieben werden. Dieser Leitfaden zeigt Finanzleitung, IT-Leitung und Rechtsabteilung, wie sie bei einer manipulierten Zahlungsanweisung geordnet vorgehen.

## Was CEO-Fraud von einer gewöhnlichen Phishing-Mail unterscheidet

Beim CEO-Fraud geben sich Täter gegenüber Beschäftigten als Geschäftsführung, Vorstand oder vertraute Führungskraft aus. Das Ziel ist meist eine Überweisung, manchmal auch die Herausgabe von Informationen oder die Änderung von Bankdaten. Die Nachricht wirkt glaubwürdig, weil sie Sprache, Rollen und laufende Geschäftsvorgänge imitiert. Das Bundesamt für Sicherheit in der Informationstechnik beschreibt CEO-Fraud als Social Engineering, bei dem Beschäftigte zu Überweisungen oder anderen Handlungen verleitet werden sollen.

Für Unternehmen ist entscheidend: Ein solcher Fall ist nicht nur ein IT-Problem. Er betrifft Zahlungsfreigaben, mögliche Datenabflüsse, Versicherungsfragen und unter Umständen arbeits- oder strafrechtliche Schritte. Die erste Frage lautet deshalb nicht nur, ob die Überweisung gestoppt werden kann. Sie lautet auch: Welche Systeme, Konten und Personen waren tatsächlich betroffen?

Typische Signale sind:

- eine E-Mail-Adresse oder Domain, die der echten Adresse nur ähnlich sieht,
- eine ungewöhnliche Dringlichkeit oder ein Verbot, Rückfragen zu stellen,
- eine neue oder abweichende Bankverbindung,
- eine Zahlungsanweisung außerhalb des bekannten Freigabewegs,
- Hinweise auf Regeln oder Vorgänge, die nur aus interner Kommunikation stammen können.

Keines dieser Signale belegt für sich einen Betrug. Zusammen liefern sie jedoch den Anlass, Zahlung, Kommunikation und technische Spuren gezielt zu prüfen.

## Die ersten Stunden: Zahlung begrenzen, Spuren bewahren

Die Reaktion braucht zwei getrennte Arbeitsstränge: Schadensbegrenzung und Beweissicherung. Sie sollten parallel laufen, aber nicht unkoordiniert ineinandergreifen.

Zuerst kontaktiert die Finanzabteilung unverzüglich die Bank und prüft, ob der Zahlungsauftrag noch gestoppt, zurückgerufen oder als Betrugsfall markiert werden kann. Danach werden die zuständigen internen Stellen eingebunden: Geschäftsführung, IT-Sicherheit, Datenschutz und je nach Lage Rechtsabteilung oder externe Kanzlei. Die Kommunikation sollte über einen klaren Krisenkanal laufen; die kompromittierte E-Mail-Adresse ist dafür nicht geeignet.

Parallel gilt: Betroffene Postfächer, Endgeräte, Logdaten und Zahlungsfreigaben nicht vorschnell bereinigen. Passwörter zurückzusetzen oder Sitzungen zu beenden kann notwendig sein, muss aber zeitlich und technisch dokumentiert werden. Eine kurze Sicherungsanweisung – oft als Legal Hold bezeichnet – hält fest, welche Daten nicht gelöscht, überschrieben oder regulär rotiert werden dürfen. Das umfasst etwa E-Mail-Header, Microsoft-365- oder Google-Workspace-Protokolle, VPN- und Login-Daten, Zahlungsfreigaben sowie die betroffenen Endgeräte.

Die [BSI-Checkliste für IT-Sicherheitsvorfälle](https://www.bsi.bund.de/DE/IT-Sicherheitsvorfall/Unternehmen/Ich-habe-einen-IT-Sicherheitsvorfall-Checkliste-Organisatorisches/ich-habe-einen-it-sicherheitsvorfall-checkliste-organisatorisches.html) hilft, Verantwortlichkeiten und Kommunikation in dieser frühen Phase zu ordnen. Sie ersetzt aber keine fallbezogene forensische Sicherung.

## Welche digitalen Beweise jetzt gesichert werden sollten

Eine forensische Untersuchung beginnt nicht mit einer Vollsuche in allen Systemen. Sie definiert eine Hypothese: Wurde nur eine E-Mail gefälscht, wurde ein Postfach übernommen oder sind Zahlungsdaten gezielt manipuliert worden? Davon hängt ab, welche Daten erforderlich sind.

Für die technische Rekonstruktion sind meist vier Gruppen relevant:

1. **Nachrichten und Header:** Die sichtbare Absenderzeile genügt nicht. Vollständige Header, Zustellinformationen, Weiterleitungsregeln und Anhänge können zeigen, über welche Infrastruktur die Nachricht lief und ob sie verändert wurde.
2. **Anmelde- und Auditprotokolle:** Ungewöhnliche Anmeldungen, neue Geräte, geänderte MFA-Methoden, OAuth-Freigaben oder Mailregeln helfen, eine mögliche Kontoübernahme zeitlich einzuordnen.
3. **Zahlungs- und Freigabedaten:** Auftrag, Freigabeweg, Zeitstempel, Empfängerdaten und mögliche nachträgliche Änderungen bilden die Brücke zwischen technischer Täuschung und finanziellem Schaden.
4. **Endgeräte und Cloud-Dienste:** Falls eine Kompromittierung naheliegt, können Browserdaten, gespeicherte Sitzungen oder Datei- und Cloud-Aktivitäten relevant sein. Der Umfang muss sich am konkreten Fall orientieren.

Kopien allein genügen nicht. Entscheidend ist, dass Herkunft, Zeitpunkt und Integrität der Daten dokumentiert werden. Forensische Abbilder und Exporte erhalten deshalb eindeutige Prüfsummen, etwa Hashwerte. Die Dokumentation der Übergaben – die Chain of Custody – macht später nachvollziehbar, wer welches Beweismittel wann gesichert und bearbeitet hat.

## Recht und Verhältnismäßigkeit: DSGVO, Betriebsrat und Verwertbarkeit

Auch im akuten Vorfall gilt: Nicht alles, was technisch lesbar ist, darf ohne Weiteres ausgewertet werden. E-Mail-, Login- und Zahlungsdaten können personenbezogene Daten sein. Umfang, Zweckbindung und Zugriffskreis müssen daher vor der Auswertung klar definiert werden.

Wenn Beschäftigtendaten betroffen sind, ist insbesondere [§ 26 BDSG](https://www.gesetze-im-internet.de/bdsg_2018/__26.html) zu beachten. Für die Aufdeckung von Straftaten verlangt die Norm dokumentierte tatsächliche Anhaltspunkte, Erforderlichkeit und Verhältnismäßigkeit. Das spricht gegen eine anlasslose Durchsuchung sämtlicher Postfächer und für eine zeitlich, sachlich und personell begrenzte Prüfung. Welche Rechtsgrundlage im Einzelfall trägt, sollte Datenschutz- oder Rechtsabteilung bewerten.

Kommt neue oder veränderte Technik zum Einsatz, die Verhalten oder Leistung von Beschäftigten überwachen kann, ist außerdem das Mitbestimmungsrecht nach [§ 87 Abs. 1 Nr. 6 BetrVG](https://www.gesetze-im-internet.de/betrvg/__87.html) relevant. Bestehende Logging-Systeme, Betriebsvereinbarungen und die konkrete Auswertungsmethode gehören deshalb früh auf den Tisch. Nicht jede Einzelfallauswertung löst dieselben Fragen aus; eine pauschale Antwort ist riskant.

Bei einem Datenschutzverletzungsrisiko ist zudem die Meldepflicht nach [Art. 33 DSGVO](https://eur-lex.europa.eu/eli/reg/2016/679/oj) zu prüfen. Die Datenschutzbehörde ist, soweit möglich, innerhalb von 72 Stunden nach Bekanntwerden zu benachrichtigen, sofern die Verletzung voraussichtlich ein Risiko für Rechte und Freiheiten natürlicher Personen zur Folge hat. Die forensische Zeitachse kann diese Bewertung unterstützen, sie aber nicht ersetzen.

Für die spätere Verwertbarkeit zählen nicht nur die gefundenen Daten, sondern auch Anlass, Sicherung und Auswertung. Ein Bericht sollte sauber zwischen Beobachtung, technischer Schlussfolgerung und offener Frage unterscheiden. Das gibt Kanzlei, Versicherer oder Gericht eine überprüfbare Grundlage, ohne ihnen eine rechtliche Bewertung vorwegzunehmen.

## Intern klären oder externe IT-Forensik einschalten?

Die eigene IT ist unverzichtbar, weil sie Zugriffe sperrt, Betrieb und Backups kennt und Sofortmaßnahmen umsetzt. Sie sollte aber nicht allein entscheiden, welche Beweise künftig tragfähig sind. Der Zielkonflikt liegt auf der Hand: Betrieb schnell wiederherstellen und zugleich Spuren möglichst unverändert sichern.

Intern reicht die Prüfung oft aus, wenn eine gefälschte Nachricht eindeutig erkannt, keine Kontoübernahme festgestellt und keine streitige Zahlungs- oder Haftungsfrage erwartet wird. Externe IT-Forensik ist sinnvoll, wenn ein Postfach oder ein Endgerät kompromittiert sein könnte, mehrere Systeme betroffen sind, ein Versicherer oder eine Kanzlei belastbare Unterlagen benötigt oder die Herkunft interner Informationen geklärt werden muss.

Ein Mandat beginnt mit einem kurzen Scoping: Was ist bekannt, welche Fristen laufen, welche Systeme dürfen nicht verändert werden und wer entscheidet über den Zugriff? Danach folgen Sicherung, Analyse und ein Bericht mit Zeitachse. Die [IT-Forensik und Cyber-Ermittlungen](/leistungen/cyber-forensik) von Bona Fides ist auf diese Trennung aus Sofortsicherung, Aufklärung und verständlicher Beweisdokumentation ausgerichtet.

## Von der technischen Spur zur Geschäftsentscheidung

Das Ergebnis einer Untersuchung ist kein langer Log-Auszug, sondern eine Entscheidungsgrundlage. Für die Geschäftsführung müssen mindestens fünf Fragen beantwortbar sein: Was ist passiert? Wann begann der Vorfall? Welche Konten, Systeme und Daten waren betroffen? Welche Handlung lässt sich belegen? Welche Punkte bleiben ungeklärt?

Darauf bauen die nächsten Schritte auf: eine Schadensmeldung beim Versicherer, die Abstimmung mit der Bank, eine Strafanzeige, arbeitsrechtliche Maßnahmen oder technische Nachbesserungen im Zahlungsprozess. Der Beitrag zu [Cybercrime-Prävention und Sofortmaßnahmen](/blog/cybercrime-praevention-sofortmassnahmen) ordnet die organisatorischen Schutzmaßnahmen ein. Wenn ein Hinweis aus dem Unternehmen die Untersuchung ausgelöst hat, ergänzt unser Leitfaden zur [Prüfung von Hinweisgebermeldungen](/blog/whistleblower-hinweisgeberschutzgesetz-interne-ermittlungen) die Perspektive auf Unabhängigkeit und interne Zuständigkeiten.

Wichtig ist die Reihenfolge: Erst den Sachverhalt sichern, dann Konsequenzen beschließen. Wer eine Person oder einen Dienstleister vorschnell beschuldigt, verliert nicht nur Zeit. Er kann die Beweislage und die eigene Verhandlungsposition schwächen.

## FAQ für Finanzleitung, IT und Rechtsabteilung

**Müssen wir bei einer verdächtigen Überweisung sofort die Polizei einschalten?**

Sichern Sie zuerst die Bankkommunikation und stimmen Sie die nächsten Schritte mit Rechtsabteilung oder Kanzlei ab. Eine Strafanzeige kann sinnvoll sein; Zeitpunkt und Inhalt sollten jedoch die laufende Sicherung nicht stören.

**Dürfen wir das Postfach des betroffenen Mitarbeiters durchsuchen?**

Nicht pauschal. Entscheidend sind konkreter Anlass, Zweck, Erforderlichkeit und die Regeln zur privaten Nutzung dienstlicher Kommunikation. Datenschutz und Arbeitsrecht sollten den Umfang vorab einordnen.

**Reicht ein Screenshot der Betrugs-E-Mail als Beweis?**

Ein Screenshot dokumentiert den sichtbaren Inhalt, nicht aber zuverlässig technische Herkunft, Übermittlungsweg oder mögliche Manipulation. Sichern Sie deshalb auch die Originalnachricht samt Headern und die zugehörigen Protokolle.

**Wann ist eine Meldung nach Art. 33 DSGVO erforderlich?**

Das hängt davon ab, ob personenbezogene Daten betroffen sind und ob voraussichtlich ein Risiko für die Rechte und Freiheiten natürlicher Personen besteht. Diese Bewertung sollte unverzüglich mit dem Datenschutzbeauftragten erfolgen.

**Kann unsere IT die Beweise selbst sichern?**

Sie kann und soll Sofortmaßnahmen umsetzen. Wenn die Ergebnisse streitig werden könnten oder für Versicherer, Kanzlei oder Gericht bestimmt sind, erhöht eine unabhängige forensische Sicherung die Nachvollziehbarkeit.

## Fazit: Tempo ohne Beweisverlust

CEO-Fraud braucht eine schnelle Reaktion, aber keinen blinden Aktionismus. Bank und IT begrenzen den unmittelbaren Schaden. Eine geordnete Sicherung von E-Mails, Protokollen und Zahlungsfreigaben schafft die Tatsachenbasis für alle weiteren Entscheidungen. Wenn bei Ihnen eine Zahlungsanweisung im Namen der Geschäftsführung nicht plausibel ist, klären wir mit Ihnen den Sicherungsumfang und die nächsten Schritte über unsere [IT-Forensik und Cyber-Ermittlungen](/leistungen/cyber-forensik).
