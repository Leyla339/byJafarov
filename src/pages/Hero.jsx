import React from "react";
import team from "../img/team.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";
import design from "../img/design.png";
import front from "../img/front.png";
import back from "../img/backend.png";
import mobile from "../img/mobile.png";
import smm from "../img/smm.png";
import meeting from "../img/meeting.jpg";

const Hero = () => {
  return (
    <div>
      <main>
        <section className="section1">
          <div className="content1">
            <p>Creative mind, creative works</p>
            <div className="head-h">
              <h1>
                We are <span>digital</span>
              </h1>
              <h2>creative agency</h2>
            </div>
            <Link to="/byJafarov/contact">Contact us</Link>
          </div>
          <img src={team} alt="team" />
        </section>
        <section className="section3">
          <div className="content3">
            <img src={meeting} alt="" />
            <div>
              <hr />
              <h1>About Us</h1>
              <p>
                We are a multidisciplinary team of developers, designers, and
                digital strategists. At byJafarov, we build user-focused digital
                solutions — from frontend and backend development to UI/UX
                design and social media marketing.
              </p>
              <Link to="/byJafarov/about">More</Link>
            </div>
          </div>
        </section>
        <section className="section2">
          <h1>Our services</h1>
          <div className="content2">
            <div className="cards">
              <div className="card">
                <img src={design} alt="" />
                <h3>UI/UX Design</h3>
              </div>
              <div className="card">
                <img src={front} alt="" />
                <h3>FrontEnd</h3>
              </div>
              <div className="card">
                <img src={back} alt="" />
                <h3>BackEnd</h3>
              </div>
              <div className="card">
                <img src={mobile} alt="" />
                <h3>Mobile Apps</h3>
              </div>
              <div className="card">
                <img src={smm} alt="" />
                <h3>SMM</h3>
              </div>
            </div>
            <Link to="/byJafarov/services">Services</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
