import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="column">
            <Link to="/home">
              Home
            </Link>
            <Link to="/volunteer">
              Volunteer
            </Link>
            <Link to="/contact-us">
              Contact Us
            </Link>
          </div>
          <div className="column">
            <Link to="/faq">
              FAQ
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/meet-us">
              Meet Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
