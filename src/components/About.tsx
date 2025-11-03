import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 shadow-lg border-0 bg-gradient-to-br from-card to-muted/30">
            <p className="text-lg leading-relaxed text-foreground/90">
              Aspiring <span className="font-semibold text-primary">MERN Stack Developer</span> and{" "}
              <span className="font-semibold text-secondary">Azure Cloud Enthusiast</span> with hands-on experience in 
              full-stack web development and digital innovation projects. Passionate about building scalable applications, 
              visual design, and solving real-world problems using technology.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-6">
              Strong collaborator with demonstrated experience in tech communities and AI bootcamps. I thrive in 
              environments that challenge me to learn and grow, and I'm always excited to work on projects that 
              make a meaningful impact.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
