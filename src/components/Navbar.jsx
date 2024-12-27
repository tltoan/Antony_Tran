import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      {/* Left Header */}
      <div className="studio-logo">
        <Link to="/" className="studio-link">
          <h1>ANTONY_TRAN</h1>
          <p>STUDIO, 2025</p>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Full-Screen Sliding Navigation */}
      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/artworks" onClick={() => setIsOpen(false)}>
              Artworks
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
