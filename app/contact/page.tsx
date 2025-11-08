"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  MessageSquare,
  Shield,
  Lock,
  FileText,
  Clock,
  Users,
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function ContactPage() {
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setFormStatus('success')
    setTimeout(() => {
      setFormStatus('idle')
      setFormData({ name: '', email: '', phone: '', caseType: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header dark />

      {/* Film grain texture */}
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

      {/* Lighting effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-8 py-16">

          {/* Hero Section */}
          <div className="text-center space-y-6 mb-20">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              VERTRAULICHE KONTAKTAUFNAHME
            </Badge>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              JETZT LICHT INS
              <br />
              <span className="text-gray-300">DUNKEL BRINGEN</span>
            </h1>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Glückwunsch – Sie haben die richtige Entscheidung getroffen. Gemeinsam bringen wir Klarheit in Ihren Fall.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  KONTAKTMÖGLICHKEITEN
                </h2>


                {/* Email Contact */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 group hover:bg-white/8 transition-all duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm group-hover:bg-[rgba(194,177,109,0.2)] transition-colors duration-500">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-mono text-lg text-white uppercase tracking-wide">
                          VERSCHLÜSSELTE E-MAIL
                        </h3>
                        <Badge className="font-mono text-xs px-2 py-1" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6'}}>
                          PGP READY
                        </Badge>
                      </div>
                      <p className="font-mono text-white mb-2">
                        cases@bonafides.agency
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Ende-zu-Ende verschlüsselte Kommunikation verfügbar
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Telegram Contact */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 group hover:bg-white/8 transition-all duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm group-hover:bg-[rgba(194,177,109,0.2)] transition-colors duration-500">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-mono text-lg text-white uppercase tracking-wide">
                          SICHERER MESSENGER
                        </h3>
                        <Badge className="font-mono text-xs px-2 py-1" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6'}}>
                          SIGNAL/TELEGRAM
                        </Badge>
                      </div>
                      <p className="font-mono text-white mb-2">
                        @BonaFidesSecure
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Anonyme Erstkontakte über verschlüsselte Kanäle
                      </p>
                    </div>
                  </div>
                </Card>

              </div>

              {/* Security Notice */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                <h4 className="flex items-center font-mono text-white mb-4 uppercase tracking-wide">
                  <Lock className="mr-2 h-5 w-5" />
                  SICHERHEITSPROTOKOLL
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-[#C2B16D] shrink-0" />
                    <p className="text-gray-300">Alle Kommunikationen sind verschlüsselt und vertraulich</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-[#C2B16D] shrink-0" />
                    <p className="text-gray-300">Anwalt-Mandant-Privileg gilt ab der ersten Beratung</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-[#C2B16D] shrink-0" />
                    <p className="text-gray-300">Ihre Daten werden niemals an Dritte weitergegeben</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {/* Multiple paper layers for depth */}
              <div className="absolute inset-0 bg-gray-200 transform rotate-1 shadow-lg rounded-sm opacity-60" />
              <div className="absolute inset-0 bg-gray-300 transform -rotate-1 shadow-lg rounded-sm opacity-40" />

              {/* Main case file document */}
              <div className="bg-white text-black p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300 relative rounded-sm">

                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-yellow-100 to-gray-200 rounded-sm" />

                {/* Subtle paper grain */}
                <div
                  className="absolute inset-0 opacity-10 rounded-sm"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)' opacity='0.4'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Form content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-mono font-bold text-black tracking-tight">
                      FALLAUFNAHME-PROTOKOLL
                    </h3>
                    <Badge className="bg-red-500 text-white font-mono text-xs px-2 py-1 rounded-sm">
                      {formStatus === 'success' ? 'ÜBERMITTELT' : 'VERTRAULICH'}
                    </Badge>
                  </div>

                  {formStatus === 'success' ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="h-16 w-16 mx-auto text-green-600 mb-4" />
                      <h4 className="text-xl font-mono font-bold text-green-600 mb-2">FALL REGISTRIERT</h4>
                      <p className="font-mono text-sm text-gray-700">
                        Ihr Auftrag wurde sicher übermittelt. Ein Ermittler kontaktiert Sie binnen 24 Stunden.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-gray-700">
                            Vollständiger Name
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="font-mono text-sm border-gray-400 focus:border-gray-600"
                            placeholder="Max Mustermann"
                          />
                          {errors.name && (
                            <p className="text-red-600 font-mono text-xs mt-1 flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide text-gray-700">
                            Telefonnummer (Optional)
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="font-mono text-sm border-gray-400 focus:border-gray-600"
                            placeholder="+49 xxx xxxx xxx"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-gray-700">
                          E-Mail-Adresse
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="font-mono text-sm border-gray-400 focus:border-gray-600"
                          placeholder="ihre.email@beispiel.de"
                        />
                        {errors.email && (
                          <p className="text-red-600 font-mono text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="caseType" className="font-mono text-xs uppercase tracking-wide text-gray-700">
                          Art der Ermittlung
                        </Label>
                        <Select value={formData.caseType} onValueChange={(value) => handleInputChange('caseType', value)}>
                          <SelectTrigger className="font-mono text-sm border-gray-400 focus:border-gray-600">
                            <SelectValue placeholder="Bitte wählen Sie eine Kategorie" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">Private Ermittlungen</SelectItem>
                            <SelectItem value="corporate">Unternehmenssicherheit</SelectItem>
                            <SelectItem value="background">Hintergrundprüfungen</SelectItem>
                            <SelectItem value="infidelity">Untreue-Ermittlungen</SelectItem>
                            <SelectItem value="fraud">Betrugserkennung</SelectItem>
                            <SelectItem value="missing">Vermisste Personen</SelectItem>
                            <SelectItem value="other">Sonstige Ermittlungen</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.caseType && (
                          <p className="text-red-600 font-mono text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.caseType}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-gray-700">
                          Fallbeschreibung
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="font-mono text-sm border-gray-400 focus:border-gray-600 min-h-[120px]"
                          placeholder="Beschreiben Sie Ihren Fall so detailliert wie möglich. Alle Informationen werden streng vertraulich behandelt."
                        />
                        {errors.message && (
                          <p className="text-red-600 font-mono text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-300">
                        <Button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full font-mono text-sm uppercase tracking-wide bg-black text-white hover:bg-gray-800 border border-gray-600"
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <FileText className="mr-2 h-4 w-4 animate-pulse" />
                              FALL WIRD ÜBERMITTELT...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              VERTRAULICHE ANFRAGE SENDEN
                            </>
                          )}
                        </Button>
                        <p className="font-mono text-xs text-gray-600 text-center mt-2">
                          Antwort binnen 24 Stunden • Absolute Vertraulichkeit
                        </p>
                      </div>
                    </form>
                  )}

                  {/* Classification stamp */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-red-600 rounded-full flex items-center justify-center transform rotate-12 bg-white">
                    <div className="text-center">
                      <div className="text-red-600 font-bold text-xs">
                        {formStatus === 'success' ? 'SENT' : 'SECURE'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Info */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <Clock className="h-8 w-8 mx-auto text-[#C2B16D]" />
                <h4 className="font-mono text-white uppercase tracking-wide">Schnelle Antwort</h4>
                <p className="font-mono text-sm text-gray-400">
                  Rückmeldung innerhalb von 24 Stunden garantiert
                </p>
              </div>
              <div className="space-y-3">
                <Users className="h-8 w-8 mx-auto text-[#C2B16D]" />
                <h4 className="font-mono text-white uppercase tracking-wide">Kostenlose Beratung</h4>
                <p className="font-mono text-sm text-gray-400">
                  Unverbindliche Ersteinschätzung Ihres Falls
                </p>
              </div>
              <div className="space-y-3">
                <Shield className="h-8 w-8 mx-auto text-[#C2B16D]" />
                <h4 className="font-mono text-white uppercase tracking-wide">Absolute Diskretion</h4>
                <p className="font-mono text-sm text-gray-400">
                  Strikte Vertraulichkeit bei allen Ermittlungen
                </p>
              </div>
            </div>
          </Card>

        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}