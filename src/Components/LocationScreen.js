import React from 'react';
import ForecastComponent from './ForecastScreen';
import Header from './Header';
import SmartLocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DateNavBar from './DateNavBar'
import WeatherWidget from './WeatherWidget'

let LocationScreen = (props) => { 
  let day;
  if (props.weatherResults.item) {
    day = props.weatherResults.item.forecast.filter(day => day.date === props.match.params.date)
  } else {
    return <p>I'm sorry, there as an error getting this location's weather data</p>
  }

  console.log(day)
  return (
    <div className="main">
      <Header />
      <SmartLocationListBar />
      <SmartLocationForm />
      <DateNavBar 
        zipCode={props.match.params.zipCode}
        weatherResults={props.weatherResults}
        />
      <WeatherWidget 
        day={day[0]} 
        key={Math.random()}
      />
      <button 
        className='button'
        onClick={(event) => {
          event.preventDefault();
          props.dispatch({
            type: 'DELETE_LOCATION',
            location: props.match.params.zipCode
          })
          props.history.goBack(); 
          }
        }   
        >Delete Location 
        </button>
    </div>
  )
}

export default withRouter(connect((state) => ({weatherResults: state.weatherResults, dispatch: state.dispatch, history: state.history}))(LocationScreen))
