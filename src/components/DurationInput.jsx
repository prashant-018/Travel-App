import React from 'react';
import { SlCalender } from "react-icons/sl";
import styles from './DurationInput.module.css';

function DurationInput({ value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>How long will you stay?</label>
      <div className={styles.selectWrapper}>
      <SlCalender className={styles.icon} />
        <select
          className={styles.selectField}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select Duration</option>
          {[1, 2, 3, 4, 5, 6, 7].map((days) => (
            <option key={days} value={days}>
              {days} {days === 1 ? 'Day' : 'Days'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DurationInput;
