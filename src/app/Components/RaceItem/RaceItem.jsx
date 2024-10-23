import React, { useContext, useEffect } from "react";
import "./RaceItem.css";
import { noto_sans } from "../../fonts";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";

const RaceItem = (props) => {
  const { selectedRound, setSelectedRound } = useContext(
    PastSeasonsPageContext
  );

  const options = { day: "numeric", month: "short" };
  const date = new Date(props.Date);
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replace(",", "-");

  useEffect(() => {
    console.log(selectedRound + " selectedRound updated");
  }, [selectedRound]); 

  return (
    <div
      className={`raceitem ${noto_sans.className}`}
      onClick={() => {
        setSelectedRound(props.Round);
        props.setIsPopupOpen(true);
      }}
    >
      <div className="date-roundnumber">
        <div className="date-range">{formattedDate}</div>
        <div className="round-number">{props.Round}</div>
      </div>

      <div className="race-name">{props.RaceName}</div>
      <div className="race-details">
        <div className="circuit-name">{props.CircuitName}</div>
        <div className="location-info">
          <div className="locality-name">{props.Locality + ","}</div>
          <div className="country-name">{props.Country}</div>
        </div>
      </div>
    </div>
  );
};

export default RaceItem;
