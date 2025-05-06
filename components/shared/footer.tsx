import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

const links = [
  { title: "About", href: "#" },
  { title: "Facilities", href: "#" },
  { title: "Membership", href: "#" },
  { title: "Contact", href: "#" },
  { title: "Help", href: "#" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/SabitriReadingRoom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-5"
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        ></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/readingroom10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-5"
      >
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        ></path>
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-gray-100/10 bg-gradient-to-b from-transparent to-gray-50/5 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" aria-label="go home" className="mb-8 block">
            <Image
              src={Logo}
              alt="Sabitri Reading Room Logo"
              className="h-14 w-auto drop-shadow transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
              width={120}
              height={56}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mb-10 flex items-center justify-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-full bg-white/5 p-2 text-gray-500 ring-1 ring-gray-200/20 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:ring-gray-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} Sabitri Reading Room. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
