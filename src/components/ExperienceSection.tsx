import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Design Engineer",
      company: "Capgemini Technology Services India Limited",
      location: "India",
      dates: "Apr 2022 – Aug 2024",
      responsibilities: [
        "Delivered structural design solutions for Airbus programmes (A320, A330, A350, A380) by collaborating with 20+ cross-functional team members across India, Spain, and Germany, ensuring quality compliance and on-time delivery of high-value contracts.",
        "Managed and maintained structured design data–including bills of materials, engineering change records, and configuration datasets–across multiple aircraft programmes, ensuring 100% accuracy and traceability throughout the project lifecycle.",
        "Engineered a VBA automation script to eliminate manual inefficiencies in the installation quality check process, reducing review time by ~40% and improving output accuracy for the team.",
        "Analyzed complex design datasets to identify structural optimization opportunities, translating findings into actionable recommendations for internal teams and Airbus stakeholders, supporting cost and weight reduction initiatives.",
        "Validated design changes and managed engineering documentation in coordination with internal and Airbus client teams, building strong cross-cultural relationships and supporting seamless international project delivery.",
        "Trained 3 new team members on design processes, CATIA V5, and Airbus standards, accelerating onboarding and maintaining quality standards.",
        "Received recognition from senior stakeholders for delivering work quality on par with experienced engineers as a fresher, demonstrating rapid learning and technical excellence."
      ]
    },
    {
      title: "Data Analyst Trainee",
      company: "BEPEC Solutions Pvt. Ltd",
      location: "India",
      dates: "Aug 2021 – Apr 2022",
      responsibilities: [
        "Completed an intensive data analytics program, delivering real-world projects in data cleaning, exploratory analysis, and predictive modeling using Python and SQL.",
        "Developed interactive Tableau dashboards and visual reports, communicating data-driven insights to technical and non-technical audiences.",
        "Built and evaluated predictive models–including Logistic Regression, Decision Trees, and Random Forest–using performance metrics to assess model accuracy and business relevance."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional experience in data-driven engineering, analytics, and process automation
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                          {exp.dates}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;