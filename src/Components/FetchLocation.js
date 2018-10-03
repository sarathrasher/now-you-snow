import React from 'react';
import LocationScreen from './LocationScreen';


class FetchForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherResults: []
    }
  }
  componentDidMount(props) {
    fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.props.city}%2C%20${this.props.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`) 
      .then(res => res.text()) 
      .then(results => {
        let resultsObject = JSON.parse(results)
        this.setState({
          weatherResults: resultsObject
        })
        console.log(resultsObject)
    }
  )}
  render() {
    return <LocationScreen {...this.state.weatherResults} />
  }
}

export default FetchForecast;