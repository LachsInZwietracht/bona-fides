import { Search, Shield, Eye, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-case-file to-case-file/60 min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-8 h-full">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="flex flex-col justify-center items-center space-y-8">
              <Search className="h-8 w-8 text-investigation-brown" />
              <Shield className="h-8 w-8 text-detective-blue" />
              <Eye className="h-8 w-8 text-retro-accent" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-detective-blue/10 text-detective-blue px-4 py-2 rounded-full font-crimson text-sm border border-detective-blue/20">
                ✓ Licensed & Insured Since 1965
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-special-elite text-investigation-brown leading-none">
                BONA
                <br />
                <span className="text-detective-blue">FIDES</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-playfair text-charcoal">
                Detective Agency
              </h2>
              
              <p className="text-lg md:text-xl font-crimson text-charcoal/80 leading-relaxed max-w-lg">
                Professional investigation services with integrity, discretion, and results. 
                We uncover the truth when it matters most.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-detective-blue hover:bg-detective-blue/90 text-white font-crimson text-lg px-8 py-3 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-investigation-brown text-investigation-brown hover:bg-investigation-brown hover:text-case-file font-crimson text-lg px-8 py-3 h-auto"
              >
                View Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-detective-blue" />
                <span className="font-crimson text-sm text-charcoal">Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-detective-blue" />
                <span className="font-crimson text-sm text-charcoal">Professional</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-detective-blue" />
                <span className="font-crimson text-sm text-charcoal">Results Driven</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-investigation-brown to-charcoal rounded-lg p-8 shadow-2xl border-4 border-retro-accent/30">
              <div className="bg-case-file p-6 rounded shadow-inner">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-special-elite text-investigation-brown text-xl">
                      CASE FILE #2024-001
                    </h3>
                    <div className="bg-detective-blue text-white px-3 py-1 rounded font-crimson text-sm">
                      ACTIVE
                    </div>
                  </div>
                  
                  <div className="space-y-3 font-crimson text-charcoal">
                    <div className="flex">
                      <span className="w-20 text-investigation-brown font-semibold">Client:</span>
                      <span>[REDACTED]</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-investigation-brown font-semibold">Type:</span>
                      <span>Corporate Investigation</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-investigation-brown font-semibold">Status:</span>
                      <span className="text-detective-blue">Evidence Secured</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-investigation-brown font-semibold">Lead:</span>
                      <span>Agent Johnson</span>
                    </div>
                  </div>

                  <div className="border-t border-investigation-brown/20 pt-3">
                    <p className="font-crimson text-sm text-charcoal/70 italic">
                      &ldquo;Another case solved with precision and discretion. 
                      The truth always comes to light.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}