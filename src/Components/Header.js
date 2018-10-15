import React from 'react';
import SmartLocationForm from './LocationForm'
import SmartLocationListBar from './LocationListBar'

let Header = () =>
  <div class='header'>
    <h1 className="header-text">Now You Snow</h1>
    <SmartLocationForm />
    <SmartLocationListBar />
  </div>

export default Header;