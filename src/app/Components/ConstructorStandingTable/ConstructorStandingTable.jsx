"use client";
import "./ConstructorStandingTable.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PastSeasonsPageContext } from "../../Context/PastSeasonsPageProvider";
import ConstructorStandingItem from "../StandingsItems/ConstructorStandingItem/ConstructorStandingItem";
import loading_animation from "../../../Assets/loading_animation.webm";
import { usePathname } from "next/navigation";
import { CurrentSeasonPageContext } from "@/app/Context/CurrentSeasonPageProvider";
import { motion } from "framer-motion";

const ConstructorStandingTable = () => {
  const pathname = usePathname();
  const pastSeasonsContext = useContext(PastSeasonsPageContext);
  const currentSeasonContext = useContext(CurrentSeasonPageContext);
  let selectedYear;
  if (pathname === "/pastseasons") {
    selectedYear = pastSeasonsContext?.selectedYear;
  } else if (pathname === "/currentseason") {
    selectedYear = currentSeasonContext?.selectedYear;
  }
  const [loading, setLoading] = useState(true); // Loading state
  const [constructorStandingsList, setConstructorStandingsList] = useState([]); // Driver standings state

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/constructorStandings/${
          selectedYear || new Date().getFullYear() - 1
        }`
      )
      .then((response) => {
        setConstructorStandingsList(response.data); // Update driver standings
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setConstructorStandingsList([]); // Clear Constructor standings on error
        setLoading(false); // Stop loading on error
      });
  }, [selectedYear]);
  // Loading animation
  if (loading) {
    return (
      <div className="loading-container">
        <video autoPlay loop muted className="video-player">
          <source src={loading_animation} type="video/webm" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>
    );
  } else {
    return (
      <motion.div
        className="heading-and-items"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="constructor-standing-header position-heading">
          <div className="constructor-standing-header-item">Position</div>
          <div className="constructor-standing-header-item constructor-heading-constructor-table">
            Constructor
          </div>
          <div className="constructor-standing-header-item points-heading-constructor-table">
            Points
          </div>
          <div className="constructor-standing-header-item wins-heading-constructor-table">
            Wins
          </div>
        </div>
        <div className="standings-container">
          {constructorStandingsList.length > 0 ? (
            constructorStandingsList.map((constructor, index) => (
              <ConstructorStandingItem
                key={index}
                Position={constructor.position}
                constructorName={constructor.Constructor.name}
                Points={constructor.points}
                Wins={constructor.wins}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </motion.div>
    );
  }
};

export default ConstructorStandingTable;
