import React from "react";
import data from "../data";

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <h1>Skills</h1>
        <div className="skills-bottom">
          {data.map((item) => (
            <div key={item.title} className="skills-title">
              <h3>{item.title}</h3>

              <div className="skills-subtitle-container">
                {item.subtitle.map((subtitle) => (
                  <p key={subtitle.name}>{subtitle.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
