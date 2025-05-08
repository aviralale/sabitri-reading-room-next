"use client";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = ["The perfect environment for my MBBS preparation!"];

  const randomTestimonial =
    testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <div
      className={`absolute -bottom-20 -right-12 bg-background/80 rounded-xl p-4 shadow-lg border border-primary/30 backdrop-blur-lg max-w-xs transform hover:rotate-0 transition-all duration-300 ease-in-out z-10 ${
        isVisible ? "opacity-100 -rotate-2" : "opacity-0 rotate-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 flex-shrink-0">
          <Quote className="h-4 w-4 text-primary/70" />
        </div>
        <div className="space-y-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 text-yellow-500"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-xs font-medium leading-tight text-foreground/90">
            {randomTestimonial}
          </p>
          <p className="text-xs text-foreground/60 font-medium">
            - Medical Student
          </p>
        </div>
      </div>
    </div>
  );
}
