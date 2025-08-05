import { useEffect, useRef, useState } from 'react';
import { 
  Database, 
  Shield, 
  Tv, 
  Palette 
} from 'lucide-react';

const ProjectHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: Database,
      title: "DcLink System",
      description: "Infrastructure & user support for production",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Ulula App Integration",
      description: "Secure complaint system with HR",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Tv,
      title: "Gildan TV",
      description: "Internal communication via digital signage",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Color Service & Orgatex",
      description: "Integration for automatic chemical dosing in dyeing",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Project Highlights</h2>
          <p className="text-xl text-muted-foreground">Key projects and implementations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`relative group cursor-pointer ${
                  isVisible ? 'scale-in animate' : 'scale-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="glass-effect rounded-xl p-6 h-full hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                  <div className="text-center space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${project.color} p-4 animate-float`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;