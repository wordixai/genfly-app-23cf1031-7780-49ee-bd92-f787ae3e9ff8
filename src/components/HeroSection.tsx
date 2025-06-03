import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800 tracking-wide">
              WATC STUDIO
            </h4>
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Grow And Expand Your Brand
            </h1>
            <h4 className="text-lg font-bold text-gray-800 max-w-2xl">
              We support avant-garde brands and creators with organic luxury blanks and customization services.
              <br />
              Crafted in our own ateliers in Portugal, all pieces are available with low or no minimums.
            </h4>
          </div>
          
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold group">
            APPLY FOR B2B ACCESS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Media */}
        <div className="relative">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.shopify.com/videos/c/o/v/9f7c77565dca4060be9b74ce6b8aa153.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToNext}
          className="bg-black text-white hover:bg-gray-800 rounded-full p-3"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;