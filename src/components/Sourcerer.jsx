import React from "react";
import "./styles/ProjectCommon.css";
import "./styles/Sourcerer.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import sourcererGif from "../assets/sourcerer-ao.gif";

const Sourcerer = () => {
  return (
    <div className="project-container sourcerer-page">
      <Navbar />
      
      {/* Header Section */}
      <header className="sourcerer-header">
        <div className="header-left">
          <div className="project-meta">
            <p className="project-date">June 2024 - August 2024</p>
            <h1 className="project-title">Sourcerer AI</h1>
            <p className="project-role">UX Research and Design Intern</p>
          </div>
        </div>
        <div className="header-right">
          <div className="problem-block">
            <h2>The Problem</h2>
            <p>Traditional procurement is excessively manual, time-consuming, and complex, preventing businesses from efficiently securing optimal pricing, quality, and terms amidst challenges like fluctuating tariffs, quality control, and difficult supplier negotiations.</p>
          </div>
        </div>
      </header>
      
      {/* Solution Section */}
      <section className="solution-section">
        <h2>The Solution</h2>
        <div className="solution-buttons">
        {/* Solution Image with Caption */}
        <div className="solution-image-wrapper">
          <a href="#" className="solution-image-container" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/sourcer.png")} alt="Sourcerer AI Solution" className="solution-image" />
          </a>
          <p className="solution-caption">
            Sourcerer AI: provides an AI-powered platform that automates the entire end-to-end procurement process—from supplier sourcing and AI-led negotiation to financing and quality checks—acting as a "full-stack buyer" to deliver better prices, quality, and terms in record time.
          </p>
        </div>
        </div>
      </section>
      

      {/* Features List Section */}
      <section className="features-section">
        <div className="features-list-container">
          <h2>Features List:</h2>
          <ul className="sourcerer-features-list">
            <li>Simple interface for buyers to enter specs, budget, and timeline</li>
            <li>AI-powered supplier search and selection</li>
            <li>Automated negotiation using historical pricing data</li>
            <li>Built-in trade credit financing and quality assurance options</li>
            <li>Centralized dashboard for order tracking, compliance, and savings</li>
          </ul>
        </div>
        
        {/* Globe Illustration */}
        <div className="globe-illustration">
          <img src={sourcererGif} alt="Global procurement network" className="globe-img" />
        </div>
      </section>
      
      {/* Role Section */}
      <section className="role-section">
        <h2>Where I came in?</h2>
        <p>As a UX/Product Design Intern, I was responsible for designing and implementing the Sourcerer AI. I worked closely with the development team to ensure that the design was both user-friendly and functional. I created and designed <strong>mock-up, customer journey maps, case studies,</strong> and <strong>storyboards</strong> to guide the implementation of existing and features for onboarding.</p>
        <div className="highlight-box">
          <h3>Highlight: Dashboard Research and Implementation</h3>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="research-section">
        <p className="research-intro">Conducted 12 interviews</p>
        <div className="research-data">
          <div className="research-column">
            <div className="metric-container blue">
              <h2 className="metric-number">3</h2>
              <p className="metric-label">current users</p>
              <ul className="metric-details">
                <li>Work for large hardware chain</li>
                <li>Order over 45 items/month</li>
                <li>Main goals: better pricing, transparency, efficiency</li>
                <li>Procurement specialists manage complex international orders</li>
                <li>Need powerful analysis tools to make informed decisions quickly</li>
              </ul>
            </div>
          </div>
          <div className="research-column">
            <div className="metric-container purple">
              <h2 className="metric-number">8</h2>
              <p className="metric-label">potential users</p>
              <ul className="metric-details">
                <li>Mostly manufacturing companies with complex procurement needs</li>
                <li>Currently using outdated tools or manual processes</li>
                <li>Looking for solutions to optimize supplier selection, improve negotiations</li>
                <li>Need visibility into procurement analytics</li>
                <li>Want AI for improved accuracy and insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="demo-section">
        <h2>Final Demo Walkthrough</h2>
        <p>Demonstrated demo video summarizing core functionality and benefits. Once an AI Procurement agent analyzes request and retrieves best options, the platform intelligently walks users through a simple ordering flow. The final demo also showcased order confirmation directly within a corporate procurement system.</p>
        
        <div className="demo-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="sourcerer-demo-video"
            src={require("../assets/sourcerer-vid.mov")}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Spiral Icons */}
        <div className="spiral-icons">
        </div>
      </section>
      
      {/* Reflections Section */}
      <section className="reflections-section">
        <div className="reflections-column">
          <h2>Reflections</h2>
          <p>This research unabashedly reinforced a strong need for a dashboard experience that made relevant information accessible, analyzed data in real-time, and connected insights that would otherwise be missed. This encourages users to make informed decisions quickly.</p>
          <p>This is my chosen work for Sourcerer AI I'd love to talk more about what else I did if you are interested. Feel free to email anytime :p  antonyltran@gmail.com</p>
        </div>
        <div className="arrow-icon">→</div>
        <div className="key-features-column">
          <h2>Key Features</h2>
          <ul className="key-feature-list">
            <li>Fluid UI that's user-friendly, intuitive</li>
            <li>Quick access to AI procurement options</li>
            <li>Easy comparison of pricing offers</li>
            <li>Single source of supplier information</li>
            <li>Push notifications for updates</li>
            <li>Real-time reporting on savings vs. target</li>
            <li>Detailed customization and filtering for every order</li>
          </ul>
        </div>
      </section>
      
      <Link to="/projects" className="back-link">Back to Projects</Link>
    </div>
  );
};

export default Sourcerer;