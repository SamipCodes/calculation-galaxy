export const metadata = {
  title: "Privacy Policy | Calculation Galaxy",
  description:
    "Read the Privacy Policy of Calculation Galaxy. Learn how we collect, use, and protect your information when using our online calculators.",
  keywords: ["privacy policy", "calculation galaxy privacy", "data policy"],
  alternates: {
    canonical: "https://calculationgalaxy.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#4c1d95] min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-purple-200">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At <strong>Calculation Galaxy</strong>, your privacy is important to
          us. This Privacy Policy explains how we collect, use, and protect your
          personal information while you use our calculators and services.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We do not collect personally identifiable information from users. Our
          calculators run directly in your browser and do not store or share
          your inputs. We may use third-party services like Google Analytics to
          track usage patterns anonymously.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
        <p className="mb-4">
          We may use cookies to improve user experience, store preferences, and
          provide relevant ads via Google AdSense.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may display ads from Google AdSense and other third-party
          providers. These services may use cookies to personalize content and
          ads.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:info@calculationgalaxy.com"
            className="text-purple-300"
          >
            info@calculationgalaxy.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
