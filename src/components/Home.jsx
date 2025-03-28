import React from "react";
import { Link } from "react-router-dom";
import Introduction from "./Introduction";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Home.css";
import BackImage from "../assets/medea.png";
import NextImage from "../assets/circe.png";
import tag1 from "../assets/note-1.png";
import tag2 from "../assets/note-2.png";
import tag3 from "../assets/note-0.png";
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Home = () => {
  const carouselImages = [tag3, tag2, tag1];
  console.log(carouselImages);

  return (
    <div className="home">
      <header className="header">
        <div className="left-text">
          <h1>AntonY_Tran</h1>
          <p>PORTFOLIO, 2025</p>
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
            <Introduction></Introduction>
          </div>

          <div className="nav-next">
            <img src={NextImage} alt="Next Icon" className="nav-image" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-info">
          <Link to="/projects">
            <p>EXPLORE NEW ART WORKS,</p>
          </Link>
          <Link to="/projects">
            <p>EXPLORE NEW PROJECTS, ©ANTONY_TRAN</p>
          </Link>
              
          <div className="press">
      <div className="social-iconss">
        <a
          href="https://www.instagram.com/a.einz/"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram size={20} /> {/* Instagram Icon in Gray */}
        </a>
        <a
          href="https://www.linkedin.com/in/antonytran05/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedinIn size={20} /> {/* Outlined LinkedIn Icon in Gray */}
        </a>
      </div>
    </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
