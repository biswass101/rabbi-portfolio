import { useEffect, useRef, useState } from 'react';
import { 
  Headphones, 
  Monitor, 
  Users, 
  Network, 
  Settings, 
  Eye, 
  UserCheck, 
  FileText 
} from 'lucide-react';

const CoreCompetencies = () => {
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

  const competencies = [
    {
      icon: Headphones,
      title: "IT Support (Tier 1–3) & Troubleshooting",
      description: "Multi-tier technical support expertise"
    },
    {
      icon: Monitor,
      title: "Windows/Linux OS, Microsoft 365 & Exchange",
      description: "Cross-platform system administration"
    },
    {
      icon: Users,
      title: "Active Directory & Group Policy",
      description: "User and system policy management"
    },
    {
      icon: Network,
      title: "Network Support (LAN/WAN, DNS, DHCP, VPN)",
      description: "Comprehensive network infrastructure"
    },
    {
      icon: Settings,
      title: "ServiceNow & ITIL Incident Management",
      description: "Service management and best practices"
    },
    {
      icon: Eye,
      title: "SCCM, TeamViewer, AnyDesk, Nagios Monitoring",
      description: "System monitoring and remote support"
    },
    {
      icon: UserCheck,
      title: "User Onboarding/Offboarding & Asset Management",
      description: "Complete lifecycle management"
    },
    {
      icon: FileText,
      title: "Documentation & Knowledge Base Creation",
      description: "Process documentation and knowledge sharing"
    }
  ];

  return (
    <section ref={sectionRef} id="competencies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Core Competencies</h2>
          <p className="text-xl text-muted-foreground">Key areas of expertise and specialization</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
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
                    <Icon className="w-8 h-8 text-primary" />
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