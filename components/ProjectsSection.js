import React from "react";
import Project from "./Project";
import myteam from "../public/assets/myteam.webp";
import primetime from "../public/assets/primetime.webp";
import audiophile from "../public/assets/audiophile.webp";
import photosnap from "../public/assets/photosnap.webp";
import arch from "../public/assets/arch.webp";
import fylo from "../public/assets/fylo.webp";
import clipboard from "../public/assets/clipboard.webp";
import shortlet from "../public/assets/shortlet.webp";

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
            src={shortlet}
            name={"Shortlet"}
            link={"https://shortlet-alpha.vercel.app/"}
            tech={["React", "Node js", "Mongo Db", "Express"]}
            subtitle={
              "A realtor website that helps you book/reserve accomodation for short stays and put up your home for short stay"
            }
          />

          <Project
            src={primetime}
            name={"primetime"}
            link={"https://primetime-theta.vercel.app/"}
            tech={["React", "Next js", "Next Auth", "Redux", "TMDB Api"]}
            subtitle={
              "A movie app where you get updates on latest movies and tv shows. You can search for any movies and also bookmark."
            }
            order
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
            subtitle={
              "An Ecommerce App for an Audio and sound engineering company"
            }
          />

          <Project
            src={photosnap}
            name={"Photosnap"}
            link={"https://remi-photosnap.netlify.app/"}
            tech={["React", "SCSS", "JavaScript"]}
            subtitle={
              "A multipage wesbite for platform for photographers and visual storytellers to share photos, tell stories and connect with others.."
            }
            order
          />

          <Project
            src={arch}
            name={"Arch Studio"}
            link={"http://arch-studios.vercel.app/"}
            tech={["React", "CSS", "JavaScript"]}
            subtitle={"A multipage wesbite for an architecture  company."}
          />

          <Project
            src={myteam}
            name={"Myteam"}
            link={"https://remilekun-hub.github.io/myteam/index.html"}
            tech={["Html", "CSS", "JavaScript"]}
            subtitle={"A multipage wesbite for a talent recruitment company."}
            order
          />

          <Project
            src={fylo}
            name={"Fylo"}
            link={"https://remilekun-hub.github.io/fylo"}
            tech={["Html", "CSS"]}
            subtitle={
              "A landing page wesbite for a digital marketing service company."
            }
          />

          <Project
            src={clipboard}
            name={"Clipboard"}
            link={"https://remilekun-hub.github.io/clipboard/"}
            tech={["Html", "CSS"]}
            subtitle={
              "A landing page wesbite for a digital marketing service company."
            }
            order
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
