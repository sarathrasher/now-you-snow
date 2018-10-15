import React from 'react';
import PresentWidget from './PresentWidget';
import WeatherWidget from './WeatherWidget';

let ForecastComponent = (props) =>
  <div className='details'>
    <div className="forecast">    
      <PresentWidget 
        day={this.props.weatherResults} 
        key={Math.random()}
      />
    </div>
  </div>

export default ForecastComponent;