"use client"

import { useEffect, useRef, useState } from "react"
import {
  CtaPair,
  Headline,
  heroEyebrow,
  heroLead,
  heroProof,
} from "@/components/hero-parts"
import { useIsMobile } from "@/hooks/use-mobile"

const TICKER_ITEMS = [
  "Interne Untersuchungen",
  "Lohnfortzahlungsbetrug",
  "Asset Tracing",
  "Due Diligence",
  "IT-Forensik",
  "Versicherungsbetrug",
  "Wettbewerbsverstöße",
  "Compliance-Verdachtsfälle",
]

type Pointer = { x: number; y: number }

/**
 * 05 · Die Observation — Blickfeld → Befund.
 *
 * Der Bildschirm wird zum Sucher: Eckwinkel, ein wandernder Suchstrahl und ein
 * Fadenkreuz, das den Zeiger ersetzt. Solange es sichtbar ist, wird der
 * Systemcursor ausgeblendet – das Fadenkreuz ist der Cursor, sonst schwimmen
 * zwei Zeiger übereinander und die Taschenlampe verliert ihre Wirkung.
 * Über Schaltflächen und Verweisen kehrt der Systemcursor zurück, damit die
 * Klickbarkeit erkennbar bleibt.
 *
 * Auf Touchgeräten und bei reduzierter Bewegung bleibt die Fläche ruhig.
 */
export function ObservationHero({ fullHeight = false }: { fullHeight?: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const [pointer, setPointer] = useState<Pointer | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const element = sectionRef.current
    if (!element || isMobile) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null
        const rect = element.getBoundingClientRect()
        setPointer({ x: clientX - rect.left, y: clientY - rect.top })
      })
    }

    const handleLeave = () => setPointer(null)

    element.addEventListener("pointermove", handleMove)
    element.addEventListener("pointerleave", handleLeave)

    return () => {
      element.removeEventListener("pointermove", handleMove)
      element.removeEventListener("pointerleave", handleLeave)
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)
    }
  }, [isMobile])

  /** Systemcursor nur ausblenden, solange das Fadenkreuz ihn tatsächlich ersetzt. */
  const cursorClass = pointer
    ? "cursor-none [&_a]:cursor-pointer [&_button]:cursor-pointer"
    : ""

  // `svh` statt `vh`: auf dem Telefon rechnet `vh` die eingeblendete
  // Adressleiste mit, dadurch rutschte die Beweiszeile unter die Bildkante.
  const heightClass = fullHeight ? "min-h-[calc(100svh-4rem)]" : "min-h-[88svh]"

  return (
    <section
      ref={sectionRef}
      data-testid="hero-observation"
      className={`relative isolate z-10 flex flex-col overflow-hidden bg-black ${heightClass} ${cursorClass}`}
    >
      <div aria-hidden="true" className="noir-grain absolute inset-0 opacity-[0.12] mix-blend-screen" />

      {/* Monitorraster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:72px_72px]"
      />

      {/* Wandernder Suchstrahl */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-scan absolute left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(194,177,109,0.12),transparent)]" />
      </div>

      {/* Taschenlampe: weiter Schein plus heller Kern, additiv aufgehellt */}
      {pointer && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[15] will-change-transform"
          style={{ transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)` }}
        >
          <div className="absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,177,109,0.30)_0%,rgba(194,177,109,0.12)_38%,transparent_70%)] blur-2xl mix-blend-screen" />
          <div className="absolute h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(254,243,198,0.26)_0%,rgba(254,243,198,0.08)_45%,transparent_72%)] blur-xl mix-blend-screen" />
        </div>
      )}

      {/* Fadenkreuz – ersetzt den Systemcursor */}
      {pointer && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
          style={{ transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)` }}
        >
          <div className="relative h-24 w-24 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-white/40" />
            <div className="absolute inset-[30%] rounded-full border border-brass/80 shadow-[0_0_12px_rgba(194,177,109,0.45)]" />
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-light" />
            <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-white/60" />
            <div className="absolute bottom-0 left-1/2 h-6 w-px -translate-x-1/2 bg-white/60" />
            <div className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-white/60" />
            <div className="absolute right-0 top-1/2 h-px w-6 -translate-y-1/2 bg-white/60" />
          </div>
          <span className="absolute left-14 top-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-brass/60">
            {`x ${Math.round(pointer.x)} · y ${Math.round(pointer.y)}`}
          </span>
        </div>
      )}

      {/* Sucherwinkel */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-5 sm:inset-8">
        <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-white/25" />
        <div className="absolute right-0 top-0 h-10 w-10 border-r border-t border-white/25" />
        <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-white/25" />
        <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/25" />
      </div>

      {/* Auf dem Telefon liegt der Inhalt am unteren Anschlag: der Blick fällt
          erst in die leere Sucherfläche und wandert dann zur Aussage. Ab `sm`
          bleibt alles wie am Rechner mittig stehen. */}
      <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-end px-4 pb-10 pt-10 sm:justify-center sm:px-6 sm:py-20 lg:px-8">
        {/* Ruhender Sucher, nur auf dem Telefon. Touchgeräte haben keinen
            Zeiger, dem das Fadenkreuz folgen könnte – also bekommt es die
            freie Fläche über dem Inhalt und steht dort still, während der
            Suchstrahl hindurchwandert. Als eigener Flächenanteil statt fester
            Prozentangabe, damit es nie in den Text ragt. */}
        <div
          aria-hidden="true"
          className="pointer-events-none flex flex-1 items-center justify-center sm:hidden"
        >
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,177,109,0.16)_0%,rgba(194,177,109,0.05)_45%,transparent_72%)] blur-2xl" />
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="hero-blink absolute inset-[30%] rounded-full border border-brass/60" />
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-light" />
              <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-white/40" />
              <div className="absolute bottom-0 left-1/2 h-5 w-px -translate-x-1/2 bg-white/40" />
              <div className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-white/40" />
              <div className="absolute right-0 top-1/2 h-px w-5 -translate-y-1/2 bg-white/40" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-8 sm:space-y-9">
          <div className="hero-rise space-y-6 sm:space-y-0">
            {/* Messinglinie: trennt die Leere vom Inhalt, statt sie zu erklären */}
            <div
              aria-hidden="true"
              className="h-px w-full bg-gradient-to-r from-brass/70 via-brass/25 to-transparent sm:hidden"
            />
            <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-brass">
              <span className="hero-blink inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
              {heroEyebrow}
            </p>
          </div>

          <div className="hero-rise" style={{ animationDelay: "0.1s" }}>
            <Headline />
          </div>

          <p
            className="hero-rise max-w-xl border-l border-brass/40 pl-5 text-base leading-relaxed text-gray-300 sm:pl-6 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {heroLead}
          </p>

          <CtaPair className="hero-rise" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>

      {/* Prüfvermerke als durchgehende Linie am unteren Rand.
          Auf dem Telefon nur die beiden stärksten Zusagen – vier gestauchte
          Spalten haben den ersten Bildschirm überladen. */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {heroProof.map((item, index) => (
              <li
                key={item.label}
                className={`flex items-center gap-2.5 py-3 sm:py-4 lg:px-6 lg:first:pl-0 ${
                  index > 1 ? "max-sm:hidden" : ""
                }`}
              >
                <item.icon className="h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                <span className="text-sm leading-tight text-gray-400">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Laufband der Fallarten – reine Atmosphäre, deshalb erst ab Tablet */}
      <div className="relative z-10 hidden w-full border-t border-white/10 bg-black/50 py-3 backdrop-blur-sm sm:block">
        <div className="overflow-hidden">
          <div className="hero-ticker flex w-max items-center gap-10 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-brass/60" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
