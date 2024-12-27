import React, { useState } from "react";
import "./styles/Archive.css";
import eye from "../assets/eye.gif";
import tv from "../assets/tv.gif";
import lion from "../assets/lion.gif";
import frames from "../assets/frames.gif";
import dancing from "../assets/dancing.gif";

const Archive = () => {
  console.log("Bitch");
  console.log("Archived Artworks:");

  const [activeArtwork, setActiveArtwork] = useState(null);

  const archivedArtworks = [
    {
      src: eye,
      title: "not done 1",
      description: "is you cool?",
      size: "wowza",
    },
    {
      src: tv,
      title: "not done 2",
      description: "maddd cool",
      size: "capaciously large",
    },
    {
      src: lion,
      title: "not done 3",
      description: "really cool",
      size: "tiny",
    },
    {
      src: frames,
      title: "not dont 4",
      description: "straight up cool",
      size: "mad large",
    },
    {
      src: dancing,
      title: "still not done",
      description: "cool on cooler",
      size: "small",
    },
  ];

  const openArtwork = (artwork) => {
    setActiveArtwork(artwork);
  };

  const closeArtwork = () => {
    setActiveArtwork(null);
  };

  return (
    <section className="archive-section">
      <h2>Archive</h2>
      <div className="archive-grid">
        {archivedArtworks.map((artwork, index) => (
          <div
            key={index}
            className="archive-item"
            onClick={() => openArtwork(artwork)}>
            <img src={artwork.src} alt={artwork.title} />
            <div className="archive-tag">
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
              <p>
                <strong>Size:</strong> {artwork.size}
              </p>
            </div>
          </div>
        ))}
      </div>

      {activeArtwork && (
        <div className="modal">
          <div className="modal-content">
            <img src={activeArtwork.src} alt={activeArtwork.title} />
            <div className="modal-details">
              <h3>{activeArtwork.title}</h3>
              <p>{activeArtwork.description}</p>
              <p>
                <strong>Size:</strong> {activeArtwork.size}
              </p>
              <button onClick={closeArtwork}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Archive;
