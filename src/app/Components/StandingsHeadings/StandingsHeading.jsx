"use client";
import React, { useContext, useState } from "react";
import "./StandingsHeading.css";
import DriverStandingTable from "../DriverStandingTable/DriverStandingTable";
import ConstructorStandingTable from "../ConstructorStandingTable/ConstructorStandingTable";
import { motion } from "framer-motion";

const Standings = () => {
  const [standings, setStandings] = useState("Drivers");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="main-heading">Standings</h2>

      <div className={"driversOrConstructors"}>
        <h3
          onClick={() => {
            setStandings("Drivers");
          }}
          className={standings === "Drivers" ? "selected-tab-heading" : ""}
        >
          Drivers
        </h3>{" "}
        <span>|</span>
        <h3
          onClick={() => {
            setStandings("Constructors");
          }}
          className={standings === "Constructors" ? "selected-tab-heading" : ""}
        >
          Constructors
        </h3>
      </div>
      {/* RENDERING THE TABLE BASED ON THE SELECTION */}
      {standings === "Drivers" ? (
        <DriverStandingTable />
      ) : (
        <ConstructorStandingTable />
      )}
    </motion.div>
  );
};

export default Standings;
