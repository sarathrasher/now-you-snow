import React from 'react';
import ForecastComponent from './ForecastComponent';
import Header from './Header';

let LocationScreen = (props) => 
  <div className="main">
    <ForecastComponent {...props} />
  </div>

export default LocationScreen;
