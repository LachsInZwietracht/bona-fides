import {
  CtaPair,
  Headline,
  heroEyebrow,
  heroLead,
  heroProof,
} from "@/components/hero-parts"

const PAPER = "#E7E0CE"

/**
 * 06 · Das Dossier — Akte → Aussage.
 *
 * Editorialer Bruch zwischen Papier und Schwarz. Der Wortmarken-Schriftzug
 * liegt über der Naht und kippt per `mix-blend-difference` von Weiß auf Tinte,
 * sobald er die Papierfläche kreuzt – eine Aufnahme, kein Bild.
 */
export function DossierHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-black">
      {/* Papierfläche – erst ab lg, darunter bleibt der Noir-Grund */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[42%] lg:block"
        style={{ backgroundColor: PAPER }}
      >
        <div className="noir-grain absolute inset-0 opacity-[0.12]" />
        <div className="absolute inset-y-0 right-0 w-px bg-black/20" />
      </div>

      <div
        aria-hidden="true"
        className="noir-grain pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.12] mix-blend-screen lg:w-[58%]"
      />

      {/* Wortmarke über der Naht */}
      <p
        aria-hidden="true"
        className="hero-rise relative z-20 px-4 pt-24 font-serif text-[clamp(3rem,13vw,9rem)] font-bold leading-[0.82] tracking-tight text-white sm:px-6 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-[7%] lg:px-0 lg:pl-[24%] lg:pt-0 lg:mix-blend-difference"
      >
        <span className="block">BONA</span>
        <span className="block pl-[0.06em]">FIDES</span>
      </p>

      <div className="relative z-10 grid min-h-[88vh] grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* Papierspalte: das Aktenregister */}
        <div className="order-2 flex flex-col justify-between px-4 pb-12 pt-10 sm:px-6 lg:order-1 lg:px-8 lg:pb-14 lg:pt-24">
          <p className="inline-flex h-11 w-fit items-center border border-white/20 px-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 lg:border-black/25 lg:text-black/60">
            Akte 01 · vertraulich
          </p>

          <ul className="mt-10 lg:mt-0">
            {heroProof.map((item, index) => (
              <li
                key={item.label}
                className="flex items-baseline gap-4 border-t border-white/12 py-4 text-sm lg:border-t-black/15"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 leading-tight text-gray-400 lg:text-black/70">
                  {item.label}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-brass">
                  {item.code}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Noir-Spalte: Aussage und Handlungsaufforderung */}
        <div className="order-1 flex flex-col justify-end px-4 pb-14 pt-6 sm:px-6 lg:order-2 lg:justify-start lg:px-10 lg:pb-14 lg:pt-[36vh]">
          <p className="eyebrow hero-rise text-brass">{heroEyebrow}</p>

          <div className="hero-rise mt-6" style={{ animationDelay: "0.15s" }}>
            <Headline />
          </div>

          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-gray-300"
            style={{ animationDelay: "0.25s" }}
          >
            {heroLead}
          </p>

          <CtaPair className="hero-rise mt-8" style={{ animationDelay: "0.35s" }} />
        </div>
      </div>
    </section>
  )
}
