import { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import type { PanInfo, AnimationProps, MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface CarouselItem {
  image: string;
  alt: string;
  id: number;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number | string;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  className?: string;
  height?: string;
}

// Constants
const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a",
    alt: "Mountain landscape",
    title: "Mountain View",
    description: "Beautiful mountain landscape at sunset",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f",
    alt: "Ocean waves",
    title: "Ocean Waves",
    description: "Serene blue ocean with gentle waves",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839",
    alt: "City skyline",
    title: "Urban Landscape",
    description: "Modern city skyline at dusk",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583920230213-bdd2d6e7bd50",
    alt: "Forest path",
    title: "Forest Journey",
    description: "Mystical path through an ancient forest",
  },
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 } as const;

// Item component that uses hooks
function CarouselItemComponent({
  item,
  index,
  currentIndex,
  trackItemOffset,
  x,
  itemWidth,
  round,
  isResetting,
}: {
  item: CarouselItem;
  index: number;
  currentIndex: number;
  trackItemOffset: number;
  x: MotionValue<number>;
  itemWidth: number;
  round: boolean;
  isResetting: boolean;
}) {
  // Now each hook is called directly in the component function
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const rotateY = useTransform(x, range, round ? [60, 0, -60] : [15, 0, -15]);
  const scale = useTransform(x, range, [0.8, 1, 0.8]);
  const opacity = useTransform(x, range, [0.5, 1, 0.5]);

  return (
    <motion.div
      key={`item-${item.id}-${index}`}
      className={`relative shrink-0 ${
        round ? "rounded-full overflow-hidden" : "rounded-xl overflow-hidden"
      } h-full shadow-2xl cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        rotateY,
        scale,
        opacity,
        zIndex: index === currentIndex ? 10 : 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      transition={
        isResetting
          ? { duration: 0 }
          : (SPRING_OPTIONS as AnimationProps["transition"])
      }
    >
      <div className="w-full h-full relative">
        <Image
          fill
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
        {(item.title || item.description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
            {item.title && <h3 className="text-lg font-bold">{item.title}</h3>}
            {item.description && <p className="text-sm">{item.description}</p>}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = "100%",
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
  round = false,
  className = "",
  height = "500px",
}: CarouselProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerPadding = 0;
  const [itemWidth, setItemWidth] = useState<number>(
    300 - containerPadding * 2
  );
  const [trackItemOffset, setTrackItemOffset] = useState<number>(
    itemWidth + GAP
  );

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Handle resize to make the carousel responsive
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        const newItemWidth = newWidth - containerPadding * 2;
        setItemWidth(newItemWidth);
        setTrackItemOffset(newItemWidth + GAP);
      }
    };

    // Initial size calculation
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [containerPadding]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (prev === items.length - 1 && loop) {
        return prev + 1; // Animate to clone.
      }
      if (prev === carouselItems.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  }, [isAnimating, items.length, loop, carouselItems.length]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && !isAnimating) {
      const timer = setInterval(() => {
        goToNext();
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    isAnimating,
    currentIndex,
    pauseOnHover,
    goToNext,
  ]);

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (loop && prev === 0) {
        return items.length - 1;
      } else {
        return Math.max(prev - 1, 0);
      }
    });
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    if (isAnimating) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;

    setIsAnimating(true);

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    } else {
      setIsAnimating(false);
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className} shadow-2xl group`}
      style={{
        width: typeof baseWidth === "number" ? `${baseWidth}px` : baseWidth,
        height: height,
        borderRadius: "16px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <motion.div
        className="flex h-full touch-pan-y"
        drag="x"
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={
          isResetting
            ? { duration: 0 }
            : (SPRING_OPTIONS as AnimationProps["transition"])
        }
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <CarouselItemComponent
            key={`carousel-item-${item.id}-${index}`}
            item={item}
            index={index}
            currentIndex={currentIndex}
            trackItemOffset={trackItemOffset}
            x={x}
            itemWidth={itemWidth}
            round={round}
            isResetting={isResetting}
          />
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {(isHovered || !autoplay) && (
          <>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.9, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 focus:outline-none z-20"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 focus:outline-none z-20"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={`indicator-${index}`}
              className="relative h-2 rounded-full cursor-pointer bg-white/20 overflow-hidden"
              style={{ width: currentIndex % items.length === index ? 24 : 12 }}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              whileHover={{ scale: 1.2 }}
              animate={{
                width: currentIndex % items.length === index ? 24 : 12,
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentIndex % items.length === index && (
                <motion.div
                  className="absolute  inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
