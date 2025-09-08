export const metadata = {
  title: "Math Calculator - Basic Arithmetic Online | Calculation Galaxy",
  description:
    "Free online Math Calculator. Perform addition, subtraction, multiplication, and division easily. Mobile-friendly and fast.",
  keywords: [
    "math calculator",
    "arithmetic calculator",
    "online calculator",
    "addition subtraction",
    "multiplication division",
    "basic math tools",
  ],
  openGraph: {
    title: "Math Calculator - Calculation Galaxy",
    description:
      "Use our free Math Calculator for basic arithmetic like addition, subtraction, multiplication, and division online.",
    url: "https://calculationgalaxy.com/math-calculator",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Math Calculator",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://calculationgalaxy.com/math-calculator",
  },
};

import MathCalculator from "./MathCalculator";

export default function MathCalculatorPage() {
  return (
    <div className="bg-[#4c1d95] p-6 text-white min-h-screen">
      <MathCalculator />

      {/* SEO friendly info section */}
      <section className="mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl mt-10">
        <h2 className="text-2xl font-bold mb-4">About Math Calculator</h2>
        <p className="mb-4">
          Our free Math Calculator is designed to quickly solve basic arithmetic
          operations like addition, subtraction, multiplication, and division.
          It’s a simple yet powerful tool for students, professionals, and
          anyone who needs quick calculations online.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Why Use an Online Math Calculator?
        </h3>
        <p className="mb-4">
          This calculator saves time by providing instant results without the
          need for manual calculations. Whether you’re checking homework,
          balancing expenses, or doing business calculations, it helps reduce
          errors and speeds up the process.
        </p>

        <h3 className="text-xl font-semibold mb-2">Supported Operations</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="text-green-300 font-semibold">Addition (+):</span>{" "}
            Combine numbers.
          </li>
          <li>
            <span className="text-blue-300 font-semibold">
              Subtraction (−):
            </span>{" "}
            Find the difference.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">
              Multiplication (×):
            </span>{" "}
            Multiply values.
          </li>
          <li>
            <span className="text-red-300 font-semibold">Division (÷):</span>{" "}
            Divide numbers safely.
          </li>
        </ul>

        <p>
          Use this calculator as a reliable everyday math tool. It is free,
          mobile-friendly, and optimized for accuracy and ease of use.
        </p>
      </section>
    </div>
  );
}
