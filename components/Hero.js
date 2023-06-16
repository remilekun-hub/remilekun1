import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const heroVariant = {
    hidden: {
      opacity: 1,
    },
    start: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
      },
    },
  };
  const heroText = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    start: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section className="hero_section">
      <div className="container hero">
        <div className="hero-image">
          <motion.img
            src="../assets/atanda remilekun.jpg"
            alt="atanda remilekun"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.div
          className="hero-text"
          variants={heroVariant}
          animate="start"
          initial="hidden"
        >
          <motion.h1 variants={heroText}>
            Nice to meet you!
            <br />
            I'm {""}
            <span className="name">Remilekun.</span>
          </motion.h1>

          <motion.p variants={heroText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            animi excepturi neque, ducimus nemo eos dolore rem, aut nisi odio
            deserunt ipsam dolor illo nesciunt sint praesentium.
          </motion.p>

          <motion.a href="#contact" className="contact" variants={heroText}>
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
