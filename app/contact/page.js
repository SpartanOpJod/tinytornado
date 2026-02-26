import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact | TinyTornado",
  description: "Get in touch with the TinyTornado team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-6">
            Let’s Connect 👋
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Have questions or feedback? Reach out through any platform below.
          </p>

          <div className="space-y-4">

            <a
              href="mailto:aryanopjod@gmail.com"
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition border"
            >
              <Image src="/email.png" width={28} height={28} alt="Email" />
              <span className="font-medium text-gray-800">
                support@tinytornado.app
              </span>
            </a>

            <a
              href="https://github.com/SpartanOpJod"
              target="_blank"
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition border"
            >
              <Image src="/github.png" width={28} height={28} alt="GitHub" />
              <span className="font-medium text-gray-800">
                GitHub Profile
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-codes/"
              target="_blank"
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition border"
            >
              <Image src="/linkedin.png" width={28} height={28} alt="LinkedIn" />
              <span className="font-medium text-gray-800">
                LinkedIn Profile
              </span>
            </a>

          </div>

          <div className="mt-10">
            <Link href="/shorten">
              <button className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-6 py-3 font-semibold text-white shadow-lg">
                Back to Shortener
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/contact-illustration.svg"
            width={500}
            height={500}
            alt="Contact illustration"
          />
        </div>

      </div>
    </main>
  );
}