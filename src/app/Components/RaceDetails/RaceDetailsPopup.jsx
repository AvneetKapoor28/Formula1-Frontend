import React, { useContext } from "react";
import "./RaceDetailsPopup.css";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import RaceDetailsWidget from "../RaceDetailsWidget/RaceDetailsWidget";

const RaceDetailsPopup = ({ PopupData }) => {
  const { showRaceItemDetailPopup, setShowRaceItemDetailPopup } = useContext(
    PastSeasonsPageContext
  );

  return (
    <div className="race-details-popup-fullpage-container">
      <div className="race-details-popup-center-container">
        <div className="race-details-popup-header">
          <div className="race-details-popup-drivername">{PopupData.driverName + " | " + PopupData.constructorName}</div>
          <div
            className="race-details-popup-exitcross"
            onClick={() => setShowRaceItemDetailPopup(!showRaceItemDetailPopup)}
          >
            x
          </div>
        </div>
        <div className="race-details-popup-racename">
          {PopupData.raceName}
        </div>
        <div className="race-details-popup-main-content-container">
          <RaceDetailsWidget title="Average Speed" content={PopupData.averageSpeed + " " + PopupData.unit} />
          <RaceDetailsWidget title="Fastest Lap Time" content={PopupData.fastestLapTime} />
          <RaceDetailsWidget title="Fastest Lap Rank" content={PopupData.fastestLapRank} />
          <RaceDetailsWidget title="Time" content={PopupData.time} />
          <RaceDetailsWidget title="Points" content={PopupData.points} />
          <RaceDetailsWidget title="Incident" content={PopupData.incident} />
          <RaceDetailsWidget title="Grid Starting Position" content={PopupData.gridStartingPosition} />
        </div>
      </div>
    </div>
  );
};

export default RaceDetailsPopup;
