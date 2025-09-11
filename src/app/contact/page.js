// app/contact/page.js
export const metadata = {
  title: "Contact Us | Calculation Galaxy",
  description:
    "Get in touch with Calculation Galaxy. Reach out to us with questions, feedback, or suggestions about our online calculators.",
  keywords: [
    "contact Calculation Galaxy",
    "calculator website contact",
    "online calculators support",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-[#4c1d95] text-white py-10 px-6 pt-30 pb-60">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg pt-10 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="mb-4">
          Have questions, feedback, or suggestions? We’d love to hear from you.
        </p>

        <p className="mb-6 font-semibold">
          Email:{" "}
          <a
            href="mailto:support@calculationgalaxy.com"
            className="text-blue-300 underline"
          >
            support@calculationgalaxy.com
          </a>
        </p>

        <div className="mt-10 border-t border-purple-300/30 pt-6 text-center">
          <p className="text-sm text-purple-200">
            By using this site, you agree to our{" "}
            <a
              href="/terms"
              className="text-blue-300 underline hover:text-blue-400"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-blue-300 underline hover:text-blue-400"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
