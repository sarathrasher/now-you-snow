import React from 'react';
import { connect } from 'react-redux';

let WeatherWidget = (props) =>
  <div className='weather-widget'>
    <div className='weather-day-block'>
      <p className='date'>{props.day.date}</p>
      <p className='high'>High: {props.day.high}</p>
      <p className='high'>Low: {props.day.low}</p>
      <p className='description'>{props.day.text}</p>
    </div>
  </div>

let SmartWeatherWidget = connect(props => ({dispatch: props.dispatch}))(WeatherWidget);

export default SmartWeatherWidget;

