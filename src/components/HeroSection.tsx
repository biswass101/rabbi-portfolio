import { useEffect, useState } from 'react';
import profilePhoto from '../../assets/profile-photo.jpg'; // Adjust the path as necessary

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-primary"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                <span className="text-foreground">Hi I am </span>
                <span className="gradient-text typewriter">Md Golam Rabbi</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                IT Support and Infrastructure Specialist
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex justify-center ${isVisible ? 'scale-in animate' : 'scale-in'} animation-delay-500`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 animate-pulse-glow"></div>
              <img
                src={profilePhoto}
                alt="Md Golam Rabbi"
                className="relative h-56 w-56 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className={`mt-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'} animation-delay-1000`}>
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 gradient-text">Professional Summary</h2>
            <p className="text-lg text-center leading-relaxed text-muted-foreground">
              Experienced IT Support and Infrastructure Specialist with 6+ years of proven expertise in system
              administration, end-user support, and infrastructure operations. Skilled in Windows/Linux
              environments, Active Directory, Microsoft 365, and network troubleshooting. Known for
              delivering reliable IT services, optimizing processes, and ensuring high availability across diverse
              IT systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;