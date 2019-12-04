import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './Home';
import History from './History';
import Navlink from './Navlink';


function App() {
  return (
    <Router>
      <Navlink />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/our-history' component={History} />
        </Switch>
    </Router>
  );
}

export default App;
