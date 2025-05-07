import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './DestinationInput.module.css';

function DestinationInput({ value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>Where would you like to go?</label>
      <div className={styles.inputWrapper}>
        <FaMapMarkerAlt className={styles.icon} />
        <input
          type="text"
          placeholder="Enter Destination"
          className={styles.inputField}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DestinationInput;
