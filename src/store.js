import { createStore } from 'redux';
import reducer from './reducer'

 let initialState = {
  locationFormInput: '',
  locationList: (localStorage.getItem('locationList') ? JSON.parse(localStorage.getItem('locationList')) : []),
  weatherResults: {},
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;