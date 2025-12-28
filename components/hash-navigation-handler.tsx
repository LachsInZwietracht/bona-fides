"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashNavigationHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const handleHashNavigation = () => {
      // Get the hash from the current URL
      const hash = window.location.hash

      if (hash) {
        // Remove the # to get the element ID
        const elementId = hash.substring(1)

        // Find the target element
        const targetElement = document.getElementById(elementId)

        if (targetElement) {
          // Scroll to the element with smooth behavior
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        } else {
          // If element not found immediately, wait a bit and try again
          // This handles cases where the target page is still loading
          setTimeout(() => {
            const delayedTarget = document.getElementById(elementId)
            if (delayedTarget) {
              delayedTarget.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }
          }, 100)
        }
      }
    }

    // Handle hash navigation on route changes
    handleHashNavigation()

    // Listen for hash changes (when user manually changes hash in URL)
    window.addEventListener("hashchange", handleHashNavigation)

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation)
    }
  }, [pathname]) // Re-run when pathname changes

  // This component doesn't render anything
  return null
}