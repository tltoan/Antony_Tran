import React from "react";
import "./styles/Michelin.css";
import Navbar from "./Navbar";
import michelin1 from "../assets/michelin1.png";
import michelin2 from "../assets/michelin2.png";
import michelin3 from "../assets/michelin3.png";
import michelinPrototype from "../assets/michelin-prototype.png";
import michelinlogo from "../assets/michelin-logo.png";

const VietnameseGuide = () => {
  return (
    <div className="guide-container">
      <Navbar />
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Vietnamese Michelin Star Food Guide</h1>
        <p>
          An interactive Google Maps-based guide showcasing Vietnamese Michelin
          Star and Bib Gourmand restaurants. This project aims to make fine
          dining experiences more accessible by providing location-based
          restaurant suggestions.
        </p>
        <img src={michelinlogo} alt="michelin-logo"></img>
      </header>

      {/* Meta Section */}
      <section className="meta-section">
        <div className="meta-box">Role: Developer & Designer</div>
        <div className="meta-box">
          Tools: React, Google Maps API, HTML, CSS, Javascript, JSON, React
        </div>
        <div className="meta-box">Duration: 1 month</div>
        <div className="meta-box">Type: Class Final</div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Interactive map with markers for Michelin Star locations.</li>
          <li>Filter by Bib Gourmand and Michelin categories.</li>
          <li>Restaurant details, including reviews and images.</li>
          <li>Mobile-friendly interface for on-the-go users.</li>
        </ul>
      </section>

      {/* Visual Showcase */}
      <section className="visual-section">
        <h2>Visual Showcase</h2>
        <div className="image-grid">
          <img src={michelin1} alt="Map Interface" />
          <img src={michelin2} alt="Restaurant Details" />
          <img src={michelin3} alt="Filter Options" />
        </div>
        <img src={michelinPrototype} alt="Prototype" className="prototype" />
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <h2>The Solution</h2>
        <p>
          The final product is a sleek and user-friendly guide that leverages
          the power of Google Maps to help food enthusiasts discover Vietnam’s
          top Michelin-rated dining spots effortlessly.
        </p>
        <a
          href="https://ainztav.com/michelin-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="solution-button">
          View Project
        </a>
      </section>
    </div>
  );
};

export default VietnameseGuide;
