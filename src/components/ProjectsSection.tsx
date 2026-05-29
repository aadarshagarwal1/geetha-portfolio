import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import customerSegmentation from "@/assets/customer segmentation project.png";
import flightData from "@/assets/Flight Data Visualization.png";
import musicPerformance from "@/assets/music performance.png";
import capstoneReport from "@/assets/projects/capstone-insurance-ml-report.pdf";
import ukuleleReport from "@/assets/projects/ukulele-tuesday-report.pdf";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Segmentation and Fraud Detection in the Insurance Sector",
      description: "Developed a Machine Learning underwriting model training and comparing LightGBM, XGBoost, and CatBoost to classify policyholder risk, processing 116,000+ raw records down to 51,600 clean records and capping customer exclusions at 4% with 82% accuracy. Increased portfolio profitability by 157% (from €406K to €1.04M) by selecting LightGBM as the optimal model, isolating 9 key predictors through feature importance analysis, and tuning classification thresholds to minimise asymmetric error costs.",
      image: customerSegmentation,
      technologies: ["Python", "LightGBM", "XGBoost", "CatBoost", "Machine Learning"],
      link: capstoneReport,
    },
    {
      title: "US Flight Delay Decision Support System Visualization",
      description: "Integrated 5 datasets (US flight records, weather metrics, airport geolocation, and state population data) using Tableau Prep, applying data cleaning, field standardisation, and calculated metrics to enable multi-source analysis. Built an interactive Tableau DSS with dashboards covering delay cause analysis, seasonal trends, route performance, and airport hotspot mapping, enabling decision-makers to identify operational inefficiencies and weather-driven delay patterns.",
      image: flightData,
      technologies: ["Tableau", "Tableau Prep", "Data Visualization"],
      link: "https://public.tableau.com/app/profile/sagar.malik7098/viz/MIS41040Team-1/Story1?publish=yes",
    },
    {
      title: "Ukulele Tuesday Data Explorer",
      description: "Developed an interactive Python GUI application for Ukulele Tuesday to query song metadata, filter play and request history by date range, and generate histograms and trend visualizations—supporting data-driven repertoire and session planning.",
      image: musicPerformance,
      technologies: ["Python", "Pandas", "Matplotlib", "Tkinter", "Plotly"],
      link: ukuleleReport,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key projects showcasing expertise in data analytics, machine learning, and visualization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                      type="button"
                      variant="outline"
                      className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-200"
                      onClick={(e) => {
                        if (project.link) {
                            window.open(project.link, '_blank', 'noopener,noreferrer');
                      } else {
                          e.preventDefault();
                        }
                      }}
                      aria-disabled={!project.link}
                        >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
