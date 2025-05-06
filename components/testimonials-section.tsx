import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The peaceful environment of Sabitri Reading Room has helped me focus more on my studies. A perfect space for uninterrupted learning.",
      name: "Aarav Sharma",
      designation: "Engineering Student at University of Kathmandu",
      src: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      quote:
        "I love the study setup at Sabitri Reading Room. It's quiet, comfortable, and ideal for long study sessions.",
      name: "Sita Gautam",
      designation: "Business Student at Nepal College of Management",
      src: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      quote:
        "The availability of personal study spaces with all necessary amenities has made my study sessions incredibly productive.",
      name: "Rajesh Koirala",
      designation: "Medical Student at Manipal College of Medical Sciences",
      src: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      quote:
        "Sabitri Reading Room offers an ideal atmosphere for focused study. It's a perfect balance of calm and convenience.",
      name: "Maya Subedi",
      designation: "Psychology Student at Tribhuvan University",
      src: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      quote:
        "I find the study rooms at Sabitri Reading Room to be the best. They help me concentrate and improve my productivity.",
      name: "Pradeep Rai",
      designation: "MBA Student at Kathmandu University",
      src: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
