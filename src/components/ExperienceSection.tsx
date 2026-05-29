import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Analyst",
      company: "Capgemini Technology Services India Limited",
      location: "India",
      dates: "Apr 2022 – Aug 2024",
      responsibilities: [
        "Analysed design requirements and collaborated with 20+ engineers across India, Spain, and Germany to deliver 50+ structural solutions across 4 Airbus programmes (A320, A330, A350, A380) covering MSN 700 & 701, achieving an ~80% on-time delivery rate.",
        "Developed a VBA automation script to streamline installation quality checks across datasets of ~85 records and 17 fields, reducing review time by ~40% (saving ~35 mins per check) and eliminating manual inefficiencies for a team of 8–9 engineers.",
        "Analysed 30+ structural design datasets on the A380 programme to identify cost and weight reduction opportunities, presenting findings as clear recommendations to internal engineering teams and Airbus stakeholders.",
        "Performed quality analysis on 100+ structural design changes using CATIA V5, identifying and resolving 10–20 critical errors against Airbus standards to prevent downstream rework and ensuring accurate documentation releases.",
        "Managed and maintained structured design data–including bills of materials, engineering change records, and configuration datasets–across multiple aircraft programmes, ensuring 100% accuracy and traceability throughout the project lifecycle.",
        "Trained 3 new team members on design processes, CATIA V5, and Airbus standards, accelerating onboarding and maintaining quality standards.",
        "Received recognition from senior stakeholders for delivering work quality on par with experienced engineers as a fresher, demonstrating rapid learning and technical excellence.",
      ],
    },
    {
      title: "Data Analyst Trainee",
      company: "BEPEC Solutions Pvt. Ltd",
      location: "India",
      dates: "Aug 2021 – Apr 2022",
      responsibilities: [
        "Used SQL, Excel, and stakeholder analysis across 20+ enterprise data sources and 15 stakeholders in 3 countries to identify 5 high-priority analytics use cases and define KPI roadmaps for business growth.",
        "Built interactive Tableau dashboards to visualise KPI roadmaps and analytics findings for the training provider client, enabling data-driven decision making across 3 countries.",
        "Built and evaluated Python-based predictive models (Logistic Regression, Decision Trees, Random Forest) across 1,200 employee records and 28 HR features to classify employee performance.",
      ],
    },
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
