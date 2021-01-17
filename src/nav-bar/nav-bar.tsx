import React from 'react';
import './nav-bar.scss';
import unicornBanner from '../images/Unicorns-Unleashed-Banner.jpg';

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <img src={unicornBanner} alt="unicorn banner"/>
      </header>
    </div>
  );
}

export default NavBar;
