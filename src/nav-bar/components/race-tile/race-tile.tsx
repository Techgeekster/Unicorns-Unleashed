import React from 'react';
import { Link } from 'react-router-dom';
import './race-tile.scss';

interface Props {
  raceName: string;
  raceType: string;
}

const RaceTile = (props: Props) => {
  return (
    <Link to="/race-page/55k">
      <div className="race-tile">
        { props.raceName }<br/>
        { props.raceType }
      </div>
    </Link>
  );
}

export default RaceTile;
