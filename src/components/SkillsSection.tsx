import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      skills: [
        "Machine Learning",
        "Predictive Modeling",
        "Statistical Analysis",
        "Customer Segmentation",
        "Fraud Detection",
      ],
    },
    {
      title: "Programming & Libraries",
      skills: ["Python", "VBA", "scikit-learn", "LightGBM", "XGBoost", "CatBoost"],
    },
    {
      title: "Reporting & BI",
      skills: [
        "Advanced Excel",
        "Tableau",
        "Power BI",
        "Power Query",
        "SQL",
        "Data Visualization",
        "Interactive Dashboards",
      ],
    },
    {
      title: "Engineering & PLM",
      skills: [
        "CATIA V5",
        "Enovia VPM",
        "Product Lifecycle Management",
        "Process Automation",
      ],
    },
    {
      title: "Competency",
      skills: [
        "Stakeholder Management",
        "Decision Support",
        "Problem Solving",
        "Cross-functional Collaboration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Core competencies across data analytics, reporting, and engineering tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-[hsl(var(--skill-bg))] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
