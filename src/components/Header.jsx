import React from 'react';
import StudySynLogo from '../assets/images/StudySyn.svg';
import HamburgerIcon from '../assets/images/Hamburger.svg';

const Header = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex justify-between items-center">
        <a href="#logo" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <img src={StudySynLogo} alt="logoImage" className="w-8 h-8" />
          <span>StudySyn</span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Home</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Pricing</a>
          <a href="#blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Blog</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
            Contact Us
          </a>
          <button type="button" className="md:hidden p-2">
            <img src={HamburgerIcon} alt="menuButton" className="w-6 h-6" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;