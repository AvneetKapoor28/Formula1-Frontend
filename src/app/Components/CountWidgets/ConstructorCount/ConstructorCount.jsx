"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../CountWidgetStyles.module.css";
import axios from "axios";
import { PastSeasonsPageContext } from "../../../Context/PastSeasonsPageProvider";
import { motion } from "framer-motion";

const ConstructorCount = () => {
  const [constructorCount, setConstructorCount] = useState(null);
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true); // Loading state

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
      className={styles.widget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className={styles.widgetTitle}>Constructor Count</h3>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <motion.div
          className={styles.count}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {constructorCount || "No data available"}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ConstructorCount;
