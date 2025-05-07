"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-24 relative overflow-hidden rounded-3xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-red-600 transition-all duration-700 ease-in-out ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      ></div>

      {/* Texture overlays */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      {/* Decorative shapes */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="text-white underline decoration-2 decoration-yellow-300/70 underline-offset-4">
              boost your productivity
            </span>
            ?
          </h3>
          <p className="text-white/90 max-w-md mb-6 md:mb-8 text-base md:text-lg">
            Join our community of focused achievers and transform your study
            experience today.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <Button
            size="lg"
            className={`bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl px-3 py-3 h-auto text-base font-semibold transition-all duration-300 ease-in-out ${
              isHovered ? "scale-105" : "scale-100"
            } rounded-xl`}
          >
            Book Your First Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
