"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PastSeasonsPageContext } from "../../Context/PastSeasonsPageProvider";
import DriverStandingItem from "../StandingsItems/DriverStandingItem/DriverStandingItem";
import "./DriverStandingTable.css";
import loading_animation from "../../../Assets/loading_animation.webm";

const DriverStandingTable = () => {
  const { selectedYear } = useContext(PastSeasonsPageContext);
  const [loading, setLoading] = useState(true); // Loading state
  const [driverStandingsList, setDriverStandingsList] = useState([]); // Driver standings state

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/pastData/driverStandings/${
          selectedYear || new Date().getFullYear() - 1
        }`
      )
      .then((response) => {
        setDriverStandingsList(response.data); // Update driver standings
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setDriverStandingsList([]); // Clear driver standings on error
        setLoading(false); // Stop loading on error
      });
  }, [selectedYear]);
  // Loading animation
  if (loading) {
    return (
      <div className="loading-container">
        <video autoPlay loop muted className="video-player">
          <source src={loading_animation} type="video/webm" />
        </video>
      </div>
    );
  } else {
    return (
      <div className="heading-and-items">
        <div className="driver-standing-header">
          <div className="driver-standing-header-item">Position</div>
          <div className="driver-standing-header-item number-heading">
            Number
          </div>
          <div className="driver-standing-header-item driver-heading">
            Driver
          </div>
          <div className="driver-standing-header-item constructor-heading-driver-table">
            Constructor
          </div>
          <div className="driver-standing-header-item points-heading-driver-table">
            Points
          </div>
          <div className="driver-standing-header-item wins-heading-driver-table">
            Wins
          </div>
        </div>
        <div className="standings-container">
          {driverStandingsList.length > 0 ? (
            driverStandingsList.map((driver, index) => (
              <DriverStandingItem
                key={index}
                Position={driver.position}
                Number={driver.Driver.permanentNumber}
                Name={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                constructorName={driver.Constructors[0].name}
                Points={driver.points}
                Wins={driver.wins}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    );
  }
};

export default DriverStandingTable;
