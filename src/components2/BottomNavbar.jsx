import React from 'react';
import styles from './BottomNavbar.module.css';
import { FaHome, FaPlusCircle, FaSearch, FaHeart, FaUser } from 'react-icons/fa';

function BottomNavbar() {
  return (
    <nav className={styles.navbar}>
      <button className={`${styles.item} ${styles.active}`}>
        <FaHome className={styles.icon} />
      </button>
      <button className={styles.item}>
        <FaSearch className={styles.icon} />
      </button>
      <button className={`${styles.item} ${styles.centerItem}`}>
        <FaPlusCircle className={`${styles.icon} ${styles.primary}`} />
      </button>
      <button className={styles.item}>
        <FaHeart className={styles.icon} />
      </button>
      <button className={styles.item}>
        <FaUser className={styles.icon} />
      </button>
    </nav>
  );
}

export default BottomNavbar;
