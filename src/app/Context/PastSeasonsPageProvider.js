'use client'
import { createContext, useState } from "react";

const PastSeasonsPageContext = createContext();

const PastSeasonsPageContextProvider = ({ children }) => {
    const [selectedYear, setselectedYear] = useState(new Date().getFullYear() - 1); //State to store the selected year
    const [standings, setStandings] = useState("Drivers"); //State to store the type of standings
    const [selectedRound, setSelectedRound] = useState(null); //State to store the selected round
    const [displayRaceDetails, setDisplayRaceDetails] = useState(true); //State to show or hide specific race details
    const [showRaceItemDetailPopup, setShowRaceItemDetailPopup] = useState(false);
    const [displayRaceAnalyticsOptions, setDisplayRaceAnalyticsOptions] = useState(false);
    const [displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice] = useState(null);
    return (
        <PastSeasonsPageContext.Provider value={{ selectedYear, setselectedYear, standings, setStandings, selectedRound, setSelectedRound, displayRaceDetails, setDisplayRaceDetails, showRaceItemDetailPopup, setShowRaceItemDetailPopup, displayRaceAnalyticsOptions, setDisplayRaceAnalyticsOptions, displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice }}>
            {children}
        </PastSeasonsPageContext.Provider>
    )

}

export { PastSeasonsPageContext, PastSeasonsPageContextProvider };