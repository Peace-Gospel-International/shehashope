'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <Link
              href="/"
              className="block px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium font-sans transition"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium font-sans transition"
              onClick={closeMenu}
            >
              About
            </Link>

            {/* Where We Work Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium font-sans transition flex justify-between items-center"
              >
                Where We Work
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="bg-gray-50">
                  <Link
                    href="/programs/india"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    India
                  </Link>
                  <Link
                    href="/programs/nepal"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Nepal
                  </Link>
                  <Link
                    href="/programs/myanmar"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Myanmar
                  </Link>
                  <Link
                    href="/programs/philippines"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Philippines
                  </Link>
                  <Link
                    href="/programs/uganda"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Uganda
                  </Link>
                  <Link
                    href="/programs/argentina"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Argentina
                  </Link>
                  <Link
                    href="/programs/colombia"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-sans"
                    onClick={closeMenu}
                  >
                    Colombia
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/stories"
              className="block px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium font-sans transition"
              onClick={closeMenu}
            >
              Stories
            </Link>
            <Link
              href="/give"
              className="block px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium font-sans transition"
              onClick={closeMenu}
            >
              Ways to Give
            </Link>
          </nav>

          {/* Donate Button at Bottom */}
          <div className="p-4 border-t">
            <Link
              href="https://peacegospel.org/donate"
              className="block w-full bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition font-sans text-center"
              onClick={closeMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
