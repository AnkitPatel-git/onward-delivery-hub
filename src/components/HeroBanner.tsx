
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = () => {
  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Delivery trucks on the move"
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern logistics technology"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
      alt: "Digital logistics management"
    }
  ];

  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white via-brand-light-gray to-brand-light-orange/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark">
              Reliable Logistics <span className="text-brand-orange">Solutions</span> for Modern Business
            </h1>
            <p className="text-lg text-brand-gray max-w-lg">
              Professional pickup, drop, and logistics support services tailored for businesses 
              of all sizes, partnering with industry leaders like Amazon and Blue Dart.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                Track Shipment
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {bannerImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                      />
                      {index === 0 && (
                        <>
                          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-medium">2,500+ Daily Deliveries</span>
                            </div>
                          </div>
                          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 bg-brand-orange rounded-full"></div>
                              <span className="text-sm font-medium">98.7% On-time Delivery</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
