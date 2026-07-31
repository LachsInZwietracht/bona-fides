import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { lossFigures } from "@/lib/loss-data"

/**
 * Belegte Marktzahlen statt Modellrechnung. Bewusst knapp: eine Zahl, eine
 * Aussage, eine Quelle. Die Kachel selbst führt auf die passende Leistung,
 * die Quellenangabe ist der einzige zweite Link.
 */
export function LossLandscape() {
  return (
    <section
      id="schadenslage"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="schadenslage-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="eyebrow text-brass mb-4">Schadenslage</p>
          <h2
            id="schadenslage-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was Unternehmen verlieren, solange niemand hinsieht
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lossFigures.map((figure) => (
            <article
              key={figure.claim}
              className="group relative flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brass/40 hover:bg-white/[0.06]"
            >
              <p className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-bold text-brass">{figure.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                  {figure.unit}
                </span>
              </p>

              <h3 className="mt-2 flex-1 text-sm leading-snug text-gray-300">
                {/* Ganze Kachel klickbar, ohne den Quellenlink zu verschachteln */}
                <Link href={`/leistungen/${figure.slug}`} className="after:absolute after:inset-0">
                  {figure.claim}
                </Link>
              </h3>

              <a
                href={figure.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-4 inline-flex items-center gap-1 self-start border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-wider text-gray-500 transition-colors hover:text-brass"
              >
                {figure.source.label} {figure.source.year}
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
