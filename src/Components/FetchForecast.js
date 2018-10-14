import React from 'react';
import LocationScreen from './LocationScreen';

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
        this.setState(() => ({
          weatherResults: resultsObject
        }))
    }
  )}
  componentDidMount() {
    this.fetchData()  
  }
  componentWillReceiveProps() {
    this.fetchData()
  }
  render() {
    let city = this.props.match.params.city;
    let state = this.props.match.params.state;
    if (Object.keys(this.state.weatherResults).length > 0) {
      return <LocationScreen weatherResults={this.state.weatherResults} weatherLocation={[city, state]}/>
    } else {
      return <p className='loading-message'>Loading Weather Data</p>
    }

  }
}

export default FetchForecast;