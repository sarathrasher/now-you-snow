import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen'
import LocationScreen from './Components/LocationScreen';
import FetchForecast from './Components/FetchForecast';

let Router = () =>
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/location/:city' component={FetchForecast}></Route>
      </Switch>
    </div>
  </HashRouter>

  export default Router;