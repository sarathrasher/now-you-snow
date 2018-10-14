import React from 'react';
import LocationScreen from './LocationScreen';
import { connect } from 'react-redux';

class FetchForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherResults: {}
    }
  }
  fetchData = () => {
    let zipCode = this.props.match.params.zipCode;
    fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=${zipCode})&format=json`) 
      .then(res => {
        return res.text()}) 
      .then(results => {
        let resultsObject = JSON.parse(results)
        console.log(resultsObject)
        let city = resultsObject.query.results.channel.location.city;
        let state = resultsObject.query.results.channel.location.region;
        let country = resultsObject.query.results.channel.location.country
        this.props.dispatch({
          type: 'ADD_RESULTS',
          weatherResults: resultsObject,
          zipCode: zipCode,
          city: city,
          state: state,
          country: country
        })
    }
  )}
  componentDidMount() {
    this.fetchData()  
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.zipCode !== prevProps.match.params.zipCode) {
      this.fetchData()
    }
  }

  render() {
    let zipCode = this.props.match.params.zipCode
    if (Object.keys(this.props.weatherResults).length > 0) {
      return <LocationScreen weatherResults={this.props.weatherResults} weatherLocation={zipCode}/>
    } else {
      return <p className='loading-message'>Loading Weather Data...</p>
    }

  }
}

export default connect(state => ({weatherResults: state.weatherResults, dispatch: state.dispatch}))(FetchForecast);