import React from 'react';
import styles from './TripCard.module.css';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

function TripCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src="/tokyo.jpg" alt="Tokyo" className={styles.image} />

        <div className={styles.overlay}>
          <div className={styles.details}>
            <h3 className={styles.title}>TOKYO</h3>
            <p className={styles.dates}>27.01.2025 - 02.02.2025</p>
          </div>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <FaCalendarAlt className={styles.icon} />
              <span>8 Days</span>
            </div>
            <div className={styles.metaItem}>
              <FaUsers className={styles.icon} />
              <span>4 (2M, 2F)</span>
            </div>
            <div className={styles.metaItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>14 Activities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
