import React from 'react';
import styles from './HomeScreen.module.css';

import Header from '../components2/Header';
// import TripCard from '../components2/TripCard';
import FlightDetails from '../components2/FlightDetails';
import AccommodationList from '../components2/AccommodationList';
import BottomNavbar from '../components2/BottomNavbar';
import ActivitiesSection from '../components2/ActivitiesSection';

function HomeScreen() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <h3 className={styles.sectionTitle}>Your Upcoming Trip</h3>
        {/* <TripCard /> */}
        <FlightDetails />
        <AccommodationList />
        <BottomNavbar />
        <ActivitiesSection/>
      </div>
    </div>
  );
}

export default HomeScreen;
