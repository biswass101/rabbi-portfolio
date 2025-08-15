import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

export const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-8 group">
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300 hover:scale-110 hover:animate-glow transform
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}
        `}
      >
        <FaCircleArrowUp size={20} />
      </button>
    </div>
  );
};
