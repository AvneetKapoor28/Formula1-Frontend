import React from 'react'
import './PopupDriverStandingElement.css'

const PopupDriverStandingElement = (props) => {
  return (
    <div className={styles.standingsItemContainer}>
      <div className={`${styles.standingsItem} ${styles.driverStandingsItem}`}>
        <div className={styles.position}>{props.Position}</div>
        <div className={styles.driverNumber}>{props.Number}</div>
        <div className={styles.name}>{props.Name}</div>
        <div className={styles.constructorName}>{props.constructorName}</div>
        <div className={styles.points}>{props.Points}</div>
        <div className={styles.wins}>{props.Wins}</div>
      </div>
    </div>
  )
}

export default PopupDriverStandingElement