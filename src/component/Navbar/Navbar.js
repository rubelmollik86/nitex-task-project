import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../LoginPage/LoginPage";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo (First Column) */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Menu Icon for Mobile (Third Column) */}
        <div
          className={`md:hidden cursor-pointer ${isMenuOpen ? "hidden" : ""}`}
          onClick={handleMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>

        {/* Navigation Items (Conditional Rendering) */}
        {isMenuOpen || window.innerWidth > 768 ? (
          <ul className="md:flex md:space-x-4 md:flex-1 justify-center md:items-center">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-yellow-400">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact-Us
              </Link>
            </li>
            {/* Add more navigation items */}
          </ul>
        ) : null}

        {/* Login/Sign-up (Fourth Column) */}
        {(isMenuOpen || window.innerWidth > 768) && (
          <div className="md:flex space-x-4 md:mt-0">
            <div className="flex justify-center">
              <NavLink to="/login" className="hover:text-yellow-400">
                {" "}
                {LoginForm}
                Login
              </NavLink>
            </div>
            <div className="flex justify-center">
              <Link to="/signup" className="hover:text-yellow-400">
                {" "}
                {/* Link to Sign Up page */}
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
