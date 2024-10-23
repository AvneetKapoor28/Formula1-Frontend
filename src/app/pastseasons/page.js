'use client'
import React, { useState } from "react";
import "./PastSeasonsPage.css";
import StandingsHeading from "../Components/StandingsHeadings/StandingsHeading";
import DropdownYear from "../Components/DropdownYear/DropdownYear";
import { PastSeasonsPageContextProvider } from "../Context/PastSeasonsPageProvider";
import SeasonRaceCount from "../Components/CountWidgets/SeasonRaceCount/SeasonRaceCount";
import DriverCount from "../Components/CountWidgets/DriverCount/DriverCount";
import ConstructorCount from "../Components/CountWidgets/ConstructorCount/ConstructorCount";
import RaceItemList from "../Components/RaceItemList/RaceItemList";
import RacePopUp from "../Components/RacePopUp/RacePopUp";

const PastSeasonsPage = () => {
  const [ isPopupOpen, setIsPopupOpen ] = useState(false);
  return (
    <div>
      <PastSeasonsPageContextProvider>
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
          <RaceItemList setIsPopupOpen={setIsPopupOpen} />
        </div>
          {isPopupOpen ? <RacePopUp setIsPopupOpen={setIsPopupOpen} /> : null}
      </PastSeasonsPageContextProvider>
    </div>
  );
};

export default PastSeasonsPage;
