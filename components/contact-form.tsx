"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Clock, Lock, Mail, Send, ShieldCheck, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { caseTypes, urgencyOptions } from "@/lib/contact-options"
import { mailtoLink, siteConfig } from "@/lib/site-config"

const initialForm = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  caseType: "",
  urgency: "",
  message: "",
  nda: false,
  consent: false,
}

const reassurance = [
  {
    icon: Clock,
    title: "Antwort binnen 24 Stunden",
    text: "Sie erhalten eine erste Einschätzung zur Machbarkeit – werktags meist deutlich schneller.",
  },
  {
    icon: ShieldCheck,
    title: "NDA vor dem Detail",
    text: "Auf Wunsch unterzeichnen wir eine Vertraulichkeitsvereinbarung, bevor Sie Namen nennen.",
  },
  {
    icon: UserCheck,
    title: "Ehrliche Einschätzung",
    text: "Wenn sich ein Mandat für Sie nicht rechnet oder rechtlich nicht trägt, sagen wir das.",
  },
]

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Bitte geben Sie einen Ansprechpartner an"
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ungültiges E-Mail-Format"
    }
    if (!formData.caseType) newErrors.caseType = "Bitte wählen Sie einen Falltyp"
    if (!formData.message.trim()) newErrors.message = "Bitte skizzieren Sie den Sachverhalt"
    if (!formData.consent) newErrors.consent = "Ohne Einwilligung können wir Ihre Anfrage nicht bearbeiten"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!validateForm()) return

    setFormStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus("success")
        setFormData(initialForm)
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    }
  }

  const update = (field: keyof typeof initialForm, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const fieldClass = (field: string) =>
    `bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:border-brass focus-visible:ring-brass/30 ${
      errors[field] ? "border-red-500" : ""
    }`

  return (
    <div className="relative z-10 py-20 sm:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-start">
          {/* Vertrauensspalte */}
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow text-brass mb-4">Erstgespräch</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              Schildern Sie uns Ihren Fall
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Zwei Sätze genügen für den Anfang. Alles Weitere klären wir im vertraulichen Gespräch –
              unverbindlich und ohne dass Sie sich festlegen.
            </p>

            <ul className="mt-8 space-y-6">
              {reassurance.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brass/15">
                    <item.icon className="h-5 w-5 text-brass" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                Lieber direkt schreiben?
              </p>
              <a
                href={mailtoLink}
                className="mt-2 inline-flex items-center gap-2 text-brass hover:text-brass-light transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Formular */}
          <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Ansprechpartner <span className="text-brass">*</span>
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={fieldClass("name")}
                    placeholder="Vor- und Nachname"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                    Unternehmen
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(event) => update("company", event.target.value)}
                    className={fieldClass("company")}
                    placeholder="Firmenname"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    E-Mail <span className="text-brass">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={fieldClass("email")}
                    placeholder="name@unternehmen.de"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={fieldClass("phone")}
                    placeholder="für den schnellen Rückruf"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-300">
                    Ihre Funktion
                  </label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(event) => update("role", event.target.value)}
                    className={fieldClass("role")}
                    placeholder="z. B. Geschäftsführung, HR, Compliance"
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm font-medium text-gray-300">Dringlichkeit</span>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => update("urgency", value)}
                  >
                    <SelectTrigger
                      data-testid="urgency-trigger"
                      aria-label="Dringlichkeit"
                      className="w-full bg-white/5 border-white/15 text-white"
                    >
                      <SelectValue placeholder="Zeitrahmen wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-gray-300">
                  Falltyp <span className="text-brass">*</span>
                </span>
                <Select value={formData.caseType} onValueChange={(value) => update("caseType", value)}>
                  <SelectTrigger
                    data-testid="case-type-trigger"
                    aria-label="Falltyp"
                    className={`w-full bg-white/5 text-white ${
                      errors.caseType ? "border-red-500" : "border-white/15"
                    }`}
                  >
                    <SelectValue placeholder="Worum geht es?" />
                  </SelectTrigger>
                  <SelectContent>
                    {caseTypes.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.caseType && <p className="mt-1 text-xs text-red-400">{errors.caseType}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Sachverhalt <span className="text-brass">*</span>
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) => update("message", event.target.value)}
                  className={`${fieldClass("message")} resize-none`}
                  placeholder="Was ist vorgefallen, wer ist beteiligt und was möchten Sie erreichen? Nennen Sie zunächst nur so viel, wie Sie ohne NDA nennen möchten."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="nda"
                    checked={formData.nda}
                    onCheckedChange={(checked) => update("nda", checked === true)}
                    className="mt-0.5 border-white/30 data-[state=checked]:bg-brass data-[state=checked]:border-brass data-[state=checked]:text-black"
                  />
                  <label htmlFor="nda" className="text-sm text-gray-300 leading-relaxed">
                    Bitte senden Sie mir vor dem Gespräch eine Vertraulichkeitsvereinbarung (NDA).
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => update("consent", checked === true)}
                    aria-invalid={Boolean(errors.consent)}
                    className="mt-0.5 border-white/30 data-[state=checked]:bg-brass data-[state=checked]:border-brass data-[state=checked]:text-black"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                    Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet
                    werden. <span className="text-brass">*</span>{" "}
                    <Link
                      href="/datenschutz"
                      className="underline underline-offset-4 hover:text-brass"
                    >
                      Datenschutzerklärung
                    </Link>
                  </label>
                </div>
                {errors.consent && <p className="text-xs text-red-400">{errors.consent}</p>}
              </div>

              {formStatus === "success" && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-sm border border-green-600/40 bg-green-600/10 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <p className="text-sm text-green-200">
                    Ihre Anfrage ist eingegangen. Sie erhalten in der Regel binnen 24 Stunden eine
                    Erstbewertung – prüfen Sie sicherheitshalber auch Ihren Spam-Ordner.
                  </p>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-sm border border-red-600/40 bg-red-600/10 p-4"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  <p className="text-sm text-red-200">
                    Die Übertragung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben
                    Sie direkt an{" "}
                    <a href={mailtoLink} className="underline underline-offset-4">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-brass text-black hover:bg-brass-light font-semibold min-h-[52px] text-base disabled:opacity-60"
              >
                {formStatus === "submitting" ? (
                  <>
                    <Send className="mr-2 h-4 w-4 animate-pulse" />
                    Wird übermittelt …
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Vertrauliche Anfrage senden
                  </>
                )}
              </Button>

              <p className="text-center font-mono text-[11px] uppercase tracking-wider text-gray-500">
                Verschlüsselte Übertragung · DSGVO-konform · Keine Weitergabe an Dritte
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
