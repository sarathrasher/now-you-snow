let handleInput = (oldState, action) => {
  return {
    ...oldState,
    locationFormInput: action.locationFormInput
  }
}

let addResults = (oldState, action) => {
  let existingZipCodes = []
  let newLocationList;

  oldState.locationList.map(location =>
    existingZipCodes.push(location.zipCode)
  );

  if (!existingZipCodes.includes(action.zipCode)) {
    newLocationList = oldState.locationList.concat(
      {
        zipCode: action.zipCode, 
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