export default function CopyrightPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Copyright Policy
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            Prabhu Vasava | Designed by CMT AI
          </span>
          . All rights reserved. This page outlines our copyright policy and the
          protection of content published on our website.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Ownership of Content
            </h2>
            <p>
              All text, graphics, images, logos, and other materials available
              on this website are the intellectual property of{" "}
              <span className="font-medium">Your Company Name</span>
              unless otherwise stated. Unauthorized reproduction or distribution
              is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Restrictions on Use
            </h2>
            <p>
              You may not copy, modify, distribute, transmit, display, or sell
              any of the content without prior written consent. Limited use for
              personal and non-commercial purposes is permitted with proper
              attribution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Reporting Violations
            </h2>
            <p>
              If you believe your copyright-protected work has been used
              inappropriately on this site, please contact us at{" "}
              <a
                href="mailto:legal@yourcompany.com"
                className="text-blue-600 underline"
              >
                legal@yourcompany.com
              </a>{" "}
              with details of the violation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Legal Action</h2>
            <p>
              We reserve the right to take appropriate legal action against any
              unauthorized use of our copyrighted materials.
            </p>
          </section>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
