import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, Brain, Briefcase, Camera } from "lucide-react";

const projects = [
  {
    title: "Emergency Help Platform",
    description: "Location-based support system connecting users with blood donors, NGOs & emergency services using real-time notifications.",
    icon: Heart,
    tags: ["Social Impact", "Location Services", "Real-time"],
    color: "text-red-500",
  },
  {
    title: "AI Recommendation System",
    description: "Personalized suggestions for food, fashion, movies & books powered by user preference patterns.",
    icon: Brain,
    tags: ["AI/ML", "Personalization", "Data Analysis"],
    color: "text-purple-500",
  },
  {
    title: "Job Finder for Local Laborers",
    description: "Web platform that matches labor workers with nearby employment opportunities using geolocation & role-based access.",
    icon: Briefcase,
    tags: ["Social Good", "Geolocation", "Web Platform"],
    color: "text-blue-500",
  },
  {
    title: "Face Mask Detection",
    description: "Real-time classification system identifying masked vs. unmasked individuals using computer vision techniques.",
    icon: Camera,
    tags: ["Computer Vision", "AI", "Public Safety"],
    color: "text-green-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm group"
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${project.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
