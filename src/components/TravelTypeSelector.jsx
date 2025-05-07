import React from 'react';
import {
  FaUser,
  FaHeart,
  FaUsers,
  FaUserFriends,
} from 'react-icons/fa';
import styles from './TravelTypeSelector.module.css';

const types = [
  { label: 'Solo', icon: <FaUser /> },
  { label: 'Couple', icon: <FaHeart /> },
  { label: 'Family', icon: <FaUsers /> },
  { label: 'Friends', icon: <FaUserFriends /> },
];

function TravelTypeSelector({ value, onChange }) {
  return (
    <div className={styles.selectorContainer}>
      <label className={styles.label}>Who are you traveling with?</label>
      <div className={styles.grid}>
        {types.map(({ label, icon }) => (
          <button
            key={label}
            className={`${styles.option} ${value === label ? styles.selected : ''}`}
            onClick={() => onChange(label)}
            type="button"
          >
            <div className={styles.icon}>{icon}</div>
            <div className={styles.text}>{label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TravelTypeSelector;
