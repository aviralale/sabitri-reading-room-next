"use client";
import { useState, useEffect } from "react";
import {
  Check,
  BookOpen,
  Star,
  Clock,
  Calendar,
  Award,
  Bookmark,
} from "lucide-react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const pricingPlans = [
    {
      name: "Daily",
      price: "200",
      duration: "Per Day",
      icon: <Clock size={22} />,
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      description: "Perfect for one-time visits",
      features: [
        "Full access to reading materials",
        "Quiet study environment",
        "Basic amenities included",
        "No commitment required",
      ],
    },
    {
      name: "Weekly",
      price: "1,000",
      duration: "Per Week",
      icon: <Calendar size={22} />,
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-100",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      description: "Great for short-term projects",
      features: [
        "All daily benefits included",
        "Reserved seating options",
        "Weekly events participation",
      ],
    },
    {
      name: "Monthly",
      price: "2,500",
      duration: "Per Month",
      icon: <BookOpen size={22} />,
      color: "bg-emerald-100 text-emerald-600",
      hoverColor: "hover:bg-emerald-100",
      borderColor: "border-emerald-200",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      popular: true,
      description: "Our most popular option",
      features: ["All weekly benefits included", "Dedicated study space"],
    },
    {
      name: "3 Months",
      price: "7,000",
      duration: "For 3 Months",
      savePercent: "7%",
      icon: <Star size={22} />,
      color: "bg-amber-100 text-amber-600",
      hoverColor: "hover:bg-amber-100",
      borderColor: "border-amber-200",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      description: "Ideal for regular visitors",
      features: [
        "All monthly benefits included",
        "Priority booking for study rooms",
        "Free printing (50 pages)",
      ],
    },
    {
      name: "6 Months",
      price: "13,500",
      duration: "For 6 Months",
      savePercent: "10%",
      icon: <Award size={22} />,
      color: "bg-rose-100 text-rose-600",
      hoverColor: "hover:bg-rose-100",
      borderColor: "border-rose-200",
      buttonColor: "bg-rose-600 hover:bg-rose-700",
      description: "Committed to your learning",
      features: [
        "All quarterly benefits included",
        "Free printing (150 pages)",
      ],
    },
    {
      name: "Yearly",
      price: "26,000",
      duration: "Per Year",
      savePercent: "13%",
      icon: <Bookmark size={22} />,
      color: "bg-indigo-100 text-indigo-600",
      hoverColor: "hover:bg-indigo-100",
      borderColor: "border-indigo-200",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      description: "Best value for dedicated readers",
      features: ["All 6-month benefits included", "VIP member status"],
    },
  ];

  return (
    <div className=" px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-3 bg-gradient-to-r from-blue-600 to-red-600 px-4 py-1 rounded-full">
            <p className="text-white font-medium text-sm">
              Flexible Plans for Every Reader
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Sabitri Reading Room{" "}
            <span className="text-blue-600">Memberships</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Choose the perfect membership plan that suits your reading and study
            needs. Join our community of knowledge seekers today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative dark:bg-gray-950 rounded-xl shadow-md transition-all duration-500 transform ${
                selectedPlan === plan.name
                  ? "scale-105 shadow-xl border-2 " + plan.borderColor
                  : "border border-gray-200"
              } hover:shadow-lg ${plan.hoverColor} ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs px-4 py-1 rounded-full font-medium shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-full ${plan.color}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold ">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-muted-foreground text-lg">रू</span>
                    <span className="text-4xl font-bold  mr-2">
                      {plan.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {plan.duration}
                    </p>
                    {plan.savePercent && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Save {plan.savePercent}
                      </span>
                    )}
                  </div>
                </div>

                <p className=" text-sm mb-6 font-medium">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`p-1 rounded-full ${plan.color} mt-0.5 mr-3 flex-shrink-0`}
                      >
                        <Check size={14} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center bg-indigo-50 dark:bg-indigo-800 p-6 rounded-lg shadow-sm transition-all duration-1000 transform ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="text-xl font-semibold 00 mb-3">
            All memberships include
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mr-2">
                <BookOpen size={16} />
              </div>
              <span className="">Access to reading areas</span>
            </div>
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mr-2">
                <Check size={16} />
              </div>
              <span className="">High-speed Wi-Fi</span>
            </div>
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mr-2">
                <Check size={16} />
              </div>
              <span className="">Basic amenities</span>
            </div>
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mr-2">
                <Check size={16} />
              </div>
              <span className="">Comfortable seating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
