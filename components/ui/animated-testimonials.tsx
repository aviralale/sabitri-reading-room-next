"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useSwipeable } from "react-swipeable";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  alt?: string; // Added for better accessibility
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  autoplayInterval = 5000,
  className = "",
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Memoize handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setActive(index);
  }, []);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Autoplay with pause on hover
  useEffect(() => {
    if (autoplay && !isPaused) {
      const interval = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, isPaused, handleNext, autoplayInterval]);

  // Memoize random rotation to prevent jittering
  const randomRotations = useMemo(() => {
    return testimonials.map(() => Math.floor(Math.random() * 21) - 10);
  }, [testimonials]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div
      className={`mx-auto max-w-sm px-4 py-12 sm:py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Testimonial carousel"
    >
      <div className="relative grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:gap-20 md:grid-cols-2">
        {/* Image section */}
        <div
          className="relative h-64 sm:h-72 md:h-80 w-full"
          {...swipeHandlers}
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`image-${index}`}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotations[index],
                }}
                animate={{
                  opacity: active === index ? 1 : 0.7,
                  scale: active === index ? 1 : 0.95,
                  z: active === index ? 0 : -100,
                  rotate: active === index ? 0 : randomRotations[index],
                  zIndex:
                    active === index ? 40 : testimonials.length + 2 - index,
                  y: active === index ? [0, -60, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotations[index],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 origin-bottom 
                  ${active === index ? "shadow-lg" : "shadow-md"} 
                  transition-shadow duration-300`}
              >
                <img
                  src={testimonial.src}
                  alt={
                    testimonial.alt ||
                    `${testimonial.name}, ${testimonial.designation}`
                  }
                  width={500}
                  height={500}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text content section */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {testimonials[active].designation}
                </p>
              </div>

              <motion.blockquote
                className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-neutral-300"
                aria-live="polite"
              >
                <span className="text-2xl text-gray-400 dark:text-gray-500">
                  "
                </span>
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(8px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
                <span className="text-2xl text-gray-400 dark:text-gray-500">
                  "
                </span>
              </motion.blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Controls section */}
          <div className="flex items-center gap-6 pt-8 sm:pt-10 md:pt-6">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <IconArrowLeft className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover/button:translate-x-[-2px] dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <IconArrowRight className="h-5 w-5 text-gray-700 transition-transform duration-300 group-hover/button:translate-x-[2px] dark:text-neutral-400" />
              </button>
            </div>

            {/* Pagination indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-6 bg-gray-700 dark:bg-neutral-300"
                      : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={active === index ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
