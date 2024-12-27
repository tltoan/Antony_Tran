import React from "react";
import "./styles/BOV.css";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import well from "../assets/old-well.jpg";
import mockup from "../assets/ei-mockup.png";
import oldsite1 from "../assets/old-site1.png";
import oldsite2 from "../assets/old-site2.png";
import oldsite3 from "../assets/old-site3.png";
import ei1 from "../assets/ei-1.png";
import ei2 from "../assets/ei-2.png";
import ei3 from "../assets/ei-3.png";
import ei4 from "../assets/ei-4.png";
import ei5 from "../assets/ei-5.png";
import ei6 from "../assets/ei-6.png";

const BOV = () => {
  return (
    <div className="bov-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <h1>UNC Environmental Institute Board of Visitor</h1>
        <img src={well} alt="Old Well" />
        <p>
          For this project I was tasked with improving the old UNC EI-BOV site
          to a more modern and easier to navigate site. I focused on the users,
          asking myself what would a member on for this institute want in a
          website designed for them. I built this using CSS HTML, and Wordpress.
        </p>
      </section>

      {/* Meta Section */}
      <section className="meta-section">
        <div className="meta-box">Role: Researcher & Designer</div>
        <div className="meta-box">Tools: Figma, Wordpress, HTML, CSS</div>
        <div className="meta-box">Duration: 1 Semester</div>
        <div className="meta-box">Type: Internship Project</div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>Design Process</h2>
        <p>
          The old EI BOV site was outdated and difficult to navigate. I started
          with navigating the old website, seeing what works and what did not.
          The information that would be useful from the old website I would
          transfer to the new one, like contact info, members of the board, and
          the purpose of the board. I then created a wireframe of the new site,
          and then a prototype of the site. I then built the site using
          Wordpress.
        </p>
        <div class="design">
          <h3>Old Site</h3>
          <div class="old-site">
            <img src={oldsite1} alt="Old Site 1" />
            <img src={oldsite2} alt="Old Site 2" />
            <img src={oldsite3} alt="Old Site 3" />
          </div>
          <h1>Prototype</h1>
          <img src={mockup} alt="EI Mockup" />
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <h2>The Solution</h2>
        <p>
          After many iterations and feedback from the board, I was able to
          finalize this one design. The site is now easier to navigate and has a
          more modern look. The site is now live and can be viewed by clicking
          the button below. This site however is still under construction and
          will be updated in the future as the Institute evolves.
        </p>
        <a
          href="https://tarheels.live/iebov/"
          target="_blank"
          rel="noopener noreferrer"
          className="solution-button">
          View Site
        </a>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <h2>Slides From the Site</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          swipeable
          emulateTouch
          showIndicators={true}
          showArrows={false}>
          <div>
            <img src={ei1} alt="Gallery" />
          </div>
          <div>
            <img src={ei2} alt="Gallery" />
          </div>
          <div>
            <img src={ei3} alt="Gallery" />
          </div>
          <div>
            <img src={ei4} alt="Gallery" />
          </div>
          <div>
            <img src={ei5} alt="Gallery" />
          </div>
          <div>
            <img src={ei6} alt="Gallery" />
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default BOV;
