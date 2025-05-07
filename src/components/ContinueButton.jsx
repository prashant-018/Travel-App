import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContinueButton.module.css'; // your CSS file

function ContinueButton() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/home'); // or whatever your HomeScreen route is
  };

  return (
    <button className={styles.button} onClick={handleContinue}>
      Continue
    </button>
  );
}

export default ContinueButton;
