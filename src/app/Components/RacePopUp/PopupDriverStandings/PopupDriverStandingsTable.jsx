import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";



const PopupDriverStandingsTable = (props) => {
    const { selectedRound, selectedYear } = useContext(PastSeasonsPageContext);
  const [roundDriverStandingsList, setRoundDriverStandingsList] = useState([]); // Driver standings state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/pastData/driverStandings/${selectedYear}/${selectedRound}`)
      .then((response) => {
        setRoundDriverStandingsList(response.data); // Update roundDataStandingsList
        setLoading(false); // Stop loading
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRoundDriverStandingsList([]); // Clear roundDataStandingsList on error
        setLoading(false); // Stop loading on error
      });
  }, [selectedRound, selectedYear]);
  return (
    // INSERT LOADING LOGIC
    <div>PopupDriverStandingsTable</div>
  )
}

export default PopupDriverStandingsTable