import React from 'react';
import WeatherWidget from './WeatherWidget'

let FutureComponent = (props) =>
  <div className='future-component'>
    <WeatherWidget 
      day={props.weatherResults.item.forecast[1]} 
      key={Math.random()}
    />
    <WeatherWidget 
      day={props.weatherResults.item.forecast[2]} 
      key={Math.random()}
    />
    <WeatherWidget 
      day={props.weatherResults.item.forecast[3]} 
      key={Math.random()}
    />
  </div>

export default FutureComponent;
 
