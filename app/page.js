import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] items-center max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col gap-6 text-center md:text-left">
          
          <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 ${poppins.className}`}>
            The smartest way to
            <span className="text-blue-600"> shorten URLs</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Simple. Fast. Reliable. No logins, no clutter, no tracking drama. 
            Just paste your link, choose your code, and share instantly.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            
            <Link href="/shorten">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-xl shadow-md hover:shadow-xl">
                Get Started
              </button>
            </Link>

            <Link href="https://github.com/SpartanOpJod/tinytornado" target="_blank">
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-all duration-200 font-semibold rounded-xl shadow-md">
                View on GitHub
              </button>
            </Link>

          </div>

        </div>

        <div className="hidden md:flex justify-center relative h-[500px]">
          <Image 
            className="object-contain drop-shadow-2xl"
            alt="Vector illustration"
            src={"/vector.jpg"} 
            fill
          />
        </div>

      </section>
    </main>
  );
}