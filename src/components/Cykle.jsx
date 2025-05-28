import React from "react";
import "./styles/ProjectCommon.css";
import "./styles/Cykle.css";
import Navbar from "./Navbar";

const Cykle = () => {
  return (
    <div className="project-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="project-year">2025</div>
        <div className="project-number">01</div>
        <h1>Cykle</h1>
        <p>
          A B2B platform empowering local thrift stores by making their unique inventory
          visible and searchable online to nearby shoppers, facilitating local discovery
          and increasing foot traffic.
        </p>
        <div className="accent-line"></div>
        <div className="cykle-placeholder-image">
          <div className="placeholder-text">Cykle Platform</div>
        </div>
      </section>

      {/* Meta Section */}
      <section className="meta-section">
        <div className="meta-box">Technical Co-founder</div>
        <div className="meta-box">React.js, Firebase, Cloud Storage</div>
        <div className="meta-box">Ongoing Development</div>
        <div className="meta-box">Startup Project</div>
      </section>

      {/* Problem Section */}
      <section className="content-section">
        <h2>The Problem</h2>
        <p>
          Most items in local thrift stores remain "hidden" from online view. Shoppers must
          physically visit to see what's available, leading to missed opportunities for both
          parties. Stores lack simple, effective ways to showcase their constantly changing
          inventory to their local online community, and many don't have the resources to
          build and maintain e-commerce sites or manage listings across multiple platforms.
        </p>
        <div className="cykle-placeholder-image secondary-placeholder">
          <div className="placeholder-text">Problem Visualization</div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="content-section">
        <h2>The Solution</h2>
        <p>
          Cykle provides a simple, mobile-responsive web application that helps thrift stores
          quickly list their inventory online, making it visible and searchable to nearby shoppers.
          This streamlined approach facilitates local discovery and in-store pickup, increasing
          foot traffic without requiring extensive technical knowledge or resources from the stores.
        </p>
      </section>

      {/* Features Section */}
      <section className="content-section features-section">
        <h2>Key Features</h2>
        <div className="two-column">
          <div>
            <ul>
              <li>Secure authentication for store staff</li>
              <li>Simple inventory listing with photo uploads</li>
              <li>QR code scanning to mark items as sold</li>
              <li>Local store discovery for shoppers</li>
              <li>Inventory browsing across multiple stores</li>
              <li>Detailed item information and store location</li>
            </ul>
          </div>
          <div className="cykle-placeholder-image feature-placeholder">
            <div className="placeholder-text">Features Visualization</div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="content-section">
        <h2>Target Users</h2>
        <div className="two-column">
          <div>
            <h3 className="accent-text">Primary Users</h3>
            <p>
              Staff and volunteers at local physical thrift stores (independent shops,
              charity-run stores, community non-profits).
            </p>
          </div>
          <div>
            <h3 className="accent-text">Secondary Users</h3>
            <p>
              Local community members looking to shop second-hand, discover unique items,
              and support local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="content-section">
        <h2>Future Vision</h2>
        <p>
          The future of Cykle includes AI-powered pricing recommendations using image recognition
          and market data analysis, camera-based item measurement tools, in-app reservations,
          and "Buy Online, Pick Up In-Store" (BOPIS) functionality. We also plan to develop
          enhanced shopper features, deeper analytics for stores, and potentially native mobile apps.
        </p>
        <div className="cykle-placeholder-image vision-placeholder">
          <div className="placeholder-text">Future Vision</div>
        </div>
      </section>

      {/* Project Status */}
      <section className="content-section">
        <h2>Current Status</h2>
        <p>
          Cykle is in the customer discovery phase, interviewing thrift stores in San Francisco
          and Chapel Hill to validate problems and the proposed solution. We're focusing on
          Firebase backend setup and planning the React.js web app build, with the goal of
          launching an MVP pilot with approximately 20 local stores to validate the core concept.
        </p>
        <a
          href="https://github.com/ainztav"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">
          View Project Repository
        </a>
      </section>
    </div>
  );
};

export default Cykle;
