"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Lock, Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  urgency: z.string().min(1, "Please select urgency level"),
  message: z.string().min(20, "Please provide more details about your case (minimum 20 characters)")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-case-file/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-detective-blue/10 text-detective-blue px-4 py-2 rounded-full font-crimson text-sm border border-detective-blue/20">
                Confidential Consultation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-special-elite text-investigation-brown">
                GET IN TOUCH
              </h2>
              
              <p className="text-lg font-playfair text-charcoal">
                Ready to get answers? Contact us for a free, confidential consultation about your investigation needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="border-detective-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-detective-blue/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-detective-blue" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-investigation-brown mb-1">
                        24/7 Hotline
                      </h3>
                      <p className="font-crimson text-charcoal mb-2">
                        (555) 123-CASE
                      </p>
                      <p className="font-crimson text-sm text-charcoal/70">
                        Emergency investigations available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-detective-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-detective-blue/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-detective-blue" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-investigation-brown mb-1">
                        Secure Email
                      </h3>
                      <p className="font-crimson text-charcoal mb-2">
                        info@bonafides.agency
                      </p>
                      <p className="font-crimson text-sm text-charcoal/70">
                        Encrypted communication available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-detective-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-detective-blue/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-detective-blue" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-investigation-brown mb-1">
                        Office Location
                      </h3>
                      <p className="font-crimson text-charcoal mb-2">
                        123 Detective Street<br />
                        Investigation City, IC 12345
                      </p>
                      <p className="font-crimson text-sm text-charcoal/70">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Notice */}
            <Card className="bg-gradient-to-r from-charcoal to-investigation-brown text-case-file border-0">
              <CardHeader>
                <CardTitle className="flex items-center font-special-elite">
                  <Lock className="mr-2 h-5 w-5" />
                  SECURITY & CONFIDENTIALITY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-crimson">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-detective-blue shrink-0" />
                    <p className="text-sm">All communications are encrypted and confidential</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-detective-blue shrink-0" />
                    <p className="text-sm">Attorney-client privilege applies to all consultations</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-detective-blue shrink-0" />
                    <p className="text-sm">Your case details remain strictly confidential</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-investigation-brown/20">
              <CardHeader>
                <CardTitle className="font-special-elite text-investigation-brown text-xl">
                  CONFIDENTIAL CASE INQUIRY
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-crimson">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="border-investigation-brown/30"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-crimson">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="border-investigation-brown/30"
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-crimson">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="border-investigation-brown/30"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType" className="font-crimson">Service Type *</Label>
                        <Select onValueChange={(value) => setValue("serviceType", value)}>
                          <SelectTrigger className="border-investigation-brown/30">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">Private Investigation</SelectItem>
                            <SelectItem value="corporate">Corporate Security</SelectItem>
                            <SelectItem value="insurance">Insurance Claims</SelectItem>
                            <SelectItem value="background">Background Check</SelectItem>
                            <SelectItem value="surveillance">Surveillance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serviceType && (
                          <p className="text-destructive text-sm">{errors.serviceType.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency" className="font-crimson">Urgency Level *</Label>
                        <Select onValueChange={(value) => setValue("urgency", value)}>
                          <SelectTrigger className="border-investigation-brown/30">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Standard (1-2 weeks)</SelectItem>
                            <SelectItem value="medium">Urgent (3-7 days)</SelectItem>
                            <SelectItem value="high">Emergency (24-48 hours)</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.urgency && (
                          <p className="text-destructive text-sm">{errors.urgency.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-crimson">Case Details *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Please provide details about your investigation needs. All information is kept strictly confidential."
                        rows={4}
                        className="border-investigation-brown/30"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-detective-blue hover:bg-detective-blue/90 text-white font-crimson text-lg py-3 h-auto"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full mr-2" />
                          Sending Securely...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Confidential Inquiry
                        </div>
                      )}
                    </Button>

                    <div className="text-xs text-charcoal/70 font-crimson text-center">
                      <Lock className="inline h-3 w-3 mr-1" />
                      This form is encrypted and your information is protected by attorney-client privilege
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-playfair text-lg mb-2">Message Sent Securely</h3>
                      <p className="font-crimson text-sm">
                        We&rsquo;ve received your confidential inquiry and will contact you within 2-4 hours 
                        to discuss your case.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}