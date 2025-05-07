"use client";
import { Zap, Wifi, CircleParking, Power } from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Zap className="h-6 w-6" />,
      label: "Personal Desk with Power Socket",
      description:
        "Dedicated workspace with multiple outlets for all your devices",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      label: "High-Speed WiFi",
      description:
        "Ultra-fast, secure internet connection for seamless productivity",
    },
    {
      icon: <CircleParking className="h-6 w-6" />,
      label: "Ample Parking Space",
      description: "Convenient on-site parking available for all members",
    },
    {
      icon: <Power className="h-6 w-6" />,
      label: "Power Backup",
      description:
        "Uninterrupted power supply for 24/7 operational reliability",
    },
  ];

  return (
    <div className="mt-24 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background rounded-3xl -z-10"></div>
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative backdrop-blur-sm border border-primary/20 rounded-3xl p-10 shadow-xl overflow-hidden">
        {/* Section header with animated underline */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold inline-block">
            <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
              Premium Amenities
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-red-500 rounded-full mx-auto mt-3"></div>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Everything you need for a productive and comfortable workspace
            experience
          </p>
        </div>

        {/* Amenities grid with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-background/70 rounded-xl p-6 text-center transition-all duration-300 hover:bg-background hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border border-transparent hover:border-primary/10"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-red-500/10 mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-red-500/20 transition-colors duration-300">
                <div className="text-primary group-hover:text-primary/90 transition-all duration-300">
                  {amenity.icon}
                </div>
              </div>
              <span className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {amenity.label}
              </span>
              <p className="text-xs text-gray-500 mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
