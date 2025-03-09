"use client";
import React, { useState, useContext, useEffect } from "react";
import "./DriverCount.css";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import racingHelmet from "../../../../Assets/racing-helmet.png";

const DriverCount = () => {
  const [driverCount, setDriverCount] = useState(null);
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/driverstandings/${selectedYear}/count`
      )
      .then((response) => {
        setDriverCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDriverCount(null);
        setLoading(false);
      });
  }, [selectedYear]);

  return (
    <motion.div 
      className="driver-widget"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="widget-header">
        <Image src={racingHelmet} alt="Helmet Icon" className="widget-icon" width={28} height={28} />
        <h2>Drivers</h2>
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <motion.div 
          className="driver-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {driverCount || "No data available"}
        </motion.div>
      )}
      <p className="widget-footer">Total Drivers in Season</p>
    </motion.div>
  );
};

export default DriverCount;
