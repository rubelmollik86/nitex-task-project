// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo (First Column) */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Navigation Items (Second Column) */}
        <ul className="flex space-x-4 md:flex-1 justify-center">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          {/* Add more navigation items */}
        </ul>

        {/* Login/Sign-up (Third Column) */}
        <div className="flex space-x-4 md:mt-4">
          <a href="#login" className="hover:text-yellow-400">
            Login
          </a>
          <a href="#signup" className="hover:text-yellow-400">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
