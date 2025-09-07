import Link from "next/link";

export default function Home() {
  const categories = [
    {
      name: "Financial Calculators",
      icon: "💰",
      calculators: [
        { name: "Loan EMI Calculator", href: "/calculators/financial/emi" },
        {
          name: "Investment Calculator",
          href: "/calculators/financial/investment",
        },
        { name: "Tax Calculator", href: "/calculators/financial/tax" },
        {
          name: "Retirement Calculator",
          href: "/calculators/financial/retirement",
        },
      ],
    },
    {
      name: "Health Calculators",
      icon: "💪",
      calculators: [
        { name: "BMI Calculator", href: "/bmi" },
        { name: "Calorie Calculator", href: "/calculators/fitness/calorie" },
        { name: "Body Fat Calculator", href: "/calculators/fitness/body-fat" },
        { name: "BMR Calculator", href: "/calculators/fitness/bmr" },
      ],
    },
    {
      name: "Math Calculators",
      icon: "📐",
      calculators: [
        { name: "Algebra Solver", href: "/calculators/math/algebra" },
        { name: "Geometry Calculator", href: "/calculators/math/geometry" },
        { name: "Equation Solver", href: "/calculators/math/equation" },
        { name: "Percentage Calculator", href: "/calculators/math/percentage" },
      ],
    },
    {
      name: "Other Calculators",
      icon: "🛠️",
      calculators: [
        { name: "Unit Converter", href: "/calculators/other/unit-converter" },
        { name: "Date Calculator", href: "/calculators/other/date" },
        { name: "Age Calculator", href: "/calculators/other/age" },
        { name: "Random Number Generator", href: "/calculators/other/random" },
      ],
    },
  ];

  return (
    <main className="bg-[#4c1d95] min-h-screen text-[#ede9fe] pb-10">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-[#a78bfa]">Calculation Galaxy</span>
        </h1>
        <p className="text-lg md:text-xl text-[#c4b5fd] mb-5">
          Your one-stop destination for smart, fast, and reliable calculators.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mx-auto px-12 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our Calculators
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              className="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-[#868bfa] to-indigo-400/40 hover:shadow-2xl hover:scale-105 transform transition duration-300"
              key={cat.name}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-4">{cat.icon}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#ede9fe] transition">
                  {cat.name}
                </h3>
              </div>

              {/* Calculator Links */}
              <ul className="mt-6 space-y-2 text-sm">
                {cat.calculators.map((calc) => (
                  <li key={calc.href}>
                    <Link
                      href={calc.href}
                      className="block px-3 py-2 rounded-lg 
                     bg-white/10 hover:bg-white/20 
                     text-[#ede9fe] transition md:text-lg"
                    >
                      {calc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
