import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { lossFigures } from "@/lib/loss-data"

/**
 * Ersetzt den früheren Kostenrechner: statt einer Modellrechnung stehen hier
 * belegte Marktzahlen mit Quelle. Jede Zahl beantwortet, was ungeklärt bleibt –
 * und daneben, was eine Ermittlung daran ändert.
 */
export function LossLandscape() {
  return (
    <section
      id="schadenslage"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="schadenslage-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Schadenslage</p>
          <h2
            id="schadenslage-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was Unternehmen verlieren, solange niemand hinsieht
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Nicht jeder Verdacht wird zum Schaden. Aber jeder ungeklärte Verdacht bleibt einer –
            und läuft weiter. Vier Zahlen, die das Ausmaß belegen, jeweils mit Quelle.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {lossFigures.map((figure) => (
            <article
              key={figure.claim}
              className="flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <p className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-brass">
                  {figure.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  {figure.unit}
                </span>
              </p>

              <h3 className="mt-3 text-lg font-medium text-white leading-snug">{figure.claim}</h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{figure.context}</p>

              <div className="mt-5 border-l-2 border-brass/40 pl-4">
                <p className="text-sm text-gray-300 leading-relaxed">{figure.lever}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <a
                  href={figure.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-500 transition-colors hover:text-brass"
                >
                  {figure.source.label}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <Link
                  href={`/leistungen/${figure.slug}`}
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass hover:text-brass-light"
                >
                  Leistung
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-gray-500 leading-relaxed">
          Die genannten Zahlen sind Marktzahlen aus den verlinkten Studien und Lagebildern, keine
          Aussage über Ihren Fall. Was ein konkretes Mandat kostet und was es realistisch bringt,
          sagen wir Ihnen im kostenfreien Erstgespräch – auch dann, wenn die Antwort lautet, dass
          sich der Aufwand für Sie nicht lohnt.
        </p>
      </div>
    </section>
  )
}
