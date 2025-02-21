import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import "./RaceAnalyticsDisplay.css";
import axios from "axios";
import loading_animation from "../../../Assets/loading_animation.webm";

const RaceAnalyticsDisplay = () => {
  const {
    displayRaceAnalyticsChoice,
    setDisplayRaceAnalyticsChoice,
    selectedRound,
    selectedYear,
  } = useContext(PastSeasonsPageContext);

  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);

  const getHeading = (displayRaceAnalyticsChoice) => {
    if (displayRaceAnalyticsChoice === "fastest-lap-gear-shifts-plot")
      return "Fastest Lap Gear Shifts";
    else if (displayRaceAnalyticsChoice === "team-pace-comparison")
      return "Team Pace Comparison";
    else if (displayRaceAnalyticsChoice === "tyre-strategies")
      return "Tyre Strategies";
    else if (displayRaceAnalyticsChoice === "driver-laptimes-distribution")
      return "Driver Laptimes Distribution";
    else if (displayRaceAnalyticsChoice === "position-changes-during-race")
      return "Position Changes During Race";
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/race-analysis/${displayRaceAnalyticsChoice}`, {
        params: {
          year: selectedYear,
          round_no: selectedRound,
          session_type: "R",
        },
        responseType: "blob",
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "image/png" }); // Create Blob
        const imageUrl = URL.createObjectURL(blob); // Convert Blob to URL
        setImageSrc(imageUrl); // Set image source
        console.log(`Image has been set - imageUrl: ${imageUrl}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDisplayRaceAnalyticsChoice(null);
        setLoading(false);
      });
  }, [displayRaceAnalyticsChoice, selectedYear, selectedRound]);

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
      <div>
        <div className="raceanalyticsdisplay-heading">
          {getHeading(displayRaceAnalyticsChoice)}
        </div>
        <div className="analytic-img-container">
          {imageSrc && (<img className="analytic-img" src={imageSrc} alt="Race Analytics" />)}
        </div>
      </div>
    );
  }
};

export default RaceAnalyticsDisplay;
