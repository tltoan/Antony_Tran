import React, { useRef } from "react";
import "./styles/ProjectCommon.css";
import "./styles/Ainzpop.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ainzpopImage from "../assets/ainzpop.png";

const Ainzpop = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <div className="ainzpop-container">
      <Navbar />
      
      {/* Introduction Panel */}
      <div className="intro-panel">
        <div className="intro-content">
          <div className="project-meta">
            <span className="project-year">2025</span>
            <span className="project-category">E-commerce Platform</span>
          </div>
          <h1>Ainzpop</h1>
          <p className="intro-description">
            An avant-garde approach to clothing resale, combining unique aesthetics with 
            seamless e-commerce functionality to create a distinctive online shopping experience.
          </p>
          <div className="project-details">
            <div className="detail-item">
              <span className="detail-label">Role</span>
              <span className="detail-value">Lead Developer</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Tech Stack</span>
              <span className="detail-value">Shopify, Custom CSS, JavaScript</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">Launched February 2025</span>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll horizontally to explore</span>
            <div className="scroll-arrows">
              <button onClick={scrollLeft} className="scroll-arrow left">&larr;</button>
              <button onClick={scrollRight} className="scroll-arrow right">&rarr;</button>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img src={ainzpopImage} alt="Ainzpop Platform" />
        </div>
      </div>

      {/* Horizontal Scrolling Sections */}
      <div className="horizontal-scroll-container" ref={scrollContainerRef}>
        {/* Section 1: Overview */}
        <section className="scroll-section" id="overview">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2>Overview</h2>
            </div>
            <div className="section-body">
              <p>
                Ainzpop is an innovative e-commerce platform that reimagines the online clothing resale experience. 
                The platform combines striking visual design with intuitive functionality to create a distinctive 
                shopping journey that resonates with fashion-forward consumers seeking unique pieces and memorable 
                brand interactions.
              </p>
              <div className="section-visual">
                <div className="ainzpop-placeholder-image">
                  <div className="placeholder-text">Overview Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Problem Research */}
        <section className="scroll-section" id="problem">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2>Problem Research</h2>
            </div>
            <div className="section-body">
              <p>
                Traditional online clothing resale platforms often lack visual distinction and 
                personality, creating a generic shopping experience that fails to capture the 
                unique character of curated fashion collections. Many platforms prioritize 
                functionality over aesthetics, missing opportunities to create memorable brand 
                experiences that resonate with style-conscious consumers.
              </p>
              <div className="research-findings">
                <div className="finding-item">
                  <h3>User Pain Points</h3>
                  <ul>
                    <li>Generic, uninspiring visual presentations</li>
                    <li>Disconnected brand experiences</li>
                    <li>Functional but forgettable interfaces</li>
                  </ul>
                </div>
                <div className="finding-item">
                  <h3>Market Opportunities</h3>
                  <ul>
                    <li>Distinctive visual identity</li>
                    <li>Artistic product presentation</li>
                    <li>Seamless functionality with character</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 3: Solution */}
        <section className="scroll-section" id="solution">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2>Solution</h2>
            </div>
            <div className="section-body">
              <p>
                Ainzpop delivers a distinctive online shopping experience that balances striking 
                visual design with intuitive e-commerce functionality. The platform showcases 
                carefully curated clothing collections through an artistic lens, creating an 
                immersive brand experience that appeals to fashion-forward consumers seeking 
                unique pieces and a memorable shopping journey.
              </p>
              <div className="key-features">
                <div className="feature-item">
                  <h3>Visual Identity</h3>
                  <p>
                    Minimalist layouts with bold typography and carefully selected color palettes 
                    that complement the featured clothing collections. The design creates a gallery-like 
                    experience that elevates each piece while maintaining a cohesive brand aesthetic.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>User Experience</h3>
                  <p>
                    Intuitive navigation and frictionless shopping, with carefully considered product 
                    categorization, streamlined checkout flows, and thoughtful micro-interactions that 
                    enhance the overall brand experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Implementation */}
        <section className="scroll-section" id="implementation">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2>Implementation</h2>
            </div>
            <div className="section-body">
              <p>
                Ainzpop was built on the Shopify platform with extensive customization through 
                custom CSS, JavaScript, and strategic app integrations. The development process 
                focused on balancing visual impact with performance optimization, ensuring fast 
                load times and smooth interactions across all devices while maintaining the 
                distinctive aesthetic that defines the brand.
              </p>
              <div className="tech-stack">
                <div className="tech-item">
                  <h3>Frontend</h3>
                  <ul>
                    <li>Custom Shopify theme development</li>
                    <li>Advanced CSS animations and transitions</li>
                    <li>JavaScript for interactive elements</li>
                    <li>Responsive design for all devices</li>
                  </ul>
                </div>
                <div className="tech-item">
                  <h3>Backend</h3>
                  <ul>
                    <li>Shopify e-commerce infrastructure</li>
                    <li>Custom app integrations for inventory management</li>
                    <li>API connections for payment processing</li>
                    <li>Performance optimization techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 5: Results */}
        <section className="scroll-section" id="results">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2>Results</h2>
            </div>
            <div className="section-body archive-section">
              <p>
                Ainzpop successfully launched in February 2025 and continues to evolve with 
                regular updates to both the product catalog and platform features. The site 
                has established a growing customer base and distinctive brand presence in the 
                online fashion resale market.
              </p>
              <div className="metrics">
                <div className="metric-item">
                  <h3>User Engagement</h3>
                  <p>42% increase in time spent on site compared to industry average</p>
                </div>
                <div className="metric-item">
                  <h3>Conversion Rate</h3>
                  <p>3.8% conversion rate, exceeding e-commerce benchmarks</p>
                </div>
                <div className="metric-item">
                  <h3>Customer Retention</h3>
                  <p>68% of customers return for additional purchases</p>
                </div>
              </div>
              <div className="archive-cta">
                <Link to="/projects" className="project-link">
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ainzpop;
