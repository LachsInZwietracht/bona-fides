"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type CookieConsentStatus = 'accepted' | 'declined' | null

interface CookiesContextType {
  consentStatus: CookieConsentStatus
  hasConsented: boolean
  acceptCookies: () => void
  declineCookies: () => void
  resetConsent: () => void
  reopenBanner: () => void
  canUseAnalytics: boolean
  canUseMarketing: boolean
  forceShow: boolean
  clearForceShow: () => void
}

const CookiesContext = createContext<CookiesContextType | undefined>(undefined)

interface CookiesProviderProps {
  children: ReactNode
}

export function CookiesProvider({ children }: CookiesProviderProps) {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(null)
  const [isClient, setIsClient] = useState(false)
  const [forceShow, setForceShow] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem('cookie-consent')
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored as CookieConsentStatus)
    }
  }, [])

  const acceptCookies = () => {
    setConsentStatus('accepted')
    localStorage.setItem('cookie-consent', 'accepted')

    // Initialize analytics if accepted
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      })
    }
  }

  const declineCookies = () => {
    setConsentStatus('declined')
    localStorage.setItem('cookie-consent', 'declined')

    // Disable analytics if declined
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      })
    }
  }

  const resetConsent = () => {
    setConsentStatus(null)
    localStorage.removeItem('cookie-consent')
  }

  const reopenBanner = () => {
    setConsentStatus(null)
    localStorage.removeItem('cookie-consent')
    setForceShow(true)
  }

  const clearForceShow = () => {
    setForceShow(false)
  }

  const hasConsented = isClient && consentStatus !== null
  const canUseAnalytics = consentStatus === 'accepted'
  const canUseMarketing = consentStatus === 'accepted'

  const value: CookiesContextType = {
    consentStatus,
    hasConsented,
    acceptCookies,
    declineCookies,
    resetConsent,
    reopenBanner,
    canUseAnalytics,
    canUseMarketing,
    forceShow,
    clearForceShow
  }

  return (
    <CookiesContext.Provider value={value}>
      {children}
    </CookiesContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookiesContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookiesProvider')
  }
  return context
}

// Types for Google Analytics gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}