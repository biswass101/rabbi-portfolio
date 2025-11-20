import { useEffect, useState } from 'react';
import { useUserData } from '@/hooks/useUserData';
import { ShimmerDiv, ShimmerText, ShimmerTitle } from 'shimmer-effects-react'
const userId = import.meta.env.VITE_USERID

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
    const {userRes, isLoading} = useUserData(userId);

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

      <div className="container mx-auto px-6 py-2 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className={`space-y-6 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                <span className="text-foreground">Hi I'm </span> <br/>
                {isLoading ? <ShimmerTitle mode="dark" line={1} gap={0} height={40} width={70}/> : <span className="gradient-text">{userRes && userRes.name}</span>}
                
              </h1>
              {isLoading ? <ShimmerText mode="dark" line={1} gap={0} height={30} width={69}/> : <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold">
                {userRes && userRes.designation}
              </p>}
              
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex justify-center md:justify-end ${isVisible ? 'scale-in animate' : 'scale-in'} animation-delay-500`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 animate-pulse-glow"></div>
              {isLoading ? <ShimmerDiv mode="dark" height={0} width={0} rounded={50} 
              className='relative h-56 w-56 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl'/> : <img
                src={userRes && userRes.img}
                alt="Md Golam Rabbi"
                className="relative h-56 w-56 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl"
              />}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className={`mt-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'} animation-delay-1000`}>
          <div className="glass-effect rounded-2xl p-8 container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 gradient-text">Professional Summary</h2>
              {isLoading ? <ShimmerText mode="dark" line={3} gap={6} height={20}/> : <p className=" text-lg text-left leading-relaxed text-muted-foreground">
              {userRes && userRes.summary}
            </p>}
                
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;