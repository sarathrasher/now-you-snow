import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        this.props.history.push(`/location/${this.state.state}/${this.state.city}`)
        
      }}>
        <input 
          className='location-input' 
          placeholder='City'
          required
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
          required
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
        {/* <Link to={`/location/${this.state.state}/${this.state.city}`} > */}
          <button
            className='location-button'
            type="submit"
            
            >Add Location
          </button>
        {/* </Link> */}
      </form>
      }
  }


let SmartLocationForm = withRouter(connect((state, props) => ({dispatch: props.dispatch, history: props.history}))(LocationForm))

export default SmartLocationForm;