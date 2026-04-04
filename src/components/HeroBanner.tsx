
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const slides = [
  {
    base: "/3",
    alt: "SaiTrack Solutions air cargo hub — aircraft loading and ground fleet at airport",
  },
  {
    base: "/1",
    alt: "SaiTrack Solutions cargo aircraft with global network — speed, security, reliability",
  },
  {
    base: "/2",
    alt: "Smart fleet tracking and logistics with trucks, satellite connectivity, and live maps",
  },
  {
    base: "/4",
    alt: "SaiTrack Solutions roadways transport — semi-truck on highway with tracking graphics",
  },
] as const;

const stats = [
  { icon: Truck, value: "10,000+", label: "Daily Deliveries" },
  { icon: Shield, value: "99.2%", label: "Safe Delivery Rate" },
  { icon: Clock, value: "7+", label: "Years of Excellence" },
];

const HeroBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    // Embla turns off loop if canLoop() fails on first measure (e.g. before layout/images). Re-init when ready.
    const reinitOnReady = () => api.reInit();
    const rafId = requestAnimationFrame(reinitOnReady);
    if (document.readyState === "complete") {
      queueMicrotask(reinitOnReady);
    } else {
      window.addEventListener("load", reinitOnReady);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", reinitOnReady);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const advance = () => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    const interval = setInterval(advance, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-brand-dark"
    >
      {/* Full-bleed carousel background */}
      <div className="absolute inset-0 z-0 min-h-[100dvh]">
        <Carousel
          className="h-full min-h-[100dvh]"
          opts={{ loop: true, align: "start" }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-0 h-full min-h-[100dvh]">
            {slides.map((slide, i) => (
              <CarouselItem
                key={slide.base}
                className="h-full min-h-[100dvh] flex-[0_0_100%] basis-full pl-0"
              >
                <div className="relative h-full min-h-[100dvh] w-full overflow-hidden">
                  <picture className="absolute inset-0 block">
                    <source srcSet={`${slide.base}.webp`} type="image/webp" />
                    <img
                      src={`${slide.base}.png`}
                      alt={slide.alt}
                      width={1920}
                      height={989}
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : "low"}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover object-center"
                    />
                  </picture>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Readability: left column for copy + light bottom wash so artwork text stays legible */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 pt-24">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block animate-fade-in rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            PAN India Logistics Since 2018
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Logistics{" "}
            <span className="text-brand-orange">Solutions</span>{" "}
            for Modern Business
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            End-to-end courier &amp; cargo services across India — from pickup to last-mile delivery — partnering with industry leaders like Amazon and Blue Dart.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-brand-orange text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-dark"
              onClick={() =>
                document.getElementById("tracking")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Track Shipment
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:flex-row sm:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-1 items-center gap-4 px-6 py-5",
                i < stats.length - 1 && "sm:border-r sm:border-white/20"
              )}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/20">
                <stat.icon className="h-5 w-5 text-brand-orange" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls + scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-8">
        <div
          className="flex gap-2 rounded-full bg-black/25 px-2 py-1.5 backdrop-blur-sm"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.base}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show banner ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                i === current ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
              )}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 animate-bounce" aria-hidden>
          <div className="h-8 w-0.5 rounded-full bg-white/40" />
          <div className="h-4 w-0.5 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
