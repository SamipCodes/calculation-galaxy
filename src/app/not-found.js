export const metadata = {
  title: "404 - Page Not Found | Calculation Galaxy",
  description:
    "Oops! The page you're looking for does not exist on Calculation Galaxy. Explore our calculators instead.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4c1d95] text-white p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 max-w-lg">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Don’t worry - you can explore
        our calculators below.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold shadow-lg transition"
      >
        Go Back Home
      </a>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">
          Popular Calculators on Calculation Galaxy:
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="/bmi" className="text-blue-300 hover:underline">
              BMI Calculator
            </a>
          </li>
          <li>
            <a
              href="/loan-emi-calculator"
              className="text-blue-300 hover:underline"
            >
              Loan EMI Calculator
            </a>
          </li>
          <li>
            <a href="/age-calculator" className="text-blue-300 hover:underline">
              Age Calculator
            </a>
          </li>
          <li>
            <a
              href="/math-calculator"
              className="text-blue-300 hover:underline"
            >
              Math Calculator
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
