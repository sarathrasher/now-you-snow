import React from 'react';
import { connect } from 'react-redux';
import FetchForecast from './FetchForecast'

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      submit: false
    }
  }
  render() {
    if (this.state.submit) {
      return <FetchForecast state={this.state.state} city={this.state.city} />
    } else {
      return <form className='location-form'
      onSubmit = {(event) => {
        event.preventDefault();
        this.props.dispatch({
          type: 'ADD_LOCATION',
          location: [this.state.city, this.state.state]
        });
        this.setState({
          submit: true
        })
      }}>
        <input 
          className='location-input' 
          placeholder='City'
          onChange = {(event) => {
            this.props.dispatch({
              type: 'HANDLE_LOCATION_INPUT',
              locationFormInput: event.target.value,
            })
            this.setState({
              city: event.target.value
            })
          }
          }
        />
        <input 
          className='location-input' 
          placeholder='ST'
          onChange = {(event) => {
            this.props.dispatch({
              type: 'HANDLE_LOCATION_INPUT',
              locationFormInput: event.target.value,
            })
            this.setState({
              state: event.target.value
            })
          }
          }
        />
        <button
          className='location-button'
          type="submit"
          
          >Add Location
        </button>
      </form>
      }
  }
}


let SmartLocationForm = connect(state => state)(LocationForm)

export default SmartLocationForm;