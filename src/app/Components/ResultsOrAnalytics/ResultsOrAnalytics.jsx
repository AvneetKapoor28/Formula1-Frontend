import React from "react";
import "./ResultsOrAnalytics.css";
import { useContext, useState } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";

const ResultsOrAnalytics = () => {
  const {
    displayRaceDetails,
    setDisplayRaceDetails,
    displayRaceAnalyticsOptions,
    setDisplayRaceAnalyticsOptions,
    selectedRaceItem,
  } = useContext(PastSeasonsPageContext);

  const [selectedTabHeading, setSelectedTabHeading] = useState("RaceResults");

  const showAnalytics = () => {
    setDisplayRaceAnalyticsOptions(true);
    setDisplayRaceDetails(false);
    setSelectedTabHeading("Analytics");
  };

  const showRaceResults = () => {
    setDisplayRaceDetails(true);
    setDisplayRaceAnalyticsOptions(false);
    setSelectedTabHeading("RaceResults");
    console.log("showRaceResults was clicked");
  };

  return (
    <div className="raceoranalytics-outer-container">
      <div className="raceoranalytics-inner-container">
        <div
          className={`race-results-tab-heading ${
            selectedTabHeading === "RaceResults" ? "selected-tab-heading" : ""
          }`}
          onClick={() => showRaceResults()}
        >
          Race Results
        </div>
        <div
          className={`analytics-tab-heading ${
            selectedTabHeading === "Analytics" ? "selected-tab-heading" : ""
          }`}
          onClick={() => showAnalytics()}
        >
          Analytics
        </div>
      </div>
    </div>
  );
};

export default ResultsOrAnalytics;
