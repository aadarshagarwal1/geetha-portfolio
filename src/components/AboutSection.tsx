import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, GraduationCap, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "MSc Business Analytics" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
    { icon: Award, label: "Sectors", value: "Aviation, Insurance & IT Consulting" },
  ];

  const contactInfo = [
    { icon: Phone, value: "+353-899847661", href: "tel:+353899847661" },
    { icon: Mail, value: "boda.geetha9@gmail.com", href: "mailto:boda.geetha9@gmail.com" },
    { icon: Linkedin, value: "linkedin.com/in/geethaboda", href: "https://www.linkedin.com/in/geethaboda/" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Data Analytics professional with 2+ years of experience bridging aerospace engineering and data analytics, with hands-on expertise in Python, SQL, Power BI, and Tableau. Holding an MSc in Business Analytics with proven ability in building predictive models, automating workflows, and delivering measurable impact including a 40% reduction in process review time across 4 Airbus programmes. Skilled in translating complex technical challenges into clear, data-driven business solutions across Aviation, Insurance, and IT consulting sectors.
              </p>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.icon === Linkedin ? "_blank" : undefined}
                    rel={contact.icon === Linkedin ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200 no-underline"
                  >
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span className="text-foreground font-medium hover:text-[hsl(var(--primary))]">{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Facts Sidebar - Takes 1/3 of the space */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick Facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}:
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;