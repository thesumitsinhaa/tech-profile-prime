import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Palette, Database, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Full Stack Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    color: "text-primary",
  },
  {
    title: "Cloud Technologies",
    icon: Cloud,
    skills: ["Microsoft Azure", "Google Cloud"],
    color: "text-secondary",
  },
  {
    title: "Programming",
    icon: Database,
    skills: ["C", "C++", "Git", "GitHub"],
    color: "text-accent",
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop", "UI/UX Design"],
    color: "text-primary",
  },
  {
    title: "Productivity",
    icon: Wrench,
    skills: ["MS Office", "Google Sheets", "Google Docs", "Tally ERP"],
    color: "text-secondary",
  },
  {
    title: "Digital Skills",
    icon: Lightbulb,
    skills: ["Data Visualization", "Social Media Marketing", "Content Creation"],
    color: "text-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover border-0 shadow-md bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm hover:scale-105 transition-transform"
                    >
                      {skill}
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

export default Skills;
