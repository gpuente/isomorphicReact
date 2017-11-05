import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from './Hello';
import Bye from './Bye';
import NotFound from './NotFound';

export const App = () => (
  <Switch>
    <Route exact path="/" render={Hello} />
    <Route exact path="/hello" render={Hello} />
    <Route exact path="/bye" render={Bye} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
