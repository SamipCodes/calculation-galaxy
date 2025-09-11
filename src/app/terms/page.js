export const metadata = {
  title: "Terms & Conditions | Calculation Galaxy",
  description:
    "Read the Terms & Conditions of using Calculation Galaxy. Understand the rules, disclaimers, and user responsibilities before using our calculators.",
  keywords: [
    "terms and conditions",
    "calculation galaxy terms",
    "user agreement",
  ],
  alternates: {
    canonical: "https://calculationgalaxy.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#4c1d95] min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-purple-200">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to <strong>Calculation Galaxy</strong>. By using our website
          and calculators, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Use of Service</h2>
        <p className="mb-4">
          Our calculators are provided for educational and informational
          purposes only. Results should not be considered professional advice.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
        <p className="mb-4">
          We make no guarantees about the accuracy or reliability of results.
          Users are responsible for verifying outputs before making decisions.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          Calculation Galaxy is not liable for any damages or losses resulting
          from the use of our calculators.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Changes</h2>
        <p>
          We may update these Terms at any time. Continued use of the website
          indicates acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
