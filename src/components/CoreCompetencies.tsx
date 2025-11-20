import { useUserData } from '@/hooks/useUserData';
import { useEffect, useRef, useState } from 'react';
const userId = import.meta.env.VITE_USERID

const CoreCompetencies = () => {
    const {competencies} = useUserData(userId);
  
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

  return (
    <section ref={sectionRef} id="competencies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Core Competencies</h2>
          <p className="text-xl text-muted-foreground">Key areas of expertise and specialization</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {competencies.map((competency, index) => {
            return (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group ${
                  isVisible ? 'scale-in animate' : 'scale-in'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <img src={competency.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{competency.title}</h3>
                  <p className="text-xs text-muted-foreground">{competency.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;