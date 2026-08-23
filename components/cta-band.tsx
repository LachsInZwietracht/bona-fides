import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mailtoLink, siteConfig } from "@/lib/site-config"

interface CtaBandProps {
  headline: string
  subline: string
  /** Overrides the default primary button label */
  primaryLabel?: string
  contactHref?: string
}

/**
 * Conversion band repeated at the end of every content surface.
 * Two paths: the qualifying form (preferred) and a direct mail escape hatch.
 */
export function CtaBand({
  headline,
  subline,
  primaryLabel = "Fall schildern",
  contactHref = "/#contact",
}: CtaBandProps) {
  return (
    <section className="relative z-10 py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto overflow-hidden rounded-sm border border-brass/30 bg-brass/[0.06] p-6 sm:p-10 text-center backdrop-blur-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brass/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 sm:space-y-5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
              {headline}
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
              {subline}
            </p>

            <div className="flex flex-col items-center gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-brass text-black hover:bg-brass-light font-semibold text-base px-7 sm:px-8 min-h-[52px] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(194,177,109,0.5)]"
              >
                <Link href={contactHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Die Adresse als Verweis statt als Schaltfläche: in einem Button
                  mit fester Polsterung läuft sie auf schmalen Telefonen aus dem
                  Rahmen. `break-all` hält sie in jedem Fall im Kasten. */}
              <a
                href={mailtoLink}
                className="inline-flex min-h-[44px] max-w-full items-center justify-center gap-2 px-2 font-mono text-xs sm:text-sm text-gray-400 transition-colors hover:text-brass"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </div>

            <p className="eyebrow text-gray-400">
              NDA auf Wunsch · DSGVO-konform · {siteConfig.responsePromise}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
