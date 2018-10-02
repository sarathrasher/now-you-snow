import React from 'react';

let LocationForm = (props) =>
  <form className="location-form">
    <input 
      className="location-input" 
      placeholder="Choose an Area to Search"
    />
    <button
      className="location-button"
      type="submit"
      >Add Location</button>
  </form>

export default LocationForm;