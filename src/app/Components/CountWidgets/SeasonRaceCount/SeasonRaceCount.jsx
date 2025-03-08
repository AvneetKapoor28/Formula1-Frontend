"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../CountWidgetStyles.module.css";
import axios from "axios";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import { motion } from "framer-motion";

const SeasonRaceCount = () => {
  const [raceCount, setRaceCount] = useState(null);
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true); // Loading state

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
      className={styles.widget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className={styles.widgetTitle}>Race Count</h3>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <motion.div
          className={styles.count}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {raceCount || "No data available"}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SeasonRaceCount;
