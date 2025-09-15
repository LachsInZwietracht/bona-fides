import { Shield, Award, Users, Clock, Lock, Star } from "lucide-react";

const trustMetrics = [
  {
    icon: Clock,
    number: "50+",
    label: "Years Experience",
    description: "Combined investigative experience across our team"
  },
  {
    icon: Users,
    number: "2,500+",
    label: "Cases Solved",
    description: "Successfully closed investigations with results"
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
    description: "Clients who would recommend our services"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Confidential",
    description: "All cases handled with complete discretion"
  }
];

const certifications = [
  {
    icon: Award,
    title: "Licensed Private Investigators",
    description: "All investigators are state-licensed and certified"
  },
  {
    icon: Shield,
    title: "Bonded & Insured",
    description: "Full professional liability and bonding coverage"
  },
  {
    icon: Lock,
    title: "Confidentiality Guaranteed",
    description: "Attorney-client privilege and NDAs on all cases"
  },
  {
    icon: Users,
    title: "Professional Associations",
    description: "Members of national and state PI associations"
  }
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-case-file/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-retro-accent/10 text-retro-accent px-4 py-2 rounded-full font-crimson text-sm border border-retro-accent/20">
            Trusted Excellence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-special-elite text-investigation-brown">
            WHY CHOOSE BONA FIDES
          </h2>
          
          <p className="text-lg font-playfair text-charcoal max-w-3xl mx-auto">
            Decades of experience, proven results, and unwavering commitment to integrity and discretion
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-detective-blue/10 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-detective-blue/20 transition-colors">
                <metric.icon className="h-10 w-10 text-detective-blue" />
              </div>
              <div className="text-4xl md:text-5xl font-special-elite text-investigation-brown mb-2">
                {metric.number}
              </div>
              <h3 className="text-xl font-playfair text-charcoal mb-2">
                {metric.label}
              </h3>
              <p className="text-sm font-crimson text-charcoal/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications & Guarantees */}
        <div className="bg-gradient-to-r from-charcoal to-investigation-brown rounded-2xl p-8 md:p-12 text-case-file">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-special-elite mb-4">
              PROFESSIONAL CREDENTIALS
            </h3>
            <p className="text-lg font-playfair opacity-90 max-w-2xl mx-auto">
              Your trust is our foundation. We maintain the highest professional standards in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-case-file/10 rounded-lg border border-case-file/20">
                <div className="bg-detective-blue/20 p-3 rounded-lg shrink-0">
                  <cert.icon className="h-6 w-6 text-case-file" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair mb-2">
                    {cert.title}
                  </h4>
                  <p className="font-crimson text-case-file/80 text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Statement */}
          <div className="mt-12 text-center p-8 bg-case-file/5 rounded-xl border border-case-file/10">
            <div className="bg-retro-accent/20 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-retro-accent" />
            </div>
            <h4 className="text-2xl font-special-elite mb-4 text-retro-accent">
              OUR GUARANTEE
            </h4>
            <p className="font-crimson text-lg leading-relaxed max-w-3xl mx-auto">
              &ldquo;We stand behind every investigation with our reputation. If we cannot deliver the results 
              you need within the agreed timeline, we&rsquo;ll continue working at no additional charge 
              until the case is resolved satisfactorily.&rdquo;
            </p>
            <div className="mt-4 font-playfair text-retro-accent">
              — Chief Investigator, Bona Fides Detective Agency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}