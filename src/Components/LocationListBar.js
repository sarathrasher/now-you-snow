import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

let LocationListBar = (props) =>
  <div className='location-list'>
    {props.locationList.map(location =>
      <NavLink 
        className='location-link'
        activeStyle={{fontWeight: 'bold'}}
        key={location.location} 
        to={`/location/${location.location}`}> 
        {location.city}, {location.state}
      </NavLink> )}
    </div>

export default withRouter(connect(state => ({locationList: state.locationList}))(LocationListBar))
