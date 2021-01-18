import React from 'react';
import './nav-bar.scss';
import { Link } from 'react-router-dom';
import unicornBanner from '../images/Unicorns-Unleashed-Banner.jpg';

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <Link to="/home">
          <img className="unicorn-banner" src={unicornBanner} alt="unicorn banner"/>
        </Link>
      </header>
    </div>
  );
}

export default NavBar;
