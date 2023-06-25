import React, { useState } from "react";
import axios from "axios";

function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/sendmail", {
        ...userFormData,
      });
      setIsLoading(false);
      setResponse(data.msg);
    } catch (error) {
      setIsLoading(false);
      setResponse(error.response.data.msg);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setUserFormData({
          name: "",
          email: "",
          message: "",
        });
        setResponse("");
      }, 3000);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="top">
          <h1>Contact</h1>

          <p>
            i would love to hear about your project and how i could help. Please
            fill in the form, and i would get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userFormData.name}
              onChange={(e) =>
                setUserFormData({ ...userFormData, name: e.target.value })
              }
              className="input"
              autoComplete="no"
              required={true}
              disabled={isLoading}
            />
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={userFormData.email}
              onChange={(e) =>
                setUserFormData({ ...userFormData, email: e.target.value })
              }
              className="input"
              autoComplete="no"
              required={true}
              disabled={isLoading}
            />
            <textarea
              name="message"
              rows="5"
              cols="30"
              value={userFormData.message}
              onChange={(e) =>
                setUserFormData({ ...userFormData, message: e.target.value })
              }
              placeholder="message"
              disabled={isLoading}
              required={true}
            ></textarea>
          </div>

          <div className="loader">
            {isLoading ? <p>Processing...</p> : <p>{response}</p>}

            <input type="submit" value="SEND MESSAGE" className="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
