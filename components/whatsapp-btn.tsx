"use client";

import { motion } from "framer-motion";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";

const WhatsappButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-16 right-10 z-[1000]"
    >
      <a
        href="https://wa.me/+9779801119223"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="bg-[#25D366] size-14 flex justify-center items-center rounded-full shadow-lg shadow-[#25D366]/30 relative group"
      >
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 opacity-75" />

        {/* Pulse effect on hover */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />

        {/* Icon */}
        <span className="relative">
          <WhatsappIcon />
        </span>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 py-1 px-3 rounded-lg shadow-lg text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
          <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rotate-45 size-2 bg-white dark:bg-gray-800" />
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsappButton;
