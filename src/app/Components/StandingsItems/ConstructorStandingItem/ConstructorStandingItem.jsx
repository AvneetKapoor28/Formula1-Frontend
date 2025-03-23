import React, { useState } from "react";
import styles from "../StandingsItems.module.css";

const ConstructorStandingItem = (props) => {
  const [showCallout, setShowCallout] = useState(false);

  const toggleCallout = () => {
    setShowCallout(!showCallout);
  };

  return (
    <div className={styles.standingsItemContainer}>
      <div 
        className={`${styles.standingsItem} ${styles.constructorStandingsItem}`}
        onClick={toggleCallout}
      >
        <div className={styles.position}>{props.Position}</div>
        <div className={`${styles.name} ${styles.centerAlign}`}>{props.constructorName}</div>
        <div className={styles.points}>{props.Points}</div>
        <div className={styles.wins}>{props.Wins}</div>
        
        {/* Mobile-only callout that appears on click */}
        {showCallout && (
          <div className={styles.calloutContainer}>
            <div></div>
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

export default ConstructorStandingItem;