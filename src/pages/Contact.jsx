import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className="contact-header">
        <div className="contact-container">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div>
            <h3>Our Contact Info</h3>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> +994 50 123 45 67
            </p>
            <p>
              <strong>Address:</strong> Bakı şəhəri, Azərbaycan
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.7685285545!2d49.69014584046229!3d40.39473700850412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1751534276189!5m2!1sen!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
