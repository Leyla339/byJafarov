import React from "react";
import Header from "./Header";
import about from "../img/about.jpg";
import "./Services.css";
import Footer from "./Footer";
const Services = () => {
  return (
    <div>
      <Header></Header>
      <div className="about-header">
        <img src={about} alt="About" className="about-img" />
        <div className="overlay" />
        <div className="about-text">Our Services</div>
      </div>
      <div className="services-section">
        <p className="services-desc">
          At byJafarov, we offer a wide range of professional services to help
          your brand thrive in the digital world.
        </p>

        <div className="services-list">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              We build responsive and modern user interfaces using React, HTML,
              CSS, and JavaScript.
            </p>
          </div>

          <div className="service-card">
            <h3>Backend Development</h3>
            <p>
              We create robust APIs and server-side applications using Node.js,
              Express, and databases like MongoDB.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Our designers craft intuitive, user-centered designs and
              interactive prototypes with Figma and more.
            </p>
          </div>

          <div className="service-card">
            <h3>Social Media Marketing</h3>
            <p>
              We help you grow your online presence and connect with your
              audience through powerful content strategies.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
