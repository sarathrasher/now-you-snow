import React from 'react';
import Header from './Header';
import SmartLocationForm from './LocationForm'
import SmartLocationListBar from './LocationListBar'

let HomeScreen = () =>
  <div className="main">
    <Header />
    <div className='content'>
      <SmartLocationForm />
      <SmartLocationListBar />
      <p className='message'>Click or enter a location to see its weather data so that you can always <span className='italics'>snow</span> what the weather will be like--no <span className='italics'>mist</span> oppotunities!</p>
    </div>
  </div>

export default HomeScreen;
