import React from 'react';
import WeatherWidget from './WeatherWidget';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DateNavBar from './DateNavBar';

let ForecastScreen = (props) => 
  <div className='details'>
    {/* <DateNavBar {...props}/>     */}
    <WeatherWidget 
      day={props.weatherResults} 
      key={Math.random()}
      index={0}
    />
    <button 
    className='button'
    onClick={(event) => {
      event.preventDefault();
      this.props.dispatch({
        type: 'DELETE_LOCATION',
        location: props.match.params.zipCode
      })
      props.history.goBack(); 
      }
    }   
    >Delete Location 
    </button>
      </div>

export default withRouter(connect((state ) => ({weatherResults: state.weatherResults, dispatch: state.dispatch, history: state.history}))(ForecastScreen))
