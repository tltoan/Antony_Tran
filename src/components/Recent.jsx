import React, { useState } from "react";
import "./styles/Recent.css";
import WIP from "../assets/WIP.gif";

const Recent = () => {
  const recentArtworks = [
    {
      src: WIP,
      title: "Work in Progress",
      description:
        "This piece is not for sale, my actual artwork is coming soon!",
      size: "largee as hell!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recentArtworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + recentArtworks.length) % recentArtworks.length
    );
  };

  return (
    <div className="artworks-page">
      {/* Recent Pieces Section */}
      <section className="recent-pieces">
        {/* Back Button */}
        <button className="nav-button back-button" onClick={prevSlide}>
          Back
        </button>

        {/* Artwork with Tag */}
        <div className="recent-slide">
          <img
            src={recentArtworks[currentSlide].src}
            alt={recentArtworks[currentSlide].title}
          />
          <div className="recent-tag">
            <h3>{recentArtworks[currentSlide].title}</h3>
            <p>{recentArtworks[currentSlide].description}</p>
            <p>
              <strong>Size:</strong> {recentArtworks[currentSlide].size}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button className="nav-button next-button" onClick={nextSlide}>
          Next
        </button>
      </section>
    </div>
  );
};

export default Recent;
