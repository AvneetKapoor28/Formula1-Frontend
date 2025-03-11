"use client";
import React, { useContext, useEffect, useState } from "react";
import "./RaceItemList.css";
import { PastSeasonsPageContext } from "../../Context/PastSeasonsPageProvider";
import loading_animation from "../../../Assets/loading_animation.webm";
import axios from "axios";
import RaceItem from "../RaceItem/RaceItem";
import leftArrow from "../../../Assets/left-arrow.svg";
import rightArrow from "../../../Assets/right-arrow.svg";
import Image from "next/image";

const RaceItemList = ({ setIsPopupOpen }) => {
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

  const scroll = (direction) => {
    const container = document.getElementById("raceScroll");
    const scrollAmount = 400; // Adjust scroll speed
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

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
        <div className="main-heading">
          Races{" "}
          <span className="prompt-to-select-race">
            Select a Race for more information
          </span>
        </div>
        <div className="race-items-wrapper">
          <button className="scroll-button left-button" onClick={() => scroll(-1)}>
            <Image src={leftArrow} className="left-arrow-img" alt="right arrow" width={40} />
          </button>
          <div className="race-items-container" id="raceScroll">
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
          <button className="scroll-button right-button" onClick={() => scroll(1)}>
            <Image src={rightArrow} alt="right arrow" className="right-arrow-img" width={40} />
          </button>
        </div>
      </div>
    );
  }
};

export default RaceItemList;
