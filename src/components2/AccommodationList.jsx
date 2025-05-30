import React from 'react';
import styles from './AccommodationList.module.css';
import hotel1 from '../public/hotel2.png';
import hotel2 from '../public/hotel1.png';
function AccommodationList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Accommodation</p>
        <span className={styles.seeAll}>See all</span>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.card}>
          <img src={hotel1} alt="Hotel 1" className={styles.image} />

        </div>
        <div className={styles.card}>
          <img src={hotel2} alt="Hotel 2" className={styles.image} />

        </div>
        <div className={styles.card}>
          {/* <img src="/hotel1.png" alt="Hotel 3" className={styles.image} />
          <p className={styles.name}>Mount Fuji Lodge</p> */}
        </div>
      </div>
    </div>
  );
}

export default AccommodationList;
