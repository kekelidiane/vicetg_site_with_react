'use client';
import Image from "next/image";
import { useState } from "react";

function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home">
          <Image
            src="/assets/logos/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-10 md:h-12 lg:h-14 w-auto"
          />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="text-gray-800 hover:text-green-600">Accueil</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-green-600">À propos</a></li>
          <li><a href="#donate" className="text-gray-800 hover:text-green-600">Nous soutenir</a></li>
          <li><a href="#blog" className="text-gray-800 hover:text-green-600">Actualités</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-green-600">Nous contacter</a></li>
        </ul>

        {/* Burger Menu Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-2 font-medium">
          <li><a href="#home" className="block text-gray-800 hover:text-green-600">Accueil</a></li>
          <li><a href="#about" className="block text-gray-800 hover:text-green-600">À propos</a></li>
          <li><a href="#donate" className="block text-gray-800 hover:text-green-600">Nous soutenir</a></li>
          <li><a href="#blog" className="block text-gray-800 hover:text-green-600">Actualités</a></li>
          <li><a href="#contact" className="block text-gray-800 hover:text-green-600">Nous contacter</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
