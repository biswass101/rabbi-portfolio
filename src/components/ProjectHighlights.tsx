import { useEffect, useRef, useState } from "react";
import { useProjects } from "@/hooks/useUsersData";
import type { IProject } from "@/types";
const userId = import.meta.env.VITE_USERID

const ProjectHighlights = () => {
      const {projects, isLoading} = useProjects(userId);
  
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
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 `}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Project Highlights
          </h2>
          <p className="text-xl text-muted-foreground">
            Key projects and implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading
  ? // SHIMMER LOADING STATE
    Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="relative group cursor-pointer"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="glass-effect rounded-xl p-6 h-full transition-all duration-500 animate-pulse">
          <div className="text-center space-y-4">
            {/* Icon Circle */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 p-4"></div>
            
            {/* Title */}
            <div className="h-6 w-32 mx-auto rounded bg-gray-700"></div>
            
            {/* Description */}
            <div className="h-4 w-3/4 mx-auto rounded bg-gray-700"></div>
          </div>

          {/* Hover overlay (optional shimmer) */}
          <div className="absolute inset-0 rounded-xl bg-gray-700 opacity-0"></div>
        </div>
      </div>
    ))
  : // REAL DATA
    projects.map((project: IProject, index: number) => {
      return (
        <div
          key={index}
          className={`relative group cursor-pointer ${
            isVisible ? "scale-in animate" : "scale-in"
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="glass-effect rounded-xl p-6 h-full hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
            <div className="text-center space-y-4">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${project.color} p-4 animate-float`}
              >
                <img src={project.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
            </div>

            {/* Hover effect overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}
            ></div>
          </div>
        </div>
      );
    })}

        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
