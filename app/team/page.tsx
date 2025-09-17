"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Search, Shield, Eye, Building, FileX, UserCheck, Camera, Award, Users, Clock, Star, MapPin, Mail, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <nav className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                <h2 className="text-2xl font-serif font-bold text-white">BONA FIDES</h2>
                <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">Detective Agency</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Home
              </Link>
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Services
              </button>
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                About
              </button>
              <button className="text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Team
              </button>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-200 font-mono text-xs uppercase tracking-wide"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-8 py-16">
          {/* Header */}
          <div className="text-center space-y-6 mb-20">
            <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wide mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Startseite</span>
            </Link>
            
            <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
              DIE ERMITTLER
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              UNSER TEAM
            </h1>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Erfahrene Ermittler mit jahrzehntelanger Expertise in komplexen Fällen
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Klaus Hoffmann",
                title: "Leitender Ermittler",
                speciality: "Unternehmensermittlungen",
                experience: "25 Jahre",
                cases: "850+",
                background: "Ex-Kriminalpolizei Hamburg",
                skills: ["Wirtschaftskriminalität", "Forensik", "Überwachung", "Zeugenbefragung"],
                quote: "„Die Wahrheit verbirgt sich oft in den Details, die andere übersehen.""
              },
              {
                name: "Dr. Sarah Müller",
                title: "Forensische Expertin",
                speciality: "Digitale Ermittlungen",
                experience: "15 Jahre",
                cases: "600+",
                background: "Informatik PhD, Ex-BKA",
                skills: ["Cyber-Forensik", "Datenwiederherstellung", "Digitale Überwachung", "IT-Sicherheit"],
                quote: "„In der digitalen Welt hinterlässt jeder Spuren - man muss nur wissen, wo man sucht.""
              },
              {
                name: "Michael Weber",
                title: "Personenermittler",
                speciality: "Vermisste Personen",
                experience: "20 Jahre",
                cases: "1200+",
                background: "Ex-Bundespolizei Berlin",
                skills: ["Personensuche", "Observation", "Befragungstechniken", "Soziale Netzwerke"],
                quote: "„Jede Person hat Verbindungen. Meine Aufgabe ist es, diese zu finden.""
              },
              {
                name: "Isabella Rossi",
                title: "Undercover Spezialistin",
                speciality: "Verdeckte Ermittlungen",
                experience: "18 Jahre",
                cases: "450+",
                background: "Ex-Verfassungsschutz",
                skills: ["Verdeckte Operationen", "Soziale Manipulation", "Psychologie", "Infiltration"],
                quote: "„Die beste Tarnung ist die, die niemandem auffällt.""
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                {/* Detective File Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(254, 243, 198, 0.1)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.4)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(194, 177, 109, 0.2)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';}}>
                  
                  {/* File Tab */}
                  <div className="bg-white/10 px-4 py-2 border-b border-white/20 transition-colors duration-500" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.2)'; (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.3)';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';}}>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-white font-bold tracking-widest transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                        AGENT ID: {String(index + 1).padStart(3, '0')}
                      </span>
                      <div className="text-xs font-mono text-gray-300 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                        AKTIV
                      </div>
                    </div>
                  </div>

                  {/* Member Content */}
                  <div className="p-8 space-y-6">
                    {/* Name and Title */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-serif font-bold text-white group-hover:tracking-wider transition-all duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                        {member.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-block bg-white/10 text-white px-3 py-1 rounded text-sm font-mono transition-colors duration-500" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.1)'; (e.target as HTMLElement).style.color = '#FEF3C6';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.color = 'white';}}>
                          {member.title}
                        </div>
                        <div className="inline-block bg-white/10 text-white px-3 py-1 rounded text-sm font-mono transition-colors duration-500" onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(194, 177, 109, 0.1)'; (e.target as HTMLElement).style.color = '#FEF3C6';}} onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; (e.target as HTMLElement).style.color = 'white';}}>
                          {member.speciality}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/20 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                      <div>
                        <div className="text-xs font-mono text-gray-400 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>Erfahrung:</div>
                        <div className="text-sm font-mono text-white transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>{member.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.7)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>Gelöste Fälle:</div>
                        <div className="text-sm font-mono text-white transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>{member.cases}</div>
                      </div>
                    </div>

                    {/* Background */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-white/90 font-bold uppercase tracking-wide">Hintergrund</h4>
                      <p className="text-sm font-mono text-gray-300 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                        {member.background}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-mono text-white/90 font-bold uppercase tracking-wide">Expertise</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center text-xs font-mono text-gray-400 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#C2B16D'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.6)'} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="pt-4 border-t border-white/20 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(194, 177, 109, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                      <p className="text-sm font-mono italic text-gray-300 transition-colors duration-500" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgba(254, 243, 198, 0.8)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(209, 213, 219)'}>
                        {member.quote}
                      </p>
                    </div>

                    {/* Classified Stamp */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform rotate-12 group-hover:rotate-6">
                      <div className="bg-red-600 text-white px-3 py-2 rounded-lg border-2 border-red-500 shadow-xl">
                        <span className="text-xs font-mono font-bold tracking-wide">GEHEIM</span>
                      </div>
                    </div>
                  </div>

                  {/* Vintage Paper Clips */}
                  <div className="absolute top-4 left-4 w-8 h-4 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-400" />
                  <div className="absolute top-8 left-6 w-6 h-3 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20 p-8 backdrop-blur-sm border rounded-sm max-w-4xl mx-auto" style={{backgroundColor: 'rgba(254, 243, 198, 0.05)', borderColor: 'rgba(194, 177, 109, 0.2)'}}>
            <h3 className="text-3xl font-serif font-bold mb-4" style={{color: '#FEF3C6'}}>
              BEREIT FÜR IHREN FALL?
            </h3>
            <p className="font-mono text-gray-300 mb-6">
              Unser erfahrenes Team steht bereit, Ihnen bei komplexesten Ermittlungen zu helfen.
            </p>
            <Link href="/">
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
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}