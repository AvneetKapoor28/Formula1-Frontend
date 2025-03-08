"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "../CountWidgetStyles.module.css";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import axios from "axios";
import { motion } from "framer-motion";

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
      className={styles.widget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className={styles.widgetTitle}>Driver Count</h3>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <motion.div
          className={styles.count}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {driverCount || "No data available"}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DriverCount;
