"use client";
import React, { useEffect, useState, useContext } from "react";
import "./SeasonRaceCount.css";
import axios from "axios";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import { motion } from "framer-motion";
import checkeredFlag from "../../../../Assets//flag-checkered-solid.svg";
import Image from "next/image";

const SeasonRaceCount = () => {
  const [raceCount, setRaceCount] = useState(null);
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/races/${selectedYear}/count`
      )
      .then((response) => {
        setRaceCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setRaceCount(null);
        setLoading(false);
      });
  }, [selectedYear]);

  return (
    <motion.div 
      className="season-race-widget"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="widget-header">
        <Image src={checkeredFlag} alt="Checkered Flag Icon" className="season-race-widget-icon" width={30} height={30} />
        <h2>Races</h2>
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <motion.div 
          className="season-race-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {raceCount || "No data available"}
        </motion.div>
      )}
      <p className="widget-footer">Total Races in Season</p>
    </motion.div>
  );
};

export default SeasonRaceCount;
