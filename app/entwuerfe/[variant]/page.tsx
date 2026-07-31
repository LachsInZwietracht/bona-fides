import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LandingRedesignPage } from "@/components/landing-redesign-page"
import {
  getRedesignVariantByToken,
  landingRedesigns,
} from "@/lib/landing-redesigns"

export const dynamicParams = false

interface RedesignPageProps {
  params: Promise<{ variant: string }>
}

export function generateStaticParams() {
  return Object.values(landingRedesigns).map((design) => ({ variant: design.reviewToken }))
}

export async function generateMetadata({ params }: RedesignPageProps): Promise<Metadata> {
  const { variant: token } = await params
  const variant = getRedesignVariantByToken(token)
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

export default async function RedesignPage({ params }: RedesignPageProps) {
  const { variant: token } = await params
  const variant = getRedesignVariantByToken(token)
  if (!variant) notFound()
  return <LandingRedesignPage variant={variant} />
}
