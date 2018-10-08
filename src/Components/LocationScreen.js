import React from 'react';
import ForecastComponent from './ForecastComponent';
import Header from './Header';
import SmartLocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';

let LocationScreen = (props) => 
  <div className="main">
    <Header />
    <SmartLocationListBar />
    <SmartLocationForm />
    <ForecastComponent {...props} />
  </div>

export default LocationScreen;
