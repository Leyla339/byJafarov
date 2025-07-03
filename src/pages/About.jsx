import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import about from "../img/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-header">
        <img src={about} alt="About" className="about-img" />
        <div className="overlay" />
        <div className="about-text">About Us</div>
      </div>
      <div className="about-main">
        <p>
          <span>byJafarov</span> is a multidisciplinary team of passionate
          professionals — frontend and backend developers, UI/UX designers, and
          digital marketers. We work together to build modern and effective
          digital solutions.
        </p>
        <p>
          Our mission is to combine creativity and technology to deliver
          powerful user experiences and help brands grow.
        </p>
       
        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values">
            <div className="value-card">
              <h3>Quality</h3>
              <p>
                We prioritize clean, efficient, and scalable code in every
                project.
              </p>
            </div>
            <div className="value-card">
              <h3>Teamwork</h3>
              <p>We believe the best results come from true collaboration.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We embrace creativity and use the latest technologies.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>{" "}
    </div>
  );
};

export default About;
