import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {/* Logo (First Column) */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Navigation Items (Second Column) */}
        <ul className="flex space-x-4 md:flex-1 justify-center">
          <li>
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-yellow-400">
              Service
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-yellow-400">
              Contact-Us
            </a>
          </li>
          {/* Add more navigation items */}
        </ul>

        {/* Login/Sign-up (Third Column) */}
        <div className="flex space-x-4 md:mt-4 ">
          <div className="flex justify-center">
            <a href="#login" className="hover:text-yellow-400">
              Login
            </a>
          </div>
          <div className="flex justify-center">
            <a href="#signup" className="hover:text-yellow-400">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
