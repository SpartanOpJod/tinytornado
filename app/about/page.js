import Link from "next/link";

export const metadata = {
  title: "About | TinyTornado",
  description: "Learn about TinyTornado and how it works.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About TinyTornado</h1>
      <p className="mb-4">
        TinyTornado is a lightweight URL shortener built with Next.js and MongoDB.
        It helps you convert long links into easy-to-share short links without a
        complex setup.
      </p>
      <p className="mb-4">
        The app stores each mapping in MongoDB and redirects users instantly when
        they open a short URL.
      </p>
      <p className="mb-8">
        Current focus: fast link creation, clean redirects, and simple deployment.
      </p>

      <div className="flex gap-3">
        <Link href="/shorten">
          <button className="bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
            Create a Short Link
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-blue-700 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </main>
  );
}
