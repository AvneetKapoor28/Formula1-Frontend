import React, { useState, useContext, useEffect, useRef} from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import axios from "axios";
import "./RaceDetails.css";
import RaceStandingsItem from "../RaceStandingsItem/RaceStandingsItem";
import loading_animation from "../../../Assets/loading_animation.webm";
import RaceDetailsHeader from "./RaceDetailsHeader";
import RaceDetailsPopup from "./RaceDetailsPopup";
import { motion } from "framer-motion";

const RaceDetails = () => {
  const [roundData, setroundData] = useState([]); // Driver standings state
  const [popupData, setPopupData] = useState({});
  const componentRef = useRef();
  // const [showRaceItemDetailPopup, setShowRaceItemDetailPopup] = useState(false);
  const {
    selectedRound,
    selectedYear,
    showRaceItemDetailPopup,
    setShowRaceItemDetailPopup,
  } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true); // Loading state

  const formatTime = (millis) => {
    const hours = Math.floor(millis / (1000 * 60 * 60));
    const minutes = Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((millis % (1000 * 60)) / 1000);
    const milliseconds = millis % 1000;

    // Format with leading zeros
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMilliseconds = milliseconds.toString().padStart(3, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  const retrieveRaceDetailsPopupValues = (index) => {
    console.log("from the function", index);
    console.log(roundData);

    const newPopupData = {
      driverName: `${roundData.Results[index].Driver.givenName} ${roundData.Results[index].Driver.familyName}`,
      constructorName: roundData.Results[index].Constructor.name,
      raceName: roundData.raceName,
      season: roundData.season,
      driverNationality: roundData.Results[index].Driver.nationality,
      constructorNationality: roundData.Results[index].Constructor.nationality,
      averageSpeed: roundData.Results[index].FastestLap.AverageSpeed.speed,
      unit: roundData.Results[index].FastestLap.AverageSpeed.units,
      fastestLapTime: roundData.Results[index].FastestLap.Time.time,
      fastestLapRank: roundData.Results[index].FastestLap.rank,
      time: roundData.Results[index].Time
        ? formatTime(roundData.Results[index].Time.millis)
        : "DNF",
      points: roundData.Results[index].points,
      incident: roundData.Results[index].status,
      gridStartingPosition: roundData.Results[index].grid,
    };

    setPopupData(newPopupData); // Update state
    console.log(newPopupData);
  };

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/driverStandings/${selectedYear}/${selectedRound}`
      )
      .then((response) => {
        setroundData(response.data[0]); // Update roundDataStandingsList
        console.log(response.data[0].Results);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Stop loading on error
        setroundData([]); // Clear roundDataStandingsList on error
      });
  }, [selectedRound, selectedYear]);

  // Scroll to the top of the component when it mounts
  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }
  }, []);

  if (loading) {
    return (
      <div ref={componentRef} className="loading-container">
        <video autoPlay loop muted className="video-player">
          <source src={loading_animation} type="video/webm" />
        </video>
      </div>
    );
  }

  return (
      <motion.div
        className="outermost-container"
        ref={componentRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
      <RaceDetailsHeader />

      <div className="race-standings-main-container">
        <div className="race-standings-container">
          {roundData.Results?.map((result, index) => (
            <div
              key={index}
              className="racedetail-standings-itemcontainer"
              onClick={() => {
                setShowRaceItemDetailPopup(!showRaceItemDetailPopup);
                console.log("clicked" + index);
                retrieveRaceDetailsPopupValues(index);
              }}
            >
              <RaceStandingsItem
                key={index}
                position={result.position}
                driverNumber={result.Driver.permanentNumber}
                driverName={`${result.Driver.givenName} ${result.Driver.familyName}`}
                points={result.points}
                status={result.status}
                time={
                  result.status === "Finished"
                    ? index === 0
                      ? formatTime(result.Time.millis)
                      : result.Time.time
                    : result.status
                }
              />
              {console.log(result)}
            </div>
          ))}
        </div>
      </div>
      {showRaceItemDetailPopup ? (
        <RaceDetailsPopup PopupData={popupData} />
      ) : null}
    </motion.div>
  );
};

export default RaceDetails;
