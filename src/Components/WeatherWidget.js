import React from 'react';
import { connect } from 'react-redux';

let WeatherWidget = (props) =>
  <div className='expanded-details'>
    <p className='high'>High: {props.day.high}</p>
    <p className='high'>Low: {props.day.low}</p>
    <p className='description'>{props.day.text}</p>
  </div>


let SmartWeatherWidget = connect(props => ({dispatch: props.dispatch}))(WeatherWidget);

export default SmartWeatherWidget;

