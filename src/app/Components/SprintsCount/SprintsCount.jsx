import React, { useState, useEffect } from "react";
import './SprintsCount.css';
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import collisionIcon from "../../../Assets/collision-icon.svg";

const SprintsCount = () => {
  const [sprintsCount, setSprintsCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/currentData/SprintRaceCount`
      )
      .then((response) => {
        setSprintsCount(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setSprintsCount(null);
        setIsLoading(false);
      });
  }, []);

  return (
    <motion.div
      className="cspg-widget sprintscount-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="cspg-widget-header">
        <Image
          src={collisionIcon}
          alt="Sprints Count icon"
          className="cspg-widget-icon"
          width={40}
          height={40}
        />
        Sprints
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <motion.div
          className="cspg-widget-value sprintscount-widget-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {sprintsCount}
        </motion.div>
      )}
      <div className="cspg-widget-footer"> Sprints This Season</div>
    </motion.div>
  );
};

export default SprintsCount;
