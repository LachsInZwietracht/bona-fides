"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { mailtoLink } from "@/lib/site-config"

/**
 * Persistent mobile conversion bar. Appears once the visitor has scrolled past
 * the hero and hides again while the contact form itself is on screen, so the
 * bar never covers the fields it is pointing at.
 */
export function StickyCta() {
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
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-brass/30 bg-black/95 backdrop-blur-md px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/#contact"
          tabIndex={visible ? 0 : -1}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-brass px-4 py-3 font-semibold text-black min-h-[48px]"
        >
          Fall schildern
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={mailtoLink}
          tabIndex={visible ? 0 : -1}
          aria-label="Direkt per E-Mail anfragen"
          className="inline-flex items-center justify-center rounded-sm border border-white/20 px-4 py-3 text-white min-h-[48px] min-w-[48px]"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
