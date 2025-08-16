import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-6xl font-bold text-orange-600">404</h1>
      <h2 className="text-2xl font-semibold mt-2 mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
