import LoanEMICalculator from "./LoanEMICalculator";

export const metadata = {
  title: "Loan EMI Calculator | Calculation Galaxy",
  description:
    "Easily calculate your monthly loan EMI with our free Loan EMI Calculator. Get accurate results for home, personal, car loans, and more.",
  keywords: [
    "Loan EMI Calculator",
    "EMI calculator",
    "home loan calculator",
    "car loan EMI",
    "personal loan EMI",
    "finance tools",
    "loan repayment",
  ],
  openGraph: {
    title: "Loan EMI Calculator - Calculation Galaxy",
    description:
      "Use our free Loan EMI Calculator to calculate monthly installments for home, car, and personal loans.",
    url: "https://calculationgalaxy.com/loan-emi-calculator",
    siteName: "Calculation Galaxy",
    images: [
      {
        url: "https://calculationgalaxy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan EMI Calculator",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://calculationgalaxy.com/loan-emi-calculator",
  },
};

export default function LoanEMICalculatorPage() {
  return (
    <div className="bg-[#4c1d95] p-6 text-white">
      {/* Client-side calculator */}
      <LoanEMICalculator />

      {/* SEO-friendly static content */}
      <section className="mx-auto bg-white/10 backdrop-blur-lg p-6 mt-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">What is a Loan EMI?</h2>
        <p className="mb-4">
          EMI (Equated Monthly Installment) is the fixed amount you pay every
          month to repay your loan. It includes both the interest and a portion
          of the principal amount.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          How is Loan EMI Calculated?
        </h3>
        <p className="mb-4">
          The EMI formula is:{" "}
          <span className="font-semibold">
            EMI = [P × R × (1+R)<sup>N</sup>] ÷ [(1+R)<sup>N</sup> – 1]
          </span>
          , where P is the loan amount, R is the monthly interest rate, and N is
          the number of months.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Why Use a Loan EMI Calculator?
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Quickly estimate your monthly loan repayments</li>
          <li>Understand total interest payable before applying</li>
          <li>Plan your finances effectively</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Limitations</h3>
        <p>
          This EMI calculator provides an estimate based on the entered values.
          Actual EMI may vary depending on the lender, processing fees, and loan
          terms. Always confirm with your bank or financial institution before
          making decisions.
        </p>
      </section>
    </div>
  );
}
