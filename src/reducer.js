import _ from 'lodash';

let handleInput = (oldState, action) => {
  return {
    ...oldState,
    locationFormInput: action.locationFormInput
  }
}

let addResults = (oldState, action) => {
  let newWeatherList = oldState.weatherList.concat([action.results])
  return {
    ...oldState,
    weatherList: newWeatherList,
  }
}

let addLocation = (oldState, action) => {
  let newLocationList = oldState.locationList.concat([action.location])
  localStorage.setItem('locationList', JSON.stringify(newLocationList))
  return {
    ...oldState,
    locationList: newLocationList,
  }
}

let deleteLocation = (oldState, action) => {
  let newLocationList = oldState.locationList.filter(location => !_.isEqual(location, action.location))
  localStorage.setItem('locationList', JSON.stringify(newLocationList));
  return {
    ...oldState,
    locationList: newLocationList
  }
}

let reducers = {
  'HANDLE_LOCATION_INPUT': handleInput,
  'ADD_LOCATION': addLocation,
  'DELETE_LOCATION': deleteLocation,
  'ADD_RESULTS': addResults,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;