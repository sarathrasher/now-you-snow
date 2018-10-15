import React from 'react';
import Header from './Header';
import SmartLocationForm from './LocationForm';
import SmartLocationListBar from './LocationListBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PresentWidget from './PresentWidget';
import FutureComponent from './FutureComponent';

class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'present'
    }
  }
  render() {
    return (
      <div className="main">
        <Header />
        <SmartLocationListBar />
        <SmartLocationForm />
        <div className='date-nav-bar'>
          <a 
            className={this.state.currentPage === 'present' ? 'nav-link bold' : 'nav-link'} 
            onClick={() =>
              this.setState({
                currentPage: 'present'
              })
            }
          >Today's Weather</a>
          <a 
            className={this.state.currentPage !== 'present' ? 'nav-link bold' : 'nav-link'}
            onClick={() =>
              this.setState({
                currentPage: 'forecast'
              })
            }
          >Forecast</a>
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
            this.props.history.goBack(); 
            }
          }   
          >Delete Location 
          </button>
      </div>
    )
  }
}

export default withRouter(connect((state) => ({dispatch: state.dispatch, history: state.history}))(LocationScreen))
