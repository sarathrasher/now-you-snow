import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import _ from 'lodash'

class LocationListBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.locationList, prevProps.locationList)) {

    }
  }

  render() {
    return (
      <div className='location-list'>
        {this.props.locationList.map(location =>
          <NavLink 
          activeStyle={{fontWeight: 'bold'}}
          key={location.zipCode} 
          to={`/location/${location.zipCode}`}> 
          {location.city}, {location.state}
          </NavLink> )}
        </div>
    )
  }
}


export default withRouter(connect(state => ({locationList: state.locationList}))(LocationListBar))
