"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Lock, Send, CheckCircle2, AlertCircle, Shield } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültiges E-Mail-Format'
    }
    if (!formData.caseType) {
      newErrors.caseType = 'Falltyp ist erforderlich'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          caseType: '',
          message: ''
        })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" id="contact">
      {/* Landing page style background effects */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 15px,
              rgba(255,255,255,0.08) 15px,
              rgba(255,255,255,0.08) 18px,
              transparent 18px,
              transparent 35px
            )`,
          }}
        />
      </div>

      {/* Dramatic lighting effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-2xl">
            ERSTBERATUNG ANFORDERN
          </h2>

          <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
            Diskret. Professionell. Ergebnisorientiert.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Multiple paper layers for depth - matching landing page hero */}
          <div className="absolute inset-0 bg-gray-200 transform rotate-1 shadow-lg rounded-sm opacity-60" />
          <div className="absolute inset-0 bg-gray-300 transform -rotate-1 shadow-lg rounded-sm opacity-40" />

          {/* Main case file document with wobble animation */}
          <div className="bg-white text-black p-6 md:p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300 relative rounded-sm">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-yellow-100 to-gray-200 rounded-sm" />

            {/* Subtle paper grain */}
            <div
              className="absolute inset-0 opacity-10 rounded-sm"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Case file content */}
            <div className="relative z-10">
              {/* Case file header - matching landing page style */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-mono font-bold text-black tracking-tight">
                  FALLAKTE #KONTAKT
                </h3>
                <div className="bg-red-500 text-white font-mono text-xs px-2 py-1 rounded-sm">AKTIV</div>
              </div>

              {/* Case file details - matching landing page layout */}
              <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm mb-6">
                <div className="border-b border-gray-300 pb-2">
                  <span className="font-bold text-gray-700">Art:</span>
                  <p className="text-black">Erstberatung anfordern</p>
                </div>

                <div className="border-b border-gray-300 pb-2">
                  <span className="font-bold text-gray-700">Status:</span>
                  <p className="text-red-600 font-bold">Bereit für Aufnahme</p>
                </div>

              </div>

              {/* Quote section - playful and matching landing page */}
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-100 border-l-4 rounded-sm mb-6" style={{borderColor: '#C2B16D'}}>
                <p className="text-xs italic text-gray-700 leading-relaxed">
                  &ldquo;Jede Wahrheit verdient es, gefunden zu werden. Ihre Anfrage ist der erste Schritt.&rdquo;
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form fields in case file style */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="border-b border-gray-300 pb-2">
                    <div className="font-bold text-gray-700 text-sm mb-1">MANDANT:</div>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`border-0 bg-transparent text-black font-mono placeholder:text-gray-500 focus:ring-0 px-0 ${
                        errors.name ? 'text-red-600' : ''
                      }`}
                      style={{borderBottom: errors.name ? '2px solid #dc2626' : '1px solid transparent'}}
                      placeholder="[VERTRAULICH]"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="border-b border-gray-300 pb-2">
                    <div className="font-bold text-gray-700 text-sm mb-1">KONTAKT:</div>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`border-0 bg-transparent text-black font-mono placeholder:text-gray-500 focus:ring-0 px-0 ${
                        errors.email ? 'text-red-600' : ''
                      }`}
                      style={{borderBottom: errors.email ? '2px solid #dc2626' : '1px solid transparent'}}
                      placeholder="agent@beispiel.de"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="border-b border-gray-300 pb-2">
                  <div className="font-bold text-gray-700 text-sm mb-1">TELEFON:</div>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-0 bg-transparent text-black font-mono placeholder:text-gray-500 focus:ring-0 px-0"
                    placeholder="+49 (0) XXX XXXXXXX [optional]"
                  />
                </div>

                {/* Case Type */}
                <div className="border-b border-gray-300 pb-2">
                  <div className="font-bold text-gray-700 text-sm mb-1">FALLTYP:</div>
                  <Select value={formData.caseType} onValueChange={(value) => handleInputChange('caseType', value)}>
                    <SelectTrigger className={`border-0 bg-transparent text-black font-mono h-auto p-0 ${
                      errors.caseType ? 'text-red-600' : ''
                    }`} style={{color: formData.caseType ? '#C2B16D' : 'rgb(107 114 128)', fontWeight: formData.caseType ? 'bold' : 'normal'}}>
                      <SelectValue placeholder="[KLASSIFIZIERUNG AUSWÄHLEN]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital-investigation">Digitale Ermittlungen</SelectItem>
                      <SelectItem value="cybercrime">Cyberkriminalität</SelectItem>
                      <SelectItem value="background-check">Hintergrundprüfung</SelectItem>
                      <SelectItem value="corporate-fraud">Unternehmensbetrug</SelectItem>
                      <SelectItem value="infidelity">Untreue-Verdacht</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.caseType && (
                    <p className="text-red-500 text-xs mt-1 font-mono">{errors.caseType}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mt-6">
                  <div className="font-bold text-gray-700 text-sm mb-2">FALLBESCHREIBUNG:</div>
                  <div className="bg-gray-50 border-l-4 p-4 mb-4" style={{borderColor: '#C2B16D'}}>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className={`bg-transparent border-0 text-black font-mono placeholder:text-gray-500 focus:ring-0 resize-none p-0 ${
                        errors.message ? 'text-red-600' : ''
                      }`}
                      placeholder="Beschreiben Sie Ihren Fall mit allen verfügbaren Details. Alle Informationen unterliegen der Schweigepflicht und werden verschlüsselt übertragen."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mb-4 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <p className="text-green-700 font-mono text-sm">
                        ✓ FALLAKTE ERFOLGREICH ÜBERMITTELT - ANTWORT BINNEN 24H
                      </p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <p className="text-red-700 font-mono text-sm">
                        ⚠ ÜBERTRAGUNG FEHLGESCHLAGEN - BITTE WIEDERHOLEN
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit button with case file styling */}
                <div className="mt-6 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono text-gray-600">
                    <div className="flex items-center gap-1">
                      <Lock className="h-3 w-3 text-green-600" />
                      <span>VERSCHLÜSSELT</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-blue-600" />
                      <span>DSGVO-KONFORM</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" style={{color: '#C2B16D'}} />
                      <span>STRENG VERTRAULICH</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full font-mono font-bold text-black transition-all duration-300 disabled:opacity-50 hover:scale-105"
                    style={{
                      backgroundColor: '#C2B16D',
                      border: '2px solid #C2B16D'
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Send className="mr-2 h-4 w-4 animate-spin" />
                        ÜBERTRAGUNG LÄUFT...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        FALLAKTE ÜBERMITTELN
                      </>
                    )}
                  </Button>
                </div>
              </form>


              {/* Security icons like landing page */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-20">
                <Lock className="h-4 w-4 text-gray-600" />
                <Shield className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}