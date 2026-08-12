"use client"

import { useEffect, useRef, useState } from "react"
import {
  Headline,
  PrimaryCta,
  SecondaryCta,
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
 * Fadenkreuz mit Koordinatenanzeige, das dem Zeiger folgt. Auf Touchgeräten und
 * bei reduzierter Bewegung bleibt die Fläche ruhig.
 */
export function ObservationHero() {
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

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[88vh] flex-col overflow-hidden bg-black"
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

      {/* Lichtkegel am Zeiger */}
      {pointer && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,177,109,0.16)_0%,transparent_65%)] blur-3xl"
          style={{ left: pointer.x, top: pointer.y }}
        />
      )}

      {/* Fadenkreuz */}
      {pointer && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: pointer.x, top: pointer.y }}
        >
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full border border-white/25" />
            <div className="absolute inset-[30%] rounded-full border border-brass/50" />
            <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-white/40" />
            <div className="absolute bottom-0 left-1/2 h-6 w-px -translate-x-1/2 bg-white/40" />
            <div className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-white/40" />
            <div className="absolute right-0 top-1/2 h-px w-6 -translate-y-1/2 bg-white/40" />
          </div>
          <span className="absolute left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
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

      <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <p className="eyebrow hero-rise flex flex-wrap items-center gap-x-3 gap-y-1 text-brass">
            <span className="hero-blink inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
            {heroEyebrow}
          </p>

          <div className="hero-rise" style={{ animationDelay: "0.1s" }}>
            <Headline />
          </div>

          <p
            className="hero-rise max-w-xl border-l border-brass/40 pl-6 text-lg leading-relaxed text-gray-300"
            style={{ animationDelay: "0.2s" }}
          >
            {heroLead}
          </p>

          {/* Ableseleiste statt loser Icon-Reihe */}
          <dl
            className="hero-rise grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-5 lg:grid-cols-4"
            style={{ animationDelay: "0.3s" }}
          >
            {heroProof.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-brass">{item.code}</dt>
                <dd className="mt-1.5 text-sm leading-tight text-gray-400">{item.label}</dd>
              </div>
            ))}
          </dl>

          <div
            className="hero-rise flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
      </div>

      {/* Laufband der Fallarten */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/50 py-4 backdrop-blur-sm">
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
