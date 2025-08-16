export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you interact with our
          platform. By using our services, you agree to the practices outlined
          below.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-2">
            We collect the following types of information to provide you with a
            smooth and secure experience:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and other details you provide during registration.
            </li>
            <li>
              <strong>Usage Data:</strong> Information on how you use our
              services, including log files, IP address, and browser details.
            </li>
            <li>
              <strong>Cookies & Tracking:</strong> To personalize your
              experience and improve our services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>To provide, operate, and improve our services.</li>
            <li>To personalize your user experience.</li>
            <li>To communicate important updates and announcements.</li>
            <li>To ensure security and prevent unauthorized access.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Data Sharing & Disclosure
          </h2>
          <p className="text-gray-600 mb-2">
            We respect your trust. Your personal data will{" "}
            <strong>never</strong> be sold or shared with third parties, except
            in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              With service providers who help us operate our platform (under
              strict confidentiality agreements).
            </li>
            <li>When required by law or to protect our legal rights.</li>
            <li>In case of mergers, acquisitions, or business transfers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We implement strict security measures to safeguard your data against
            unauthorized access, alteration, or disclosure. However, no system
            is 100% secure, and we encourage you to take steps to protect your
            account information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Access, update, or correct your personal information.</li>
            <li>Request deletion of your account and data.</li>
            <li>Opt-out of promotional emails anytime.</li>
            <li>
              Contact us for clarification regarding how your data is handled.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated “Last Revised” date.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy,
            feel free to reach us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
