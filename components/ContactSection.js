import React from "react";
import "@fontsource/montserrat/500.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        contact here
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
              placeholder="message here"
            ></textarea>
          </div>
          <input type="submit" value="SUBMIT" className="submit" />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
