import type { CSSProperties } from "react"
import {
  CtaPair,
  Headline,
  heroEyebrow,
  heroProof,
} from "@/components/hero-parts"

/**
 * 04 · Die Schwärzung — Verdeckt → belegt.
 *
 * Kein Bild, nur Typografie: Die Aussage steht zunächst unter Messingbalken,
 * die beim Laden von rechts nach links weglaufen. Eine Akte, die vor den Augen
 * des Mandanten freigegeben wird.
 */
export function RedaktionHero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-black">
      <div aria-hidden="true" className="noir-grain absolute inset-0 opacity-[0.14] mix-blend-screen" />

      {/* Langsamer Lichtstreif über die Wand */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-sweep absolute -top-1/4 left-0 h-[150%] w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_45%_35%,transparent_35%,rgba(0,0,0,0.9)_100%)]"
      />

      {/* Aktenrücken am linken Rand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-0 hidden h-full flex-col items-center justify-center gap-6 lg:flex"
      >
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-white/25" />
        <span
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-500"
          style={{ writingMode: "vertical-rl" }}
        >
          Akte · vertraulich
        </span>
        <div className="h-24 w-px bg-gradient-to-t from-transparent to-white/25" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <p className="eyebrow hero-rise text-brass">{heroEyebrow}</p>

          <div className="hero-rise" style={{ animationDelay: "0.1s" }}>
            <Headline size="large" />
          </div>

          <div
            className="hero-rise h-px w-full max-w-2xl bg-[linear-gradient(90deg,var(--color-brass),transparent)]"
            style={{ animationDelay: "0.2s" }}
          />

          {/* Die geschwärzte Zeile: Balken laufen weg, der Satz bleibt */}
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Wir liefern belegte Fakten – zum{" "}
            <span className="hero-redact" style={{ "--hero-redact-delay": "0.45s" } as CSSProperties}>
              Kündigen
            </span>
            ,{" "}
            <span className="hero-redact" style={{ "--hero-redact-delay": "0.75s" } as CSSProperties}>
              Klagen
            </span>
            ,{" "}
            <span className="hero-redact" style={{ "--hero-redact-delay": "1.05s" } as CSSProperties}>
              Regulieren
            </span>{" "}
            oder Entwarnung geben.
          </p>

          <CtaPair className="hero-rise" style={{ animationDelay: "1.3s" }} />
        </div>
      </div>

      {/* Beweisleiste als durchgehende Linie am unteren Rand */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 divide-white/10 sm:divide-x lg:grid-cols-4">
            {heroProof.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 px-0 py-4 text-sm text-gray-400 sm:px-6 sm:first:pl-0"
              >
                <item.icon className="h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                <span className="leading-tight">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
