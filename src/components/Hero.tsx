import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 animate-pulse-scale"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-fade-in">
              Sumit Sinha
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium drop-shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              MERN Stack Developer | Azure Cloud Enthusiast | Technology Innovator
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm md:text-base animate-fade-in">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bhilai, Chhattisgarh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+918102128701" className="hover:text-white transition-colors">
                +91 81021 28701
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:thesumitkumarsinha@gmail.com" className="hover:text-white transition-colors">
                thesumitkumarsinha@gmail.com
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4 animate-fade-in">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://summitportfolio.blob.core.windows.net/portfolio/Sumit%20Sinha%202CV.pdf" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <a href="#about" className="inline-block text-white/70 hover:text-white transition-all duration-300 animate-bounce-slow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
