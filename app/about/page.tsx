"use client";
import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Clock,
  Coffee,
  Award,
  Users,
  Zap,
  ChevronDown,
  ArrowRight,
  Shield,
  Calendar,
  Wifi,
  BookmarkIcon,
  Target,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const [animateStats, setAnimateStats] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress for progress indicator
      const scrollPosition = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;
      setScrollProgress(progress);

      // Trigger animations based on scroll position
      if (scrollPosition > 100) {
        setAnimateStats(true);
      }

      // Update active section
      const sections = [
        { ref: aboutRef, id: "about" },
        { ref: missionRef, id: "mission" },
        { ref: valuesRef, id: "values" },
        { ref: ctaRef, id: "cta" },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const values = [
    {
      icon: "Award",
      title: "Excellence",
      description:
        "We strive to provide the highest quality study environment with attention to every detail, from ergonomic furniture to optimal lighting.",
      color: "text-blue-600",
      bgColor: "bg-blue-600/5",
      borderColor: "border-blue-600/20",
    },
    {
      icon: "Shield",
      title: "Focus",
      description:
        "Creating distraction-free spaces that help you achieve your academic and professional goals through deliberate practice and deep work.",
      color: "text-purple-600",
      bgColor: "bg-purple-600/5",
      borderColor: "border-purple-600/20",
    },
    {
      icon: "Users",
      title: "Community",
      description:
        "Building a community of motivated learners who inspire each other to reach their full potential while respecting individual study needs.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/5",
      borderColor: "border-pink-500/20",
    },
  ];

  const amenities = [
    {
      icon: <Wifi className="h-6 w-6 text-blue-600" />,
      title: "High-Speed Wi-Fi",
      description: "Stay connected with reliable internet access",
    },
    {
      icon: <Coffee className="h-6 w-6 text-blue-600" />,
      title: "Refreshment Zone",
      description: "Coffee and tea to keep you energized",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Extended Hours",
      description: "Open early until late to fit your schedule",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Resource Library",
      description: "Access to reference materials and resources",
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
    <main className="relative overflow-hidden min-h-screen ">
      {/* Fixed scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <section className="relative" id="about" ref={aboutRef}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 lg:pb-32">
          {/* Main Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Content area with animations */}
            <div className="relative z-10 max-w-xl text-center md:text-left md:w-1/2">
              <div className="inline-flex items-center rounded-full border border-blue-600/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-md animate-fadeIn">
                <span className="bg-gradient-to-r from-blue-600 to-pink-500/80 bg-clip-text text-transparent font-semibold">
                  Est. 2025 | Where Focus Flourishes
                </span>
              </div>

              <h1
                className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block">Empowering minds</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  through knowledge
                </span>
              </h1>

              <p
                className="mt-6 text-lg leading-relaxed animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                Welcome to Sabitri Reading Room – where preparation meets
                productivity. We are driven by a simple yet powerful idea: to
                provide a dedicated study environment equipped with all the
                essential facilities needed for focused and productive learning.
              </p>

              <p
                className="mt-4 text-lg  leading-relaxed animate-slideUp"
                style={{ animationDelay: "0.5s" }}
              >
                At Sabitri Reading Room, each member enjoys an individual study
                space that ensures privacy and enhances concentration. Our
                self-study center is designed to help you maintain momentum and
                stay committed to your goals—whether you&apos;re studying for a
                day, a week, or an entire year.
              </p>
              <div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slideUp"
                style={{ animationDelay: "0.8s" }}
              >
                <button className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Join Sabitri Reading Room
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
              </div>

              {/* Scroll down indicator */}
              <div className="hidden md:flex justify-center mt-16 animate-bounce">
                <button
                  onClick={() => scrollToElement("mission")}
                  className="flex flex-col items-center "
                >
                  <span className="text-xs mb-1">Scroll to explore</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image area */}
            <div
              className="relative z-10 md:w-1/2 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1730047614287-65e28e013ce1"
                  alt="Students studying at Sabitri Reading Room"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                  <p className="text-white text-sm font-medium">
                    Sabitri Reading Room — Where every book opens a new world of
                    possibilities
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className=" p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-900 mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="text-lg font-medium ">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div
            id="mission"
            ref={missionRef}
            className="mt-32 py-16 scroll-mt-16"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                Transforming how students prepare by creating spaces that
                inspire excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 dark:bg-blue-600/20 rounded-full -mr-20 -mt-20 transition-all duration-500 group-hover:scale-150"></div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 mb-6 relative z-10">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  Our mission is to empower individuals by offering a
                  distraction-free, comfortable, and motivating study space. We
                  aim to foster a culture of discipline, consistency, and
                  productivity, helping our members stay committed to their
                  study plans and unlock their full potential.
                </p>
                <ul className="mt-4 space-y-2 relative z-10">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-600/10 rounded-full p-1">
                      <Star className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-muted-foreground">
                      Provide optimal study conditions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-600/10 rounded-full p-1">
                      <Star className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-muted-foreground">
                      Develop effective study habits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-600/10 rounded-full p-1">
                      <Star className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-muted-foreground">
                      Cultivate academic excellence
                    </span>
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/5 dark:bg-purple-600/20 rounded-full -mr-20 -mt-20 transition-all duration-500 group-hover:scale-150"></div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/10 mb-6 relative z-10">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold  mb-4 relative z-10">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  To become the most trusted and inspiring self-study
                  destination for learners, where goals are realized, time is
                  valued, and every moment spent leads to meaningful progress.
                </p>
                <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-950  rounded-lg border border-purple-100 dark:border-purple-700 relative z-10">
                  <p className="text-purple-800 dark:text-purple-100 text-sm italic">
                    &quot;We envision a world where every dedicated learner has
                    access to the perfect environment that transforms their
                    potential into achievement.&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-muted-foreground text-sm relative z-10">
                  <span className="flex items-center">
                    <BookmarkIcon className="h-4 w-4 mr-1 text-purple-600" />
                    Founded 2025
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-purple-600" />
                    Growing Community
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div id="values" ref={valuesRef} className="mt-16 py-16 scroll-mt-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Sabitri Reading
                Room
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border ${value.borderColor} ${value.bgColor} transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg group`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full  mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon === "Award" && (
                      <Award className={`h-6 w-6 ${value.color}`} />
                    )}
                    {value.icon === "Shield" && (
                      <Shield className={`h-6 w-6 ${value.color}`} />
                    )}
                    {value.icon === "Users" && (
                      <Users className={`h-6 w-6 ${value.color}`} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold  mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                  <div className="mt-4 w-12 h-0.5 bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 group-hover:bg-gray-300 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24  rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div
                className={`text-center transition-all duration-1000 ${
                  animateStats
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl font-bold text-blue-600">100+</div>
                <p className="text-muted-foreground mt-2">Happy Members</p>
              </div>
              <div
                className={`text-center transition-all duration-1000 delay-200 ${
                  animateStats
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl font-bold text-purple-600">15</div>
                <p className="text-muted-foreground mt-2">Hours Daily</p>
              </div>
              <div
                className={`text-center transition-all duration-1000 delay-300 ${
                  animateStats
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl font-bold text-pink-500">7</div>
                <p className="text-muted-foreground mt-2">Days a Week</p>
              </div>
              <div
                className={`text-center transition-all duration-1000 delay-400 ${
                  animateStats
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl font-bold text-amber-500">100%</div>
                <p className="text-muted-foreground mt-2">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div id="cta" ref={ctaRef} className="mt-24 scroll-mt-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 -top-40 w-80 h-80 bg-white/10 rounded-full"></div>
                <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full"></div>
              </div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Say goodbye to procrastination
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Join Sabitri Reading Room today and take control of your
                  preparation—one uninterrupted study session at a time.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                    Reserve Your Desk Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300">
                    Learn About Pricing
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-4 text-sm text-white/80">
                  <span className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" /> Safe &amp; Clean
                    Environment
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> Flexible Hours
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> No Long-Term
                    Commitments
                  </span>
                </div>
              </div>
            </div>
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
