'use client' 

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-black/30 px-6 py-3 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
		<div className="flex items-center gap-2">
  <img
    src="/db75bdc3-802d-4b42-9425-bfc6c4ffa289.png"
    alt="Logo"
    className="h-8 w-8 object-contain"
  />
        <span className="font-bold">
          <span className="text-cyan-400">BRINLEY</span> DEVELOPPMENT
         </span>
	</div>
	 


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/#products" className="hover:text-fm-aqua transition">
            Home
          </Link>
          <Link href="/#customers" className="hover:text-fm-aqua transition">
            
          </Link>
          <Link href="/terms" className="hover:text-fm-aqua transition">
            
          </Link>
        </div>

        {/* Shop Now Button */}
        <Link
          href="/#shop"
          className="hidden md:flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Shop Now <span className="text-lg">›</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden space-y-4 rounded-xl border border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-lg">
          <Link
            href="/#products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-fm-aqua transition"
          >
            Home
          </Link>
          <Link
            href="/#customers"
            onClick={() => setIsOpen(false)}
            className="block hover:text-fm-aqua transition"
          >
            Customers
          </Link>
          <Link
            href="/terms"
            onClick={() => setIsOpen(false)}
            className="block hover:text-fm-aqua transition"
          >
            Terms of Services
          </Link>
          <Link
            href="/#shop"
            onClick={() => setIsOpen(false)}
            className="block rounded-full border border-white/20 px-4 py-2 text-center font-medium hover:bg-white/10 transition"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
