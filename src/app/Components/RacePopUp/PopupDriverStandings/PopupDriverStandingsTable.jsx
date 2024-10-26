import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";



const PopupDriverStandingsTable = (props) => {
    const { selectedRound, selectedYear } = useContext(PastSeasonsPageContext);

  return (
    // INSERT LOADING LOGIC
    <div>PopupDriverStandingsTable</div>
  )
}

export default PopupDriverStandingsTable