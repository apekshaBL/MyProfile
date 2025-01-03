import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apeksha Lokhande",
  description:
    "",
  generator: "Next.js",
  applicationName: "Apeksha Lokhande",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "kopargaon",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "java",
    "python",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Apeksha Lokhande",
    description:
      "",
    url: "https://www.Apekshalokhande.me/",
    siteName: "www.Apekshalokhande.me",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
        alt: "Apeksha Lokhande-Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apeksha Lokhande-Developer",
    description:
      "I'm currently pursuing a Btech in Electronics and Computer Engineering (ECE) at Sanjivani College of Engineering, Kopargaon, specializing in full-stack web development with expertise in the MERN stack.",
    creator: "Apeksha Lokhande",
    creatorId: " ",
    images: [
      " ",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
