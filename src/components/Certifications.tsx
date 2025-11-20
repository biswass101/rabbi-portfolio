import { useEffect, useRef, useState } from 'react';
import { useUserData } from '@/hooks/useUserData';
const userId = import.meta.env.VITE_USERID

const Certifications = () => {
    const {certifications} = useUserData(userId);
  
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
    <section ref={sectionRef} id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Certifications & Training</h2>
          <p className="text-xl text-muted-foreground">Professional development and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            return (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-500 group ${
                  isVisible ? 'fade-in-up animate' : 'fade-in-up'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} p-3`}>
                    <img src={cert.icon} className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-primary font-semibold">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground">{cert.duration}</p>
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

export default Certifications;