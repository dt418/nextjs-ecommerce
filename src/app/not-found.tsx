import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50svh] flex-col items-center justify-center bg-white py-8 text-gray-800">
      <h1 className="mb-4 text-9xl font-bold">404</h1>
      <p className="mb-8 font-clash-display text-xl">Page Not Found</p>
      <Link
        href="/"
        className="border-none bg-dark-primary px-6 py-3 text-white ring-inset transition-all hover:bg-[#1E193E] focus:ring-primary disabled:opacity-50"
      >
        Go Back Home
      </Link>
    </section>
  );
}
