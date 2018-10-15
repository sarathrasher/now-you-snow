import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PresentWidget from './PresentWidget';
import FutureComponent from './FutureComponent';
import SmartLocationForm from './LocationForm'
import SmartLocationListBar from './LocationListBar'

class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'present',
    }
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className='content'>
        <SmartLocationForm />
        <SmartLocationListBar />
        <div className='date-nav-bar'>
          <p 
            className={this.state.currentPage === 'present' ? 'date-link active' : 'date-link'} 
            onClick={() =>
              this.setState({
                currentPage: 'present'
              })
            }
          >Today</p>
          <p 
            className={this.state.currentPage !== 'present' ? 'date-link active' : 'date-link'}
            onClick={() =>
              this.setState({
                currentPage: 'forecast'
              })
            }
          >Forecast</p>
          </div>
          {this.state.currentPage === 'present' 
            ? 
            <PresentWidget weatherResults={this.props.weatherResults} /> 
            :
            <FutureComponent weatherResults={this.props.weatherResults} />
          }
          <button 
            className='button'
            onClick={(event) => {
              event.preventDefault();
              this.props.dispatch({
                type: 'DELETE_LOCATION',
                location: this.props.match.params.location
              })
              this.props.history.push('/'); 
              }
            }   
            >Delete Location 
          </button>
        </div>
       
      </div>
    )
  }
}

export default withRouter(connect((state, props) => ({dispatch: props.dispatch, history: props.history}))(LocationScreen))
