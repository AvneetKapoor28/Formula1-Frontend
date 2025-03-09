"use client";
import React, { useEffect, useState, useContext } from "react";
import "./ConstructorCount.css";
import axios from "axios";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import { motion } from "framer-motion";
import racecar from "../../../../Assets/racecar.png";
import Image from "next/image";

const ConstructorCount = () => {
  const [constructorCount, setConstructorCount] = useState(null);
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/constructorstandings/${selectedYear}/count`
      )
      .then((response) => {
        setConstructorCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setConstructorCount(null);
        setLoading(false);
      });
  }, [selectedYear]);

  return (
    <motion.div 
      className="constructor-widget"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="widget-header">
        <Image src={racecar} alt="Racecar Icon" className="constructor-widget-icon" width={60} height={60} />
        <h2>Constructors</h2>
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <motion.div 
          className="constructor-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {constructorCount || "No data available"}
        </motion.div>
      )}
      <p className="widget-footer">Total Constructors in Season</p>
    </motion.div>
  );
};

export default ConstructorCount;
