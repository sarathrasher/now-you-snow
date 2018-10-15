import React from 'react';
import Header from './Header';
import LocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';

let LoadingScreen = () =>
  <div className="main">
    <Header />
    <div className='content'>
      <LocationForm />
      <SmartLocationListBar />
      <p className='error-message'>Loading weather data...</p> 
    </div>
  </div>

export default LoadingScreen;
