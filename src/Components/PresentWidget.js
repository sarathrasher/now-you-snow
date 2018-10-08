import React from 'react';

let PresentWidget = (props) =>
  <div 
  className='weather-widget'
  onClick={() =>
    props.handleClick(props.index)
  }
  >
    <p className={props.shown ? 'shown-date' : 'date'}>{props.day.item.forecast[0].date}</p>
    { props.shown ? 
        <div className='expanded-details'>
          <p className='high'>High: {props.day.item.forecast[0].high}</p>
          <p className='high'>Low: {props.day.item.forecast[0].low}</p>
          <p className='description'>{props.day.item.forecast[0].text}</p>
          <p className='wind'>Wind chill: {props.day.wind.chill}F</p>
        </div>
      : null }
  </div>

export default PresentWidget