import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  { name: "Microsoft Azure (Basics)", issuer: "Microsoft" },
  { name: "Cloud Computing Fundamentals", issuer: "GDSC" },
  { name: "AI Computer Vision", issuer: "Intel" },
  { name: "Young Industry Enthusiast", issuer: "Infosys Springboard" },
  { name: "IoT Essentials", issuer: "Cisco Networking Academy" },
  { name: "Communication Skills", issuer: "TCS iON" },
  { name: "Generative AI with Google Cloud", issuer: "Udacity" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 card-hover border-0 shadow-md bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {cert.issuer}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
