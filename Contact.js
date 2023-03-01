

import React, { useState } from "react";
import './final.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {submitted && (
          <div className="profile">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
            <h3>Get in touch with us</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
