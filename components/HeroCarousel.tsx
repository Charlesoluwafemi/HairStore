
"use client";

import { useState, useEffect } from "react";

type Banner = {
  id: number;
  title?: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
};

export default function HeroCarousel({
  banners,
}: {
  banners: Banner[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [banners.length]);

  if (!banners.length) return null;

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-transparent">

      {/* Banner slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`w-full transition-opacity duration-700 ${
            index === current
              ? "relative opacity-100 z-10"
              : "absolute inset-0 opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Banner image */}
          <img
            src={banner.imageUrl}
            alt={banner.title || "Everything Hair promotional banner"}
            className="block w-full h-auto"
          />

          {/* Optional text overlay */}
          {(banner.title || banner.subtitle) && (
            <div className="
              absolute left-4 top-1/2 -translate-y-1/2
              w-[45%] max-w-[300px]
              sm:left-[6%]
              md:left-[8%] md:max-w-[350px]
              lg:left-[10%] lg:max-w-[420px]
            ">
              {banner.title && (
                <h2 className="
                  font-gothic
                  text-3xl sm:text-5xl
                  md:text-6xl lg:text-7xl xl:text-8xl
                  text-[#1a0a2e]
                  leading-[0.95] break-words
                ">
                  {banner.title}
                </h2>
              )}

              {banner.subtitle && (
                <p className="
                  mt-2
                  text-[10px] sm:text-sm
                  md:text-base lg:text-lg
                  text-[#1a0a2e] font-medium leading-snug
                ">
                  {banner.subtitle}
                </p>
              )}
            </div>
          )}

          {/* Clickable CTA */}
          <a
            href={banner.ctaLink}
            aria-label={banner.ctaText}
            className="
              absolute bottom-[12%] left-1/2
              -translate-x-1/2 z-20
              inline-flex items-center justify-center
              max-w-[85%]
              bg-[#FF8C1A] hover:bg-[#e67e17]
              text-white font-bold
              text-[10px] sm:text-sm
              md:text-base lg:text-lg
              px-4 sm:px-8 md:px-10 lg:px-12
              py-2 sm:py-3
              rounded-full shadow-lg
              whitespace-nowrap
              transition-all duration-300 hover:scale-105
            "
          >
            {banner.ctaText}
          </a>
        </div>
      ))}

      {/* Carousel indicators */}
      {banners.length > 1 && (
        <div className="
          absolute bottom-3 md:bottom-4
          left-1/2 -translate-x-1/2
          flex gap-2 z-30
        ">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to banner ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/2340000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          absolute bottom-3 right-3
          md:bottom-4 md:right-4
          z-40 bg-[#25D366]
          w-9 h-9 md:w-12 md:h-12
          rounded-full flex items-center justify-center
          text-white text-xl md:text-2xl shadow-lg
        "
      >
        W
      </a>

      

    </section>
  );
}