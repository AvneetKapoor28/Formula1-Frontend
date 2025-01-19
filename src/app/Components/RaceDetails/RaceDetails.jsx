import React, { useState, useContext, useEffect } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import axios from "axios";
import "./RaceDetails.css";
import RaceStandingsItem from "../RaceStandingsItem/RaceStandingsItem";
import loading_animation from "../../../Assets/loading_animation.webm";
import RaceDetailsHeader from "./RaceDetailsHeader";
import RaceDetailsPopup from "./RaceDetailsPopup";

const RaceDetails = () => {
  const [roundData, setroundData] = useState([]); // Driver standings state
  const [popupData, setPopupData] = useState({});
  // const [showRaceItemDetailPopup, setShowRaceItemDetailPopup] = useState(false);
  const {
    displayRaceDetails,
    setDisplayRaceDetails,
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

  if (loading) {
    return (
      <div className="loading-container">
        <video autoPlay loop muted className="video-player">
          <source src={loading_animation} type="video/webm" />
        </video>
      </div>
    );
  }

  return (
    <div className="outermost-container">
      <RaceDetailsHeader />

      <div className="race-standings-main-container">
        <div className="race-standings-container">
          {roundData.Results?.map((result, index) => (
            <div
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
    </div>
  );
};

export default RaceDetails;
