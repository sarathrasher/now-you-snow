import React from 'react';

let WeatherWidget = (props) =>
  <div className='weather-widget'>
    <p className='date'>{props.day.date}</p>
    <div className='expanded-details'>
      <p className='high'>High: {props.day.high}</p>
      <p className='high'>Low: {props.day.low}</p>
      <p className='description'>{props.day.text}</p>
    </div>
  </div>

export default WeatherWidget
