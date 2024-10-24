'use client'
import { createContext, useState } from "react";

const PastSeasonsPageContext = createContext();

const PastSeasonsPageContextProvider = ({ children }) => {
    const [selectedYear, setselectedYear] = useState(new Date().getFullYear() - 1); //State to store the selected year
    const [standings, setStandings] = useState("Drivers"); //State to store the type of standings
    const [selectedRound, setSelectedRound] = useState(1); //State to store the selected round

    return(
        <PastSeasonsPageContext.Provider value={{selectedYear, setselectedYear, standings, setStandings, selectedRound, setSelectedRound}}>
            {children}
        </PastSeasonsPageContext.Provider>
    )

}

export {PastSeasonsPageContext, PastSeasonsPageContextProvider};