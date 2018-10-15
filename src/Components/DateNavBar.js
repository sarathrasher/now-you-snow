import React from 'react';
import { NavLink } from 'react-router-dom';

let DateNavBar = (props) => {
  let weatherForecast = props.weatherResults.item.forecast.slice(0, 4)
  return (
    <div className='location-list'>
    {weatherForecast.map(date =>
      <NavLink 
      activeStyle={{fontWeight: 'bold'}}
      key={date.date} 
      to={`/location/${props.location}/${date.date}`}> 
      {date.day} {date.date}
      </NavLink> )}
    </div>
  )
}

export default DateNavBar;

