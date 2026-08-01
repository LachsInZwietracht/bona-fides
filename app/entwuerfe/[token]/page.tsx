import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HeroDesign } from "@/components/hero-designs"
import {
  getHeroDesignByToken,
  heroDesignOrder,
  heroDesigns,
  heroOverviewToken,
  heroReviewPath,
} from "@/lib/hero-designs"

export const dynamicParams = false

const noindex: Metadata["robots"] = {
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
}

interface PageProps {
  params: Promise<{ token: string }>
}

export function generateStaticParams() {
  return [
    { token: heroOverviewToken },
    ...heroDesignOrder.map((variant) => ({ token: heroDesigns[variant].reviewToken })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params

  if (token === heroOverviewToken) {
    return {
      title: "Hero-Entwürfe – Vergleich",
      description: "Drei Bildkonzepte für die Startseiten-Hero.",
      robots: noindex,
      referrer: "no-referrer",
    }
  }

  const variant = getHeroDesignByToken(token)
  if (!variant) return {}

  return {
    title: `${heroDesigns[variant].name} – Hero-Entwurf`,
    description: heroDesigns[variant].description,
    robots: noindex,
    referrer: "no-referrer",
  }
}

function DesignHeader({
  variant,
  href,
}: {
  variant: (typeof heroDesignOrder)[number]
  href?: string
}) {
  const design = heroDesigns[variant]
  return (
    <header className="border-y border-white/10 bg-white/[0.03]">
      <div className="container mx-auto flex flex-col gap-2 px-4 py-6 sm:px-6 lg:flex-row lg:items-baseline lg:gap-6 lg:px-8">
        <span className="font-mono text-xs tracking-[0.2em] text-brass">{design.number}</span>
        <div className="lg:flex-1">
          <h2 className="font-serif text-2xl font-bold text-white">
            {design.name}
            <span className="ml-3 font-sans text-sm font-normal text-gray-500">
              {design.metaphor}
            </span>
          </h2>
          <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-gray-400">
            {design.description}
          </p>
        </div>
        {href ? (
          <Link
            href={href}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-brass"
          >
            Einzeln ansehen →
          </Link>
        ) : null}
      </div>
    </header>
  )
}

function Overview() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="container mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gray-500">
            Hero-Entwürfe
          </span>
          {heroDesignOrder.map((variant) => (
            <a
              key={variant}
              href={`#${variant}`}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-brass"
            >
              {heroDesigns[variant].number} · {heroDesigns[variant].name}
            </a>
          ))}
        </div>
      </nav>

      {heroDesignOrder.map((variant) => (
        <section key={variant} id={variant} className="scroll-mt-14">
          <DesignHeader variant={variant} href={heroReviewPath(heroDesigns[variant].reviewToken)} />
          <HeroDesign variant={variant} />
        </section>
      ))}
    </div>
  )
}

function Single({ variant }: { variant: (typeof heroDesignOrder)[number] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <DesignHeader variant={variant} />
      <HeroDesign variant={variant} />
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href={heroReviewPath(heroOverviewToken)}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-brass"
          >
            ← Alle drei Entwürfe vergleichen
          </Link>
        </div>
      </div>
    </div>
  )
}

export default async function HeroDesignPage({ params }: PageProps) {
  const { token } = await params

  if (token === heroOverviewToken) return <Overview />

  const variant = getHeroDesignByToken(token)
  if (!variant) notFound()

  return <Single variant={variant} />
}
