import React from 'react';
import LocationScreen from './LocationScreen';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

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
        if (resultsObject.query.count === 0) {
          return
        } else {
          let city = resultsObject.query.results.channel.location.city;
          let state = resultsObject.query.results.channel.location.region;
          let country = resultsObject.query.results.channel.location.country
          this.props.dispatch({
            type: 'ADD_RESULTS',
            weatherResults: resultsObject.query.results.channel,
            zipCode: zipCode,
            city: city,
            state: state,
            country: country
          })
        }

    }
  )}
  componentDidMount() {
    if (Object.keys(this.props.weatherResults).length === 0) {
      console.log(this.props.weatherResults)
      this.fetchData()  
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.zipCode !== prevProps.match.params.zipCode) {
      this.fetchData()
    }
  }

  componentWillReceiveProps(nextProps) {
    let zipCode = this.props.match.params.zipCode;
    if (!this.props.match.params.date) {
      this.props.history.push(`/location/${zipCode}/${nextProps.weatherResults.item.forecast[0].date}`)
    }
  }

  render() {
    if (this.props.weatherResults.item) {
      return <LocationScreen {...this.props} />
    } else {
      return <p className='error-message'>I'm sorry, there was an error getting this locations weather data</p>
    }
  }
}

export default withRouter(connect(state => ({weatherResults: state.weatherResults, dispatch: state.dispatch}))(FetchForecast));