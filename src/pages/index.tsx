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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative ">
      {/* Navigation */}
      <Navigation />
      
      {/* Contact Sidebar */}
      <ContactSidebar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Core Competencies Section */}
      <CoreCompetencies />
      
      {/* Technical Skills Section */}
      <TechnicalSkills />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Project Highlights Section */}
      <ProjectHighlights />
      
      {/* Education Section */}
      <Education />
      
      {/* Certifications Section */}
      <Certifications />
      
      {/* Skills and Interests Section */}
      <SkillsAndInterests />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Md Golam Rabbi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;