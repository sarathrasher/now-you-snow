import React from 'react';
import LocationScreen from './LocationScreen';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ErrorScreen from './ErrorScreen';

class FetchForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherResults: {}
    }
  }
  fetchData = () => {
    let location = this.props.match.params.location;
    fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}")&format=json`) 
      .then(res => {
        return res.text()}) 
      .then(results => {
        let resultsObject = JSON.parse(results)
        if (resultsObject.query.count === 0) {
          return
        } else {
          let city = resultsObject.query.results.channel.location.city;
          let state = resultsObject.query.results.channel.location.region;
          let country = resultsObject.query.results.channel.location.country
          this.props.dispatch({
            type: 'ADD_RESULTS',
            weatherResults: resultsObject.query.results.channel,
            location: location,
            city: city,
            state: state,
            country: country
          })
        }

    }
  )}
  componentDidMount() {
    if (!this.props.weatherResults.item) {
      this.fetchData()  
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.location !== prevProps.match.params.location) {
      this.fetchData()
    }
  }

  render() {
    if (this.props.weatherResults.item) {
      return <LocationScreen weatherResults={this.props.weatherResults} />
    } else {
      return <ErrorScreen />
    }
  }
}

export default withRouter(connect(state => ({weatherResults: state.weatherResults, dispatch: state.dispatch}))(FetchForecast));