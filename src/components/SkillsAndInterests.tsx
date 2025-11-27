import { useEffect, useRef, useState } from 'react';
import { 
  Brain, 
  Languages,
  Heart
} from 'lucide-react';
import { useInterests, useLanguages, useSoftSkills } from '@/hooks/useUsersData';
import type { IInterset, ILanguage, ISoftSkill } from '@/types';
const userId = import.meta.env.VITE_USERID

const SkillsAndInterests = () => {
      const {interests, isLoading: isInterestLoading} = useInterests(userId);
      const {softSkills, isLoading: isSoftSkillsLoading} = useSoftSkills(userId);
      const {languages, isLoading: isLanguagesLoading} = useLanguages(userId);

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
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Soft Skills */}
          <div className={``}>
            <div className="text-center mb-8">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text">Soft Skills</h3>
            </div>
            
            <div className="space-y-4">
              {isSoftSkillsLoading
  ? // SHIMMER LOADING STATE
    Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="glass-effect rounded-lg p-4 transition-all duration-300 animate-pulse"
      >
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="p-2 rounded-lg bg-gray-700 w-5 h-5"></div>
          {/* Title */}
          <div className="h-4 w-24 rounded bg-gray-700"></div>
        </div>
      </div>
    ))
  : // REAL DATA
    softSkills.map((skill: ISoftSkill, index: number) => (
      <div
        key={index}
        className="glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <img src={skill.icon} className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm">{skill.title}</span>
        </div>
      </div>
    ))}

            </div>
          </div>

          {/* Languages */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'} animation-delay-200`}>
            <div className="text-center mb-8">
              <Languages className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text">Languages</h3>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-primary border-b border-border pb-2">
                  <span>Language</span>
                  <span>Writing</span>
                  <span>Reading</span>
                  <span>Speaking</span>
                </div>
                
                {isLanguagesLoading
  ? // SHIMMER LOADING STATE
    Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="grid grid-cols-4 gap-2 text-sm animate-pulse">
        <div className="h-4 w-20 rounded bg-gray-700"></div>
        <div className="h-4 w-16 rounded bg-gray-700"></div>
        <div className="h-4 w-16 rounded bg-gray-700"></div>
        <div className="h-4 w-16 rounded bg-gray-700"></div>
      </div>
    ))
  : // REAL DATA
    languages.map((lang: ILanguage, index: number) => (
      <div key={index} className="grid grid-cols-4 gap-2 text-sm">
        <span className="font-semibold">{lang.language}</span>
        <span className="text-muted-foreground">{lang.writing}</span>
        <span className="text-muted-foreground">{lang.reading}</span>
        <span className="text-muted-foreground">{lang.speaking}</span>
      </div>
    ))}

              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'} animation-delay-400`}>
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text">Interests</h3>
            </div>
            
            <div className="space-y-4">
              {isInterestLoading
  ? // SHIMMER LOADING STATE
    Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="glass-effect rounded-lg p-4 transition-all duration-300 animate-pulse"
      >
        <div className="flex items-center space-x-3">
          {/* Dot */}
          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          {/* Title */}
          <div className="h-4 w-24 rounded bg-gray-700"></div>
        </div>
      </div>
    ))
  : // REAL DATA
    interests.map((interest: IInterset, index: number) => (
      <div
        key={index}
        className="glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-sm">{interest.title}</span>
        </div>
      </div>
    ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndInterests;