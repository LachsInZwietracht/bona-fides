"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Search, Shield, Eye, Building, UserCheck, Award, Users, Star, Mail, Lock, Send, FileText, CheckCircle2, AlertCircle } from "lucide-react"

export default function HomePage() {
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

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setFormStatus('success')
      setTimeout(() => {
        setFormStatus('idle')
        setFormData({ name: '', email: '', phone: '', caseType: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
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

      {/* Hero section */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Header with classic noir styling */}
              <div className="space-y-4">
                <Badge className="font-mono text-xs tracking-widest px-3 py-1 border" style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}>
                  EST. 1965 • LIZENZIERT & VERSICHERT
                </Badge>

                <div className="space-y-2">
                  <h1 className="text-7xl font-serif font-bold tracking-tight text-white drop-shadow-2xl">
                    BONA
                    <br />
                    <span className="text-gray-300">FIDES</span>
                  </h1>
                  <p className="text-xl font-mono tracking-widest text-gray-400 uppercase">Private Detektei</p>
                </div>
              </div>

              {/* Tagline with dramatic styling */}
              <div className="border-l-4 border-white pl-6">
                <p className="text-2xl font-serif italic text-gray-300 leading-relaxed">
                  „In den Schatten der Stadt
                  <br />
                  <span className="text-white font-bold">finden wir die Wahrheit.&rdquo;</span>
                </p>
              </div>

              {/* Services with classic icons */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Ermittlungen</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Überwachung</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Diskretion</p>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="font-serif text-lg px-8 py-6 shadow-2xl transition-all duration-300 border"
                    style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#A89A5A';
                      (e.target as HTMLElement).style.color = '#1A1612';
                      (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(194, 177, 109, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#C2B16D';
                      (e.target as HTMLElement).style.color = '#1A1612';
                      (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                    }}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Vertrauliche Beratung
                  </Button>
                </Link>
                <p className="text-sm font-mono text-gray-500 tracking-wide">
                  24/7 • Kostenlose Erstberatung • Absolute Verschwiegenheit
                </p>
              </div>
            </div>

            <div className="relative lg:flex lg:justify-center">
              <div className="relative max-w-sm mx-auto lg:max-w-md">
                {/* Multiple paper layers for depth */}
                <div className="absolute inset-0 bg-gray-200 transform rotate-1 shadow-lg rounded-sm opacity-60" />
                <div className="absolute inset-0 bg-gray-300 transform -rotate-1 shadow-lg rounded-sm opacity-40" />

                {/* Main case file document with wobble animation */}
                <div className="bg-white text-black p-6 md:p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300 relative rounded-sm animate-pulse hover:animate-none">
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
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-mono font-bold text-black tracking-tight">
                        FALLAKTE #2024-001
                      </h3>
                      <Badge className="bg-red-500 text-white font-mono text-xs px-2 py-1 rounded-sm">AKTIV</Badge>
                    </div>

                    {/* Case details with responsive layout */}
                    <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm">
                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Klient:</span>
                        <p className="text-red-600 font-bold">[VERTRAULICH]</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Art:</span>
                        <p className="text-black">Unternehmensermittlung</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Status:</span>
                        <p className="text-red-600 font-bold">Beweise gesichert</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Ermittler:</span>
                        <p className="text-black">Agent Johnson</p>
                      </div>

                      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-100 border-l-4 border-gray-600 rounded-sm">
                        <p className="text-xs italic text-gray-700 leading-relaxed">
                          &ldquo;Ein weiterer Fall mit Präzision und Diskretion gelöst. Die Wahrheit kommt immer ans Licht.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* GEHEIM stamp */}
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 border-2 border-red-600 rounded-full flex items-center justify-center transform rotate-12 bg-white">
                      <span className="text-red-600 font-bold text-xs">GEHEIM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              SPEZIALISIERUNGEN
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              ERMITTLUNGSDIENSTE
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Professionelle Ermittlungsdienste mit über 50 Jahren kombinierter Erfahrung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: "Private Ermittlungen",
                description: "Diskrete Ermittlungen einschließlich vermisster Personen, Untreue und Hintergrundprüfungen mit völliger Vertraulichkeit.",
                features: ["Vermisste Personen", "Untreue-Fälle", "Vermögenssuche", "Überwachung"],
                gradient: "from-gray-800/30 to-gray-700/15"
              },
              {
                icon: Building,
                title: "Unternehmenssicherheit", 
                description: "Umfassende Unternehmensermittlungen zum Schutz Ihrer Geschäftsinteressen und zur Gewährleistung der Arbeitsplatzintegrität.",
                features: ["Mitarbeiterprüfung", "Betrugserkennung", "Wirtschaftsspionage", "Due Diligence"],
                gradient: "from-slate-800/30 to-slate-700/15"
              },
              {
                icon: UserCheck,
                title: "Hintergrundprüfungen",
                description: "Umfassende Hintergrundüberprüfung für Beschäftigung, Mieterprüfung und persönliche Beziehungen.",
                features: ["Beschäftigungsscreening", "Mieterprüfung", "Persönliche Referenzen", "Strafregister"],
                gradient: "from-zinc-800/30 to-zinc-700/15"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                
                {/* Card with vintage paper styling */}
                <div className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/8 rounded-sm p-8 transition-all duration-500 ease-out shadow-lg hover:shadow-xl overflow-hidden`} onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)'}>
                  
                  {/* Vintage paper texture overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-800">
                    <div className="h-full w-full bg-amber-50/5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='2'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  
                  {/* Typewriter reveal effect */}
                  <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-800 ease-out opacity-10" />
                  
                  {/* Old-style corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200" style={{borderColor: 'rgba(254, 243, 198, 0.4)'}} />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-300" style={{borderColor: 'rgba(254, 243, 198, 0.4)'}} />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-400" style={{borderColor: 'rgba(254, 243, 198, 0.4)'}} />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-500" style={{borderColor: 'rgba(254, 243, 198, 0.4)'}} />
                  
                  {/* Vintage stamp effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-300">
                    <div className="w-12 h-8 border-2 border-dashed border-amber-200/50 flex items-center justify-center transform rotate-12">
                      <span className="text-[8px] font-mono font-bold" style={{color: 'rgba(254, 243, 198, 0.7)'}}>1965</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      {/* Vintage medallion style icon */}
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto mb-6 bg-white/8 rounded-full flex items-center justify-center transition-all duration-700 backdrop-blur-sm border border-white/10" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.2)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';}}>
                          <service.icon className="h-10 w-10 text-white/90 transition-colors duration-700" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)'} />
                        </div>
                        {/* Vintage circle decoration */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-200 animate-pulse" />
                      </div>
                      
                      {/* Title with typewriter effect */}
                      <h3 className="text-2xl font-serif font-bold text-white/95 mb-3 transition-colors duration-700 group-hover:tracking-wider" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.95)'}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description with fade-in */}
                    <p className="text-gray-300 font-mono text-sm text-center mb-6 leading-relaxed transition-all duration-700 opacity-90 group-hover:opacity-100" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                      {service.description}
                    </p>
                    
                    {/* Features list with staggered reveal */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-white/90 text-xs font-bold uppercase tracking-widest text-center border-b border-white/15 pb-2 transition-colors duration-700" onMouseEnter={(e) => {(e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'; (e.target as HTMLElement).style.color = '#FEF3C6';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.15)'; (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';}}>
                        Hauptdienste
                      </h4>
                      <ul className="text-xs font-mono text-gray-400 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center transition-all duration-700" style={{transitionDelay: `${featureIndex * 100}ms`}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 transition-colors duration-700" style={{transitionDelay: `${featureIndex * 100}ms`}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#C2B16D'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.6)'} />
                            <span className="tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Vintage file tab */}
                    <div className="absolute -top-2 left-8 w-16 h-6 border border-white/20 rounded-t opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)'}}>
                      <div className="text-[10px] font-mono text-center pt-1" style={{color: '#FEF3C6'}}>FILE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/95 to-black">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              VERTRAUEN & EXZELLENZ
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              WARUM BONA FIDES
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Jahrzehntelange Erfahrung, bewährte Ergebnisse und unerschütterliches Engagement für Integrität
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, number: "30+", label: "Ermittler", description: "Professionelle Detektive in unserem Team" },
              { icon: Award, number: "2,500+", label: "Gelöste Fälle", description: "Erfolgreich abgeschlossene Ermittlungen mit Ergebnissen" },
              { icon: Star, number: "98%", label: "Kundenzufriedenheit", description: "Kunden, die unsere Dienste weiterempfehlen würden" },
              { icon: Shield, number: "100%", label: "Vertraulich", description: "Alle Fälle werden mit völliger Diskretion behandelt" }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <metric.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {metric.number}
                </div>
                <h3 className="text-xl font-mono text-white mb-2 uppercase tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-sm font-mono text-gray-400">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Case Studies Section - Evidence Board Style */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              FALLARCHIV • KLASSIFIZIERT
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              GELÖSTE FÄLLE
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Ausgewählte Erfolgsgeschichten aus unserem Archiv – Jeder Fall ein Triumph der Wahrheit
            </p>
          </div>

          {/* Evidence Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                caseNumber: "1978-284",
                title: "Operation Midnight Rose",
                service: "Private Ermittlungen",
                description: "Vermisste Erbin nach 20 Jahren aufgespürt. Millionenschweres Erbe wiedervereinigt.",
                location: "Hamburg",
                duration: "6 Monate",
                classification: "VERTRAULICH"
              },
              {
                caseNumber: "1993-067",
                title: "Der Schatten im Vorstand",
                service: "Unternehmenssicherheit",
                description: "Wirtschaftsspionage in DAX-Konzern aufgedeckt. 50 Mio. € Schaden verhindert.",
                location: "Frankfurt",
                duration: "3 Monate",
                classification: "STRENG GEHEIM"
              },
              {
                caseNumber: "2008-451",
                title: "Die falsche Identität",
                service: "Hintergrundprüfungen",
                description: "Hochstapler mit gefälschten Zeugnissen entlarvt. Millionenbetrug verhindert.",
                location: "München",
                duration: "2 Wochen",
                classification: "VERTRAULICH"
              },
              {
                caseNumber: "1985-139",
                title: "Verschwundene Millionen",
                service: "Private Ermittlungen",
                description: "Versteckte Offshore-Konten aufgespürt. 15 Mio. € für Geschädigte sichergestellt.",
                location: "Berlin",
                duration: "8 Monate",
                classification: "GEHEIM"
              },
              {
                caseNumber: "2015-372",
                title: "Der unsichtbare Feind",
                service: "Unternehmenssicherheit",
                description: "Insider-Betrugsnetz in Pharmaunternehmen zerschlagen. Produktfälschungen gestoppt.",
                location: "Köln",
                duration: "4 Monate",
                classification: "STRENG GEHEIM"
              },
              {
                caseNumber: "2021-598",
                title: "Digitale Spuren",
                service: "Hintergrundprüfungen",
                description: "Cyberkrimineller Hintergrund von Führungskraft aufgedeckt. Datenschutz gewährleistet.",
                location: "Stuttgart",
                duration: "3 Wochen",
                classification: "VERTRAULICH"
              }
            ].map((caseFile, index) => (
              <div key={index} className="group relative">
                {/* Case File Folder */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(254, 243, 198, 0.1)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(194, 177, 109, 0.2)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';}}>
                  
                  {/* File Tab */}
                  <div className="bg-white/10 px-4 py-2 border-b border-white/20 transition-colors duration-500" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.2)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.3)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';}}>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-white font-bold tracking-widest transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                        AKTE {caseFile.caseNumber}
                      </span>
                      <div className="text-xs font-mono text-gray-300 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                        {caseFile.classification}
                      </div>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="p-6 space-y-4">
                    {/* Case Title with Typewriter Effect */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:tracking-wider transition-all duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                        {caseFile.title}
                      </h3>
                      <div className="inline-block bg-white/10 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-500" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.1)'; (e.target as HTMLElement).style.color = '#FEF3C6';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.color = 'white';}}>
                        {caseFile.service}
                      </div>
                    </div>

                    {/* Case Description */}
                    <p className="text-gray-300 font-mono text-sm leading-relaxed transition-colors duration-500 mb-6" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                      {caseFile.description}
                    </p>

                    {/* Case Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                      <div>
                        <div className="text-xs font-mono text-gray-400 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}> Ort:</div>
                        <div className="text-xs font-mono text-white transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>{caseFile.location}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}> Dauer:</div>
                        <div className="text-xs font-mono text-white transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>{caseFile.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right GELÖST Stamp */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform rotate-12 group-hover:rotate-6">
                    <div className="bg-red-600 text-white px-3 py-2 rounded-lg border-2 border-red-500 shadow-xl">
                      <span className="text-sm font-mono font-bold tracking-wide">GELÖST</span>
                    </div>
                  </div>

                  {/* Vintage Paper Clips */}
                  <div className="absolute top-2 left-2 w-8 h-4 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-400" />
                  <div className="absolute top-6 left-4 w-6 h-3 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-500" />

                  {/* Evidence String Effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-600" />
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Archive Footer */}
          <div className="text-center mt-16 p-6 backdrop-blur-sm border rounded-sm max-w-4xl mx-auto" style={{backgroundColor: 'rgba(254, 243, 198, 0.05)', borderColor: 'rgba(194, 177, 109, 0.2)'}}>
            <h3 className="text-2xl font-serif font-bold mb-3" style={{color: '#FEF3C6'}}>
              IHR FALL KÖNNTE DER NÄCHSTE SEIN
            </h3>
            <p className="font-mono text-gray-300 mb-4">
              Jeder Fall ist einzigartig. Jede Wahrheit verdient es, gefunden zu werden.
            </p>
            <div className="text-xs font-mono tracking-widest" style={{color: 'rgba(254, 243, 198, 0.7)'}}>
              • VERTRAULICH • PROFESSIONELL • ERFOLGREICH •
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              ZEUGENBERICHTE
            </Badge>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              KUNDENSTIMMEN
            </h2>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Vertrauen Sie nicht nur uns – hören Sie von denen, denen wir geholfen haben
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                initials: "M.K.",
                location: "Hamburg",
                caseType: "Untreue-Ermittlung",
                rating: 5,
                text: "Diskret, professionell und schnell. Die Wahrheit war schmerzhaft, aber notwendig. BONA FIDES hat mir geholfen, Klarheit zu finden.",
                date: "März 2024"
              },
              {
                initials: "T.S.",
                location: "Frankfurt",
                caseType: "Unternehmensbetrug",
                rating: 5,
                text: "Unglaubliche Detektivarbeit. Sie fanden Beweise, die wir für unmöglich hielten. Haben unserem Unternehmen Millionen gespart.",
                date: "Januar 2024"
              },
              {
                initials: "L.B.",
                location: "München",
                caseType: "Vermisste Person",
                rating: 5,
                text: "Nach 5 Jahren ohne Spur haben sie meinen Bruder gefunden. Ich bin für immer dankbar. Echte Profis mit Herz.",
                date: "Februar 2024"
              },
              {
                initials: "R.W.",
                location: "Berlin",
                caseType: "Hintergrundprüfung",
                rating: 5,
                text: "Gründlich, vertraulich und zuverlässig. Die Hintergrundprüfung war umfassend und hat uns vor einem kostspieligen Fehler bewahrt.",
                date: "April 2024"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 transition-all duration-700 hover:scale-105 shadow-2xl" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(254, 243, 198, 0.08)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(194, 177, 109, 0.25)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';}}>

                  {/* Vintage Paper Texture */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800">
                    <div className="h-full w-full bg-amber-50/5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='witnessTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='3'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23witnessTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6 italic transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="space-y-2 border-t border-white/20 pt-4 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.3)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-white font-bold text-sm transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                        {testimonial.initials}
                      </span>
                      <span className="font-mono text-gray-400 text-xs">
                        {testimonial.location}
                      </span>
                    </div>
                    <div className="font-mono text-gray-400 text-xs">
                      {testimonial.caseType}
                    </div>
                    <div className="font-mono text-gray-500 text-xs">
                      {testimonial.date}
                    </div>
                  </div>

                  {/* Vintage Stamp */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-70 transition-all duration-700 delay-200">
                    <div className="w-12 h-12 border-2 border-dashed rounded-full flex items-center justify-center transform -rotate-12" style={{borderColor: 'rgba(194, 177, 109, 0.5)'}}>
                      <span className="text-[10px] font-mono font-bold tracking-tight" style={{color: '#FEF3C6'}}>VERIFIZIERT</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              INFORMATIONEN
            </Badge>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              HÄUFIG GESTELLTE FRAGEN
            </h2>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Alles, was Sie über unsere Dienstleistungen wissen müssen
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Wie gewährleisten Sie absolute Vertraulichkeit?",
                answer: "Alle unsere Ermittler unterliegen strengen Verschwiegenheitspflichten und rechtlichen Bindungen. Wir verwenden verschlüsselte Kommunikation, sichere Dokumentenspeicherung und anonymisierte Berichterstattung. Ihre Privatsphäre ist unsere oberste Priorität."
              },
              {
                question: "Wie lange dauert eine durchschnittliche Ermittlung?",
                answer: "Die Dauer variiert je nach Komplexität des Falls. Einfache Hintergrundprüfungen können 1-2 Wochen dauern, während komplexe Unternehmensermittlungen 3-6 Monate benötigen können. Wir geben Ihnen nach der Erstberatung eine realistische Zeitschätzung."
              },
              {
                question: "Wie sind Ihre Preise strukturiert?",
                answer: "Wir bieten transparente Preisgestaltung basierend auf der Art und dem Umfang der Ermittlung. Sie erhalten ein detailliertes Angebot vor Beginn der Arbeit. Wir arbeiten mit Pauschalpreisen oder Stundensätzen, je nach Ihren Bedürfnissen. Kostenlose Erstberatung inklusive."
              },
              {
                question: "Welche Informationen benötigen Sie, um zu beginnen?",
                answer: "Für den Start benötigen wir grundlegende Informationen über Ihren Fall: Namen, Daten, Orte und spezifische Anliegen. Je mehr Details Sie uns geben können, desto effizienter können wir arbeiten. Alle Informationen werden streng vertraulich behandelt."
              },
              {
                question: "Sind Ihre Ermittlungsmethoden legal?",
                answer: "Ja, alle unsere Ermittler sind lizenziert und arbeiten innerhalb der gesetzlichen Grenzen. Wir halten uns strikt an deutsche Datenschutzgesetze (DSGVO) und verwenden nur rechtlich zulässige Methoden. Unsere Beweise sind vor Gericht verwertbar."
              },
              {
                question: "In welchen Regionen sind Sie tätig?",
                answer: "Wir operieren deutschlandweit mit Hauptbüros in Hamburg, Frankfurt, München und Berlin. Für internationale Fälle arbeiten wir mit einem weltweiten Netzwerk vertrauenswürdiger Partner zusammen. Kein Fall ist zu weit entfernt."
              },
              {
                question: "Wie erhalte ich meine Ermittlungsergebnisse?",
                answer: "Sie erhalten einen umfassenden, schriftlichen Bericht mit allen Erkenntnissen, Beweisen und Dokumentationen. Je nach Präferenz können wir auch persönliche Briefings durchführen. Alle Materialien werden sicher übermittelt und sind gerichtsfest aufbereitet."
              },
              {
                question: "Was passiert, wenn Sie keine Ergebnisse finden?",
                answer: "Wir sind ehrlich: Nicht jeder Fall führt zum gewünschten Ergebnis. Wenn keine Beweise gefunden werden, informieren wir Sie sofort und besprechen weitere Optionen. Viele Pauschalpreise beinhalten eine 'Kein Ergebnis, reduzierte Gebühr'-Garantie."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm transition-all duration-500 hover:bg-white/8" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.3)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'}>
                <details className="group/details">
                  <summary className="cursor-pointer p-6 font-mono text-white font-bold flex justify-between items-center transition-colors duration-500 hover:text-[#FEF3C6] list-none">
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <span className="ml-4 text-2xl transition-transform duration-300 group-open/details:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 font-mono text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
                  VERTRAULICHE BERATUNG
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                  KONTAKT
                </h2>
                
                <p className="text-lg font-mono text-gray-300">
                  Bereit für Antworten? Kontaktieren Sie uns für eine kostenlose, vertrauliche Beratung.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-white mb-1 uppercase tracking-wide">
                        24/7 Hotline
                      </h3>
                      <p className="font-mono text-white mb-2 text-xl">
                        (555) 123-CASE
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Notfall-Ermittlungen verfügbar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-white mb-1 uppercase tracking-wide">
                        Sichere E-Mail
                      </h3>
                      <p className="font-mono text-white mb-2">
                        info@bonafides.agency
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Verschlüsselte Kommunikation verfügbar
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Security Notice */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                <h4 className="flex items-center font-mono text-white mb-4 uppercase tracking-wide">
                  <Lock className="mr-2 h-5 w-5" />
                  SICHERHEIT & VERTRAULICHKEIT
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Alle Kommunikationen sind verschlüsselt und vertraulich</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Anwalt-Mandant-Privileg gilt für alle Beratungen</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Ihre Falldetails bleiben streng vertraulich</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {/* Multiple paper layers for depth */}
              <div className="absolute inset-0 bg-gray-200 transform rotate-1 shadow-lg rounded-sm opacity-60" />
              <div className="absolute inset-0 bg-gray-300 transform -rotate-1 shadow-lg rounded-sm opacity-40" />

              {/* Main case file document */}
              <div className="bg-white text-black p-10 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300 relative rounded-sm min-h-[600px]">

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
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-mono font-bold text-black tracking-tight">
                      VERTRAULICHE FALLANFRAGE
                    </h3>
                    <Badge className="bg-red-500 text-white font-mono text-xs px-2 py-1 rounded-sm">
                      {formStatus === 'success' ? 'ÜBERMITTELT' : 'VERTRAULICH'}
                    </Badge>
                  </div>

                  {formStatus === 'success' ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="h-16 w-16 mx-auto text-green-600 mb-4" />
                      <h4 className="text-lg font-mono font-bold text-green-600 mb-2">FALL REGISTRIERT</h4>
                      <p className="font-mono text-sm text-gray-700">
                        Ihr Auftrag wurde sicher übermittelt. Ein Ermittler kontaktiert Sie binnen 24 Stunden.
                      </p>
                    </div>
                  ) : formStatus === 'error' ? (
                    <div className="text-center py-8">
                      <AlertCircle className="h-16 w-16 mx-auto text-red-600 mb-4" />
                      <h4 className="text-lg font-mono font-bold text-red-600 mb-2">ÜBERTRAGUNG FEHLGESCHLAGEN</h4>
                      <p className="font-mono text-sm text-gray-700">
                        Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
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

                      <div className="pt-6 border-t border-gray-300">
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
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center transform rotate-12 bg-white">
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
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-12 md:p-16 relative overflow-hidden">

            {/* Dramatic lighting effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl" />

            <div className="relative z-10 space-y-8">
              <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.3)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.4)'}}>
                BEREIT FÜR ANTWORTEN?
              </Badge>

              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Die Wahrheit wartet nicht.
                <br />
                <span className="text-gray-300">Handeln Sie jetzt.</span>
              </h2>

              <p className="text-xl md:text-2xl font-mono text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Jeder Tag ohne Antworten ist ein verlorener Tag. Unsere Ermittler stehen bereit, Ihren Fall mit Diskretion und Professionalität zu lösen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="font-serif text-xl px-10 py-7 shadow-2xl transition-all duration-300 border-2"
                    style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#FEF3C6';
                      (e.target as HTMLElement).style.color = '#1A1612';
                      (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(194, 177, 109, 0.5)';
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#C2B16D';
                      (e.target as HTMLElement).style.color = '#1A1612';
                      (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Jetzt Kontaktieren
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-mono text-lg px-10 py-7 border-2 transition-all duration-300"
                    style={{backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)'}}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      (e.target as HTMLElement).style.borderColor = '#C2B16D';
                      (e.target as HTMLElement).style.color = '#FEF3C6';
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      (e.target as HTMLElement).style.color = 'white';
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Sichere E-Mail
                  </Button>
                </Link>
              </div>

              <div className="pt-6 border-t border-white/20 mt-8">
                <p className="font-mono text-sm text-gray-400 tracking-widest">
                  24/7 VERFÜGBAR • KOSTENLOSE ERSTBERATUNG • ABSOLUTE DISKRETION
                </p>
              </div>

              {/* Vintage seal decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-dashed rounded-full flex items-center justify-center opacity-20" style={{borderColor: '#C2B16D'}}>
                <div className="text-center">
                  <div className="text-xs font-mono font-bold" style={{color: '#FEF3C6'}}>EST.</div>
                  <div className="text-2xl font-serif font-bold" style={{color: '#FEF3C6'}}>1965</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">
                BONA FIDES
              </h3>
              <p className="font-mono text-sm text-gray-400 leading-relaxed">
                Private Detektei seit 1965. Lizenziert, versichert und auf Ergebnisse ausgerichtet.
              </p>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-white" />
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wide">
                  Zertifiziert & Versichert
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-mono text-white font-bold uppercase tracking-wide text-sm">
                Services
              </h4>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Private Ermittlungen
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Unternehmenssicherheit
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Hintergrundprüfungen
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Überwachung
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-mono text-white font-bold uppercase tracking-wide text-sm">
                Unternehmen
              </h4>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Über uns
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Unser Team
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Karriere
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Kontakt
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-mono text-white font-bold uppercase tracking-wide text-sm">
                Kontakt
              </h4>
              <ul className="space-y-3 font-mono text-sm text-gray-400">
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 shrink-0" />
                  <span>(555) 123-CASE</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 shrink-0" />
                  <span>info@bonafides.agency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Building className="h-4 w-4 mt-1 shrink-0" />
                  <span>Deutschlandweit tätig</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-mono text-xs text-gray-500">
                © 2024 BONA FIDES Private Detektei. Alle Rechte vorbehalten.
              </p>
              <div className="flex space-x-6 font-mono text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Datenschutz
                </a>
                <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  Impressum
                </a>
                <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                  AGB
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}
