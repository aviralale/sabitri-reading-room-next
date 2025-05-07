"use client";
import { useState } from "react";
import {
  TreeDeciduous,
  Laptop2,
  CalendarCheck2,
  Wifi,
  Droplet,
  ParkingCircle,
  BatteryCharging,
  Lock,
  Cctv,
  Banknote,
  MapPin,
  Bubbles,
} from "lucide-react";
import Feature from "./facility-card";

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Peaceful and Silent Environment",
      description:
        "A calm, distraction-free atmosphere tailored for deep work, focus, and stress-free productivity.",
      icon: <TreeDeciduous className="w-7 h-7" />,
      color: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-500",
    },
    {
      title: "Personal Desk with Power Outlet",
      description:
        "Your own dedicated desk space equipped with power, so you never have to worry about charging.",
      icon: <Laptop2 className="w-7 h-7" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      title: "Open 7 Days a Week",
      description:
        "Work whenever inspiration strikes—even on weekends and holidays, we’re open for you.",
      icon: <CalendarCheck2 className="w-7 h-7" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-500",
    },
    {
      title: "High-Speed Internet",
      description:
        "Reliable, blazing-fast Wi-Fi lets you browse, stream, upload, or attend video calls with zero hiccups.",
      icon: <Wifi className="w-7 h-7" />,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-100",
      textColor: "text-indigo-500",
    },
    {
      title: "Clean Drinking Water",
      description:
        "Stay refreshed with access to purified drinking water available at all times.",
      icon: <Droplet className="w-7 h-7" />,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-100",
      textColor: "text-cyan-500",
    },
    {
      title: "Ample Parking Space",
      description:
        "Spacious, safe parking ensures your commute is hassle-free and your vehicle is secure.",
      icon: <ParkingCircle className="w-7 h-7" />,
      color: "bg-amber-500",
      lightColor: "bg-amber-100",
      textColor: "text-amber-500",
    },
    {
      title: "Reliable Power Backup",
      description:
        "Stay powered up even during outages with our smooth and efficient backup systems.",
      icon: <BatteryCharging className="w-7 h-7" />,
      color: "bg-red-500",
      lightColor: "bg-red-100",
      textColor: "text-red-500",
    },
    {
      title: "Secure Personal Lockers",
      description:
        "Keep your valuable belongings safe with our secure, easy-to-access personal lockers.",
      icon: <Lock className="w-7 h-7" />,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-500",
    },
    {
      title: "CCTV Surveillance",
      description:
        "Your safety is our priority—our premises are under 24/7 CCTV monitoring for peace of mind.",
      icon: <Cctv className="w-7 h-7" />,
      color: "bg-yellow-600",
      lightColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Affordable Prices",
      description:
        "Top-tier facilities without breaking the bank. Choose from flexible, budget-friendly plans.",
      icon: <Banknote className="w-7 h-7" />,
      color: "bg-teal-600",
      lightColor: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      title: "Easily Accessible Location",
      description:
        "Conveniently located with easy access via public or private transport—save time every day.",
      icon: <MapPin className="w-7 h-7" />,
      color: "bg-sky-600",
      lightColor: "bg-sky-100",
      textColor: "text-sky-600",
    },
    {
      title: "Hygienic and Clean Workspace",
      description:
        "Regular cleaning and sanitation routines ensure a spotless, germ-free work environment.",
      icon: <Bubbles className="w-7 h-7" />,
      color: "bg-pink-600",
      lightColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to{" "}
            <span className="text-blue-600 dark:text-blue-400">Succeed</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our workspace provides all the essentials for productive work and
            creative thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
