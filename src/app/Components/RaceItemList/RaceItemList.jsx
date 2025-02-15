'use client'
import React, { useContext, useEffect, useState } from "react";
import "./RaceItemList.css";
import { PastSeasonsPageContext } from "../../Context/PastSeasonsPageProvider";
import loading_animation from "../../../Assets/loading_animation.webm";
import axios from "axios";
import RaceItem from "../RaceItem/RaceItem";

const RaceItemList = ({setIsPopupOpen}) => {
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [raceList, setRaceList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedRaceItem, setSelectedRaceItem] = useState(null);

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/pastData/races/${selectedYear}`)
      .then((response) => {
        setRaceList(response.data); // Update racelist
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setRaceList([]); // Clear racelist on error
        setLoading(false); // Stop loading on error
      });
  }, [selectedYear]);
  if (loading) {
    return (
      <div className="loading-container">
        <video autoPlay loop muted className="video-player">
          <source src={loading_animation} type="video/webm" />
        </video>
      </div>
    );
  } else {
    return (
      <div className="races-container">
      <div className="main-heading">Races</div>
      <div className="race-items-container">
        {raceList.length > 0 ? (
        raceList.map((round, index) => {
          return (
            <RaceItem
            key={index}
            Round={round.round}
            RaceName={round.raceName}
            CircuitName={round.Circuit.circuitName}
            Locality={round.Circuit.Location.locality}
            Country={round.Circuit.Location.country}
            Date={round.date}
            setIsPopupOpen={setIsPopupOpen}
            selectedRaceItem={selectedRaceItem}
            setSelectedRaceItem={setSelectedRaceItem}
          />
          );
        })
        ) : (
        <p>No Data Available</p>
        )}
      </div>
      </div>
    );
  }
};

export default RaceItemList;
