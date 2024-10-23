import React, { useState, useContext, useEffect } from "react";
import "./RacePopUp.css";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import PopupDriverStandings from "./PopupDriverStandings/PopupDriverStandings";

const RacePopUp = ({ setIsPopupOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { selectedRound } = useContext(PastSeasonsPageContext);
  
  useEffect(() => {
    setShowPopup(true);
  }, [selectedRound]);
  
  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => setIsPopupOpen(false), 400); // Close after transition duration
  };

  return (
    <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
      <div className={`popup-window ${showPopup ? "show" : ""}`}>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
        <div className="racename main-heading">RACE NAME</div>
        <div className="raceround">{selectedRound}</div>
        <PopupDriverStandings />
      </div>
    </div>
  );
};

export default RacePopUp;
