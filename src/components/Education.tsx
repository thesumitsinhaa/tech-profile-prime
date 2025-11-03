import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "I.Sc (PCM)",
    institution: "DAV Public School",
    year: "2021 – 2023",
  },
  {
    degree: "Matriculation",
    institution: "DAV Public School",
    year: "2020 – 2021",
  },
  {
    degree: "ADCA (MS Office, Photoshop, Tally ERP 9.2)",
    institution: "Professional Certification",
    year: "2018 – 2019",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/50"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
