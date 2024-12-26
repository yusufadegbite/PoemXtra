import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the icons
import logo from "../assets/image.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="text-black py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="PoemXtra Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-blue-800 text-3xl md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <FaBars /> {/* Hamburger icon */}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-blue-800 text-3xl absolute top-4 right-4 focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes /> {/* Close icon */}
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection("poems")}
            className="hover:text-blue-600 transition-colors"
          >
            Poems
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
          <Link
            to="/login"
            className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Standard Navigation Menu for Larger Screens */}
      <nav className="hidden md:flex space-x-6 items-center">
        <button
          onClick={() => handleScrollToSection("about")}
          className="hover:text-blue-600 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => handleScrollToSection("poems")}
          className="hover:text-blue-600 transition-colors"
        >
          Poems
        </button>
        <button
          onClick={() => handleScrollToSection("contact")}
          className="hover:text-blue-600 transition-colors"
        >
          Contact
        </button>
        <Link
          to="/login"
          className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="border-2 border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
