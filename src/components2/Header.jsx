import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.textGroup}>
        <h2 className={styles.greeting}>Hello, Chhavi 👋</h2>
        <p className={styles.subtitle}>Ready for your trip?</p>
      </div>
      <div className={styles.avatar}>C</div>
    </div>
  );
}

export default Header;
