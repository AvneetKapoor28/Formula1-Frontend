import React, { useState, useContext, useEffect } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import axios from "axios";
const RaceDetails = () => {
  const [roundData, setroundData] = useState([]); // Driver standings state
  const {
    displayRaceDetails,
    setDisplayRaceDetails,
    selectedRound,
    selectedYear,
  } = useContext(PastSeasonsPageContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/driverStandings/${selectedYear}/${selectedRound}`
      )
      .then((response) => {
        setroundData(response.data[0]); // Update roundDataStandingsList
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
        setroundData([]); // Clear roundDataStandingsList on error
      });
  }, [selectedRound, selectedYear]);
  return (
    <div>
      <div>
        <div className="selectedLeftSidebar">
          <div className="selectedRaceName">ABCD GRAND PRIX</div>
          
        </div>
        <div className="selectedRaceDate">10 Jul - 13 Jul</div>
        <div className="selectedRacelocation">Bahrain, AbuDhabi</div>
      </div>
    </div>
  );
};

export default RaceDetails;
