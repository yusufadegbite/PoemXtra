import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const images = [
    "https://img.freepik.com/free-vector/hand-drawn-poetry-illustration_23-2149263482.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Open book with nature
    "https://img.freepik.com/free-vector/hand-drawn-poetry-illustration_23-2149290556.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Typewriter with paper
    "https://img.freepik.com/free-vector/flat-world-poetry-day-illustration_23-2149293958.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Poem on a page
    "https://img.freepik.com/free-vector/hand-drawn-poetry-illustration_23-2149290086.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Books and flowers
    "https://img.freepik.com/free-vector/hand-drawn-poetry-illustration_23-2149290555.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Candle and open book
    "https://img.freepik.com/free-psd/world-poetry-day-event-poster-template-with-photo_23-2148893393.jpg?ga=GA1.1.1472852034.1735073208&semt=ais_hybrid", // Pen and paper
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center text-white"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-4">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to PoemXtra</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the beauty of words. Dive into our collection of heartfelt
          poems written by talented poets from around the world.
        </p>
      </div>
       <div className="flex justify-center space-x-6 my-6">
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
    </section>
  );
};

export default Hero;
