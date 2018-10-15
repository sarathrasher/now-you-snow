import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

let DateNavBar = (props) => {
  let weatherForecast = props.weatherResults.item.forecast.slice(0, 3)
  return (
    <div className='location-list'>
    {weatherForecast.map(date =>
      <NavLink 
      activeStyle={{fontWeight: 'bold'}}
      key={date.date} 
      to={`/location/${props.zipCode}/${date.date}`}> 
      {date.day} {date.date}
      </NavLink> )}
    </div>
  )
}

export default DateNavBar;

// export default withRouter(connect(state => ({weatherResults: state.weatherResults}))(DateNavBar))
