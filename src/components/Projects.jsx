import React from "react";
import "./styles/Projects.css";
import Navbar from "./Navbar";
import appli from "../assets/Landing.png";
import bov from "../assets/uncei.png";
import coming from "../assets/workinprogress.png";
import michelin from "../assets/michelin.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Sourcerer",
    description: "Product Design",
    year: "2025",
    category: "Work in Progress",
    image: coming,
    link: "",
    intro: "",
  },
  {
    title: "Ainzpop",
    description: "Creative E-commerce Solution",
    year: "2025",
    category: "February 2025",
    image: coming,
    link: "",
    intro: "",
  },
  {
    title: "Appli",
    description: "Job Application Platform",
    year: "2024",
    category: "UX Design",
    image: appli,
    link: "/appli",
    intro:
      "Appli was a project developed for my MEJO 581 course: User Experience Design. The goal of this project was to intro us into the UX field by exploring the processes of research, analysis, and prototyping. Spanning an entire semester, the project was structured into five key phases: Empathy, Design, Ideation, Prototyping, and Pitching. Throughout the project, we engaged with real users, conducted in-depth interviews, and transformed our insights into a high-fidelity prototype. The final phase involved pitching our solution to a panel of peers and receiving valuable feedback from a senior developer, which further enriched our learning experience.",
  },
  {
    title: "Vietnam Michelin Guide",
    description: "Travel Website",
    year: "2024",
    category: "Product Design + Code",
    image: michelin,
    link: "/michelin",
    intro:
      "This project was created for my MEJO 487 class: Intermediate Interactive Media. For the final project, we were tasked with developing a product of our choice, with the requirement that it be coded entirely from scratch using HTML, CSS, and JavaScript. Additionally, we had to integrate the Google Maps API and ensure the application was interactive.As a foodie who had recently traveled to Vietnam, I decided to create a Vietnamese Michelin food guide. This project not only allowed me to showcase hard-coding but also provided an opportunity to learn web scraping techniques to gather data directly from the web.",
  },
  {
    title: "UNC-CH EI Board of Visitors",
    description: "University Website",
    year: "2020",
    category: "Web Design/UX UI",
    image: bov,
    link: "/bov",
    intro:
      "This is an Internship Project for the Envionmental Institute at Chapel Hill. The goal of this project was to improve the old UNC EI-BOV site to a more modern and easier to navigate site. I focused on the users (the board members), asking myself what would a member on for this institute want in a website designed for them. I built this using CSS HTML, and Wordpress.The project was completed over the course of one semester.",
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
            <p className="project-description">{project.description}</p>
            <p className="project-meta">
              {project.year} · {project.category}
            </p>
          </div>
          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-intro">
            <p>{project.intro}</p>
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
