import React, { useEffect, useRef } from "react";
import { useContext, useState } from "react";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";
import "./RaceAnalyticsDisplay.css";
import axios from "axios";
import loading_animation from "../../../Assets/loading_animation.webm";
import { motion } from "framer-motion";

const RaceAnalyticsDisplay = () => {
  const {
    displayRaceAnalyticsChoice,
    setDisplayRaceAnalyticsChoice,
    selectedRound,
    selectedYear,
  } = useContext(PastSeasonsPageContext);

  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);

  const componentRef = useRef();

  const getHeading = (displayRaceAnalyticsChoice) => {
    if (displayRaceAnalyticsChoice === "fastest-lap-gear-shifts-plot")
      return "Fastest Lap Gear Shifts";
    else if (displayRaceAnalyticsChoice === "team-pace-comparison")
      return "Team Pace Comparison";
    else if (displayRaceAnalyticsChoice === "tyre-strategies")
      return "Tyre Strategies";
    else if (
      displayRaceAnalyticsChoice ===
      "driver-laptimes-distribution--tyrecompound"
    )
      return "Driver's Laptimes Distribution Based on Tyre Compound";
    else if (displayRaceAnalyticsChoice === "position-changes-during-race")
      return "Position Changes During Race";
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_FASTAPI_URL}/race-analysis/${displayRaceAnalyticsChoice}`,
        {
          params: {
            year: selectedYear,
            round_no: selectedRound,
            session_type: "R",
          },
          responseType: "blob",
        }
      )
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

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
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
  } else {
    return (
      <motion.div
        ref={componentRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="raceanalyticsdisplay-heading">
          {getHeading(displayRaceAnalyticsChoice)}
        </div>
        <div className="analytic-img-container">
          {imageSrc && (
            <img className="analytic-img" src={imageSrc} alt="Race Analytics" />
          )}
        </div>
      </motion.div>
    );
  }
};

export default RaceAnalyticsDisplay;
