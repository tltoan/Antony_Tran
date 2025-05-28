import React from "react";
import "./styles/About.css";
import ProfileImage from "../assets/profile.jpeg";
import Navbar from "./Navbar";

// Technical Icons
import tBurn from "../assets/icons/t-burn.png";
import tCss from "../assets/icons/t-css-3.png";
import tHtml from "../assets/icons/t-html.png";
import tJavascript from "../assets/icons/t-java-script.png";
import tJava from "../assets/icons/t-java.png";
import tLeaf from "../assets/icons/t-leaf.png";
import tPhysics from "../assets/icons/t-physics.png";
import tTypescript from "../assets/icons/t-typescript.png";

// Design Icons
import acrobat from "../assets/icons/acrobat.png";
import photoshop from "../assets/icons/adobe-photoshop.png";
import figma from "../assets/icons/figma.png";
import illustrator from "../assets/icons/illustrator.png";
import business from "../assets/icons/business.png";
import excel from "../assets/icons/excel.png";
import slack from "../assets/icons/slack.png";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      <div className="about-section">
        <div className="about-left">
          <h1>About</h1>
          <h2>Antony Tran</h2>
          <p className="role">(Product Design / Developer )</p>
          <p className="email">antonyltran@gmail.com</p>
          
          <div className="social-links">
            <a href="https://www.instagram.com/a.einz/" className="social-link">instagram</a>
            <a href="https://www.linkedin.com/in/antonytran05/" className="social-link">linkedin</a>
          </div>
        </div>
        
        <div className="about-right">
          <div className="profile-image-container">
            <img src={ProfileImage} alt="Antony Tran" className="profile-image" />
          </div>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="bio-section">
        <p>Hi my name is Antony, I am a rising junior at UNC-Chapel Hill. I am deeply passionately about design and I love the building that 0-1 process of a start-up. With that being said, my current start-up is Cykle, a B2B platform for consignments store to onboard their inventory alongside letting users access that inventory online. Some hobbies I have are tattoo-ing, oil painting, and watching movies.</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-row">
          <div className="skill-group">
            <h3>Technical:</h3>
            <div className="skill-icons">
              <img src={tJavascript} alt="JavaScript" className="skill-icon" />
              <img src={tHtml} alt="HTML" className="skill-icon" />
              <img src={tCss} alt="CSS" className="skill-icon" />
              <img src={tBurn} alt="Burn" className="skill-icon" />
              <img src={tLeaf} alt="Node.js" className="skill-icon" />
              <img src={tPhysics} alt="React" className="skill-icon" />
              <img src={tTypescript} alt="TypeScript" className="skill-icon" />
              <img src={tJava} alt="Java" className="skill-icon" />
            </div>
          </div>
          
          <div className="skill-group">
            <h3>Design:</h3>
            <div className="skill-icons">
              <img src={figma} alt="Figma" className="skill-icon" />
              <img src={photoshop} alt="Photoshop" className="skill-icon" />
              <img src={acrobat} alt="Acrobat" className="skill-icon" />
              <img src={illustrator} alt="Illustrator" className="skill-icon" />
            </div>
          </div>
        </div>
        
        <div className="skill-group other">
          <h3>Other:</h3>
          <div className="skill-group-content">
            <div className="skill-icons">
              <img src={business} alt="Business" className="skill-icon" title="Business" />
              <img src={excel} alt="Excel" className="skill-icon" title="Excel" />
              <img src={slack} alt="Slack" className="skill-icon" title="Slack" />
            </div>
            <p className="other-description">Branding, UX/UI Design, Product Design, Creative Design, Traditional Art.</p>
          </div>
        </div>
      </div>
      
      <div className="experiences-container">
        <h2>Experiences</h2>
        
        <div className="experience-item">
          <div className="experience-left">
            <h3>Development and Marketing Intern</h3>
            <p className="company">UNC-Institute for the Environment</p>
            <p className="period">Hybrid September 2024 - June 2025</p>
            
            <div className="tech-icons">
              <img src={tHtml} alt="HTML" className="tech-icon" />
              <img src={tCss} alt="CSS" className="tech-icon" />
              <img src={tJavascript} alt="JavaScript" className="tech-icon" />
              <img src={tTypescript} alt="TypeScript" className="tech-icon" />
              <img src={tLeaf} alt="Node.js" className="tech-icon" />
              <img src={tPhysics} alt="React" className="tech-icon" />
            </div>
          </div>
          
          <div className="experience-right">
            <ul className="experience-details">
              <li>Integrated and modernized various APIs to enhance the functionality of the Institute's outdated website directories</li>
              <li>Redesigning the GiveUNC database to incorporate fintech integrations and automate processes using APIs</li>
              <li>Led digital transformation project for the Institute of the Environment of UNC Chapel Hill using Figma for wireframing and Wordpress for prototyping</li>
            </ul>
          </div>
        </div>
        
        <div className="experience-item">
          <div className="experience-left">
            <h3>Product Design Intern</h3>
            <p className="company">Sourcerer AI</p>
            <p className="period">May 2024 - Present</p>
            
            <div className="tech-icons">
              <img src={figma} alt="Figma" className="tech-icon" />
              <img src={tPhysics} alt="React" className="tech-icon" />
              <img src={tHtml} alt="HTML" className="tech-icon" />
              <img src={tCss} alt="CSS" className="tech-icon" />
              <img src={tJavascript} alt="JavaScript" className="tech-icon" />
            </div>
          </div>
          
          <div className="experience-right">
            <ul className="experience-details">
              <li>Co-led the end-to-end design and development of Sourcerer's AI-powered procurement platform, following Agile methodology and user-centered design</li>
              <li>Created and designed mock-up, customer journey maps, case studies, and storyboards to guide the implementation of new features</li>
            </ul>
          </div>
        </div>
        
        <div className="experience-item">
          <div className="experience-left">
            <h3>Web Developer</h3>
            <p className="company">Daily Tarheel</p>
            <p className="period">January 2025 - Present</p>
            
            <div className="tech-icons">
              <img src={figma} alt="Figma" className="tech-icon" />
              <img src={tPhysics} alt="React" className="tech-icon" />
              <img src={tHtml} alt="HTML" className="tech-icon" />
              <img src={tCss} alt="CSS" className="tech-icon" />
              <img src={tJavascript} alt="JavaScript" className="tech-icon" />
            </div>
          </div>
          
          <div className="experience-right">
            <ul className="experience-details">
              <li>Collaborating with cross-functional teams, including marketing and engineering to support startups and local businesses</li>
              <li>Conducted market research and synthesized user feedback to enhance the web experience for the DTH's 30,000+ readers</li>
            </ul>
          </div>
        </div>
        
        <div className="experience-item">
          <div className="experience-left">
            <h3>UX and Web Development Apprentice</h3>
            <p className="company">AppTeam</p>
            <p className="period">January 2025 - June 2025</p>
            
            <div className="tech-icons">
              <img src={figma} alt="Figma" className="tech-icon" />
              <img src={tPhysics} alt="React" className="tech-icon" />
              <img src={tJavascript} alt="JavaScript" className="tech-icon" />
            </div>
          </div>
          
          <div className="experience-right">
            <ul className="experience-details">
              <li>Streamlined the UI design and prototype, developing components and libraries in Figma, ensuring consistency across deliverables following UX design principles</li>
              <li>Finished a high fidelity prototype with desk research on user pain points and presented at end of year club</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="contact-footer">
        <p>Feel free to reach out :)</p>
        <p>antonyltran@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
