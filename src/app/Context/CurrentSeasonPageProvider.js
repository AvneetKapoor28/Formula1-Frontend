'use client'
import { createContext, useState } from "react";

const CurrentSeasonPageContext = createContext();

const CurrentSeasonPageContextProvider = ({ children }) => {
    const [selectedYear, setselectedYear] = useState(new Date().getFullYear()); //State to store the selected year
    const [standings, setStandings] = useState("Drivers"); //State to store the type of standings
    const [selectedRound, setSelectedRound] = useState(null); //State to store the selected round
    const [displayRaceDetails, setDisplayRaceDetails] = useState(true); //State to show or hide specific race details
    return (
        <CurrentSeasonPageContext.Provider value={{ selectedYear, setselectedYear, standings, setStandings, selectedRound, setSelectedRound, displayRaceDetails, setDisplayRaceDetails}}>
            {children}
        </CurrentSeasonPageContext.Provider>
    )

}

export { CurrentSeasonPageContext, CurrentSeasonPageContextProvider };