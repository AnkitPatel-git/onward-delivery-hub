
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
    alt: "Delivery trucks on the move",
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    alt: "Warehouse logistics",
  },
  {
    url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80",
    alt: "Air cargo logistics",
  },
];

const stats = [
  { icon: Truck, value: "10,000+", label: "Daily Deliveries" },
  { icon: Shield, value: "99.2%", label: "Safe Delivery Rate" },
  { icon: Clock, value: "7+", label: "Years of Excellence" },
];

const HeroBanner = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Full-bleed carousel background */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent className="h-full ml-0">
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="h-full pl-0">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-screen object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 animate-fade-in">
            PAN India Logistics Since 2018
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Reliable Logistics{" "}
            <span className="text-brand-orange">Solutions</span>{" "}
            for Modern Business
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            End-to-end courier &amp; cargo services across India — from pickup to last-mile delivery — partnering with industry leaders like Amazon and Blue Dart.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-dark transition-all bg-white/10 backdrop-blur-sm"
              onClick={() => document.getElementById("tracking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Track Shipment
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center gap-4 px-6 py-5 ${
                i < stats.length - 1 ? "sm:border-r border-white/20" : ""
              }`}
            >
              <div className="h-10 w-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                <stat.icon className="h-5 w-5 text-brand-orange" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-white/40 rounded-full" />
        <div className="w-0.5 h-4 bg-white/20 rounded-full" />
      </div>
    </section>
  );
};

export default HeroBanner;
