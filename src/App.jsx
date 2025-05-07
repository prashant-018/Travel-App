import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styles from './App.module.css';

import DestinationInput from './components/DestinationInput';
import DurationInput from './components/DurationInput';
import TravelTypeSelector from './components/TravelTypeSelector';
import ContinueButton from './components/ContinueButton';
import HomeScreen from './pages/HomeScreen'; // Create this page next

function TripPlanner() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelType, setTravelType] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (destination && duration && travelType) {
      navigate('/home');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Plan Your Journey, Your Way!</h1>
        <p className={styles.subtitle}>
          Let’s create your personalised travel experience
        </p>

        <DestinationInput value={destination} onChange={setDestination} />
        <DurationInput value={duration} onChange={setDuration} />
        <TravelTypeSelector value={travelType} onChange={setTravelType} />

        <ContinueButton
          disabled={!destination || !duration || !travelType}
          onClick={handleContinue}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<TripPlanner />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
