import React from 'react';
import './home.scss';
import RaceTile from './components/race-tile/race-tile';
import courseImage from '../images/course-picture-1.jpg';

function Home() {
  let courseDescription: string = "Come join us on an epic adventure through the trails of Hobble Creek Springville! We have a 55k option, a 5k option, and a kids 1k option. The best detail about it!? It's UNICORN themed! We'll have course markings, course support, and AWESOME swag like you've never experienced before in other races. So pony up and join us on August 14th 2021.";

  return (
    <div className="home">
      <div className="race-tile-container">
        <RaceTile link="/race-page/55k" raceName="55k Ultra" raceType="Unicorn"/>
        <RaceTile link="/race-page/5k" raceName="5k" raceType="Rhinocorn"/>
        <RaceTile link="/race-page/1k" raceName="1k Kids Race" raceType="Ponycorn"/>
      </div>
      <div className="course-image">
        <img src={courseImage} />
      </div>
      <div className="course-description">{courseDescription}</div>
    </div>
  );
}

export default Home;