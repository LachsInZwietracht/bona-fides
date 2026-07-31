export const landingRedesigns = {
  akte: {
    number: "01",
    name: "Die Fallakte",
    shortName: "Fallakte",
    description: "Editorial, taktil und kompromisslos diskret.",
    reviewToken: "fallakte-7c4d9b2ef6a183cd",
  },
  observatorium: {
    number: "02",
    name: "Das Observatorium",
    shortName: "Observatorium",
    description: "Präzise, technologisch und operativ souverän.",
    reviewToken: "observatorium-a8f1e6c342bd7059",
  },
  signatur: {
    number: "03",
    name: "Die Signatur",
    shortName: "Signatur",
    description: "Cinematisch, reduziert und hochwertig.",
    reviewToken: "signatur-3b7e5d9ac164f820",
  },
} as const

export type RedesignVariant = keyof typeof landingRedesigns

export function getRedesignVariantByToken(token: string): RedesignVariant | undefined {
  return (Object.keys(landingRedesigns) as RedesignVariant[]).find(
    (variant) => landingRedesigns[variant].reviewToken === token,
  )
}

export function redesignReviewPath(variant: RedesignVariant) {
  return `/entwuerfe/${landingRedesigns[variant].reviewToken}`
}
