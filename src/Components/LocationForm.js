import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
    }
  }
  render() {
      return (
        <form className='location-form'
        onSubmit = {(event) => {
          event.preventDefault();
          this.props.history.push(`/location/${this.state.zipCode}`) 
        }}>
          <input 
            className='location-input' 
            placeholder='Zipcode'
            required
            onChange = {(event) => {
              this.props.dispatch({
                type: 'HANDLE_LOCATION_INPUT',
                locationFormInput: event.target.value,
              })
              this.setState({
                zipCode: event.target.value
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
      )
    }
  }


let SmartLocationForm = withRouter(connect((state, props) => ({dispatch: props.dispatch, history: props.history}))(LocationForm))

export default SmartLocationForm;