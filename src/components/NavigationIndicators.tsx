import { useEffect, useState } from "react";

const NavigationIndicators = () => {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 8;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(Math.min(currentSection, totalSections - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center z-50 space-y-2">
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
            index === activeSection 
              ? 'bg-blue-600 scale-150' 
              : 'bg-white border border-gray-300 hover:bg-gray-200'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationIndicators;