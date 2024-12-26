import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Branding */}
        <h2 className="text-2xl font-bold mb-2">PoemXtra</h2>
        <p className="text-sm mb-6">
          Uniting hearts through the beauty of poetry.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Additional Links */}
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
          <li>
            <a href="/about" className="hover:text-blue-400">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PoemExtra. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
