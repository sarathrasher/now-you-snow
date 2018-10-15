import React from 'react';
import PresentWidget from './PresentWidget';
import WeatherWidget from './WeatherWidget';


class ForecastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }

  updateSelectedIndex = (index) =>
    this.setState({
      selectedIndex: index
    })

  render() {
    console.log(this.props.weatherResults)
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
      </div>
    )
  }
} 

export default ForecastComponent;