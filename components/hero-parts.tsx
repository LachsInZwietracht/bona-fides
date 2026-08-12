/**
 * Gemeinsame Bausteine der Hero-Entwürfe.
 *
 * Aussage, Handlungsaufforderungen und Beweisleiste sind über alle Entwürfe
 * identisch – verglichen wird die Bildsprache, nicht der Text.
 */
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

export const heroEyebrow = "Wirtschaftsdetektei · bundesweit"

export function PrimaryCta() {
  return (
    <Button
      asChild
      size="lg"
      className="bg-brass text-black hover:bg-brass-light font-semibold text-base px-8 min-h-[54px] shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(194,177,109,0.5)]"
    >
      <Link href={contactHref}>
        Fall vertraulich schildern
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  )
}

export function SecondaryCta() {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="border-white/25 bg-black/20 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white text-base px-8 min-h-[54px]"
    >
      <Link href="/leistungen">Leistungen ansehen</Link>
    </Button>
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
