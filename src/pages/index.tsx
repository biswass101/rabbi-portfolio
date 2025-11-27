import Navigation from '@/components/Navigation';
import ContactSidebar from '@/components/ContactSlidebar';
import HeroSection from '@/components/HeroSection';
import CoreCompetencies from '@/components/CoreCompetencies';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import ProjectHighlights from '@/components/ProjectHighlights';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import SkillsAndInterests from '@/components/SkillsAndInterests';
import { GotoTop } from '@/components/GotoTop';

import { useState, useEffect } from 'react';

const Index = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHoveredItem(null);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      <ContactSidebar hoveredItem={hoveredItem as string} setHoveredItem={setHoveredItem}/>
      <HeroSection />
      <CoreCompetencies />
      <TechnicalSkills />
      <Experience />
      <ProjectHighlights />
      <Education />
      <Certifications />
      <SkillsAndInterests />

      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Md Golam Rabbi. All rights reserved.
        </p>
      </footer>

      <GotoTop/>
    </div>
  );
};

export default Index;
