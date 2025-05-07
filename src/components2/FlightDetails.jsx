import React from 'react';
import styles from './FlightDetails.module.css';
import { FaPlaneDeparture } from 'react-icons/fa';

function FlightDetails() {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <p className={styles.label}>Flight Details</p>
        <p className={styles.seeAll}>See all</p>
      </div>

      <p className={styles.dateTime}>26 Jan 2025 • 10:50 AM</p>

      <div className={styles.flightInfo}>
        <div className={styles.location}>
          <p className={styles.airport}>DEL</p>
          <p className={styles.city}>Delhi, India</p>
        </div>

        <FaPlaneDeparture className={styles.icon} />

        <div className={styles.location}>
          <p className={styles.airport}>NRT</p>
          <p className={styles.city}>Narita, Tokyo</p>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
