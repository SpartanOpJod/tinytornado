import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='min-h-16 bg-blue-700 flex flex-col md:flex-row justify-between px-3 py-2 md:py-0 items-center text-white gap-2'>
      <div className="logo font-bold text-2xl"> 
        <Link href="/">TinyTornado</Link>
      </div>
      <ul className='flex flex-wrap justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="https://github.com" target="_blank"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
