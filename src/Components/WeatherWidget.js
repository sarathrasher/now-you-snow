import React from 'react';
import { connect } from 'react-redux';

let WeatherWidget = (props) =>
  <div className='weather-widget'>
    <button className='button'
    onClick={(event) => {
      event.preventDefault();
      props.dispatch({
        type: 'DELETE_LOCATION',
        location: props.location
    })} }   
    >Delete Location </button>
  </div>

let SmartWeatherWidget = connect(props => ({dispatch: props.dispatch}))(WeatherWidget);

export default SmartWeatherWidget;