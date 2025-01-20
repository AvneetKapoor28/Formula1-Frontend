import React from "react";
import "./RaceStandingsItem.css";

const RaceStandingsItem = (props) => {
  return (
    <div className="race-standings-itemcontainer">
      <div className="race-standings-position">{props.position}</div>
      <div className="race-standings-drivernumber">{props.driverNumber}</div>
      <div className="race-standings-drivername">{props.driverName}</div>
      <div className="race-standings-points">{props.points}</div>
      <div className="race-standings-time">{props.time}</div>
    </div>
  );
};

export default RaceStandingsItem;
