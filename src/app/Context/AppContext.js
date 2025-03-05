'use client'
import React, {useState, createContext, useEffect} from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState(false);

    const getAuthStatus = async () => {
        try{
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/is-auth`, {withCredentials:true})
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            }
        }
        catch(error){
            toast.error("Error Fetching Auth Status")
        }
    }

    const getUserData = async () => {
        try{
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/data`,{ withCredentials: true })
            data.success ? setUserDetails(data.userData) : toast.error(data.message)
        
        }
        catch(error){
            toast.error("Error Fetching User Data")
        }
    }

    useEffect(() => {
        getAuthStatus()
    },[])

    const value = {
        isLoggedIn, setIsLoggedIn,
        userDetails, setUserDetails,
        getUserData, 
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}