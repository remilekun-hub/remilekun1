import React from "react";
import "@fontsource/montserrat/500.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="top">
          <h1>Contact</h1>

          <p>
            i would love to hear about your project and how i could help. Please
            fill in the form, and i would get back to you as soon possible.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("formsubmitted");
          }}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input"
              autoComplete="no"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="input"
              autoComplete="no"
            />
            <textarea
              name="message"
              id=""
              rows="5"
              cols="30"
              placeholder="message"
            ></textarea>
          </div>
          <input type="submit" value="SEND MESSAGE" className="submit" />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
