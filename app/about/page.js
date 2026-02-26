import Link from "next/link";

export const metadata = {
  title: "About | TinyTornado",
  description: "Learn about TinyTornado and how it works.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-[85vh] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-blue-600">TinyTornado</span>
        </h1>

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          <p>
            TinyTornado is a lightweight URL shortener built with Next.js and MongoDB.
            It transforms long, messy links into clean, shareable short URLs —
            instantly and without friction.
          </p>

          <p>
            Each URL mapping is securely stored in MongoDB and handled through
            fast server-side redirection for reliable performance.
          </p>

          <p>
            Our focus is simple: speed, reliability, and a clutter-free experience.
            No unnecessary tracking. No complicated flows.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link href="/shorten">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-xl shadow-md hover:shadow-xl">
              Create a Short Link
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-6 py-3 border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold rounded-xl bg-white shadow-sm">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}