import AgeCalculator from "./AgeCalculator";

export const metadata = {
  title:
    "Age Calculator - Calculate Your Exact Age Online | Calculation Galaxy",
  description:
    "Free Age Calculator online. Enter your date of birth to calculate your exact age in years, months, and days with next birthday countdown.",
  keywords: [
    "age calculator",
    "birthday calculator",
    "date of birth calculator",
    "age in years months days",
    "next birthday countdown",
  ],
  openGraph: {
    title: "Age Calculator - Calculation Galaxy",
    description:
      "Use our free Age Calculator to calculate your exact age and find days left until your next birthday.",
    url: "https://calculationgalaxy.com/age-calculator",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Age Calculator",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://calculationgalaxy.com/age-calculator",
  },
};

export default function AgeCalculatorPage() {
  return (
    <div className="bg-[#4c1d95] p-6 text-white">
      <AgeCalculator />

      <section className="mx-auto bg-white/10 backdrop-blur-lg p-6 mt-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">What is an Age Calculator?</h2>
        <p className="mb-4">
          An age calculator helps you determine your exact age in years, months,
          and days from your date of birth. It also tells you how many days are
          left until your next birthday.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Why Use an Age Calculator?
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Find your precise age for legal, educational, or medical needs
          </li>
          <li>Track milestones and upcoming birthdays</li>
          <li>Quick, accurate, and easy to use online</li>
        </ul>
      </section>
    </div>
  );
}
