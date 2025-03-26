import React from "react";
import "./styles/Appli.css";
import Navbar from "./Navbar";
import researchGoals from "../assets/research-goals.png";
import interviews from "../assets/interviews.svg";
import designSketches from "../assets/design-sketches.png";
import styleGuide from "../assets/style-guide.svg";
import wireframe1 from "../assets/Signup.png";
import wireframe2 from "../assets/Landing.png";
import wireframe3 from "../assets/jobapplication.png";
import protoype from "../assets/appli-prototype.png";

const Appli = () => {
  return (
    <div className="case-study-page">
      <Navbar />
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="project-title">Mejo 581: Appli</h1>
        <img src={protoype} alt="Appli Prototype" className="project-image" />
        <p className="project-summary">
          This project was undertaken as part of my User Research class, where
          we explored the end-to-end process of research, design, and testing to
          develop a new job application website. The goal was to create a
          platform that was both user-friendly and accessible, addressing the
          challenges faced by job seekers during the application process. We
          followed the design thinking methodology, starting with empathizing
          with users to understand their pain points, ideating potential
          solutions, and iteratively prototyping and testing our concepts. The
          process emphasized focusing on the users and their specific needs,
          ensuring that every decision was rooted in data gathered from
          research. Through this project, we aimed to simplify the complex and
          often overwhelming experience of applying for jobs, providing users
          with a seamless, intuitive platform tailored to their journey.
        </p>
        <div className="project-meta-container">
          <div className="meta-box">
            <p>
              <strong>Role:</strong> Lead Designer
            </p>
          </div>
          <div className="meta-box">
            <p>
              <strong>Tools:</strong> Figma, Adobe XD
            </p>
          </div>
          <div className="meta-box">
            <p>
              <strong>Year:</strong> 2024
            </p>
          </div>
          <div className="meta-box">
            <p>
              <strong>Duration:</strong> 4 Weeks
            </p>
          </div>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="problem-section">
        <h2>Problem Statement</h2>
        <p>
          We want to understand the specific challenges recent graduates face
          when applying for entry-level positions, including the time-consuming
          activities of navigating different job boards, customizing resumes and
          cover letters to various job postings, and managing or tracking
          application timelines. Furthermore, we want to investigate the
          emotional toll that the process takes on job seekers, who may face
          constant rejection or uncertainty and lack support overall.
        </p>
        <div class="problems-img">
          <img src={researchGoals} alt="research-goal"></img>
          <img src={interviews} alt="research-goal"></img>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>Design Process</h2>
        <p>
          The design process was grounded in a user-centered approach, involving
          extensive user research, sketching, wireframing, prototyping, and
          iterative testing to ensure the final design effectively met user
          needs. We began by conducting in-depth interviews through
          Usertesting.com, gathering insights from a diverse group of job
          seekers. These interviews allowed us to identify key pain points and
          behavioral patterns, such as difficulties in navigating job boards,
          managing application deadlines, and maintaining motivation in the face
          of rejections. Using these findings, we translated our research into
          initial sketches that visualized potential solutions. These sketches
          were iteratively refined based on feedback from internal discussions
          and further user insights, gradually evolving into more detailed
          wireframes. The wireframes served as a blueprint for structuring the
          layout and core interactions, ensuring that the user journey was
          intuitive and aligned with their needs. Finally, we created an
          interactive prototype in Figma, allowing us to simulate the
          functionality and aesthetics of the final product. This prototype was
          tested with users in realistic scenarios, enabling us to identify
          areas for improvement and iterate on the design.
        </p>
        <div class="design-sketches">
          <img
            src={designSketches}
            alt="Design Sketches"
            className="process-image"
          />
          <img
            src={styleGuide}
            alt="Design Sketches"
            className="process-image"
          />
        </div>
        <p>
          For our design, we aimed to keep the interface minimal and
          user-friendly. Job applications are inherently stressful and
          time-consuming, so our primary goal was to create a visually appealing
          website that was both intuitive and easy to navigate. The initial
          design iterations focused on addressing common user pain points, such
          as overly complex navigation and unclear application statuses. Through
          multiple rounds of user testing, we refined the layout, simplified
          interactions, and incorporated user feedback to ensure the final
          design met their needs. The iteration showcased below represents the
          culmination of this iterative process, balancing aesthetics with
          functionality to provide a seamless application experience.
        </p>
        <div class="design-wireframes">
          <img src={wireframe1} alt="Wireframes" className="process-image" />
          <img src={wireframe2} alt="Wireframes" className="process-image" />
          <img src={wireframe3} alt="Wireframes" className="process-image" />
        </div>
        <a
          href="https://www.figma.com/design/ZLNHBqNBBhgtnwbGaAwU8c/Prototype?node-id=36-3&t=qfZhRDNiGKnbVwc8-1"
          target="_blank"
          rel="noopener noreferrer"
          className="figma-button">
          View Prototype
        </a>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <h2>Results</h2>
        <p>
          The result of this project culminated in a detailed presentation where
          we shared our findings, the insights we gained, and the lessons we
          learned throughout the process. This experience not only allowed us to
          showcase our design solution but also highlighted the importance of
          user-centered research in creating impactful designs. On a personal
          level, this project significantly enhanced my skills as a user
          researcher. Conducting interviews, analyzing qualitative data, and
          synthesizing insights honed my ability to understand user needs and
          translate them into actionable design decisions. Additionally, working
          extensively in Figma improved my technical proficiency, enabling me to
          create high-fidelity prototypes and collaborate effectively within a
          design team. If you’re interested in diving deeper into the process,
          you can find the script we used for our user interviews and the slides
          summarizing our findings linked below. These resources provide a
          comprehensive look at how we approached the research and design
          phases, ensuring a robust and well-documented project.
        </p>
        <div class="result-links">
          <a
            href="https://www.figma.com/design/ZLNHBqNBBhgtnwbGaAwU8c/Prototype?node-id=36-3&t=qfZhRDNiGKnbVwc8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="script">
            View Script
          </a>
          <a
            href="https://www.figma.com/design/ZLNHBqNBBhgtnwbGaAwU8c/Prototype?node-id=36-3&t=qfZhRDNiGKnbVwc8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="slide">
            View Slides
          </a>
        </div>
      </section>

      {/* Call-to-Action */}
      <footer className="cta-section">
        <a href="/projects" className="cta-link">
          View More Projects
        </a>
        <div></div>
      </footer>
    </div>
  );
};

export default Appli;
