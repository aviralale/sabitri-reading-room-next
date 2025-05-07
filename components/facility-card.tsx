import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type FeatureProps = {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  color: string;
  lightColor: string;
  textColor: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Feature = ({
  title,
  description,
  icon,
  index,
  color,
  lightColor,
  textColor,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: FeatureProps) => {
  // Create a unique corner accent based on index
  const cornerStyles = [
    "top-0 right-0", // Top right
    "bottom-0 right-0", // Bottom right
    "bottom-0 left-0", // Bottom left
    "top-0 left-0", // Top left
  ];

  const cornerPosition = cornerStyles[index % cornerStyles.length];

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-300 transform border border-gray-100 dark:border-gray-700",
        isHovered ? "shadow-md" : ""
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>

      {/* Distinctive corner accent based on index */}
      <div
        className={cn(
          "absolute w-16 h-16 transform rotate-45 -translate-x-8 -translate-y-8",
          cornerPosition,
          color,
          "opacity-10"
        )}
      ></div>

      {/* Index marker for visual distinction */}
      <div
        className={cn(
          "absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
          lightColor,
          textColor
        )}
      >
        {index + 1}
      </div>

      {/* Simple accent border */}
      <div className={cn("absolute top-0 left-0 w-full h-0.5", color)}></div>

      <div className="relative p-6 flex flex-col h-full">
        {/* Icon with distinctive styling based on index */}
        <div
          className={cn(
            "p-3 mb-4 flex items-center justify-center",
            lightColor,
            index % 2 === 0 ? "rounded-md w-12 h-12" : "rounded-full w-14 h-14"
          )}
        >
          <span className={textColor}>{icon}</span>
        </div>

        {/* Title with unique emphasis */}
        <h3
          className={cn(
            "text-base mb-2 text-gray-900 dark:text-white",
            index % 2 === 0 ? "font-medium" : "font-semibold"
          )}
        >
          {title}
          <span className={cn("ml-1 text-xs font-normal", textColor)}>
            {index % 2 === 0 ? "•" : "○"}
          </span>
        </h3>

        {/* Description with varied emphasis */}
        <p
          className={cn(
            "text-sm leading-relaxed flex-grow",
            index % 2 === 0
              ? "text-gray-600 dark:text-gray-300"
              : "text-gray-700 dark:text-gray-200"
          )}
        >
          {description}
        </p>

        {/* Distinctive footer based on index */}
        <div className="mt-4 flex items-center">
          {index % 2 === 0 ? (
            <>
              <div className={cn("h-0.5 w-8", color)}></div>
            </>
          ) : (
            <>
              <div className={cn("ml-2 h-0.5 w-8", color)}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feature;
