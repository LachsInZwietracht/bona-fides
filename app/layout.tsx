import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { HashNavigationHandler } from "@/components/hash-navigation-handler"
import { CookiesProvider } from "@/hooks/use-cookies"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BONA FIDES Detektei - Professionelle Ermittlungsdienste",
  description:
    "Lizenzierte Detektei seit 1965. Diskrete und professionelle Ermittlungsdienste mit Integrität und Ergebnissen.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${playfair.variable} ${jetbrains.variable} font-serif antialiased`}>
        <CookiesProvider>
          <HashNavigationHandler />
          <Suspense fallback={null}>{children}</Suspense>
          <CookieBanner />
          <Analytics />
        </CookiesProvider>
      </body>
    </html>
  )
}
