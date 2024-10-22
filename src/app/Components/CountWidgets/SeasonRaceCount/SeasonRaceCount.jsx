"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from  "../CountWidgetStyles.module.css";
import axios from "axios";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";

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
    <div className={styles.widget}>
      <h3 className={styles.widgetTitle}>Race Count</h3>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <div className={styles.count}>
          {raceCount || "No data available"}
        </div>
      )}
    </div>
  );
};

export default SeasonRaceCount;
