'use client'
import { createContext, useState } from "react";

const PastSeasonsPageContext = createContext();

const PastSeasonsPageContextProvider = ({ children }) => {
    const [selectedYear, setselectedYear] = useState(new Date().getFullYear() - 1); //State to store the selected year
    const [standings, setStandings] = useState("Drivers"); //State to store the type of standings
    const [selectedRound, setSelectedRound] = useState(null); //State to store the selected round
    const [displayRaceDetails, setDisplayRaceDetails] = useState(false); //State to show or hide specific race details
    const [showRaceItemDetailPopup, setShowRaceItemDetailPopup] = useState(false);
    const [displayRaceAnalytics, setDisplayRaceAnalytics] = useState(false);


    return (
        <PastSeasonsPageContext.Provider value={{ selectedYear, setselectedYear, standings, setStandings, selectedRound, setSelectedRound, displayRaceDetails, setDisplayRaceDetails, showRaceItemDetailPopup, setShowRaceItemDetailPopup, displayRaceAnalytics, setDisplayRaceAnalytics }}>
            {children}
        </PastSeasonsPageContext.Provider>
    )

}

export { PastSeasonsPageContext, PastSeasonsPageContextProvider };