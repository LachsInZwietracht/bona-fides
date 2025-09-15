import { Search, Building, FileX, UserCheck, Camera, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Private Investigations",
    description: "Discreet personal investigations including missing persons, infidelity, and background checks with complete confidentiality.",
    features: ["Missing Persons", "Infidelity Cases", "Asset Searches", "Surveillance"]
  },
  {
    icon: Building,
    title: "Corporate Security",
    description: "Comprehensive corporate investigation services to protect your business interests and ensure workplace integrity.",
    features: ["Employee Screening", "Fraud Detection", "Corporate Espionage", "Due Diligence"]
  },
  {
    icon: FileX,
    title: "Insurance Claims",
    description: "Thorough insurance claim investigations to verify legitimacy and prevent fraudulent claims with detailed reporting.",
    features: ["Workers Comp", "Auto Accidents", "Property Claims", "Disability Fraud"]
  },
  {
    icon: UserCheck,
    title: "Background Checks",
    description: "Comprehensive background verification services for employment, tenant screening, and personal relationships.",
    features: ["Employment Screening", "Tenant Verification", "Personal References", "Criminal History"]
  },
  {
    icon: Camera,
    title: "Surveillance Services",
    description: "Professional surveillance operations with state-of-the-art equipment and experienced investigators.",
    features: ["Video Documentation", "Photo Evidence", "Activity Reports", "Court Testimony"]
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description: "Expert security assessments and recommendations to protect your personal and business assets.",
    features: ["Risk Assessment", "Security Planning", "Threat Analysis", "Safety Protocols"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-case-file/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-detective-blue/10 text-detective-blue px-4 py-2 rounded-full font-crimson text-sm border border-detective-blue/20">
            Our Specializations
          </div>
          
          <h2 className="text-4xl md:text-5xl font-special-elite text-investigation-brown">
            INVESTIGATION SERVICES
          </h2>
          
          <p className="text-lg font-playfair text-charcoal max-w-3xl mx-auto">
            Professional investigation services tailored to your specific needs with over 50 years of combined experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-investigation-brown/20 bg-white hover:bg-case-file/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-detective-blue/10 rounded-full flex items-center justify-center group-hover:bg-detective-blue/20 transition-colors">
                  <service.icon className="h-8 w-8 text-detective-blue" />
                </div>
                <CardTitle className="text-xl font-playfair text-investigation-brown">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-charcoal/80 font-crimson text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-playfair text-investigation-brown text-sm font-semibold">
                    Key Services:
                  </h4>
                  <ul className="text-sm font-crimson text-charcoal/70 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-detective-blue rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-investigation-brown to-charcoal rounded-xl p-8 text-case-file">
          <h3 className="text-2xl md:text-3xl font-special-elite mb-4">
            NEED A CUSTOM INVESTIGATION?
          </h3>
          <p className="text-lg font-crimson mb-6 opacity-90 max-w-2xl mx-auto">
            Every case is unique. Contact us to discuss your specific investigation needs 
            and receive a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-detective-blue hover:bg-detective-blue/90 text-white font-crimson"
            >
              Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-case-file text-case-file hover:bg-case-file hover:text-investigation-brown font-crimson"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}