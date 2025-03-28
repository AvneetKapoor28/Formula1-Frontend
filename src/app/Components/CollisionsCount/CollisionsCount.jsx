import React from "react";
import "./CollisionsCount.css";
import { motion } from "framer-motion";
import Image from "next/image";
import collisionIcon from "../../../Assets/collision-icon.svg";

const CollisionsCount = ({ collisions, isLoading }) => {
  return (
    <motion.div
      className="cspg-widget collisions-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="cspg-widget-header">
        <Image
          src={collisionIcon}
          alt="collision icon"
          className="cspg-widget-icon"
          width={40}
          height={40}
        />
        Collisions
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <motion.div
          className="cspg-widget-value collisions-widget-value"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {collisions}
        </motion.div>
      )}
      <div className="cspg-widget-footer">Total Collisions in Season</div>
    </motion.div>
  );
};

export default CollisionsCount;
