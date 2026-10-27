import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakib Mia | Full Stack Developer",
  description:
    "Portfolio of Rakib Mia, a Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web engineering with an aim toward AI-driven systems.",
  keywords: [
    "Rakib Mia",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web Developer Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Rakib Mia", url: "https://github.com/rakib12r3m" }],
  creator: "Rakib Mia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakibmia.dev",
    title: "Rakib Mia | Full Stack Developer",
    description:
      "Building modern, responsive, and scalable web experiences with clean code and thoughtful design.",
    siteName: "Rakib Mia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Mia | Full Stack Developer",
    description:
      "Building modern, responsive, and scalable web experiences with clean code and thoughtful design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0B1120] text-[#F8FAFC] antialiased selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
        {children}
      </body>
    </html>
  );
}
