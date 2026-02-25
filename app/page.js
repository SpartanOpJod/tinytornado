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
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="flex flex-col gap-4 items-center justify-center p-8 md:p-0">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-2 md:px-20 text-center">
            We are a straightforward URL shortener. No sign-up walls, no complicated flow, and no unnecessary tracking. Paste a URL, pick a short code, and share it instantly.
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="https://github.com" target="_blank"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        <div className="hidden md:flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}
