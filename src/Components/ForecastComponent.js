import React from 'react';
import WeatherWidget from './WeatherWidget'

let ForecastComponent = (props) =>
  <div className="forecast">
    <WeatherWidget {...props}/>
  </div>

export default ForecastComponent;