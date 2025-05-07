import React from 'react';
import styles from './ActivitiesSection.module.css';

function ActivitiesSection() {
  return (

    <div className={styles.container}>
    <div className={styles.header}>
      <p className={styles.title}>Activities</p>
      <span className={styles.seeAll}>See all</span>
    </div>
      <div className={styles.headerRow}>
        <div className={styles.tags}>
          <span className={styles.dayPlan}>Day Plan</span>
          <span className={styles.activitiesCount}>14 Activities</span>
        </div>
        
      </div>

      <div className={styles.dateScroll}>
        {['27', '28', '29', '30', '31', '1'].map((day, index) => (
          <div key={index} className={`${styles.dateItem} ${index === 0 ? styles.active : ''}`}>
            <span className={styles.month}>{index === 0 ? 'JAN' : index === 5 ? 'FEB' : ''}</span>
            <span className={styles.day}>MON</span>
            <span className={styles.date}>{day}</span>
          </div>
        ))}
      </div>

      <p className={styles.dayTitle}>Day 1 &nbsp; <span>27.01.2025</span> &nbsp; <span className={styles.count}>3 Activities</span></p>


      <div className={styles.activityList}>
        <div className={`${styles.activityCard} ${styles.highlight}`}>
          <img src="/sensoji.png" className={styles.image} />
          <div className={styles.info}>
            <h4>Senso-ji Temple & Nakamise Shopping Street</h4>
            <p><strong>Timing:</strong> 8:15 am Morning</p>
            <p><strong>Duration:</strong> 3 hours</p>
            <p><strong>Pick up:</strong> From Hotel</p>
          </div>
        </div>

        <div className={styles.activityCard}>

          <img src="/tokyoskytree.png" className={styles.image} />
          <div className={styles.info}>
            <h4>Tokyo Sky Tree</h4>
            <p><strong>Timing:</strong> 1:00 pm Afternoon</p>
            <p><strong>Duration:</strong> 3 hours</p>
            <p><strong>Pick up:</strong> From Nakamise Street</p>
          </div>
        </div>

        <div className={styles.activityCard}>

          <img src="/kimono.png" className={styles.image} />
          <div className={styles.info}>
            <h4>Kimono Wearing</h4>
            <p><strong>Timing:</strong> Anytime before 8:00pm</p>
            <p><strong>Duration:</strong> 1-2 hours</p>
            <p><strong>Pick up:</strong> From Hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesSection;
