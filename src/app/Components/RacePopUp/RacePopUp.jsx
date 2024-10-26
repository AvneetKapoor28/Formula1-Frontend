import React, { useState, useContext, useEffect } from "react";
import "./RacePopUp.css";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import PopupDriverStandingsTable from "./PopupDriverStandings/PopupDriverStandingsTable";
import axios from "axios";
import loading_animation from "../../../Assets/loading_animation.webm";

const RacePopUp = ({ setIsPopupOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { selectedRound, selectedYear } = useContext(PastSeasonsPageContext);
  const [roundData, setroundData] = useState([]); // Driver standings state
  const [loadingPopup, setLoadingPopup] = useState(true); // LoadingPopup state

  useEffect(() => {
    setLoadingPopup(true); // Start loadingPopup
    setShowPopup(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/driverStandings/${selectedYear}/${selectedRound}`
      )
      .then((response) => {
        setroundData(response.data[0]); // Update roundDataStandingsList
        setLoadingPopup(false); // Stop loadingPopup
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
        setroundData([]); // Clear roundDataStandingsList on error
        setLoadingPopup(false); // Stop loadingPopup on error
      });
  }, [selectedRound, selectedYear]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => setIsPopupOpen(false), 400); // Close after transition duration
  };

  if (loadingPopup) {
    return (
      <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
        <div className={`popup-window ${showPopup ? "show" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            x
          </button>
          <div className="loading-container">
            <video autoPlay loop muted className="video-player">
              <source src={loading_animation} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
      <div className={`popup-window ${showPopup ? "show" : ""}`}>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
        <div className="racename main-heading">{roundData.raceName}</div>
        <div className="raceround">{selectedRound}</div>
        <PopupDriverStandingsTable />
      </div>
    </div>
  );
};

export default RacePopUp;
