'use client'
import React, {useState, createContext} from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState(false);

    const value = {
        isLoggedIn, setIsLoggedIn,
        userDetails, setUserDetails,
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}