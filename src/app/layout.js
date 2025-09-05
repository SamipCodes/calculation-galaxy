import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calculation Galaxy | Online Calculators for Finance, Health & More",
  description:
    "Calculation Galaxy offers a wide range of online calculators including financial, health, math, and utility calculators to make your life easier.",
  keywords:
    "online calculators, EMI calculator, BMI calculator, algebra solver, unit converter, financial calculator, health calculator",
  openGraph: {
    title: "Calculation Galaxy | Online Calculators",
    description:
      "Explore our wide range of online calculators for finance, health, math, and more.",
    url: "https://calculationgalaxy.com/",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://calculationgalaxy.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
