"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpenText,
  Home,
  Search,
  FileQuestion,
  ChevronRight,
  Mail,
  Phone,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[90vh] flex ">
      <div className="mx-auto max-w-5xl w-full px-4 lg:px-6 relative">
        {/* Decorative elements - subtle in both modes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl" />

        <Card className="relative overflow-hidden p-6 sm:p-8 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-50 dark:bg-indigo-900/20 rounded-tl-full"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            {/* Illustration side */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                {/* Book stack illustration using simple shapes */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-md transform rotate-1"></div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-44 h-14 bg-blue-300 dark:bg-blue-700 rounded-md transform -rotate-3"></div>
                <div className="absolute bottom-26 left-1/2 -translate-x-1/2 w-40 h-16 bg-purple-200 dark:bg-purple-800 rounded-md transform rotate-6"></div>

                {/* Big question mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileQuestion className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                </div>

                {/* 404 text */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center">
                  <h2 className="text-8xl font-bold text-blue-600 dark:text-blue-400">
                    404
                  </h2>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                <BrainCircuit className="h-4 w-4 mr-2" />
                Page Not Found
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
                Oops! This page seems to be missing.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                The page you're looking for might have been moved, deleted, or
                perhaps never existed. Let's get you back on track.
              </p>

              <div className="space-y-4">
                <div className="flex justify-center md:justify-start gap-4">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-6 rounded-lg font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  >
                    <Link href="/">
                      <Home className="mr-2 h-5 w-5" />
                      Back to Home
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-6 rounded-lg font-medium flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Popular destinations:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/membership"
                      className="flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <BookOpenText className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        Browse Memberships
                      </span>
                      <ChevronRight className="h-4 w-4 ml-auto text-slate-400" />
                    </Link>

                    <Link
                      href="/facilities"
                      className="flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Search className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-3" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        See our Facilities
                      </span>
                      <ChevronRight className="h-4 w-4 ml-auto text-slate-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help section at bottom */}
          <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Need assistance? Reach out to us:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@sabitrireadingroom.com"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@sabitrireadingroom.com
              </a>
              <a
                href="tel:+977-1-5911356"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                +977-1-5911356
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
