import React from "react";
import "./ResultsOrAnalytics.css";
import { useContext, useState } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";

const ResultsOrAnalytics = () => {
  const {
    displayRaceDetails,
    setDisplayRaceDetails,
    displayRaceAnalytics,
    setDisplayRaceAnalytics,
    selectedRaceItem
  } = useContext(PastSeasonsPageContext);
  const [selectedElement, setSelectedElement] = useState("RaceResults");

  const showAnalytics = () => {
    setDisplayRaceAnalytics(true);
    setDisplayRaceDetails(false);
  };

  const showRaceResults = () => {
    setDisplayRaceDetails(true);
    setDisplayRaceAnalytics(false);
    console.log("showRaceResults was clicked");
  };

  return (
    <div className="raceoranalytics-outer-container">
      <div className="raceoranalytics-inner-container">
        <div
          className="race-results-tab-heading"
          onClick={() => showRaceResults()}
        >
          Race Results
        </div>
        <div className="analytics-tab-heading" onClick={() => showAnalytics()}>
          Analytics
        </div>
      </div>
    </div>
  );
};

export default ResultsOrAnalytics;
