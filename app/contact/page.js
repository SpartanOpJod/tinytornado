import Link from "next/link";

export const metadata = {
  title: "Contact | TinyTornado",
  description: "Contact the TinyTornado team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        Need help with setup, deployment, or a bug? Reach out using the details
        below.
      </p>

      <div className="bg-white rounded-lg shadow p-6 border border-gray-200 space-y-3">
        <p>
          <span className="font-semibold">Email:</span> support@tinytornado.app
        </p>
        <p>
          <span className="font-semibold">Response time:</span> within 1-2 business
          days
        </p>
        <p>
          <span className="font-semibold">Project issues:</span>{" "}
          <Link className="text-blue-700 underline" href="https://github.com" target="_blank">
            Open an issue on GitHub
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <Link href="/shorten">
          <button className="bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
            Back to Shortener
          </button>
        </Link>
      </div>
    </main>
  );
}
