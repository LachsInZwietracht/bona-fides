"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const WORKDAYS_PER_MONTH = 21.7
/** Arbeitgeberanteil Sozialversicherung, konservativ gerundet */
const EMPLOYER_CONTRIBUTION_RATE = 0.21

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

/**
 * Lead magnet: macht die Kosten eines Verdachtsfalls konkret, bevor der
 * Besucher über die Kosten einer Ermittlung nachdenkt.
 */
export function DamageCalculator() {
  const [salary, setSalary] = useState(4200)
  const [days, setDays] = useState(20)
  const [replacementRate, setReplacementRate] = useState(30)

  const result = useMemo(() => {
    const dailyWageCost = (salary / WORKDAYS_PER_MONTH) * (1 + EMPLOYER_CONTRIBUTION_RATE)
    const continuedPay = dailyWageCost * days
    const replacementCost = continuedPay * (replacementRate / 100)
    return {
      continuedPay,
      replacementCost,
      total: continuedPay + replacementCost,
      dailyWageCost,
    }
  }, [salary, days, replacementRate])

  return (
    <section
      id="schadensrechner"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="schadensrechner-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Schadensrechner</p>
          <h2
            id="schadensrechner-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was kostet Sie ein einziger Verdachtsfall?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Bei Verdacht auf vorgetäuschte Arbeitsunfähigkeit zahlen Sie doppelt: Entgeltfortzahlung
            plus Vertretung. Überschlagen Sie in zehn Sekunden, worüber wir reden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Eingaben */}
          <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span id="salary-label" className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Bruttomonatsgehalt
                </span>
                <span className="font-serif text-xl text-white" data-testid="salary-value">
                  {euro.format(salary)}
                </span>
              </div>
              <div role="group" aria-labelledby="salary-label" data-testid="salary-slider">
                <Slider
                  value={[salary]}
                  onValueChange={([value]) => setSalary(value)}
                  min={2000}
                  max={12000}
                  step={100}
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span id="days-label" className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Fragliche Ausfalltage
                </span>
                <span className="font-serif text-xl text-white" data-testid="days-value">
                  {days} Tage
                </span>
              </div>
              <div role="group" aria-labelledby="days-label" data-testid="days-slider">
                <Slider
                  value={[days]}
                  onValueChange={([value]) => setDays(value)}
                  min={3}
                  max={42}
                  step={1}
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-gray-500">
                Entgeltfortzahlung greift bis zu 6 Wochen je Krankheitsfall.
              </p>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span
                  id="replacement-label"
                  className="font-mono text-xs uppercase tracking-wider text-gray-400"
                >
                  Aufschlag für Vertretung
                </span>
                <span className="font-serif text-xl text-white">{replacementRate} %</span>
              </div>
              <div role="group" aria-labelledby="replacement-label" data-testid="replacement-slider">
                <Slider
                  value={[replacementRate]}
                  onValueChange={([value]) => setReplacementRate(value)}
                  min={0}
                  max={80}
                  step={5}
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-gray-500">
                Überstunden, Zeitarbeit oder verschobene Aufträge.
              </p>
            </div>
          </div>

          {/* Ergebnis */}
          <div className="rounded-sm border border-brass/30 bg-brass/[0.06] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="h-4 w-4 text-brass" aria-hidden="true" />
              <p className="eyebrow text-brass">Ihr Kostenrisiko</p>
            </div>

            <p
              className="font-serif text-4xl sm:text-5xl font-bold text-white"
              data-testid="damage-total"
              aria-live="polite"
            >
              {euro.format(result.total)}
            </p>
            <p className="mt-2 text-sm text-gray-300">
              geschätzte Kosten dieses einen Falls für Ihr Unternehmen
            </p>

            <dl className="mt-6 space-y-3 border-t border-brass/20 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Entgeltfortzahlung inkl. Arbeitgeberanteil</dt>
                <dd className="font-mono text-white">{euro.format(result.continuedPay)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Vertretung und Folgekosten</dt>
                <dd className="font-mono text-white">{euro.format(result.replacementCost)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Kosten je Ausfalltag</dt>
                <dd className="font-mono text-white">{euro.format(result.dailyWageCost)}</dd>
              </div>
            </dl>

            <div className="mt-6 flex gap-3 rounded-sm border border-white/10 bg-black/30 p-4">
              <Info className="h-4 w-4 flex-shrink-0 text-brass mt-0.5" aria-hidden="true" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Eine Kurzobservation umfasst typischerweise zwei bis fünf Einsatztage. Bestätigt
                sich ein konkreter Verdacht, sind die notwendigen Ermittlungskosten nach
                arbeitsgerichtlicher Rechtsprechung grundsätzlich vom Verursacher erstattungsfähig.
                Überschlagsrechnung ohne Gewähr – keine Rechts- oder Steuerberatung.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-brass text-black hover:bg-brass-light font-semibold min-h-[48px]"
              >
                <Link href="/#contact">
                  Fall prüfen lassen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white min-h-[48px]"
              >
                <Link href="/leistungen/lohnfortzahlungsbetrug">Wie wir das nachweisen</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
