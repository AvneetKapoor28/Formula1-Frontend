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

const PastSeasonsPageContent = () => {
  // const [ isPopupOpen, setIsPopupOpen ] = useState(false); //deprecated
  const { displayRaceDetails, setDisplayRaceDetails, selectedRound, displayRaceAnalytics } = useContext(PastSeasonsPageContext);
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
      {displayRaceDetails && selectedRound ? <RaceDetails /> : displayRaceAnalytics && selectedRound ? <RaceAnalytics /> : <div className="please-choose-round">Please Choose a Round</div>}

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
