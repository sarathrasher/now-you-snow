import React from 'react';
import WeatherWidget from './WeatherWidget';
import { connect } from 'react-redux';

let ForecastComponent = (props) =>
  <div className="forecast">    
    {props.weatherResults.query.results.channel.item.forecast.map(day => 
      <WeatherWidget day={day} />)}
      <button 
      className='button'
      onClick={(event) => {
        event.preventDefault();
        props.dispatch({
          type: 'DELETE_LOCATION',
          location: props.location
      })} }   
  >Delete Location </button>
  </div>


let SmartForecastComponent = connect(props => ({dispatch: props.dispatch}))(ForecastComponent);

export default SmartForecastComponent;