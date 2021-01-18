import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="column">
            <Link to="/home">
              Home
            </Link>
            <a>Volunteer</a>
            <a>Contact Us</a>
          </div>
          <div className="column">
            <a>FAQ</a>
            <a>About</a>
            <a>Meet Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
