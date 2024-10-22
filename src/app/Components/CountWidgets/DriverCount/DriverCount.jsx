"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "../CountWidgetStyles.module.css";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import axios from "axios";

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
    <div className={styles.widget}>
      <h3 className={styles.widgetTitle}>Driver Count</h3>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <div className={styles.count}>
          {driverCount || "No data available"}
        </div>
      )}
    </div>
  );
};

export default DriverCount;
