import React from "react";
import Project from "./Project";
import myteam from "../public/assets/myteam.png";
import primetime from "../public/assets/primetime.png";
import audiophile from "../public/assets/audiophile.png";
import photosnap from "../public/assets/photosnap.png";
import Image from "next/image";
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
            src={primetime}
            name={"primetime"}
            link={"https://primetime-theta.vercel.app/"}
            tech={["React", "Next js", "Next Auth", "Redux", "TMDB Api"]}
            subtitle={
              "A movie app where you get updates on latest movies and tv shows. You can search for any movies and also bookmark."
            }
          />
          <Project
            src={audiophile}
            name={"Audiophile"}
            link={"https://audiophiile.vercel.app/"}
            tech={[
              "React",
              "Next js",
              "Tailwind CSS",
              "Context Api",
              "Paystack",
            ]}
            subtitle={"An Ecommerce App"}
            order
          />
          <Project
            src={photosnap}
            name={"Photosnap"}
            link={"https://remi-photosnap.netlify.app/"}
            tech={["React", "SASS", "JavaScript"]}
            subtitle={
              "A multipage landing page wesbite for a talent recruitment company."
            }
          />

          <Project
            src={myteam}
            name={"myteam"}
            link={"#"}
            tech={["Html", "CSS", "JavaScript"]}
            subtitle={
              "A multipage landing page wesbite for a talent recruitment company."
            }
            order
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
