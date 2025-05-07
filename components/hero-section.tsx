"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stats from "./stats";
import EmailSubscribe from "./email-subscribe";
import FeatureCard from "./feature-card";
import AmenitiesSection from "./amenities";
import CTABanner from "./cta-banner";
import CarouselSection from "./carousel-section";

export default function HeroSection() {
  const [animateStats, setAnimateStats] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress for progress indicator
      const scrollPosition = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;
      setScrollProgress(progress);

      // Determine which section is active based on scroll position
      if (scrollPosition > 300) {
        setAnimateStats(true);
      }

      if (scrollPosition < 300) {
        setActiveSection("hero");
      } else if (scrollPosition < 800) {
        setActiveSection("features");
      } else if (scrollPosition < 1300) {
        setActiveSection("amenities");
      } else {
        setActiveSection("cta");
      }
    };

    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 1000); // Reduced from 1500ms for quicker engagement

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const stats = [
    { value: "7", label: "Days a Week", icon: "Calendar" },
    { value: "6AM - 9PM", label: "Access Available", icon: "Clock" },
    { value: "FREE", label: "Internet Access", icon: "Wifi" },
  ];

  const features = [
    {
      icon: "Award",
      title: "Personal Study Desks",
      description:
        "Private workspace tailored for concentrated study sessions with ergonomic chairs for comfort.",
      color: "text-primary",
      link: "#personal-desks",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: "Shield",
      title: "Distraction-Free Zone",
      description:
        "Peaceful environment with sound insulation and strict noise control policies for deep focus.",
      color: "text-purple-600",
      link: "#distraction-free",
      bgColor: "bg-purple-600/5",
      borderColor: "border-purple-600/20",
    },
    {
      icon: "Clock",
      title: "Flexible Hours",
      description:
        "Extended opening times from 6 AM to 9 PM access options available for dedicated readers.",
      color: "text-pink-500",
      link: "#flexible-hours",
      bgColor: "bg-pink-500/5",
      borderColor: "border-pink-500/20",
    },
  ];

  // Scroll to element function
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-background via-background/90 to-background/60">
      {/* Fixed scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-purple-600 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Background decorative elements with enhanced visual appeal */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {["hero", "features", "amenities", "cta"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToElement(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-primary shadow-lg shadow-primary/30 scale-125"
                : "bg-gray-400/40 hover:bg-gray-400/60"
            }`}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>

      <section className="relative" id="hero">
        <div className="mx-auto max-w-6xl px-4 sm:px-6  pb-24  lg:pb-32">
          {/* Hero Content + Carousel */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Content area with improved animations */}
            <div className="relative z-10 max-w-xl text-center md:text-left md:w-1/2">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-md animate-fadeIn">
                <span className="bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent font-semibold">
                  Sabitri Reading Room | Est. 2025
                </span>
              </div>

              <h1
                className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block">Be Educated,</span>
                <span className="bg-gradient-to-r from-primary via-red-500/90 to-blue-500 bg-clip-text text-transparent">
                  Be a Great Achiever
                </span>
              </h1>

              <p
                className="mt-6 text-lg text-muted-foreground leading-relaxed animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                Dedicated personal study spaces designed for{" "}
                <span className="font-medium text-foreground">
                  uninterrupted learning
                </span>
                . Perfect for competitive exam preparation in a focused, quiet,
                and supportive environment.
              </p>

              {/* Stats section with icons */}
              <Stats stats={stats} animateStats={animateStats} />

              <div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slideUp"
                style={{ animationDelay: "0.8s" }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-red-500/80 hover:from-primary/90 hover:to-red-500/70 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Reserve Your Desk
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>

              <EmailSubscribe />

              {/* Scroll down indicator */}
              <div className="hidden md:flex justify-center mt-16 animate-bounce">
                <button
                  onClick={() => scrollToElement("features")}
                  className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-xs mb-1">Scroll to explore</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Carousel area */}
            <CarouselSection />
          </div>

          {/* Features Section with improved styling */}
          <div
            id="features"
            className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:-translate-y-1 "
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  link={feature.link}
                  bgColor={feature.bgColor}
                  borderColor={feature.borderColor}
                />
              </div>
            ))}
          </div>

          {/* Amenities section */}
          <div id="amenities">
            <AmenitiesSection />
          </div>

          {/* CTA Banner */}
          <div id="cta">
            <CTABanner />
          </div>
        </div>
      </section>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
