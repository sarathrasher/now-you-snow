import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

let LocationListBar = (props) =>
  <div className='location-list'>
    {props.locationList.map(location =>
      <NavLink 
      activeStyle={{fontWeight: 'bold'}}
      key={location[0]} 
      to={`/location/${location[1].toLowerCase()}/${location[0].toLowerCase()}`}> {location[0]}, {location[1]}</NavLink> )}
  </div>

let SmartLocationListBar = withRouter(connect(state => ({locationList: state.locationList}))(LocationListBar))

export default SmartLocationListBar