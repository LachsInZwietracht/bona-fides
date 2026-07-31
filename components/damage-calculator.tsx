"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Info, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { calculatorCases, effortRange } from "@/lib/calculator-data"

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

/**
 * Lead-Magnet: stellt die Summe, über die der Besucher ohnehin nachdenkt, dem
 * Ermittlungsaufwand gegenüber – damit die Kosten als Investition und nicht als
 * weitere Belastung gelesen werden.
 */
export function DamageCalculator({ contactHref = "/#contact" }: { contactHref?: string }) {
  const [caseValue, setCaseValue] = useState(calculatorCases[0].value)
  const [damageByCase, setDamageByCase] = useState<Record<string, number>>(() =>
    Object.fromEntries(calculatorCases.map((item) => [item.value, item.defaultDamage])),
  )

  const activeCase =
    calculatorCases.find((item) => item.value === caseValue) ?? calculatorCases[0]
  const damage = damageByCase[activeCase.value]

  const result = useMemo(() => {
    const effort = effortRange(activeCase)
    return {
      effort,
      worthIt: damage > effort.max,
      // Konservativ: immer gegen die Obergrenze des Aufwands gerechnet
      ratio: damage / effort.max,
      effortShare: Math.min((effort.max / Math.max(damage, 1)) * 100, 100),
    }
  }, [activeCase, damage])

  return (
    <section
      id="rechner"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="rechner-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Break-even</p>
          <h2
            id="rechner-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was steht für Sie auf dem Spiel?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Ein ungeklärter Verdacht kostet weiter, solange er ungeklärt bleibt. Stellen Sie die
            Summe, um die es geht, dem Aufwand einer Aufklärung gegenüber.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Eingaben */}
          <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-8">
            <div>
              <span
                id="case-label"
                className="mb-3 block font-mono text-xs uppercase tracking-wider text-gray-400"
              >
                Worum geht es?
              </span>
              <Select value={caseValue} onValueChange={setCaseValue}>
                <SelectTrigger
                  data-testid="calc-case-trigger"
                  aria-labelledby="case-label"
                  className="w-full bg-white/5 border-white/15 text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {calculatorCases.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span
                  id="damage-label"
                  className="font-mono text-xs uppercase tracking-wider text-gray-400"
                >
                  Summe, um die es geht
                </span>
                <span className="font-serif text-xl text-white" data-testid="damage-value">
                  {euro.format(damage)}
                </span>
              </div>
              <div role="group" aria-labelledby="damage-label" data-testid="damage-slider">
                <Slider
                  value={[damage]}
                  onValueChange={([value]) =>
                    setDamageByCase((prev) => ({ ...prev, [activeCase.value]: value }))
                  }
                  min={2000}
                  max={activeCase.maxDamage}
                  step={1000}
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-gray-500">
                Schadenshöhe, entgangener Wert oder offene Forderung – Ihre Einschätzung genügt.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                Wenn der Sachverhalt geklärt ist
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">{activeCase.payoff}</p>
            </div>
          </div>

          {/* Ergebnis */}
          <div className="rounded-sm border border-brass/30 bg-brass/[0.06] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-4 w-4 text-brass" aria-hidden="true" />
              <p className="eyebrow text-brass">Gegenüberstellung</p>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-gray-300">Ungeklärt im Raum</span>
                  <span className="font-mono text-white">{euro.format(damage)}</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-brass" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-gray-300">Ermittlungsaufwand</span>
                  <span className="font-mono text-white" data-testid="effort-range">
                    {euro.format(result.effort.min)} – {euro.format(result.effort.max)}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white/40 transition-all duration-500"
                    style={{ width: `${result.effortShare}%` }}
                  />
                </div>
                <p className="mt-2 font-mono text-[11px] text-gray-500">
                  {activeCase.days.min}–{activeCase.days.max} Ermittlungstage, konservativ
                  gerechnet
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-brass/20 pt-6" aria-live="polite">
              {result.worthIt ? (
                <>
                  <p
                    className="font-serif text-4xl sm:text-5xl font-bold text-white"
                    data-testid="calc-ratio"
                  >
                    {result.ratio.toFixed(result.ratio < 10 ? 1 : 0)}×
                  </p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    So viel größer ist die Summe im Raum als der Aufwand, sie zu klären – selbst
                    gegen die Obergrenze gerechnet.
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="font-serif text-2xl font-bold text-white"
                    data-testid="calc-ratio"
                  >
                    Hier lohnt erst das Gespräch
                  </p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    In dieser Größenordnung steht der Aufwand womöglich nicht im Verhältnis. Genau
                    das sagen wir Ihnen im Erstgespräch – kostenfrei und bevor Sie beauftragen.
                  </p>
                </>
              )}
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-gray-500">
                Break-even ab{" "}
                <span data-testid="calc-breakeven">{euro.format(result.effort.max)}</span>{" "}
                Schadenssumme
              </p>
            </div>

            <div className="mt-6 flex gap-3 rounded-sm border border-white/10 bg-black/30 p-4">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Überschlagsrechnung auf Basis Ihrer Eingabe und typischer Einsatzumfänge – kein
                Angebot und keine Zusage. Ob und in welcher Höhe ein Schaden ersetzt wird,
                entscheidet das jeweilige Verfahren, nicht die Ermittlung. Ihren verbindlichen
                Zeit- und Kostenrahmen erhalten Sie nach dem Erstgespräch.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-brass text-black hover:bg-brass-light font-semibold min-h-[48px]"
              >
                <Link href={contactHref}>
                  Fall prüfen lassen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white min-h-[48px]"
              >
                <Link href={`/leistungen/${activeCase.slug}`}>Wie wir das klären</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
