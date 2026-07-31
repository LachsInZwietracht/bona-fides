import type { ReactNode } from "react"

/**
 * Shared noir background treatment (grain, scanlines, key light, vignette).
 * Extracted so landing page and service pages stay visually identical.
 */
export function NoirShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none noir-grain" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="h-full w-full noir-scanlines" />
      </div>

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm pointer-events-none" />

      {children}

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}
