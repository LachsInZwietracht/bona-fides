/**
 * Gemeinsame Bausteine der Hero-Entwürfe.
 *
 * Aussage, Handlungsaufforderungen und Beweisleiste sind über alle Entwürfe
 * identisch – verglichen wird die Bildsprache, nicht der Text.
 */
import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Gavel, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export const heroProof = [
  { icon: Clock, code: "24H", label: siteConfig.responsePromise },
  { icon: ShieldCheck, code: "NDA", label: "NDA vor dem Erstgespräch" },
  { icon: Gavel, code: "§", label: "Gerichtsverwertbar dokumentiert" },
  { icon: Users, code: "DE", label: "Bundesweites Ermittlernetz" },
]

export const contactHref = "/#contact"

export const heroLead =
  "Wir liefern belegte Fakten – zum Kündigen, Klagen, Regulieren oder Entwarnung geben."

/**
 * Kein zweites Mal "Wirtschaftsdetektei" – das Wort steht schon in der
 * Überschrift direkt darunter. Die Zeile trägt hier nur die Reichweite.
 */
export const heroEyebrow = "Bundesweit im Einsatz"

export function PrimaryCta() {
  return (
    <Button
      asChild
      size="lg"
      className="bg-brass text-black hover:bg-brass-light font-semibold text-base px-7 sm:px-8 min-h-[52px] shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(194,177,109,0.5)]"
    >
      <Link href={contactHref}>
        Fall vertraulich schildern
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  )
}

/**
 * Bewusst kein Button: zwei gleich laute Flächen übereinander lesen sich auf
 * dem Telefon wie ein Einwilligungsbanner. Der Nebenweg bleibt ein Verweis,
 * behält aber eine daumengerechte Trefferfläche.
 */
export function SecondaryCta() {
  return (
    <Link
      href="/leistungen"
      className="group inline-flex min-h-[44px] items-center gap-2 text-base text-gray-300 underline decoration-white/25 underline-offset-[6px] transition-colors hover:text-brass hover:decoration-brass/50"
    >
      Leistungen ansehen
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  )
}

/**
 * Hauptweg und Nebenweg in einer Reihe – mobil untereinander, ab `sm` neben-
 * einander auf einer Grundlinie. Alle Entwürfe teilen sich diesen Baustein,
 * damit sich die Handlungsaufforderung nie zwischen ihnen unterscheidet;
 * `className` und `style` reichen nur die Einblendung des jeweiligen Entwurfs
 * durch.
 */
export function CtaPair({
  className = "",
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7 ${className}`.trim()}
      style={style}
    >
      <PrimaryCta />
      <SecondaryCta />
    </div>
  )
}

export function Headline({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <h1 className="font-serif font-bold text-white">
      <span
        className={
          size === "large"
            ? "block text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-[-0.02em]"
            : "block text-[2rem] sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.015em]"
        }
      >
        Verdacht ist keine
        <br />
        Entscheidungsgrundlage.
      </span>
      <span className="mt-4 block text-xl sm:text-2xl font-normal text-brass">
        Wirtschaftsdetektei für Unternehmen
      </span>
    </h1>
  )
}
