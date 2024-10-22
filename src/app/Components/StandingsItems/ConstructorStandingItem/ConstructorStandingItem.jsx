import React from "react";
// import "./ConstructorStandingItem.css";
import styles from "../StandingsItems.module.css";

const ConstructorStandingItem = (props) => {
  return (
    <div className={styles.standingsItemContainer}>
      <div className={`${styles.standingsItem} ${styles.constructorStandingsItem}`}>
        <div className={styles.position}>{props.Position}</div>
        <div className={`${styles.name} ${styles.centerAlign}`}>{props.constructorName}</div>
        <div className={styles.points}>{props.Points}</div>
        <div className={styles.wins}>{props.Wins}</div>
      </div>
    </div>
  );
};

export default ConstructorStandingItem;
