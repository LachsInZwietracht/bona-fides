"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Lock, Send, FileText, CheckCircle2, AlertCircle, Shield } from "lucide-react"

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
    <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            ERSTBERATUNG ANFORDERN
          </h2>

          <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
            Diskret. Professionell. Ergebnisorientiert.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Case File Header */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-amber-500" />
              <h3 className="text-xl font-serif font-bold text-white">
                NEUE AKTE ERÖFFNEN
              </h3>
            </div>

            <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-green-500" />
                <span>VERSCHLÜSSELT</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>DSGVO-KONFORM</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <span>STRENG VERTRAULICH</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-mono">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Ihr vollständiger Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm font-mono">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-mono">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="ihre.email@beispiel.de"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm font-mono">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-mono">
                Telefon (optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500"
                placeholder="+49 (0) XXX XXXXXXX"
              />
            </div>

            {/* Case Type */}
            <div className="space-y-2">
              <Label htmlFor="caseType" className="text-white font-mono">
                Falltyp *
              </Label>
              <Select value={formData.caseType} onValueChange={(value) => handleInputChange('caseType', value)}>
                <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-amber-500 ${
                  errors.caseType ? 'border-red-500' : ''
                }`}>
                  <SelectValue placeholder="Wählen Sie Ihren Falltyp" />
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
                <p className="text-red-400 text-sm font-mono">{errors.caseType}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white font-mono">
                Ihr Fall *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={6}
                className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500 resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="Beschreiben Sie Ihren Fall so detailliert wie möglich. Alle Informationen werden streng vertraulich behandelt."
              />
              {errors.message && (
                <p className="text-red-400 text-sm font-mono">{errors.message}</p>
              )}
            </div>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="bg-green-600/20 border border-green-600/40 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <p className="text-green-400 font-mono">
                  Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns binnen 24 Stunden.
                </p>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-red-600/20 border border-red-600/40 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-400 font-mono">
                  Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full h-14 bg-amber-600 hover:bg-amber-700 text-black font-mono font-bold text-lg transition-all duration-300 disabled:opacity-50"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Send className="mr-2 h-5 w-5 animate-spin" />
                  ÜBERTRAGUNG LÄUFT...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5" />
                  ERSTBERATUNG ANFORDERN
                </>
              )}
            </Button>
          </form>

          <div className="text-center mt-8 text-sm font-mono text-gray-400">
            <p>Kostenlose Erstberatung • 24/7 Hotline • Deutschlandweit verfügbar</p>
          </div>
        </div>
      </div>
    </div>
  )
}