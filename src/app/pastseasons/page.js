'use client'
import React, { useContext } from "react";
import "./PastSeasonsPage.css";
import StandingsHeading from "../Components/StandingsHeadings/StandingsHeading";
import DropdownYear from "../Components/DropdownYear/DropdownYear";
import { PastSeasonsPageContext, PastSeasonsPageContextProvider } from "../Context/PastSeasonsPageProvider";
import SeasonRaceCount from "../Components/CountWidgets/SeasonRaceCount/SeasonRaceCount";
import DriverCount from "../Components/CountWidgets/DriverCount/DriverCount";
import ConstructorCount from "../Components/CountWidgets/ConstructorCount/ConstructorCount";
import RaceItemList from "../Components/RaceItemList/RaceItemList";
import RaceDetails from "../Components/RaceDetails/RaceDetails";
import ResultsOrAnalytics from "../Components/ResultsOrAnalytics/ResultsOrAnalytics";
import RaceAnalytics from "../Components/RaceAnalytics/RaceAnalytics";
import RaceAnalyticsDisplay from "../Components/RaceAnalyticsDisplay/RaceAnalyticsDisplay";

const PastSeasonsPageContent = () => {
  const { displayRaceDetails, selectedRound, displayRaceAnalyticsOptions, displayRaceAnalyticsChoice } = useContext(PastSeasonsPageContext);

  return (
    <>
      <div className="past-seasons-grid">
        {/* Top Section - Standings and Counts */}
        <div className=" outer-standings-container">
        <DropdownYear />

          <StandingsHeading />
        </div>
        <div className="counts-container">
          <div className="count-widgets">
            <DriverCount />
            <ConstructorCount />
            <SeasonRaceCount />
          </div>
        </div>

      </div>
        {/* Full-width Race Item List */}
        <div className="race-item-list">
          <RaceItemList />
        </div>

        {/* Results or Analytics */}
        <div className="results-analytics">
          <ResultsOrAnalytics />
          {displayRaceDetails && selectedRound ? (
            <RaceDetails />
          ) : displayRaceAnalyticsOptions && selectedRound ? (
            <RaceAnalytics />
          ) : (
            <div className="please-choose-round">Please Choose a Round</div>
          )}
          {displayRaceAnalyticsChoice !== null && !displayRaceDetails ? <RaceAnalyticsDisplay /> : null}
        </div>
    </>
  );
};

const PastSeasonsPage = () => {
  return (
    <PastSeasonsPageContextProvider>
      <PastSeasonsPageContent />
    </PastSeasonsPageContextProvider>
  );
};

export default PastSeasonsPage;
