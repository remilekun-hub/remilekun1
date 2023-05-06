import React from "react";

function Hero() {
  return (
    <section className="hero_section">
      <div className="container hero">
        <div>
          <h1>
            Nice to meet you!
            <br />
            I'm {""}
            <span className="name">Remilekun.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            animi excepturi neque, ducimus nemo eos dolore rem, aut nisi odio
            deserunt ipsam dolor illo nesciunt sint praesentium.
          </p>
          <a href="#contact" className="contact">
            Contact Me
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
