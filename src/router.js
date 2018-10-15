import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen'
import FetchForecast from './Components/FetchForecast';
import ErrorScreen from './Components/ErrorScreen';

let Router = () =>
  <HashRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/location/:location' component={FetchForecast}></Route>
      <Route path='/error/:location' component={ErrorScreen}></Route>
    </Switch>
  </HashRouter>

  export default Router;