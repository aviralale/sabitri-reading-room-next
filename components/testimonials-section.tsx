import { fetchTestimonials } from "@/api";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export async function TestimonialsSection() {
  const testimonials = await fetchTestimonials();

  return <AnimatedTestimonials testimonials={testimonials || []} />;
}
