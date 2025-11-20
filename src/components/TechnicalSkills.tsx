import { useUserData } from '@/hooks/useUserData';
import { useEffect, useRef, useState } from 'react';
const userId = import.meta.env.VITE_USERID

const TechnicalSkills = () => {
      const {skillCategories} = useUserData(userId);
  
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
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            return (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-500 group ${
                  isVisible ? 'slide-in-left animate' : 'slide-in-left'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <img src={category.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;