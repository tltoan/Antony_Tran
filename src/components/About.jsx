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
              <strong>Development and Marketing Intern</strong> / UNC-Institute for the Environment, Hybrid September 2024 - Present
              <p>
              ●
              Integrating and modernizing various APIs to enhance the functionality of the Institute's outdated website directories
              ●
              Redesigning the GiveUNC database to incorporate fintech integrations and automate processes using APIs
              ●
              Led digital transformation project for the Institute of the Environment of UNC Chapel Hill using Figma for wireframing and
              Wordpress for prototype.
              </p>
            </li>
            <li>
              <strong>Web Developer</strong> / Daily Tar heel : 1898 Brand Studio, Chapel Hill January 2025 - Present
              <p>
              ● Web Development division of the Daily Tarheel, working with clients using Figma and hard code
              ● Collaborating with cross-functional teams, including marketing and engineering to support startups and local businesses
              ● Conducted market research and synthesized user feedback to enhance the web experience for the DTH's 30,000+ readers
              </p>
            </li>
            <li>
              <strong>UX and Web Development Apprentice</strong> / App Team, Chapel Hill January 2025 - Present
              <p>
              ● Streamlined the UI design and prototype, developing components and libraries in Figma, ensuring consistency across deliverables following UX design principles.
              ● Conducted user research sessions to identify pain points, driving iterative design improvements and optimizing client satisfaction
              ● Coordinating with back-end engineers to implement database and design functionalities cohesively
              </p>
            </li>
            <li>
              <strong>UX / Product Design Intern</strong> / Sourcerer AI, Remote May 2024 - February 2025
              <p>
              ● Co-led the end-to-end design and development of Sourcerer’s AI-powered procurement platform, following Agile methodology and user-centered design. ● Defined and executed product strategy in collaboration with engineering and AI teams, aligning design efforts in compliance with business goals to deliver three key product iterations in 12 months
              ● Designed product-led onboarding flows, reducing customer churn by 15% and improving activation rates.
              ● Created and designed mock-up, customer journey maps, case studies, and storyboards to guide the implementation of new features and functionalities. 
              </p>
            </li>
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
