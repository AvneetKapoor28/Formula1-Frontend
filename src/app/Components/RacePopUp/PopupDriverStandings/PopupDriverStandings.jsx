import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";



const PopupDriverStandings = (props) => {
    const { selectedRound, selectedYear } = useContext(PastSeasonsPageContext);
  const [roundDriverStandingsList, setRoundDriverStandingsList] = useState([]); // Driver standings state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Start loading
    console.log(process.env.NEXT_PUBLIC_API_URL);
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
    <div>PopupDriverStandings</div>
  )
}

export default PopupDriverStandings