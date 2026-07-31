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
  primaryLabel = "Fall vertraulich schildern",
  contactHref = "/#contact",
}: CtaBandProps) {
  return (
    <section className="relative z-10 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-sm border border-brass/30 bg-brass/[0.06] p-8 sm:p-12 text-center backdrop-blur-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brass/15 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              {headline}
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              {subline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-brass text-black hover:bg-brass-light font-semibold text-base px-8 py-6 min-h-[52px] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(194,177,109,0.5)]"
              >
                <Link href={contactHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white font-mono text-sm px-8 py-6 min-h-[52px]"
              >
                <a href={mailtoLink}>
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.email}
                </a>
              </Button>
            </div>

            <p className="eyebrow text-gray-500 pt-2">
              NDA auf Wunsch · DSGVO-konform · {siteConfig.responsePromise}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
