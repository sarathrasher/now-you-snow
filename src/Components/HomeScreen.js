import React from 'react';
import Header from './Header';
import LocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';

let HomeScreen = () =>
  <div className="main">
    <Header />
    <SmartLocationListBar />
    <LocationForm />
  </div>

export default HomeScreen;
