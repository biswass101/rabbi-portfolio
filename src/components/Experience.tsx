import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Sr. Technician – IT Support",
      company: "GAB Limited",
      period: "Mar 2024 – Present",
      responsibilities: [
        "Delivered L1–L2 technical support for users across hardware, software, and network.",
        "Managed AD user accounts, group policies, and system access.",
        "Monitored system health using Nagios; ensured minimal downtime.",
        "Coordinated with internal teams and vendors for issue resolution and procurement.",
        "Maintained IT documentation and provided end-user training."
      ]
    },
    {
      title: "Supervisor – IT",
      company: "GAB Limited",
      period: "May 2019 – Feb 2024",
      responsibilities: [
        "Led infrastructure projects across manufacturing and office facilities.",
        "Oversaw telecom setup, IT installations, and preventive maintenance.",
        "Managed ticket resolution through the helpdesk system.",
        "Enforced IT policies and trained staff to maintain compliance and security.",
        "Maintained hardware/software inventory and implemented SOPs."
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">My journey in IT support and infrastructure</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  isVisible ? 'slide-in-right animate' : 'slide-in-right'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;