import React from 'react';
import './race-tile.scss';

interface Props {
  raceName: string;
  raceType: string;
}

const RaceTile = (props: Props) => {
  return (
    <div className="race-tile">
      { props.raceName }<br/>
      { props.raceType }
    </div>
  );
}

export default RaceTile;
