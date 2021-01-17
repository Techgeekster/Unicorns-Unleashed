import React from 'react';
import './nav-bar.scss';
import unicornBanner from '../images/Unicorns-Unleashed-Banner.jpg';
import RaceTile from './components/race-tile/race-tile';

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <img className="unicorn-banner" src={unicornBanner} alt="unicorn banner"/>
        <div className="race-tile-container">
          <RaceTile raceName="55k Ultra" raceType="Unicorn"/>
          <RaceTile raceName="5K" raceType="Rhinocorn"/>
          <RaceTile raceName="1K Kids Race" raceType="Ponycorn"/>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
