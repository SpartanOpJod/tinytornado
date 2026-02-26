import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          TinyTornado
        </Link>

        <ul className="flex items-center gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/shorten" className="hover:text-blue-200 transition">
              Shorten
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-200 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/shorten">
              <button className="ml-2 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
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