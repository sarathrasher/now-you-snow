import React from 'react';
import Header from './Header';
import SmartLocationListBar from './LocationListBar';
import { NavLink } from 'react-router-dom'

let ErrorScreen = () =>
  <div className="main">
    <Header />
    <div className='content'>
    <NavLink 
        className='location-link'
        activeStyle={{fontWeight: 'bold'}}
        key={Math.Random}
        to={'/'}> 
        Home
      </NavLink>
      <SmartLocationListBar />
      <p className='error-message'>I'm sorry, there was an error getting this locations weather data</p> 
    </div>
  </div>

export default ErrorScreen;
