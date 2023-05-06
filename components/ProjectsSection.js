import React from "react";
import Project from "./Project";
import myteam from "../public/assets/myteam.png";

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <div className="top">
          <h1>Projects</h1>
          <a href="#contact" class="contact">
            Contact Me
          </a>
        </div>
        <div className="bottom">
          <Project src={myteam} name={"myteam"} link={"#"} />
          <Project src={myteam} name={"myteam"} link={"#"} />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
