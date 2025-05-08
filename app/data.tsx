import {
  Zap,
  CircleParking,
  Power,
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
  Star,
  Clock,
  Calendar,
  Award,
  Bookmark,
  BookOpen,
} from "lucide-react";
// HERO SECTION
export const stats = [
  { value: "7", label: "Days a Week", icon: "Calendar" },
  { value: "6AM - 9PM", label: "Access Available", icon: "Clock" },
  { value: "FREE", label: "Internet Access", icon: "Wifi" },
];

export const heroFeatures = [
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

// Amenities Section
export const amenities = [
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
    description: "Uninterrupted power supply for 24/7 operational reliability",
  },
];

export const features = [
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

// PRICING

export const pricingPlans = [
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
    features: ["All quarterly benefits included", "Free printing (150 pages)"],
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
