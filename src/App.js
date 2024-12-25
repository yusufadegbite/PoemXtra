import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from './pages/Login/Login'
import Signup from "./pages/SignUp/SignUp";


const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div style={{ backgroundColor: "#F5F5DC", minHeight: "100vh" }}>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-800 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            ↑ Back To Top
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
