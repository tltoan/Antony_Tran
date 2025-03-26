import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Home.css";
import BackImage from "../assets/medea.png";
import NextImage from "../assets/circe.png";
import tag1 from "../assets/note-1.png";
import tag2 from "../assets/note-2.png";
import tag3 from "../assets/note-0.png";

const Home = () => {
  const carouselImages = [tag3, tag2, tag1];
  console.log(carouselImages);

  return (
    <div className="home">
      <header className="header">
        <div className="left-text">
          <h1>AntonY_Tran</h1>
          <p>STUDIO, 2025</p>
        </div>
        <div className="right-text">
          <Link to="/artworks" className="nav-link">
            Artworks
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/about" className="nav-link">
            ABOUT ME
          </Link>
          <li>
            <a
              href="https://www.ainzpop.site/"
              target="_blank"
              rel="noopener noreferrer">
              AINZPOP
            </a>
          </li>
        </div>
      </header>

      <main className="main">
        <div className="content-wrapper">
          <div className="nav-back">
            <img src={BackImage} alt="Back Icon" className="nav-image" />
          </div>

          <div className="image-container">
            <Carousel
              showArrows={true} // Show navigation arrows
              showIndicators={true} // Show dots (indicators)
              showStatus={false} // Hide slide status (e.g., "1 of 3")
              showThumbs={false} // Hide thumbnails
              infiniteLoop={true} // Enable infinite looping
              useKeyboardArrows={false} // Disable keyboard navigation
              autoPlay={true} // Enable autoplay
              interval={2000} // Set autoplay interval to 3000ms
              swipeable={true} // Allow swipe gestures
              emulateTouch={true}>
              <div>
                <img src={tag3} alt="Slide 1" className="carousel-image" />
              </div>
              <div>
                <img src={tag2} alt="Slide 2" className="carousel-image" />
              </div>
              <div>
                <img src={tag1} alt="Slide 3" className="carousel-image" />
              </div>
            </Carousel>
          </div>

          <div className="nav-next">
            <img src={NextImage} alt="Next Icon" className="nav-image" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="services">
          <h2>SERVICES</h2>
          <ul>
            <li>COMMISSION ART</li>
            <li>DESIGN CONSULTING</li>
            <li>BRANDING</li>
            <li>WEB DESIGN</li>
            <li>PACKAGING DESIGN</li>
            <li>PUBLICATION DESIGN</li>
            <li>CAMPAIGN DESIGN</li>
            <li>CREATIVE PRODUCTION</li>
          </ul>
        </div>
        <div className="press">
          <h2>PRESS</h2>
          <p>HALCYON STUDIOS [2025]</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/a.einz/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram">instragram</i>
            </a>
            <a
              href="https://www.linkedin.com/in/antonytran05/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin">linkedin</i>
            </a>
          </div>
        </div>
        <div className="footer-info">
          <Link to="/projects">
            <p>EXPLORE NEW ART WORKS,</p>
          </Link>
          <Link to="/projects">
            <p>EXPLORE NEW PROJECTS, ©ANTONY_TRAN</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
