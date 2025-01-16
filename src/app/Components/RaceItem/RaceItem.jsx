import React, { useContext, useEffect } from "react";
import "./RaceItem.css";
import { noto_sans } from "../../fonts";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";

/**
 * Toggles the display of race details when the RaceItem is clicked.
 * If `displayRaceDetails` is true, it sets `setDisplayRaceDetails` to false, hiding the race details.
 * If `displayRaceDetails` is false, it sets `setDisplayRaceDetails` to true, showing the race details.
 */
const RaceItem = (props) => {
  const { selectedRound, setSelectedRound, setDisplayRaceDetails, displayRaceDetails} = useContext(
    PastSeasonsPageContext
  );

  const options = { day: "numeric", month: "short" };
  const date = new Date(props.Date);
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replace(",", "-");

  // useEffect(() => {
  //   console.log(selectedRound + " selectedRound updated");
  //   // setDisplayRaceDetails(true);  //Ensures RaceDetails is displayed when a different round is selected
  // }, [selectedRound]); 

  return (
    <div
      className={`raceitem ${noto_sans.className}`}
      onClick={() => {
        if(selectedRound === props.Round){
          {displayRaceDetails ?setDisplayRaceDetails(false): setDisplayRaceDetails(true)}; //Toggling RaceDetials display
        }
        else{
          setSelectedRound(props.Round);
          setDisplayRaceDetails(true);
        }
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
