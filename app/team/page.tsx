'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    id: '001',
    name: 'Klaus Hoffmann',
    title: 'Leitender Ermittler',
    speciality: 'Unternehmensermittlungen',
    experience: '25 Jahre',
    cases: '850+',
    background: 'Ex-Kriminalpolizei Hamburg',
    quote: '„Die Wahrheit verbirgt sich oft in den Details, die andere übersehen."'
  },
  {
    id: '002',
    name: 'Dr. Sarah Müller',
    title: 'Forensische Expertin',
    speciality: 'Digitale Ermittlungen',
    experience: '15 Jahre',
    cases: '600+',
    background: 'Informatik PhD, Ex-BKA',
    quote: '„In der digitalen Welt hinterlässt jeder Spuren - man muss nur wissen, wo man sucht."'
  },
  {
    id: '003',
    name: 'Michael Weber',
    title: 'Personenermittler',
    speciality: 'Vermisste Personen',
    experience: '20 Jahre',
    cases: '1200+',
    background: 'Ex-Bundespolizei Berlin',
    quote: '„Jede Person hat Verbindungen. Meine Aufgabe ist es, diese zu finden."'
  },
  {
    id: '004',
    name: 'Isabella Rossi',
    title: 'Undercover Spezialistin',
    speciality: 'Verdeckte Ermittlungen',
    experience: '18 Jahre',
    cases: '450+',
    background: 'Ex-Verfassungsschutz',
    quote: '„Die beste Tarnung ist die, die niemandem auffällt."'
  }
];

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

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-8 py-16">
          <div className="text-center space-y-6 mb-20">
            <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wide mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Startseite</span>
            </Link>
            
            <Badge 
              className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" 
              style={{
                backgroundColor: 'rgba(194, 177, 109, 0.2)', 
                color: '#FEF3C6', 
                borderColor: 'rgba(194, 177, 109, 0.3)'
              }}
            >
              DIE ERMITTLER
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              UNSER TEAM
            </h1>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Erfahrene Ermittler mit jahrzehntelanger Expertise in komplexen Fällen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl">
                  <div className="bg-white/10 px-4 py-2 border-b border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-white font-bold tracking-widest">
                        AGENT ID: {member.id}
                      </span>
                      <div className="text-xs font-mono text-gray-300">
                        AKTIV
                      </div>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-serif font-bold text-white group-hover:tracking-wider transition-all duration-500">
                        {member.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-block bg-white/10 text-white px-3 py-1 rounded text-sm font-mono">
                          {member.title}
                        </div>
                        <div className="inline-block bg-white/10 text-white px-3 py-1 rounded text-sm font-mono">
                          {member.speciality}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/20">
                      <div>
                        <div className="text-xs font-mono text-gray-400">Erfahrung:</div>
                        <div className="text-sm font-mono text-white">{member.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400">Gelöste Fälle:</div>
                        <div className="text-sm font-mono text-white">{member.cases}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-mono text-white/90 font-bold uppercase tracking-wide">Hintergrund</h4>
                      <p className="text-sm font-mono text-gray-300">
                        {member.background}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm font-mono italic text-gray-300">
                        {member.quote}
                      </p>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform rotate-12 group-hover:rotate-6">
                      <div className="bg-red-600 text-white px-3 py-2 rounded-lg border-2 border-red-500 shadow-xl">
                        <span className="text-xs font-mono font-bold tracking-wide">GEHEIM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="text-center mt-20 p-8 backdrop-blur-sm border rounded-sm max-w-4xl mx-auto" 
            style={{
              backgroundColor: 'rgba(254, 243, 198, 0.05)', 
              borderColor: 'rgba(194, 177, 109, 0.2)'
            }}
          >
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
                style={{
                  backgroundColor: '#C2B16D', 
                  color: '#1A1612', 
                  borderColor: '#C2B16D'
                }}
              >
                <Phone className="mr-3 h-5 w-5" />
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}