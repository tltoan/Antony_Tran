import React from "react";
import "./styles/About.css";
import ProfileImage from "../assets/profile.jpeg";
import Navbar from "./Navbar";
import card from "../assets/business.png";

const About = () => {
  return (
    <section className="about-me">
      <div className="about-container">
        <div className="about-left">
          <h1 className="header-large">ABOUT</h1>
          <h2 className="header-name">ANTONY TRAN</h2>
          <p className="header-role">(DESIGNER & DEVELOPER)</p>
          <p className="contact-info">antonyltran@gmail.com</p>
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
        <div className="about-right">
          <Navbar />
          <div className="profile-image-wrapper">
            <img src={ProfileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="about-details">
        <div className="about-experience">
          <h3>EXPERIENCE</h3>
          <ul>
            <li>
              <strong>Creative Director</strong> / Halcyon Studios, November
              2024- Present
              <p>
                Developing a start-up creative studio that specializes in
                branding and web design. Focusing on the creative part, with
                direction and strategy. Working with print media as well.
              </p>
            </li>
            <li>
              <strong>Free Lance Web Developer</strong> / Self Employed, July
              2024 - Present
              <p>
                Worked with clients from different industries to develop their
                websites and webpresences. Usually using applications like
                Wordpress, Wix, and Squarespace. Sometimes coding from scratch,
                using HTML, CSS, and React.
              </p>
            </li>
            <li>
              <strong>Marketing and Development Intern</strong> / UNC Chapel
              Hill, August 2024 - Present
              <p>
                Working with Institute for the Envionment board of directors to
                develop marketing strategy for GiveUNC, a giving day for the
                university. Also in charge of the transition for a more modern
                and user-friendly website for the Board of Visitors. Also tasked
                with creating an ambassador program for the Institute to help
                strengthen the relationship between the university and its
                alumni.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-skills">
          <ul>
            <h3>SKILLS</h3>
            <li>
              <strong>Technical:</strong> React, JavaScript, CSS, HTML, Node.js,
              Java, Python, C++.
            </li>
            <li>
              <strong>Design:</strong> Figma, Photoshop, Illustrator, Express
              Rhino 3D, AutoCAD.
            </li>
            <li>
              <strong>Other:</strong> Branding, UX/UI Design, Product Design,
              Creative Design, Traditional Art.
            </li>
          </ul>
          <img src={card} alt="business"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
