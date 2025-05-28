import React from "react";
import "./styles/Projects.css";
import Navbar from "./Navbar";
import appli from "../assets/Landing.png";
import coming from "../assets/workinprogress.png";
import { Link } from "react-router-dom";
import ainzpop from "../assets/ainzpop.png";
import cyklePlaceholder from "../assets/cykle-placeholder.png";

const projects = [
  {
    title: "Cykle",
    description: "Thrift Store Inventory Platform",
    year: "2025",
    category: "Startup Project",
    image: cyklePlaceholder,
    link: "/cykle",
    intro: "A B2B platform connecting local thrift stores with nearby shoppers through a simple inventory management system.",
  },
  {
    title: "Sourcerer",
    description: "Product Design",
    year: "2025",
    category: "Work in Progress",
    image: coming,
    link: "/sourcerer",
    intro: "A work-in-progress product design project exploring new interfaces and interactions.",
  },
  {
    title: "Ainzpop",
    description: "Creative E-commerce Solution",
    year: "2025",
    category: "February 2025",
    image: ainzpop,
    link: "/ainzpop",
    intro: "An avant-garde approach to clothing resale, combining unique aesthetics with seamless e-commerce functionality.",
  },
  {
    title: "Appli",
    description: "Job Application Platform",
    year: "2024",
    category: "UX Design",
    image: appli,
    link: "/appli",
    intro: "A user-centered job application platform designed to simplify the complex process of applying for entry-level positions.",
  },
];

const Projects = () => (
  <div className="projects-container">
    <Navbar />
    <header className="projects-header">
      <h1>Projects</h1>
      <p>Computer Science · Media · Interactive Design</p>
    </header>
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-info">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-meta">
              {project.year} · {project.category}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-image-wrapper">
            <Link to={project.link}>
              {project.title === "Cykle" ? (
                <div className="cykle-placeholder-image">
                  <div className="placeholder-text">{project.title}</div>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
            </Link>
          </div>

          <Link to={project.link} className="project-link">
            View Project
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
