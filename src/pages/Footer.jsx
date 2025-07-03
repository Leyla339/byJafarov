import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <p>&copy; 2025 byJafarov. All rights reserved.</p>
          <div className="footer-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
