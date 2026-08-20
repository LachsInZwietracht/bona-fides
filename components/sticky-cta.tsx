"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Persistent mobile conversion bar. Appears once the visitor has scrolled past
 * the hero and hides again while the contact form itself is on screen, so the
 * bar never covers the fields it is pointing at.
 */
export function StickyCta({ contactHref = "/#contact" }: { contactHref?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const contact = document.getElementById("contact")

    const update = () => {
      const scrolledEnough = window.scrollY > 700
      const contactInView = contact
        ? (() => {
            const rect = contact.getBoundingClientRect()
            return rect.top < window.innerHeight && rect.bottom > 0
          })()
        : false

      setVisible(scrolledEnough && !contactInView)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      data-testid="sticky-cta"
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-brass/30 bg-black/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      {/* Eine Handlung, ein Wortlaut: der unbeschriftete Briefumschlag daneben
          hat nur Rätsel aufgegeben. Die E-Mail-Adresse steht im Menü und im Fuß. */}
      <Link
        href={contactHref}
        tabIndex={visible ? 0 : -1}
        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-brass px-4 py-3 font-semibold text-black"
      >
        Fall schildern
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
