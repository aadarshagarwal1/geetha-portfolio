import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import bepecDsCertificate from "@/assets/certificates/BEPEC DS Certificate.pdf";
import bepecInternshipCertificate from "@/assets/certificates/Internship.pdf";
import bmcCertificate from "@/assets/certificates/BMC_certificate_of_completion.pdf";

const EducationSection = () => {
  const education = [
    {
      institution: "University College Dublin, Dublin, Ireland",
      degree: "Master of Science, Business Analytics",
      dates: "2024 – 2025",
      grade: "",
      coursework: [
        "Programming for Analytics",
        "Statistical Methods",
        "Business Decision Support Systems"
      ]
    },
    {
      institution: "CMR College of Engineering & Technology, India",
      degree: "B.Tech, Mechanical Engineering", 
      dates: "2017 – 2021",
      grade: "",
      coursework: []
    }
  ];

  const certifications = [
    {
      title: "Bloomberg — Finance Fundamentals, Market Concepts, ESG",
      issuer: "Bloomberg for Education",
      date: "",
      file: bmcCertificate,
    },
    {
      title: "Applied Data Science using Python",
      issuer: "Professional Certification",
      date: "",
      file: "",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "",
      file: "",
    },
    {
      title: "Data Science Program with Business Use-Cases",
      issuer: "BEPEC Solutions Pvt. Ltd.",
      date: "Apr 2022",
      file: bepecDsCertificate,
    },
    {
      title: "Data Science Internship",
      issuer: "BEPEC Solutions Pvt. Ltd.",
      date: "Aug 2021 – Apr 2022",
      file: bepecInternshipCertificate,
    },
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic background in business analytics and mechanical engineering
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex}
                            variant="secondary"
                            className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => {
                const certCard = (
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-foreground mb-2">
                        {cert.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {cert.issuer}
                      </p>
                      {cert.date && (
                        <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                      )}
                    </CardHeader>
                  </Card>
                );

                return cert.file ? (
                  <a
                    key={index}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    {certCard}
                  </a>
                ) : (
                  <div key={index}>{certCard}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;