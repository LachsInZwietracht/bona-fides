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
  metadataBase: new URL("https://www.bona-fides-detektei.de"),
  title: {
    default: "BONA FIDES Detektei - Digitale Ermittlungen & Cyber-Forensik",
    template: "%s | BONA FIDES Detektei - Digitale Ermittlungsexperten",
  },
  description:
    "Spezialisierte Digital-Detektei für Cyber-Ermittlungen, Online-Forensik und Betrugsaufklärung. Bundesweites Expertennetzwerk für diskrete digitale Ermittlungen.",
  applicationName: "BONA FIDES Detektei",
  alternates: {
    canonical: "https://www.bona-fides-detektei.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "BONA FIDES Detektei",
    title: "BONA FIDES Detektei - Digitale Ermittlungen & Cyber-Forensik",
    description:
      "Spezialisierte Digital-Detektei für Cyber-Ermittlungen, Online-Forensik und Betrugsaufklärung.",
    url: "https://www.bona-fides-detektei.de",
  },
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
