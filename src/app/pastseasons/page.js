'use client'
import React, { useContext, useState } from "react";
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
  const { displayRaceDetails, setDisplayRaceDetails, selectedRound, displayRaceAnalyticsOptions, displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice } = useContext(PastSeasonsPageContext);
  return (
    <div>
      <div className="standingsheading-selectyear">
        <div>
          <StandingsHeading />
        </div>

        <div className="right-side">
          <DropdownYear />
          <div className="counts-container">
            <DriverCount />
            <ConstructorCount />
            <SeasonRaceCount />
          </div>
        </div>
      </div>

      <div>
        <RaceItemList />
      </div>
      <ResultsOrAnalytics />
      {displayRaceDetails && selectedRound ? <RaceDetails /> : displayRaceAnalyticsOptions && selectedRound ? <RaceAnalytics /> : <div className="please-choose-round">Please Choose a Round</div>}
      {displayRaceAnalyticsChoice !== null && !displayRaceDetails ? <RaceAnalyticsDisplay/> : null}

    </div>
  );
};

const PastSeasonsPage = () => {
  return (
    <PastSeasonsPageContextProvider>
      <PastSeasonsPageContent />
    </PastSeasonsPageContextProvider>
  )
}

export default PastSeasonsPage;
