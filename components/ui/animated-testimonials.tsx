"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconStar,
  IconQuote,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useSwipeable } from "react-swipeable";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating?: number; // Optional rating out of 5
  alt?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  autoplayInterval = 6000,
  className = "",
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const progressRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(true);

  // Memoize handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    if (!animationComplete) return;
    setAnimationComplete(false);
    setDirection("right");
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length, animationComplete]);

  const handlePrev = useCallback(() => {
    if (!animationComplete) return;
    setAnimationComplete(false);
    setDirection("left");
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length, animationComplete]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!animationComplete) return;
      setAnimationComplete(false);
      setDirection(index > active ? "right" : "left");
      setActive(index);
    },
    [active, animationComplete]
  );

  // Progress bar animation for autoplay
  useEffect(() => {
    if (autoplay && progressRef.current) {
      progressRef.current.style.width = "0%";
      const animation = progressRef.current.animate(
        [{ width: "0%" }, { width: "100%" }],
        {
          duration: autoplayInterval,
          easing: "linear",
          fill: "forwards",
        }
      );

      const timeout = setTimeout(handleNext, autoplayInterval);

      return () => {
        animation.cancel();
        clearTimeout(timeout);
      };
    }
  }, [autoplay, handleNext, autoplayInterval, active]);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 10,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Generate consistent but random offsets for the floating elements
  const randomOffsets = useMemo(() => {
    return testimonials.map(() => ({
      rotation: Math.floor(Math.random() * 16) - 8,
      scale: 0.9 + Math.random() * 0.2,
      yOffset: Math.floor(Math.random() * 40) - 20,
    }));
  }, [testimonials]);

  return (
    <div
      className={`relative mx-auto max-w-sm px-6 py-16 sm:py-24 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12 bg-gradient-to-b rounded-3xl shadow-xl ${className}`}
      role="region"
      aria-label="Testimonial carousel"
    >
      {/* Decorative elements */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-12 right-12 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-full h-1/2 -translate-x-1/2 bg-gradient-radial from-indigo-500/5 to-transparent dark:from-indigo-400/5 blur-2xl"></div>

      <div className="relative grid grid-cols-1 gap-12 sm:gap-16 md:gap-20 lg:gap-24 md:grid-cols-2">
        {/* Image section with floating effect */}
        <div
          className="relative h-72 sm:h-80 md:h-96 w-full"
          {...swipeHandlers}
        >
          {/* Background elements */}
          <div className="absolute inset-0 -left-4 -right-4 -top-4 -bottom-4 bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-950/30 dark:to-blue-900/20 rounded-3xl opacity-70 blur-md"></div>

          <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-white/20 to-transparent dark:from-black/20 z-30 rounded-b-3xl"></div>

          <AnimatePresence initial={false} mode="popLayout">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`image-${index}`}
                initial={{
                  opacity: 0,
                  scale: direction === "right" ? 0.85 : 1.15,
                  x: direction === "right" ? 100 : -100,
                  rotate: randomOffsets[index].rotation,
                  zIndex: active === index ? 40 : 10,
                }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  scale: active === index ? 1 : randomOffsets[index].scale,
                  x: active === index ? 0 : direction === "right" ? -100 : 100,
                  rotate: active === index ? 0 : randomOffsets[index].rotation,
                  zIndex: active === index ? 40 : index,
                  y: active === index ? 0 : randomOffsets[index].yOffset,
                }}
                exit={{
                  opacity: 0,
                  scale: direction === "right" ? 1.15 : 0.85,
                  x: direction === "right" ? -100 : 100,
                  rotate: randomOffsets[index].rotation,
                  zIndex: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                onAnimationComplete={() => setAnimationComplete(true)}
                className={`absolute inset-0 origin-center rounded-3xl
                  ${active === index ? "shadow-2xl" : "shadow-lg"} 
                  transition-shadow duration-300`}
              >
                {/* Decorative frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-400/20 dark:to-blue-400/20 rounded-3xl p-1">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={testimonial.src}
                      alt={
                        testimonial.alt ||
                        `${testimonial.name}, ${testimonial.designation}`
                      }
                      width={500}
                      height={500}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-all duration-500"
                    />

                    {/* Image overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60"></div>

                    {/* Image caption at bottom */}
                    {active === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-6 text-white z-20"
                      >
                        <h4 className="text-xl font-bold text-white/90">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/70">
                          {testimonial.designation}
                        </p>

                        {/* Show rating if available */}
                        {testimonial.rating && (
                          <div className="flex gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <IconStar
                                key={i}
                                size={16}
                                className={`${
                                  i < testimonial.rating!
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-400"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text content section */}
        <div className="flex flex-col justify-between py-6 md:py-8 relative">
          {/* Large quote mark */}
          <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 opacity-10 dark:opacity-5">
            <IconQuote
              size={120}
              className="text-indigo-600 dark:text-indigo-400"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active}`}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -30,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="space-y-6 relative z-10"
            >
              <motion.blockquote
                className="relative pt-8 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-700 dark:text-neutral-200"
                aria-live="polite"
              >
                <motion.div className="relative">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.015 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.div>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  {testimonials[active].designation}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controls section with updated styles */}
          <div className="flex flex-col gap-4 pt-8 sm:pt-10 md:pt-6">
            {/* Progress bar */}
            {autoplay && (
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  ref={progressRef}
                  className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400"
                ></div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <IconArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover/button:translate-x-[-2px] group-hover/button:text-indigo-600 dark:group-hover/button:text-indigo-400" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <IconArrowRight className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover/button:translate-x-[2px] group-hover/button:text-indigo-600 dark:group-hover/button:text-indigo-400" />
                </button>
              </div>

              {/* Pagination indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      active === index
                        ? "h-2 w-8 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 rounded-full shadow-sm"
                        : "h-2 w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full"
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
    </div>
  );
};
