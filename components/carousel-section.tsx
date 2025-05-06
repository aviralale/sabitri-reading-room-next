"use client";
import { useState, useEffect } from "react";
import { Star, Award, Heart } from "lucide-react";
import Carousel from "./shared/carousel";
import TestimonialBadge from "./testimonial-badge";

export default function CarouselSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative mx-auto max-w-2xl">
        {/* Enhanced animated glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 via-pink-500/40 to-purple-600/50 blur-xl opacity-80 animate-pulse"></div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full w-14 h-14 backdrop-blur-md shadow-lg flex items-center justify-center z-10 transform hover:scale-105 transition-transform duration-300 border border-white/20">
          <Star className="h-7 w-7 text-white" fill="white" />
        </div>

        <div className="absolute -top-3 -left-4 bg-gradient-to-br rotate-12 from-blue-500 to-blue-600 rounded-full w-8 h-8 backdrop-blur-md shadow-lg flex items-center justify-center z-10 ">
          <Award className="h-4 w-4 text-white" />
        </div>

        <div className="absolute -bottom-4 -left-4 -rotate-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full w-10 h-10 backdrop-blur-md shadow-lg flex items-center justify-center z-10 ">
          <Heart className="h-5 w-5 text-white" />
        </div>

        {/* Responsive carousel with enhanced styling */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-filter">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md z-0"></div>

          <div className="relative">
            <Carousel
              baseWidth="100%"
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
              className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg"
            />
          </div>

          {/* Content overlay for additional visual elements */}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full z-20">
            <p className="text-xs font-medium text-white">
              Inside Sabitri Reading Room
            </p>
          </div>
        </div>

        {/* Testimonial badge */}
        <TestimonialBadge />

        {/* Extra decorative accent */}
        <div className="absolute -bottom-2 right-1/4 w-16 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
