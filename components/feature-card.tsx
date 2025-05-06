"use client";
import {
  ArrowRight,
  Award,
  Shield,
  Clock,
  BookOpen,
  Coffee,
  Wifi,
  Zap,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  color: string;
  link: string;
  bgColor?: string;
  borderColor?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  color,
  link,
  bgColor = "bg-primary/5",
  borderColor = "border-primary/20",
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = () => {
    switch (icon) {
      case "Award":
        return <Award className={`h-8 w-8 ${color}`} />;
      case "Shield":
        return <Shield className={`h-8 w-8 ${color}`} />;
      case "Clock":
        return <Clock className={`h-8 w-8 ${color}`} />;
      case "BookOpen":
        return <BookOpen className={`h-8 w-8 ${color}`} />;
      case "Coffee":
        return <Coffee className={`h-8 w-8 ${color}`} />;
      case "Wifi":
        return <Wifi className={`h-8 w-8 ${color}`} />;
      case "Zap":
        return <Zap className={`h-8 w-8 ${color}`} />;
      case "Users":
        return <Users className={`h-8 w-8 ${color}`} />;
      case "Star":
        return <Star className={`h-8 w-8 ${color}`} />;
      default:
        return <Award className={`h-8 w-8 ${color}`} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative overflow-hidden rounded-xl border ${borderColor} ${bgColor} backdrop-blur-sm p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background with customized colors */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        style={{
          background: `linear-gradient(to bottom right, ${
            color.includes("primary")
              ? "var(--primary)"
              : color.replace("text-", "")
          }/10, 
                      ${
                        color.includes("primary")
                          ? "var(--primary)"
                          : color.replace("text-", "")
                      }/5)`,
        }}
      ></div>

      {/* Decorative elements with dynamic coloring */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700`}
        style={{
          background: `${
            color.includes("primary")
              ? "var(--primary)"
              : color.replace("text-", "")
          }/5`,
        }}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700`}
        style={{
          background: `${
            color.includes("primary")
              ? "var(--primary)"
              : color.replace("text-", "")
          }/5`,
        }}
      ></div>

      {/* Card content */}
      <div className="relative z-10">
        <div
          className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500`}
          style={{
            background: `linear-gradient(to bottom right, var(--background), ${
              color.includes("primary")
                ? "var(--primary)"
                : color.replace("text-", "")
            }/10)`,
            boxShadow: `0 4px 12px ${
              color.includes("primary")
                ? "var(--primary)"
                : color.replace("text-", "")
            }/10`,
          }}
        >
          <IconComponent />
        </div>

        <h3
          className={`text-2xl font-bold mb-4 group-hover:${color} transition-colors`}
        >
          {title}
        </h3>

        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Enhanced separator with animation using dynamic color */}
        <div
          className={`h-0.5 w-16 rounded-full group-hover:w-32 transition-all duration-500`}
          style={{
            background: `linear-gradient(to right, ${
              color.includes("primary")
                ? "var(--primary)"
                : color.replace("text-", "")
            }/60, transparent)`,
          }}
        ></div>

        {/* Learn more link with improved animation */}
        <Link
          href={link}
          className={`mt-6 inline-flex items-center text-sm font-medium ${color} group`}
        >
          <span className="relative">
            Learn more
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300`}
              style={{
                background: `${
                  color.includes("primary")
                    ? "var(--primary)"
                    : color.replace("text-", "")
                }`,
              }}
            ></span>
          </span>
          <ArrowRight
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </Link>
      </div>
      <div
        className={`absolute inset-0 rounded-xl border border-transparent group-hover:${borderColor} transition-colors duration-500`}
      ></div>
    </motion.div>
  );
}
