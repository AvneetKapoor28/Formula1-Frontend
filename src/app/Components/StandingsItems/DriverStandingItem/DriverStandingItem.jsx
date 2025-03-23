import React, { useState } from "react";
import styles from "../StandingsItems.module.css";

const DriverStandingItem = (props) => {
  const [showCallout, setShowCallout] = useState(false);

  const toggleCallout = () => {
    setShowCallout(!showCallout);
  };

  return (
    <div className={styles.standingsItemContainer}>
      <div 
        className={`${styles.standingsItem} ${styles.driverStandingsItem}`} 
        onClick={toggleCallout}
      >
        <div className={styles.position}>{props.Position}</div>
        <div className={styles.name}>{props.Name}</div>
        <div className={styles.points}>{props.Points}</div>
        
        {/* These will be hidden on mobile and shown on desktop */}
        <div className={styles.driverNumber}>{props.Number}</div>
        <div className={styles.constructorName}>{props.constructorName}</div>
        <div className={styles.wins}>{props.Wins}</div>
        
        {/* Mobile-only callout that appears on click */}
        {showCallout && (
          <div className={styles.calloutContainer}>
            <div className={styles.calloutItem}>
              <span className={styles.calloutLabel}>Number</span>
              <span className={styles.calloutValue}>{props.Number}</span>
            </div>
            <div className={styles.calloutItem}>
              <span className={styles.calloutLabel}>Constructor</span>
              <span className={styles.calloutValue}>{props.constructorName}</span>
            </div>
            <div className={styles.calloutItem}>
              <span className={styles.calloutLabel}>Wins</span>
              <span className={styles.calloutValue}>{props.Wins}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverStandingItem;