"use client";

import { useState, useEffect } from "react";
import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import Image from "next/image";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Membership", href: "#membership" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuState(false);

  return (
    <nav
      data-state={menuState ? "active" : undefined}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-white/90 py-2 backdrop-blur-md shadow-sm dark:bg-zinc-950/90"
          : "bg-white/50 py-4 dark:bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="home"
            className="relative z-20 flex items-center space-x-2"
          >
            <Image
              src={Logo}
              className="h-10 w-auto object-contain transition-all duration-300 hover:scale-105"
              alt="Sabitri Reading Room Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState ? "Close Menu" : "Open Menu"}
            className="relative z-50 block rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 lg:hidden"
          >
            <Menu
              className={`size-6 transition-all duration-300 ${
                menuState ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${
                menuState
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <ul className="flex items-center gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ml-8 flex items-center gap-4 border-l border-gray-200 pl-8 dark:border-gray-700">
              <ModeToggle />
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-red-500 to-blue-500 px-5 font-medium text-white shadow-md transition-all duration-300 hover:from-red-600 hover:to-blue-600 hover:shadow-lg dark:shadow-blue-500/20"
              >
                <Link href="#membership">Book Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
              menuState ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed bottom-0 right-0 top-0 z-40 w-full max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 dark:bg-zinc-900 lg:hidden ${
              menuState ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mt-16 flex flex-col">
              <ul className="space-y-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col space-y-4">
                <div className="flex justify-start">
                  <ModeToggle />
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-blue-500 font-medium text-white shadow-md transition-all hover:from-red-600 hover:to-blue-600 hover:shadow-lg dark:shadow-blue-500/20"
                >
                  <Link href="#membership" onClick={closeMenu}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
