import React, { useState } from "react";
import "./styles/Recent.css";
import eye from "../assets/eye.gif";
import WIP from "../assets/WIP.gif";

const recentArtworks = [
  {
    src: eye,
    title: "not done 1",
    description: "is you cool?",
    size: "wowza"
  },
  {
    src: WIP,
    title: "Work in Progress",
    description: "This piece is not for sale, my actual artwork is coming soon!",
    size: "largee as hell!"
  }
];

const Recent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? recentArtworks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === recentArtworks.length - 1 ? 0 : prev + 1));
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
