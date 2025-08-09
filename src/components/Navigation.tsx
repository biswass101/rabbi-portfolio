import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileNav } from './MobileNav';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className={cn(
      "top-0 transition-all duration-500 sticky z-50",
      isScrolled 
        ? "md:glass-effect shadow-lg" 
        : "md:bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center relative">
          <div className="hidden md:flex items-center space-x-2 md:space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground text-sm lg:text-base hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
            
            
        </div>
      </div>
      <RxHamburgerMenu  
            onClick={() => {
              console.log("clicled");
              setIsNavOpen(!isNavOpen)
            }}
            className=' fixed md:hidden text-3xl cursor-pointer right-6 top-4 mb-2 z-[50]'/>
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    </nav>
  );
};

export default Navigation;