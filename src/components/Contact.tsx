import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 shadow-xl border-0 bg-gradient-to-br from-card to-muted/30">
            <div className="text-center mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:thesumitkumarsinha@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">thesumitkumarsinha@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918102128701"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 81021 28701</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Bhilai, Chhattisgarh - 490023</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
