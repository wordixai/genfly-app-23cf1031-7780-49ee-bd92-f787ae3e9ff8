import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import NavigationIndicators from "@/components/NavigationIndicators";

const Index = () => {
  const services = [
    {
      title: "Organic Luxury Blanks",
      description: "Made in Portugal from the finest organic cotton, our blanks meet the highest standards of luxury streetwear and offer the same quality as the world's top fashion houses.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/BLANKSSLIDE2_9839e2b4-30f1-42d0-a00d-8be3c2243a0a_1920x.jpg?v=1741108220",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/e17e8d32a1ad45e6a9f1b59109761cbb.mp4"
    },
    {
      title: "Wholesale Pricing",
      description: "As a B2B member, you access preferential pricing and enjoy further discounts based on order quantity.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/WHOLESALE-PRICING-H_2_1920x.jpg?v=1747145515",
      reverse: true
    },
    {
      title: "Dtg Printing Lab",
      description: "Print your designs on our Organic Luxury Blanks with our advanced DTG printing service.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/DTG_PRELOAD_H_1920x.jpg?v=1716460640",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/37f2298f118c467abc7f4d2eebf87f00.mp4"
    },
    {
      title: "Embroidery Lab",
      description: "Embroider your designs on our Organic Luxury Blanks with our expert Embroidery Lab service.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/EMBROIDERY_PRELOAD_H_1920x.jpg?v=1716460824",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/5147d35644284282922af3fad42e44d4.mp4",
      reverse: true
    },
    {
      title: "Custom Dye Lab.",
      description: "Create your own color on our Organic Luxury Blanks, starting at just 40 units per color and style.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/S4gempages_513521317815780507-5c2ff37d-6753-49cf-b313-466829c4d5bc_1920x.jpg?v=1747146218"
    },
    {
      title: "Labeling Service",
      description: "Create and apply custom main labels to our Organic Luxury Blanks, reinforcing your brand's identity.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/LABELLING_PRELOAD_H_1920x.jpg?v=1716460951",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/80d3ebc577ec40678b96e0ad0b82aaa5.mp4",
      reverse: true
    },
    {
      title: "Marketing Assets",
      description: "Access high-quality mockups of our blanks to showcase your creativity and enhance your brand's presentation.",
      imageUrl: "https://watc-studio.com/cdn/shop/files/test242_1920x.jpg?v=1716393688"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            videoUrl={service.videoUrl}
            reverse={service.reverse}
          />
        ))}
      </main>

      <NavigationIndicators />
    </div>
  );
};

export default Index;