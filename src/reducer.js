let handleInput = (oldState, action) => {
  return {
    ...oldState,
    locationFormInput: action.locationFormInput
  }
}

let addLocation = (oldState, action) => {
  let newLocationList = oldState.locationList.concat([action.location])
  return {
    ...oldState,
    locationList: newLocationList
  }
}

let deleteLocation = (oldState, action) => {
  let newLocationList = oldState.locationList.filter(location => location !== action.location)
}

let reducers = {
  'HANDLE_LOCATION_INPUT': handleInput,
  'ADD_LOCATION': addLocation,
  'DELETE_LOCATION': deleteLocation,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;