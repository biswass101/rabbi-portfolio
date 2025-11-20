import { useEffect, useRef, useState } from 'react';
import { GraduationCap} from 'lucide-react';
import { useUserData } from '@/hooks/useUserData';
const userId = import.meta.env.VITE_USERID

const Education = () => {
  const {educations} = useUserData(userId);
  
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
    <section ref={sectionRef} id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground">Academic background and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {educations.map((edu, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'slide-in-left animate' : 'slide-in-left'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{edu.degree}</h3>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground">{edu.institution}</p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground">{edu.major}</p>
                  </div>
                  
                  <div className='flex md:justify-end'>
                    <p className="text-muted-foreground">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;