import React from 'react';
import Header from './Header';
import LocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';

let ErrorScreen = () =>
  <div className="main">
    <Header />
    <div className='content'>
      <LocationForm />
      <SmartLocationListBar />
      <p className='error-message'>I'm sorry, there was an error getting this locations weather data</p> 
    </div>
  </div>

export default ErrorScreen;
