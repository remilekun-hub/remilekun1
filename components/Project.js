import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Project({ src, name, link, order, subtitle, tech }) {
  const ref = React.useRef(null)
  const InView = useInView(ref, {once:true});

  return (
    <div className="project">
      <motion.div
        className={`project-image ${order && "project-reverse"}`}
        transition={{ duration: 0.3 }}
        animate={ InView ? {opacity:1, y:0, transition:{delay:0.3}} : {opacity:0, y: 50}}
        ref={ref}
        
      >
        <Image src={src} alt={`${name} image`} objectFit="cover" quality={75} loading="eager" />
      </motion.div>
      <motion.div
        className="project-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div>
          <h2>{name}</h2>
          <p className="project-subtitle">{subtitle}</p>

          <p className="project-tech"> {tech.join(", ")}</p>

          <a
            href={link}
            className="contact project-link"
            target="_blank"
            rel="noreferrer"
          >
            Live link
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
