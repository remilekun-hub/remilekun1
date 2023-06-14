import React from "react";
import Project from "./Project";
import myteam from "../public/assets/myteam.png";
import primetime from "../public/assets/primetime.png";
import "@fontsource/montserrat/500.css";

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <div className="top">
          <h1>Projects</h1>

          <a href="#contact" className="contact">
            Contact Me
          </a>
        </div>
        <div className="bottom">
          <Project
            src={myteam}
            name={"myteam"}
            link={"#"}
            tech={["Html", "CSS", "JavaScript"]}
          />
          <Project
            src={primetime}
            name={"primetime"}
            link={"#"}
            tech={["Html", "CSS", "React"]}
            order
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
