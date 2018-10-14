import React from 'react';
import WeatherWidget from './WeatherWidget';
import { connect } from 'react-redux';
import PresentWidget from './PresentWidget';
import { withRouter } from 'react-router-dom';

class ForecastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      selectedIndex: 0,
    })
  }

  updateSelectedIndex = (index) =>
    this.setState({
      selectedIndex: index
    })

  render() {
    return (
      <div className='details'>
        <div className="forecast">    
          <PresentWidget 
            shown={this.state.selectedIndex === 0} 
            day={this.props.weatherResults} 
            key={Math.random()}
            handleClick={this.updateSelectedIndex}
            index={0}
            />
          <WeatherWidget 
            shown={this.state.selectedIndex === 1} 
            day={this.props.weatherResults.item.forecast[1]} 
            key={Math.random()}
            handleClick={this.updateSelectedIndex}
            index={1}
            />
          <WeatherWidget 
            shown={this.state.selectedIndex === 2} 
            day={this.props.weatherResults.item.forecast[2]} 
            key={Math.random()}
            handleClick={this.updateSelectedIndex}
            index={2}
            />
          <WeatherWidget 
            shown={this.state.selectedIndex === 3} 
            day={this.props.weatherResults.item.forecast[3]} 
            key={Math.random()}
            handleClick={this.updateSelectedIndex}
            index={3}
            />
          </div>
          <button 
          className='button'
          onClick={(event) => {
            event.preventDefault();
            this.props.dispatch({
              type: 'DELETE_LOCATION',
              location: this.props.weatherLocation
            })
            this.props.history.goBack(); 
            }
          }   
          >Delete Location </button>
      </div>
    )}
} 

let SmartForecastComponent = withRouter(connect((state, props) => ({dispatch: props.dispatch, history: props.history}))(ForecastComponent))


export default SmartForecastComponent;