import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Project({ src, name, link, order, subtitle, tech }) {
  return (
    <div className="project">
      <motion.div
        className={`project-image ${order && "project-reverse"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image src={src} alt={`${name} image`} objectFit="cover" quality={75} />
      </motion.div>
      <motion.div
        className="project-text"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
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
