"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubscribed(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 border-t border-border/50 pt-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm font-medium">
          Receive more details directly to your mail
        </p>
      </div>

      {subscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 text-green-500 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg max-w-md mx-auto md:mx-0"
        >
          <CheckCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            Thank you! You're now subscribed.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md mx-auto md:mx-0 relative group"
        >
          <div className="relative flex-grow">
            <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors group-hover:text-primary/70" />
            <input
              placeholder="Your email address"
              className="h-12 w-full rounded-l-lg border border-primary/20 border-r-0 bg-background/50 backdrop-blur-sm pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all peer"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="rounded-l-none h-12 px-6 bg-gradient-to-r from-primary to-red-500/80 transition-all relative overflow-hidden disabled:opacity-80"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Get Notified</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
          </Button>

          {/* Animated border effect on hover */}
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-500 rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity -z-10" /> */}
        </form>
      )}
    </motion.div>
  );
}
