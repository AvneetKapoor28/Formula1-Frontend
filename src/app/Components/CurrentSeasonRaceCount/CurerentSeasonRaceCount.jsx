import React, { useState, useEffect } from "react";
import "./CurrentSeasonRaceCount.css";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import GPCountIcon from "../../../Assets/GP-count-icon.svg";

const CurrentSeasonRaceCount = () => {
  const [raceCount, setRaceCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/currentData/currentYearRaceCount`
      )
      .then((response) => {
        setRaceCount(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setRaceCount(null);
        setIsLoading(false);
      });
  }, []);

  return (
    <motion.div
      className="cspg-widget racecount-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="cspg-widget-header">
        <Image
          src={GPCountIcon}
          alt="Race Count icon"
          className="cspg-widget-icon"
          width={30}
          height={30}
        />
        Grand Prixs
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <motion.div
          className="cspg-widget-value racecount-widget-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {raceCount}
        </motion.div>
      )}
      <div className="cspg-widget-footer"> Grand Prixs This Season</div>
    </motion.div>
  );
};

export default CurrentSeasonRaceCount;
