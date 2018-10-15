import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen'
import FetchForecast from './Components/FetchForecast';

let Router = () =>
  <HashRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/location/:zipCode' component={FetchForecast}></Route>
      <Route path='/location/:zipCode/:date' component={FetchForecast}></Route>
    </Switch>
  </HashRouter>

  export default Router;