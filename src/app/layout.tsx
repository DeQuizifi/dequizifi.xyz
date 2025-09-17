import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeQuizifi.xyz | Interactive Quizzes & Learning Platform",
  description: "DeQuizifi.xyz is your go-to platform for interactive quizzes, engaging learning experiences, and knowledge sharing. Challenge yourself, learn, and grow!",
  keywords: [
    "quizzes",
    "learning",
    "education",
    "interactive",
    "DeQuizifi",
    "knowledge",
    "challenge",
    "study",
    "platform"
  ],
  authors: [{ name: "DeQuizifi Team", url: "https://dequizifi.xyz" }],
  themeColor: "#0A0A23",
  openGraph: {
    title: "DeQuizifi.xyz | Interactive Quizzes & Learning Platform",
    description: "Engage with interactive quizzes and boost your learning on DeQuizifi",
    url: "https://dequizifi.xyz",
    siteName: "DeQuizifi.xyz",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "DeQuizifi.xyz Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navigation/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
