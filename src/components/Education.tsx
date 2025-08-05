import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
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

  const educations = [
    {
      degree: "MBA",
      institution: "City University",
      major: "Human Resource Management",
      year: "2022",
      cgpa: "3.61/4.00"
    },
    {
      degree: "B.Sc. in CSE",
      institution: "City University",
      major: "Computer Science & Engineering",
      year: "2018",
      cgpa: "2.78/4.00"
    },
    {
      degree: "H.S.C",
      institution: "Govt. Debendra College",
      major: "Science",
      year: "2013",
      cgpa: "3.30/5.00"
    },
    {
      degree: "S.S.C",
      institution: "Alhaj Jafor Bepari High School",
      major: "Science",
      year: "2010",
      cgpa: "3.94/5.00"
    }
  ];

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
                <div className="grid md:grid-cols-5 gap-4 items-center">
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
                  
                  <div>
                    <p className="text-muted-foreground">{edu.year}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-accent">{edu.cgpa}</span>
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