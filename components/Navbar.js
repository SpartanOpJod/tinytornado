import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight hover:opacity-90 transition"
        >
          TinyTornado
        </Link>

        <ul className="flex items-center gap-8 font-medium">

          <li className="relative group">
            <Link href="/" className="transition-colors duration-200">
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/about" className="transition-colors duration-200">
              About
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/shorten" className="transition-colors duration-200">
              Shorten
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/contact" className="transition-colors duration-200">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li>
            <Link href="/shorten">
              <button className="ml-2 px-5 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Try Now
              </button>
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;