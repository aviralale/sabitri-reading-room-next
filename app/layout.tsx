import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/shared/navbar";
import FooterSection from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabitri-reading-room-next.vercel.app"),

  title: {
    default: "Sabitri Reading Room | Quiet Study Spaces for Focused Learning",

    template: "%s | Sabitri Reading Room",
  },

  description:
    "Discover Sabitri Reading Room's premium study spaces designed for uninterrupted learning. Quiet reading areas with comfortable seating and peaceful environment.",

  keywords: [
    "study space",

    "reading room",

    "quiet study",

    "learning environment",

    "focused study",

    "library",

    "academic workspace",

    "student study center",

    "productivity space",

    "silent reading area",
  ],

  authors: [
    {
      name: "Sabitri Reading Room",

      url: "https://sabitri-reading-room-next.vercel.app/about",
    },
  ],

  creator: "Sabitri Reading Room",

  publisher: "Sabitri Reading Room",

  alternates: {
    canonical: "/",
  },

  category: "education",

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://sabitri-reading-room-next.vercel.app",

    title: "Sabitri Reading Room | Be Educated, Be a Great Achiever",

    description:
      "Premium study spaces designed for uninterrupted learning with comfortable seating and peaceful environment.",

    siteName: "Sabitri Reading Room",

    images: [
      {
        url: "/favicon.png",

        width: 1200,

        height: 630,

        alt: "Sabitri Reading Room - Be Educated, Be a Great Achiever",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sabitri Reading Room | Be Educated, Be a Great Achiever",

    description:
      "Premium study spaces designed for uninterrupted learning with comfortable seating and peaceful environment.",

    images: ["/favicon.png"],
  },

  icons: [
    { rel: "icon", type: "image/png", url: "/favicon.png" },

    {
      rel: "icon",

      type: "image/png",

      sizes: "32x32",

      url: "/favicon.png",
    },

    {
      rel: "icon",

      type: "image/png",

      sizes: "16x16",

      url: "/favicon.png",
    },

    {
      rel: "apple-touch-icon",

      sizes: "180x180",

      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed w-full z-[1000] bg-white/80 dark:bg-black/80">
            <Navbar />
          </div>
          <main className="pt-32">{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
