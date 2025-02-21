import React from "react";
import { useContext } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import "./RaceAnalyticsDisplay.css";

const RaceAnalyticsDisplay = () => {
  const { displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice } =
    useContext(PastSeasonsPageContext);

  return (
    <div>
      <div className="raceanalyticsdisplay-heading">
        {displayRaceAnalyticsChoice}
      </div>
    </div>
  );
};

export default RaceAnalyticsDisplay;
