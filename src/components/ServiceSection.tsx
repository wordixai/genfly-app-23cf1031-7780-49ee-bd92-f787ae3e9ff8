import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  reverse?: boolean;
}

const ServiceSection = ({ title, description, imageUrl, videoUrl, reverse = false }: ServiceSectionProps) => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className={`container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Content */}
        <div className={`space-y-8 text-center lg:text-left ${reverse ? 'lg:col-start-2' : ''}`}>
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              {title}
            </h2>
            <h4 className="text-lg text-gray-800 max-w-xl">
              {description}
            </h4>
          </div>
          
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold group">
            APPLY NOW
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Media */}
        <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {videoUrl ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;