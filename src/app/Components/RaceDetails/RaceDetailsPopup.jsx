import React, { useState, useContext, useEffect } from "react";
import "./RaceDetailsPopup.css";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import RaceDetailsWidget from "../RaceDetailsWidget/RaceDetailsWidget";
import axios from "axios";
import {motion} from "framer-motion";

const RaceDetailsPopup = ({ PopupData }) => {
  const [loading, setLoading] = useState(true); // Loading state
  const [driverflag, setDriverFlag] = useState(" ");
  const [constructorflag, setConstructorFlag] = useState(" ");

  const { showRaceItemDetailPopup, setShowRaceItemDetailPopup } = useContext(
    PastSeasonsPageContext
  );

  useEffect(() => {
    setLoading(true);
    console.log(
      `${process.env.NEXT_PUBLIC_API_URL}/pastData/flag/${PopupData.driverNationality}/${PopupData.constructorNationality}`
    );
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/flag/${PopupData.driverNationality}/${PopupData.constructorNationality}`
      )
      .then((response) => {
        setDriverFlag(response.data.driverFlag);
        setConstructorFlag(response.data.constructorFlag);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDriverFlag(" ");
        setConstructorFlag(" ");
        setLoading(false);
      });
  }, [PopupData]);
  return (
    <motion.div
      className="race-details-popup-fullpage-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="race-details-popup-center-container">
        <div className="race-details-popup-header">
          <div className="race-details-popup-drivername">
            {PopupData.driverName +
              " " +
              driverflag +
              " | " +
              PopupData.constructorName +
              " " +
              constructorflag}
          </div>
          <div
            className="race-details-popup-exitcross"
            onClick={() => setShowRaceItemDetailPopup(!showRaceItemDetailPopup)}
          >
            x
          </div>
        </div>
        <div className="race-details-popup-racename">
          {PopupData.raceName + " " + PopupData.season}
        </div>
        <div className="race-details-popup-main-content-container">
          <RaceDetailsWidget
            title="Average Speed"
            content={PopupData.averageSpeed + " " + PopupData.unit}
          />
          <RaceDetailsWidget
            title="Fastest Lap Time"
            content={PopupData.fastestLapTime}
          />
          <RaceDetailsWidget
            title="Fastest Lap Rank"
            content={PopupData.fastestLapRank}
          />
          <RaceDetailsWidget title="Time" content={PopupData.time} />
          <RaceDetailsWidget title="Points" content={PopupData.points} />
          <RaceDetailsWidget title="Incident" content={PopupData.incident} />
          <RaceDetailsWidget
            title="Grid Starting Position"
            content={PopupData.gridStartingPosition}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RaceDetailsPopup;
