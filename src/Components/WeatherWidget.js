import React from 'react';
import { connect } from 'react-redux';

let WeatherWidget = (props) =>
  <div 
    className='weather-widget'
    onClick={() =>
      props.handleClick(props.index)
    }
    >
      <p className={props.shown ? 'shown-date' : 'date'}>{props.day.date}</p>
      { props.shown ? 
          <div className='expanded-details'>
            <p className='high'>High: {props.day.high}</p>
            <p className='high'>Low: {props.day.low}</p>
            <p className='description'>{props.day.text}</p>
          </div>
        : null }
  </div>

export default connect(props => ({dispatch: props.dispatch}))(WeatherWidget);
