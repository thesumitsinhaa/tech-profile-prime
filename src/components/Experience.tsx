import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Core Member",
    organization: "Google Developer Student Club (GDSC)",
    location: "RCET",
    duration: "Sep 2023 – May 2024",
    responsibilities: [
      "Supported workshops & community outreach activities",
      "Assisted in tech event coordination & knowledge sharing",
    ],
  },
  {
    role: "AI Bootcamp Member",
    organization: "Intel AI Bootcamp 7 (CV)",
    location: "Ranchi",
    duration: "Jun 2022 – Jul 2022",
    responsibilities: [
      "Developed a real-time Face Mask Detection System",
      "Applied computer vision to enhance public safety solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-xl text-primary font-semibold mt-1">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-foreground/80">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
