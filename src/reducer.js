let handleInput = (oldState, action) => {
  return {
    ...oldState,
    locationFormInput: action.locationFormInput
  }
}

let addResults = (oldState, action) => {
  let existingLocations = []
  let newLocationList;

  oldState.locationList.map(location =>
    existingLocations.push(location.location)
  );

  if (!existingLocations.includes(action.location)) {
    newLocationList = oldState.locationList.concat(
      {
        location: action.location, 
        city: action.city, 
        state: action.state, 
        country: action.country
      })
  } else {
    newLocationList = oldState.locationList
  }

  localStorage.setItem('locationList', JSON.stringify(newLocationList))

  return {
    ...oldState,
    weatherResults: action.weatherResults,
    locationList: newLocationList
  }
}

let deleteLocation = (oldState, action) => {

  let newLocationList = oldState.locationList.filter(location => location.zipCode !== action.location)

  localStorage.setItem('locationList', JSON.stringify(newLocationList));
  return {
    ...oldState,
    locationList: newLocationList
  }
}

let reducers = {
  'HANDLE_LOCATION_INPUT': handleInput,
  'DELETE_LOCATION': deleteLocation,
  'ADD_RESULTS': addResults,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;