export const metadata = {
  title: "About Us | Calculation Galaxy",
  description:
    "Learn more about Calculation Galaxy, your trusted destination for online calculators. Our mission is to make complex calculations simple, fast, and accessible to everyone.",
  keywords: [
    "about Calculation Galaxy",
    "calculator website",
    "online calculators",
    "math tools",
    "finance calculators",
    "health calculators",
  ],
  openGraph: {
    title: "About Us - Calculation Galaxy",
    description:
      "Get to know Calculation Galaxy — your go-to platform for financial, health, math, and utility calculators.",
    url: "https://calculationgalaxy.com/about",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Calculation Galaxy",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://calculationgalaxy.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#4c1d95] min-h-screen text-white px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <strong>Calculation Galaxy</strong> - a one-stop
          destination for accurate, reliable, and easy-to-use online
          calculators. Whether you’re planning your finances, tracking your
          health, or solving math problems, our goal is to make calculations
          simple and accessible for everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6 leading-relaxed">
          We believe that the right tools can save time and reduce errors.
          That’s why we’ve created a wide variety of calculators designed to
          help students, professionals, and everyday users make confident
          decisions - from calculating loan repayments to checking your Body
          Mass Index (BMI).
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            Wide range of calculators for finance, health, math, and more.
          </li>
          <li>Fast, accurate, and user-friendly interface.</li>
          <li>Mobile-friendly design so you can calculate on the go.</li>
          <li>Completely free to use, no hidden charges.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="leading-relaxed mb-6">
          At Calculation Galaxy, we aim to become the internet’s most trusted
          hub for everyday calculations. Our team is constantly working on
          adding new tools and improving existing ones, ensuring that you always
          have access to the most accurate results.
        </p>
      </section>
    </main>
  );
}
