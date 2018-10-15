import React from 'react';

let PresentWidget = (props) =>
  <div className='weather-widget'>
    <p className={'date'}>{props.weatherResults.item.forecast[0].date}</p>
    <div className='expanded-details'>
      <p className='high'>High: {props.weatherResults.item.forecast[0].high}</p>
      <p className='high'>Low: {props.weatherResults.item.forecast[0].low}</p>
      <p className='description'>{props.weatherResults.item.forecast[0].text}</p>
      <p className='wind'>Wind chill: {props.weatherResults.wind.chill}F</p>
    </div>
  </div>

export default PresentWidget;