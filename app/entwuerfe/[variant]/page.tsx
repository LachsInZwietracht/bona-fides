import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LandingRedesignPage } from "@/components/landing-redesign-page"
import {
  getRedesignVariantByToken,
  landingRedesigns,
} from "@/lib/landing-redesigns"

export const dynamicParams = false

export function generateStaticParams() {
  return Object.values(landingRedesigns).map((design) => ({ variant: design.reviewToken }))
}

export function generateMetadata({ params }: { params: { variant: string } }): Metadata {
  const variant = getRedesignVariantByToken(params.variant)
  if (!variant) return {}
  const design = landingRedesigns[variant]
  return {
    title: `${design.name} – Landingpage-Entwurf`,
    description: design.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noarchive: true,
        noimageindex: true,
        nosnippet: true,
      },
    },
    referrer: "no-referrer",
  }
}

export default function RedesignPage({ params }: { params: { variant: string } }) {
  const variant = getRedesignVariantByToken(params.variant)
  if (!variant) notFound()
  return <LandingRedesignPage variant={variant} />
}
