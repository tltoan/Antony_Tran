import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import medeaImage from '../assets/medealeft.png';

// Custom typed text component with faster typing
const TypedText = ({ text, speed = 30, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    let timer;
    let startTimer;
    
    // Function to start typing after the delay
    const startTyping = () => {
      let i = 0;
      
      // Function to type next character
      const typeChar = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          timer = setTimeout(typeChar, speed);
        } else {
          // Done typing, hide cursor
          setShowCursor(false);
        }
      };
      
      // Start typing
      typeChar();
    };
    
    // Set delay before starting to type
    startTimer = setTimeout(startTyping, delay);
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      clearTimeout(startTimer);
    };
  }, [text, speed, delay]);
  
  return (
    <>
      {displayText}
      {showCursor && <span className="cursor">|</span>}
    </>
  );
};


const Home = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);
  
  // Handle mouse interaction with push effect using CSS variables
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      // Handle shapes with smoother push effect
      document.querySelectorAll('.shape').forEach(shape => {
        // Get shape position and dimensions
        const rect = shape.getBoundingClientRect();
        const shapeX = rect.left + rect.width / 2;
        const shapeY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to shape
        const dx = mouseX - shapeX;
        const dy = mouseY - shapeY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Smoother push effect with larger activation radius
        if (distance < 180) { // Increased from 150px
          // Smoother force calculation with easing
          const force = Math.pow(1 - (distance / 180), 2); // Quadratic falloff for smoother transition
          const pushX = (dx / distance) * force * 35; // Increased push strength
          const pushY = (dy / distance) * force * 35;
          
          // Apply transforms with requestAnimationFrame for smoother updates
          shape.style.setProperty('--push-x', `${pushX}px`);
          shape.style.setProperty('--push-y', `${pushY}px`);
          shape.style.setProperty('--push-scale', `${1 + force * 0.15}`); // Dynamic scale based on force
          shape.style.opacity = `${0.9 + force * 0.1}`; // Dynamic opacity
          shape.style.filter = `brightness(${1.1 + force * 0.2}) drop-shadow(0 0 ${force * 10}px rgba(255,255,255,0.3))`;
          shape.style.zIndex = '20';
        } else if (shape.style.getPropertyValue('--push-x') !== '0px') {
          // Only update if we need to reset
          shape.style.setProperty('--push-x', '0px');
          shape.style.setProperty('--push-y', '0px');
          shape.style.setProperty('--push-scale', '1');
          shape.style.opacity = '1';
          shape.style.filter = '';
          shape.style.zIndex = '10';
        }
      });
    });
    
    // Handle Medea push effect with smoother movement
    const medea = document.querySelector('.medea-image');
    if (medea) {
      const rect = medea.getBoundingClientRect();
      const medeaX = rect.left + rect.width / 2;
      const medeaY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to Medea
      const dx = mouseX - medeaX;
      const dy = mouseY - medeaY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Smoother push effect with easing and larger interaction area
      if (distance < 250) { // Increased from 200px
        // Smoother force calculation with easing
        const force = Math.pow(1 - (distance / 250), 1.5); // Smoother falloff
        const pushX = (dx / distance) * force * 30; // Increased from 15 to 30 for more movement
        const pushY = (dy / distance) * force * 30;
        
        // Apply with requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
          medea.style.setProperty('--medea-translate-x', `${pushX}px`);
          medea.style.setProperty('--medea-translate-y', `${pushY}px`);
          medea.style.setProperty('--medea-rotate', `${pushX * 0.1}deg`); // Subtle rotation based on movement
          medea.style.opacity = 0.9 + (force * 0.1); // Slight opacity change
        });
      } else {
        requestAnimationFrame(() => {
          medea.style.setProperty('--medea-translate-x', '0px');
          medea.style.setProperty('--medea-translate-y', '0px');
          medea.style.setProperty('--medea-rotate', '0deg');
          medea.style.opacity = '1';
        });
      }
    }
  };
  
  // Reset all shapes and Medea to their original positions
  const resetShapes = () => {
    // Reset shapes
    document.querySelectorAll('.shape').forEach(shape => {
      shape.style.setProperty('--push-x', '0px');
      shape.style.setProperty('--push-y', '0px');
      shape.style.setProperty('--push-scale', '1');
      shape.style.opacity = '1';
      shape.style.filter = '';
      shape.style.zIndex = '10';
    });
    
    // Reset Medea
    const medea = document.querySelector('.medea-image');
    if (medea) {
      medea.style.setProperty('--medea-translate-x', '0px');
      medea.style.setProperty('--medea-translate-y', '0px');
      medea.style.setProperty('--medea-scale', '1');
    }
  };
  
  // Set up event listeners for mouse interactions - directly on the document
  useEffect(() => {
    console.log('Setting up mouse event listeners on document');
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Add animations to shapes after they mount
  useEffect(() => {
    // Apply animations to each shape
    shapesRef.current.forEach((shape) => {
      if (shape) {
        // Get the delay for this shape
        const delay = parseFloat(shape.style.getPropertyValue('--delay') || '0');
        
        // After the spin-in animation completes, add the continuous animations
        setTimeout(() => {
          shape.classList.add('animate-in');
        }, (delay * 1000) + 1200); // delay + 1.2s for spinIn duration
      }
    });
    
    // Cleanup function to remove event listeners
    return () => {
      shapesRef.current.forEach(shape => {
        if (shape) {
          shape.classList.remove('animate-in');
        }
      });
    };
  }, []);
  
  // Add shape to refs
  const addToShapeRefs = (el) => {
    if (el && !shapesRef.current.includes(el)) {
      // Add random delay for animation
      const randomDelay = Math.random() * 1.5;
      el.style.setProperty('--delay', `${randomDelay}s`);
      
      // Store the base transform so we can restore it later
      const computedStyle = window.getComputedStyle(el);
      const baseTransform = computedStyle.transform !== 'none' ? computedStyle.transform : '';
      el.setAttribute('data-base-transform', baseTransform);
      
      // Remove any existing classes that might conflict
      el.classList.remove('art-element');
      // Add the proper class to ensure animations work
      el.classList.add('shape');
      shapesRef.current.push(el);
      
      // Debug: log each shape added to refs
      console.log('Shape added to refs:', shapesRef.current.length, 'Base transform:', baseTransform);
    }
    return el;
  };
  
  // Create an array of all shape data
  const allShapes = [
    // Row 0: Very top shapes
    { type: 'star', color: 'pink', position: { top: '3%', right: '10%' } },
    { type: 'circle', color: 'blue', position: { top: '2%', right: '30%' } },
    { type: 'heart', color: 'red', position: { top: '5%', right: '50%' } },
    { type: 'diamond', color: 'purple', position: { top: '3%', right: '70%' } },
    { type: 'hexagon', color: 'teal', position: { top: '1%', right: '85%' } },
    
    // Row 1: Top shapes
    { type: 'star', color: 'pink', position: { top: '12%', right: '15%' } },
    { type: 'circle', color: 'blue', position: { top: '15%', right: '35%' } },
    { type: 'heart', color: 'red', position: { top: '10%', right: '55%' } },
    { type: 'diamond', color: 'purple', position: { top: '13%', right: '75%' } },
    { type: 'hexagon', color: 'teal', position: { top: '8%', right: '90%' } },
    
    // Row 2: Middle top shapes
    { type: 'flower', color: 'orange', position: { top: '25%', right: '10%' } },
    { type: 'star', color: 'yellow', position: { top: '28%', right: '30%' } },
    { type: 'pentagon', color: 'purple', position: { top: '22%', right: '50%' } },
    { type: 'hexagon', color: 'teal', position: { top: '26%', right: '70%' } },
    { type: 'cross', color: 'yellow', position: { top: '24%', right: '90%' } },

    // Row 3: Middle shapes - New types
    { type: 'triangle', color: '', position: { top: '38%', right: '15%' }, background: '#1dd1a1' },
    { type: 'blob', color: '', position: { top: '35%', right: '40%' }, background: '#00b894' },
    { type: 'cloud', color: '', position: { top: '40%', right: '65%' }, background: '#dff9fb' },
    { type: 'moon', color: '', position: { top: '42%', right: '85%' }, background: '#f6e58d' },

    // Row 4: Lower middle shapes
    { type: 'squiggle', color: '', position: { top: '55%', right: '10%' }, background: '#00b894' },
    { type: 'spiral', color: '', position: { top: '58%', right: '35%' }, background: '#00b894' },
    { type: 'zigzag', color: '', position: { top: '52%', right: '60%' }, background: '#636e72' },
    { type: 'wave', color: '', position: { top: '50%', right: '80%' }, background: '#00cec9' },
    { type: 'star', color: 'orange', position: { top: '53%', right: '50%' } },
    
    // Row 5: Bottom shapes
    { type: 'diamond', color: '', position: { top: '70%', right: '5%' }, background: '#FF6B6B' },
    { type: 'star', color: '', position: { top: '75%', right: '25%' }, background: '#FF9FF3' },
    { type: 'circle', color: '', position: { top: '72%', right: '45%' }, background: '#48dbfb' },
    { type: 'heart', color: '', position: { top: '78%', right: '65%' }, background: '#FF7675' },
    { type: 'cross', color: '', position: { top: '68%', right: '85%' }, background: '#222f3e' },
    { type: 'blob', color: 'blue', position: { top: '56%', right: '70%' } },
    { type: 'diamond', color: 'pink', position: { top: '54%', right: '90%' } },
    
    // Row 6: More bottom shapes
    { type: 'circle', color: 'green', position: { top: '70%', right: '15%' } },
    { type: 'triangle', color: 'blue', position: { top: '73%', right: '35%' } },
    { type: 'star', color: 'red', position: { top: '68%', right: '55%' } },
    { type: 'heart', color: 'yellow', position: { top: '72%', right: '75%' } },
    { type: 'hexagon', color: 'teal', position: { top: '70%', right: '90%' } },
    
    // Row 7: Very bottom shapes
    { type: 'star', color: 'pink', position: { top: '85%', right: '10%' } },
    { type: 'circle', color: 'blue', position: { top: '88%', right: '30%' } },
    { type: 'heart', color: 'red', position: { top: '83%', right: '50%' } },
    { type: 'diamond', color: 'purple', position: { top: '86%', right: '70%' } },
    { type: 'star', color: 'teal', position: { top: '84%', right: '90%' } }
  ];

  return (
    <div className="home">
      <div className="left-side">
        <div className="portfolio-info">
          <h1>Antony_Tran</h1>
          <p>Portfolio 2025</p>
        </div>

        <div className="home-bio-section">
          <h2 className="home-bio-heading">
            <TypedText text="Hi my name is " speed={10} />
            <span className="home-name-underline">
              <TypedText text="Antony Tran" speed={10} delay={400} />
            </span>
          </h2>
          <p className="home-bio-text">
            <TypedText 
              text="I am currently a student at UNC Chapel Hill" 
              speed={8}
              delay={800}
            />
          </p>
          <p className="home-bio-text">
            <TypedText 
              text="I am majoring in CS + Interactive Media" 
              speed={8}
              delay={1600}
            />
          </p>
        </div>

        <div className="designation">
          <h2 className="product">Product</h2>
          <h2 className="designer">Designer</h2>
        </div>
      </div>

      <div className="right-side" ref={containerRef}>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="https://www.ainzpop.site/" target="_blank" rel="noopener noreferrer">AINZPOP</a>
            </li>
            <li>
              <Link to="/artworks">Artwork</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        
        <div className="right-content">
          {/* Medea image container */}
          <div className="medea-image-container">
            <img src={medeaImage} alt="Medea" className="medea-image" />
          </div>

          {/* Decorative shapes container - Expanded with more shapes and spread out */}
          <div className="shapes-container">
            {/* Render all shapes - mouse interaction handled at container level */}
            {allShapes.map((shape, index) => (
              <div
                key={index}
                className={`shape ${shape.type} ${shape.color}`}
                ref={addToShapeRefs}
                style={{
                  ...shape.position,
                  background: shape.background || undefined
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
