import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 left-0 right-0 bg-white shadow-md sticky z-20">
      {/* Desktop & Mobile Navigation */}
      <div className="h-16 px-4 sm:px-8 lg:px-20 flex justify-between items-center">
        {/* Logo Section */}
        <a href="/">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <span className="w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl flex justify-center items-center rounded-full bg-[#BBEFFF] font-redressed">
              ik
            </span>
            <p className="text-2xl sm:text-3xl font-redressed">Irshad Khan</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-8 lg:space-x-10 font-opensans text-sm">
            <li>
              <Link className="tracking-tighter hover:text-gray-600 transition-colors" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="tracking-tighter hover:text-gray-600 transition-colors" to="/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className="tracking-tighter hover:text-gray-600 transition-colors" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-6 h-6 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute z-10 top-20 left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col py-4 font-opensans text-sm">
            <li>
              <Link
                className="block px-8 py-3 tracking-tighter hover:bg-gray-50 transition-colors"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block px-8 py-3 tracking-tighter hover:bg-gray-50 transition-colors"
                to="/resume"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="block px-8 py-3 tracking-tighter hover:bg-gray-50 transition-colors"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
