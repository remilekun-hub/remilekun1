import React from "react";
import Image from "next/image";

function Project({ src, name, link }) {
  return (
    <div className="project">
      <div className="project-image">
        <Image
          src={src}
          alt={`${name} image`}
          blurDataURL={src}
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className="project-text">
        <div>
          <h2>{name}</h2>
          <p>jbxkjcbdbakjdbfkad abdfaf ivbk vmsb is uoV dshaefa</p>
          <p>Html, Css</p>
          <a href={link} className="contact">
            Live link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
