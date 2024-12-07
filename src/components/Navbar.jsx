import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold">İsminiz</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} className="cursor-pointer hover:text-blue-600">Ana Sayfa</Link>
            <Link to="about" smooth={true} className="cursor-pointer hover:text-blue-600">Hakkımda</Link>
            <Link to="projects" smooth={true} className="cursor-pointer hover:text-blue-600">Projeler</Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:text-blue-600">İletişim</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Ana menüyü aç</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="home" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-100">Ana Sayfa</Link>
            <Link to="about" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-100">Hakkımda</Link>
            <Link to="projects" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-100">Projeler</Link>
            <Link to="contact" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-100">İletişim</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;