
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BANNER_WIDTH = 1672;
const BANNER_HEIGHT = 941;

const slides = [
  {
    src: "/banner2/Saitrack%200A.png",
    alt: "Saitrack Solutions courier and logistic services — your parcel, our priority",
  },
  {
    src: "/banner2/Saitrack1A.png",
    alt: "Saitrack Solutions — anywhere, anytime, always",
  },
  {
    src: "/banner2/Saitrack2A.png",
    alt: "Saitrack Solutions smart warehousing for a faster tomorrow",
  },
  {
    src: "/banner2/Saitrack3A.png",
    alt: "Saitrack Solutions fast movement across borders",
  },
  {
    src: "/banner2/Saitrack4A.png",
    alt: "Saitrack Solutions global logistics solutions",
  },
  {
    src: "/banner2/Saitrack5A.png",
    alt: "Saitrack Solutions efficient air freight logistics",
  },
  {
    src: "/banner2/Saitrack6A.png",
    alt: "Saitrack Solutions courier services — fast, safe, reliable",
  },
] as const;

const AUTO_ADVANCE_MS = 5000;

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [timerKey]);

  const goTo = (index: number) => {
    setCurrent(index);
    setTimerKey((key) => key + 1);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-brand-dark aspect-[1672/941]"
      aria-roledescription="carousel"
      aria-label="Hero banners"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === current ? "z-10 opacity-100" : "z-0 opacity-0"
          )}
          role="group"
          aria-roledescription="slide"
          aria-label={`Banner ${i + 1} of ${slides.length}`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            width={BANNER_WIDTH}
            height={BANNER_HEIGHT}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
            className="h-full w-full object-contain object-center select-none"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 sm:bottom-6">
        <div
          className="flex gap-2 rounded-full bg-black/35 px-2 py-1.5 backdrop-blur-sm"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show banner ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                i === current ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
              )}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
