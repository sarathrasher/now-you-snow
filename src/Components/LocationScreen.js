import React from 'react';
import Header from './Header';
import SmartLocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import DateNavBar from './DateNavBar'
// import WeatherWidget from './WeatherWidget'
import ForecastComponent from './ForecastComponent';

let LocationScreen = (props) =>
    <div className="main">
      <Header />
      <SmartLocationListBar />
      <SmartLocationForm />
      <ForecastComponent weatherResults={props.weatherResults} />

      <button 
        className='button'
        onClick={(event) => {
          event.preventDefault();
          props.dispatch({
            type: 'DELETE_LOCATION',
            location: props.match.params.location
          })
          props.history.goBack(); 
          }
        }   
        >Delete Location 
        </button>
    </div>

export default withRouter(connect((state) => ({weatherResults: state.weatherResults, dispatch: state.dispatch, history: state.history}))(LocationScreen))
