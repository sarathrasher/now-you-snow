import React from 'react';
import Header from './Header';
import LocationForm from './LocationForm';
import ForecastComponent from './ForecastComponent';

let HomeScreen = (props) =>
  <div className="main">
    <Header />
    <LocationForm />
    <ForecastComponent />
  </div>

export default HomeScreen;
